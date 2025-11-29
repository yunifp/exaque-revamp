"use strict";

/**
 * Middleware untuk memastikan hanya user dengan role 'admin' yang bisa lanjut.
 * HARUS dijalankan SETELAH middleware 'authenticate'.
 */
const adminOnly = (req, res, next) => {
  // Ambil user dari middleware 'authenticate'
  const user = req.user;

  if (user && user.role === "admin") {
    // Role adalah admin, boleh lanjut
    return next();
  }

  if (user && user.role === "editor") {
    // Jika 'editor', kita bisa izinkan (sesuai kebutuhan)
    // Untuk saat ini, kita anggap hanya 'admin'
    // return next();
  }

  // Jika tidak ada user atau role bukan admin
  return res.error("Forbidden: Anda tidak memiliki hak akses admin.", 403);
};

module.exports = adminOnly;
