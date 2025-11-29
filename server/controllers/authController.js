const authService = require("../services/authService");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { token, user } = await authService.loginUser(email, password);

    // Set token di httpOnly cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 hari
    });

    // Gunakan responseHandler
    return res.success({ user: user }, "Login berhasil.", 200);
  } catch (error) {
    // Gunakan responseHandler
    return res.error(error.message, 401);
  }
};

const logout = (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    // Gunakan responseHandler
    return res.success(null, "Logout berhasil.", 200);
  } catch (error) {
    // Gunakan responseHandler
    return res.error(error.message, 500);
  }
};

const getMyProfile = (req, res) => {
  if (!req.user) {
    // Gunakan responseHandler
    return res.error("User tidak ditemukan di sesi ini.", 404);
  }

  // Gunakan responseHandler
  return res.success({ user: req.user }, "Profil berhasil diambil.", 200);
};
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.error("Email wajib diisi.", 400);
    }

    // Kita sengaja selalu kirim 'sukses'
    // untuk mencegah orang menebak email yang terdaftar
    await authService.requestPasswordReset(email);
    return res.success(
      null,
      "Jika email Anda terdaftar, Anda akan menerima link reset password."
    );
  } catch (error) {
    // Jika email gagal terkirim (cth: SMTP error)
    return res.error(error.message, 500);
  }
};
const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    if (!password) {
      return res.error("Password baru wajib diisi.", 400);
    }
    if (!token) {
      return res.error("Token tidak valid.", 400);
    }

    const result = await authService.resetPassword(token, password);
    return res.success(null, result.message);
  } catch (error) {
    // Jika token tidak valid atau kedaluwarsa
    return res.error(error.message, 400);
  }
};

module.exports = {
  login,
  logout,
  getMyProfile,
  forgotPassword, // <-- PASTIKAN INI ADA
  resetPassword,
};
