const express = require("express");
const router = express.Router();
const controller = require("../controllers/articleController");
const authenticate = require("../middleware/authenticate");
const adminOnly = require("../middleware/adminOnly");
const upload = require("../middleware/uploadHandler"); // <-- Import Multer

// === RUTE PUBLIK ===
// GET /api/v1/articles (List semua)
router.get("/", controller.getAllArticles);

// GET /api/v1/articles/:slug (Detail)
router.get("/:slug", controller.getArticleBySlug);

// === RUTE ADMIN (WAJIB LOGIN & ADMIN) ===

// POST /api/v1/articles
// Kita gunakan upload.single() untuk menangani 'featured_image'
router.post(
  "/",
  authenticate,
  adminOnly,
  upload.single("featured_image"), // <-- Middleware file
  controller.createArticle
);

// PUT /api/v1/articles/:id
router.put(
  "/:id",
  authenticate,
  adminOnly,
  upload.single("featured_image"), // <-- Middleware file
  controller.updateArticle
);

// DELETE /api/v1/articles/:id
router.delete("/:id", authenticate, adminOnly, controller.deleteArticle);

module.exports = router;
