const multer = require("multer");

// 1. Ganti kembali ke memoryStorage
// Ini akan menyimpan file sebagai 'buffer' di RAM (req.file.buffer)
const storage = multer.memoryStorage();

// 2. Filter File (Sama seperti sebelumnya)
const fileFilter = (req, file, cb) => {
  const allowedMimes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true); // Terima file
  } else {
    // Kirim error spesifik
    cb(new Error("Tipe file tidak valid. Hanya JPEG, PNG, atau GIF."), false);
  }
};

// 3. Inisialisasi Multer
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10, // 10MB
  },
  fileFilter: fileFilter,
});

module.exports = upload;
