const express = require("express");
const router = express.Router();
const inquiryController = require("../controllers/inquiryController");
const authenticate = require("../middleware/authenticate");
const adminOnly = require("../middleware/adminOnly");

// === RUTE PUBLIK ===
// POST /api/v1/inquiries (Form kontak)
router.post("/", inquiryController.createInquiry);

// === RUTE ADMIN (WAJIB LOGIN & ADMIN) ===
// (Kita terapkan middleware di level router)
router.use(authenticate);
router.use(adminOnly);

// GET /api/v1/inquiries (List semua)
router.get("/", inquiryController.getAllInquiries);

// GET /api/v1/inquiries/:id (Detail)
router.get("/:id", inquiryController.getInquiryById);

// PATCH /api/v1/inquiries/:id (Update status)
router.patch("/:id", inquiryController.updateInquiryStatus);

// DELETE /api/v1/inquiries/:id (Hapus)
router.delete("/:id", inquiryController.deleteInquiry);

module.exports = router;
