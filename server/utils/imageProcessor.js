const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

/**
 * Memproses buffer gambar, mengonversi ke WebP, dan menyimpannya ke /uploads.
 * @param {Buffer} buffer - Buffer gambar dari req.file.buffer
 * @returns {Promise<string>} - Mengembalikan path file baru (cth: /uploads/17000000.webp)
 */
const processImageToWebP = async (buffer) => {
  try {
    // 1. Tentukan nama file dan path
    const timestamp = Date.now();
    const filename = `${timestamp}.webp`;
    const uploadDir = path.join(__dirname, "../uploads");
    const filePath = path.join(uploadDir, filename);

    // 2. Pastikan folder 'uploads' ada
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // 3. Proses dengan Sharp:
    await sharp(buffer)
      .webp({ quality: 80 }) // Konversi ke WebP dengan kualitas 80%
      .toFile(filePath); // Simpan ke disk

    // 4. Kembalikan path yang akan disimpan di DB
    return `/uploads/${filename}`;
  } catch (error) {
    console.error("Error saat memproses gambar ke WebP:", error);
    throw new Error("Gagal memproses gambar.");
  }
};

module.exports = { processImageToWebP };
