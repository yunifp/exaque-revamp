const express = require("express");
const router = express.Router();
const controller = require("../controllers/articleCategoryController");
const authenticate = require("../middleware/authenticate");
const adminOnly = require("../middleware/adminOnly");

// === RUTE PUBLIK ===
// GET /api/v1/article-categories (List semua)
router.get("/", controller.getAllCategories);

// GET /api/v1/article-categories/:id (Detail)
router.get("/:id", controller.getCategoryById);

// === RUTE ADMIN (WAJIB LOGIN & ADMIN) ===

// POST /api/v1/article-categories
router.post("/", authenticate, adminOnly, controller.createCategory);

// PUT /api/v1/article-categories/:id
router.put("/:id", authenticate, adminOnly, controller.updateCategory);

// DELETE /api/v1/article-categories/:id
router.delete("/:id", authenticate, adminOnly, controller.deleteCategory);

module.exports = router;
