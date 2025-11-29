const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authenticate = require("../middleware/authenticate"); // <-- Middleware AUTH
const guestOnly = require("../middleware/guestOnly"); // <-- Middleware NON-AUTH

// Rute untuk login (Hanya untuk tamu)
router.post("/login", guestOnly, authController.login);

// Rute untuk logout (Hanya untuk yang sudah login)
router.post("/logout", authenticate, authController.logout);

// Rute untuk cek profil (Hanya untuk yang sudah login)
router.get("/me", authenticate, authController.getMyProfile);
router.post("/forgot-password", guestOnly, authController.forgotPassword);
router.post("/reset-password/:token", guestOnly, authController.resetPassword);
module.exports = router;
