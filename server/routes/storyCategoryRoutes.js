const express = require("express");
const router = express.Router();
const controller = require("../controllers/storyCategoryController");
const authenticate = require("../middleware/authenticate");
const adminOnly = require("../middleware/adminOnly");

// === RUTE PUBLIK ===
router.get("/", controller.getAllCategories);
router.get("/:id", controller.getCategoryById);

// === RUTE ADMIN (WAJIB LOGIN & ADMIN) ===
router.post("/", authenticate, adminOnly, controller.createCategory);
router.put("/:id", authenticate, adminOnly, controller.updateCategory);
router.delete("/:id", authenticate, adminOnly, controller.deleteCategory);

module.exports = router;
