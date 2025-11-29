const jwt = require("jsonwebtoken");
const db = require("../models");

/**
 * Middleware untuk memverifikasi token JWT.
 * Hanya user yang terautentikasi (login) yang bisa lanjut.
 */
const authenticate = async (req, res, next) => {
  try {
    // 1. Ambil token dari httpOnly cookie
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized: Token tidak ditemukan.",
      });
    }

    // 2. Verifikasi token
    // Pastikan JWT_SECRET di .env sudah kamu ganti!
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Cari user di database berdasarkan ID dari token
    const user = await db.User.findByPk(decoded.id, {
      attributes: { exclude: ["password"] }, // Jangan kirim password
    });

    if (!user) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized: User tidak ditemukan.",
      });
    }

    // 4. Tempelkan data user ke object request
    req.user = user;
    next(); // Lanjut ke controller
  } catch (err) {
    if (err.name === "JsonWebTokenError") {
      return res.status(401).send({
        success: false,
        message: "Unauthorized: Token tidak valid.",
      });
    }
    if (err.name === "TokenExpiredError") {
      return res.status(401).send({
        success: false,
        message: "Unauthorized: Token kedaluwarsa.",
      });
    }
    // Error server lainnya
    return res.status(500).send({
      success: false,
      message: "Kesalahan server internal.",
      error: err.message,
    });
  }
};

module.exports = authenticate;
