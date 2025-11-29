// middleware/tryAuthenticate.js
const jwt = require("jsonwebtoken");

// Middleware ini mirip 'authenticate', tapi 'opsional'
// Tidak melempar error jika tidak ada token

const tryAuthenticate = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return next(); // Tidak ada token? Tidak masalah, lanjut saja
  }

  try {
    // Ada token, coba verifikasi
    // Pastikan kita cari User dari DB seperti di 'authenticate'
    // agar datanya lengkap

    // PERBAIKAN: Kita harus verifikasi dan cari user
    // agar 'req.user' berisi data user, bukan cuma payload token
    // Tapi untuk 'try', payload token saja mungkin cukup
    const decodedPayload = jwt.verify(token, process.env.JWT_SECRET);

    // (PENTING: 'authenticate.js' kita mencari ke DB)
    // (Di sini kita asumsikan payload token cukup)
    req.user = decodedPayload; // Sukses, isi req.user
  } catch (error) {
    // Token ada tapi invalid? Tidak masalah, lanjut saja
    // (dan hapus cookie yang tidak valid)
    res.clearCookie("token");
  }

  next();
};

module.exports = tryAuthenticate;
