const db = require("../models");
const articleRepo = require("../repositories/articleRepository");
const articleTagRepo = require("../repositories/articleTagRepository");
// Impor harus menggunakan kurung kurawal { } karena di utils diekspor sebagai objek
const { processImageToWebP } = require("../utils/imageProcessor"); 
const generateSlug = require("../utils/generateSlug");
const fs = require("fs");
const path = require("path");

const handleTags = async (tagNames, transaction) => {
  const tagIds = [];
  if (!tagNames || tagNames.length === 0) {
    return tagIds;
  }

  for (const tagName of tagNames) {
    const tag = await articleTagRepo.findOrCreateTag(tagName, transaction);
    tagIds.push(tag.id);
  }
  return tagIds;
};

const createArticle = async (data, file) => {
  const t = await db.sequelize.transaction();
  try {
    let slug = data.slug;
    if (!slug) {
      slug = generateSlug(data.title);
    }
    
    if (!slug) {
      throw new Error("Slug tidak valid atau kosong.");
    }

    const articleData = {
      ...data,
      author_id: data.author_id,
      slug: slug,
    };

    if (file) {
      // Pastikan fungsi ini ada sebelum dipanggil
      if (typeof processImageToWebP !== 'function') {
        throw new Error("Fungsi pemroses gambar tidak ditemukan.");
      }
      const webpPath = await processImageToWebP(file.buffer);
      articleData.featured_image_url = webpPath;
    }

    const newArticle = await articleRepo.createArticle(articleData, t);

    if (data.categories && data.categories.length > 0) {
      await newArticle.setCategories(data.categories, { transaction: t });
    }
    const tagIds = await handleTags(data.tags, t);
    if (tagIds.length > 0) {
      await newArticle.setTags(tagIds, { transaction: t });
    }
    await t.commit();
    return await articleRepo.findArticleById(newArticle.id);
  } catch (error) {
    await t.rollback();
    throw new Error(`Gagal membuat artikel: ${error.message}`);
  }
};

const updateArticle = async (id, data, file) => {
  const t = await db.sequelize.transaction();
  let oldImagePath = null;
  try {
    const articleToUpdate = await articleRepo.findArticleById(id);
    if (!articleToUpdate) {
      throw new Error("Artikel tidak ditemukan.");
    }
    
    const articleData = { ...data };

    if (data.slug) {
        articleData.slug = data.slug;
    } else if (data.title && data.title !== articleToUpdate.title) {
        articleData.slug = generateSlug(data.title);
    }

    if (file) {
      if (typeof processImageToWebP !== 'function') {
        throw new Error("Fungsi pemroses gambar tidak ditemukan.");
      }
      oldImagePath = articleToUpdate.featured_image_url;
      const webpPath = await processImageToWebP(file.buffer);
      articleData.featured_image_url = webpPath;
    }

    await articleRepo.updateArticle(id, articleData, t);

    if (data.categories) {
      await articleToUpdate.setCategories(data.categories, { transaction: t });
    }
    if (data.tags) {
      const tagIds = await handleTags(data.tags, t);
      await articleToUpdate.setTags(tagIds, { transaction: t });
    }
    await t.commit();
    
    // Hapus gambar lama hanya jika update berhasil dan ada file baru
    if (oldImagePath && file) {
      try {
        const fullOldPath = path.join(__dirname, "../", oldImagePath);
        if (fs.existsSync(fullOldPath)) {
          fs.unlinkSync(fullOldPath);
        }
      } catch (deleteError) {
        console.error(`Gagal menghapus file lama (${oldImagePath}):`, deleteError.message);
      }
    }
    return await articleRepo.findArticleById(id);
  } catch (error) {
    await t.rollback();
    throw new Error(`Gagal memperbarui artikel: ${error.message}`);
  }
};

const getAllArticles = async (queryParams) => {
  const {
    page = 1,
    limit = 10,
    sort = "published_at",
    order = "DESC",
  } = queryParams;

  const offset = (parseInt(page) - 1) * parseInt(limit);
  const where = {};

  const options = {
    where,
    limit: parseInt(limit),
    offset,
    order: [[sort, order]],
    include: articleRepo.includeAssociations,
    distinct: true,
  };

  const { count, rows } = await articleRepo.findAllArticles(options);
  return {
    totalItems: count,
    totalPages: Math.ceil(count / limit),
    currentPage: parseInt(page),
    data: rows,
  };
};

const getArticleBySlug = async (slug) => {
  const article = await articleRepo.findArticleBySlug(slug);
  if (!article) {
    throw new Error("Artikel tidak ditemukan.");
  }
  return article;
};

const deleteArticle = async (id) => {
  const articleToDelete = await articleRepo.findArticleById(id);
  if (!articleToDelete) {
    throw new Error('Artikel tidak ditemukan.');
  }

  const oldImagePath = articleToDelete.featured_image_url;

  const deletedRows = await articleRepo.deleteArticleById(id);
  if (deletedRows === 0) {
    throw new Error('Gagal menghapus artikel dari database.');
  }

  if (oldImagePath) {
    try {
      const fullOldPath = path.join(__dirname, '../', oldImagePath);
      if (fs.existsSync(fullOldPath)) {
        fs.unlinkSync(fullOldPath);
      }
    } catch (deleteError) {
      console.error(`Gagal menghapus file lama (${oldImagePath}):`, deleteError.message);
    }
  }

  return { message: 'Artikel berhasil dihapus.' };
};

module.exports = {
  createArticle,
  updateArticle,
  getAllArticles,
  getArticleBySlug,
  deleteArticle,
};