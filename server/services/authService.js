const userRepository = require("../repositories/userRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto"); // <-- 1. IMPORT CRYPTO
const emailService = require("./emailService");

/**
 * Memvalidasi kredensial user dan membuat token JWT.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{token: string, user: object}>}
 */
const loginUser = async (email, password) => {
  // 1. Cari user
  const user = await userRepository.findUserByEmail(email);
  if (!user) {
    throw new Error("Email tidak ditemukan.");
  }

  // 2. Validasi password
  // (Kita tidak bisa pakai user.validPassword() karena kita findOne, bukan instance)
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Password salah.");
  }

  // 3. Buat payload token
  const payload = {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  };

  // 4. Buat token JWT
  // Pastikan JWT_SECRET di .env sudah kamu ganti!
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1d", // Token berlaku 1 hari
  });

  return { token, user: payload };
};
const requestPasswordReset = async (email) => {
  // 1. Cari user
  const user = await userRepository.findUserByEmail(email);
  if (!user) {
    // Keamanan: Jangan beri tahu jika email tidak ada.
    // Cukup lempar error generik.
    throw new Error("Gagal mengirim email.");
  }

  // 2. Buat token mentah (untuk dikirim via email)
  const resetToken = crypto.randomBytes(32).toString("hex");

  // 3. Hash token (untuk disimpan di DB)
  const hashedToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // 4. Set waktu kedaluwarsa (1 jam dari sekarang)
  const expires = new Date(Date.now() + 3600000); // 1 jam

  // 5. Simpan token (hash) dan expiry ke DB
  await userRepository.updateUserById(user.id, {
    reset_password_token: hashedToken,
    reset_password_expires: expires,
  });

  // 6. Kirim email (menggunakan token mentah)
  await emailService.sendResetPasswordEmail(user.email, user.name, resetToken);

  return { message: "Email reset password telah dikirim." };
};
const resetPassword = async (token, newPassword) => {
  // 1. Hash token yang masuk dari URL
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  // 2. Cari user berdasarkan token (repo akan cek expiry)
  // PENTING: Kita sudah mendapatkan 'instance' user di sini
  const user = await userRepository.findUserByResetToken(hashedToken);
  if (!user) {
    throw new Error("Token tidak valid atau sudah kedaluwarsa.");
  }

  // 3. INI PERBAIKANNYA: Modifikasi instance, JANGAN panggil repo
  user.password = newPassword; // Set password plain text
  user.reset_password_token = null; // Hapus token
  user.reset_password_expires = null;

  // 4. Panggil .save() PADA INSTANCE
  // .save() akan memicu hook 'beforeUpdate' di models/user.js
  // yang akan men-hash password secara otomatis.
  await user.save();

  return { message: "Password berhasil direset." };
};

module.exports = {
  loginUser,
  requestPasswordReset, // <-- PASTIKAN INI ADA
  resetPassword,
};
