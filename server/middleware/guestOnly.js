const jwt = require("jsonwebtoken");

/**
 * Middleware untuk memverifikasi bahwa user BELUM login.
 * Hanya user tamu (guest) yang bisa lanjut.
 */
const guestOnly = (req, res, next) => {
  try {
    // 1. Ambil token dari cookie
    const token = req.cookies.token;

    if (!token) {
      // Tidak ada token, ini adalah tamu. Boleh lanjut.
      return next();
    }

    // 2. Jika ada token, coba verifikasi
    // (Kita tidak perlu cek DB, cukup pastikan tokennya valid)
    jwt.verify(token, process.env.JWT_SECRET);

    // 3. Jika token valid, artinya user sudah login
    // Kirim 'Forbidden' karena dia tidak seharusnya di sini
    return res.status(403).send({
      success: false,
      message: "Forbidden: Anda sudah login.",
    });
  } catch (err) {
    // 4. Jika token ada tapi TIDAK VALID (error, kedaluwarsa)
    // Anggap dia sebagai tamu. Boleh lanjut.
    next();
  }
};

module.exports = guestOnly;
