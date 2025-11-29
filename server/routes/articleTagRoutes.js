const express = require("express");
const router = express.Router();
const controller = require("../controllers/articleTagController");
const authenticate = require("../middleware/authenticate");
const adminOnly = require("../middleware/adminOnly");

// === RUTE PUBLIK ===
router.get("/", controller.getAllTags);
router.get("/:id", controller.getTagById);

// === RUTE ADMIN (WAJIB LOGIN & ADMIN) ===
router.post("/", authenticate, adminOnly, controller.createTag);
router.put("/:id", authenticate, adminOnly, controller.updateTag);
router.delete("/:id", authenticate, adminOnly, controller.deleteTag);

module.exports = router;
