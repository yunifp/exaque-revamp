const articleService = require("../services/articleService");

// [ADMIN] Buat Artikel
const createArticle = async (req, res) => {
  try {
    // req.body berisi data form (JSON.parse jika dari form-data)
    // req.file berisi file (dari multer)
    // req.user berisi data admin (dari 'authenticate')

    // Jika 'tags' dan 'categories' dikirim sebagai string JSON, parse dulu
    if (req.body.tags && typeof req.body.tags === "string") {
      req.body.tags = JSON.parse(req.body.tags);
    }
    if (req.body.categories && typeof req.body.categories === "string") {
      req.body.categories = JSON.parse(req.body.categories);
    }

    const data = {
      ...req.body,
      author_id: req.user.id, // Ambil author dari middleware
    };

    const newArticle = await articleService.createArticle(data, req.file);
    return res.success(newArticle, "Artikel berhasil dibuat.", 201);
  } catch (error) {
    return res.error(error.message, 500);
  }
};

// [ADMIN] Update Artikel
const updateArticle = async (req, res) => {
  try {
    const { id } = req.params;

    // Handle parsing JSON dari form-data
    if (req.body.tags && typeof req.body.tags === "string") {
      req.body.tags = JSON.parse(req.body.tags);
    }
    if (req.body.categories && typeof req.body.categories === "string") {
      req.body.categories = JSON.parse(req.body.categories);
    }

    const updatedArticle = await articleService.updateArticle(
      id,
      req.body,
      req.file
    );
    return res.success(updatedArticle, "Artikel berhasil diperbarui.");
  } catch (error) {
    if (error.message.includes("tidak ditemukan")) {
      return res.error(error.message, 404);
    }
    return res.error(error.message, 500);
  }
};

// [PUBLIK] Ambil semua artikel
const getAllArticles = async (req, res) => {
  try {
    const articles = await articleService.getAllArticles(req.query);
    return res.success(articles, "Artikel berhasil diambil.");
  } catch (error) {
    return res.error(error.message, 500);
  }
};

// [PUBLIK] Ambil artikel by slug
const getArticleBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const article = await articleService.getArticleBySlug(slug);
    return res.success(article, "Artikel berhasil diambil.");
  } catch (error) {
    if (error.message.includes("tidak ditemukan")) {
      return res.error(error.message, 404);
    }
    return res.error(error.message, 500);
  }
};

// [ADMIN] Hapus artikel
const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    await articleService.deleteArticle(id);
    return res.success(null, "Artikel berhasil dihapus.");
  } catch (error) {
    if (error.message.includes("tidak ditemukan")) {
      return res.error(error.message, 404);
    }
    return res.error(error.message, 500);
  }
};

module.exports = {
  createArticle,
  updateArticle,
  getAllArticles,
  getArticleBySlug,
  deleteArticle,
};
