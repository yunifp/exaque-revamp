const repo = require("../repositories/articleCategoryRepository");

const createCategory = async (data) => {
  const { name } = data;

  // Model hook kita sudah membuat slug, tapi kita cek duplikat manual
  // (Hook akan jalan sebelum create, jadi kita tidak bisa cek slug di sini)
  const existing = await repo.findCategoryByNameOrSlug(name, ""); // Cek nama saja
  if (existing) {
    throw new Error("Nama kategori sudah ada.");
  }

  // Model hook akan otomatis membuat slug dari 'name'
  return await repo.createCategory({ name });
};

const getAllCategories = async () => {
  return await repo.findAllCategories();
};

const getCategoryById = async (id) => {
  const category = await repo.findCategoryById(id);
  if (!category) {
    throw new Error("Kategori tidak ditemukan.");
  }
  return category;
};

const updateCategory = async (id, data) => {
  const { name } = data;

  // 1. Cek apakah kategori-nya ada (Find)
  const categoryToUpdate = await repo.findCategoryById(id);
  if (!categoryToUpdate) {
    throw new Error("Kategori tidak ditemukan.");
  }

  // 2. Modifikasi properti
  categoryToUpdate.name = name;
  // Biarkan hook 'beforeValidate' bekerja saat .save()

  // 3. Simpan
  await categoryToUpdate.save();

  // 4. JANGAN LANGSUNG RETURN!
  // 'categoryToUpdate' mungkin belum mencerminkan DB 100%
  // Ambil ulang data dari DB untuk memastikan

  const updatedCategoryFromDB = await repo.findCategoryById(id);

  // 5. Kembalikan data yang baru diambil dari DB
  return updatedCategoryFromDB;
};

const deleteCategory = async (id) => {
  const deletedRows = await repo.deleteCategoryById(id);
  if (deletedRows === 0) {
    throw new Error("Kategori tidak ditemukan.");
  }
  // TODO: Cek apakah kategori ini masih dipakai di ArticleCategoryPivot
  // (Untuk saat ini, kita biarkan 'onDelete: CASCADE' di DB)
  return { message: "Kategori berhasil dihapus." };
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
