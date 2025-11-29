const repo = require("../repositories/articleTagRepository");

// (Kita hanya pakai 'createTag', bukan 'findOrCreate' untuk CRUD admin)
const createTag = async (data) => {
  const { name } = data;

  const existing = await repo.findTagByNameOrSlug(name, "");
  if (existing) {
    throw new Error("Nama tag sudah ada.");
  }

  // Model hook akan otomatis membuat slug
  return await repo.createTag({ name });
};

const getAllTags = async () => {
  return await repo.findAllTags();
};

const getTagById = async (id) => {
  const tag = await repo.findTagById(id);
  if (!tag) {
    throw new Error("Tag tidak ditemukan.");
  }
  return tag;
};

// (Metode update yang sudah diperbaiki)
const updateTag = async (id, data) => {
  const { name } = data;

  // 1. Cari
  const tagToUpdate = await repo.findTagById(id);
  if (!tagToUpdate) {
    throw new Error("Tag tidak ditemukan.");
  }

  // 2. Modifikasi
  tagToUpdate.name = name;

  // 3. Simpan (Memicu hook update slug)
  await tagToUpdate.save();

  // 4. Ambil Ulang
  const updatedTagFromDB = await repo.findTagById(id);
  return updatedTagFromDB;
};

const deleteTag = async (id) => {
  const deletedRows = await repo.deleteTagById(id);
  if (deletedRows === 0) {
    throw new Error("Tag tidak ditemukan.");
  }
  return { message: "Tag berhasil dihapus." };
};

module.exports = {
  createTag,
  getAllTags,
  getTagById,
  updateTag,
  deleteTag,
};
