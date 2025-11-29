const inquiryService = require("../services/inquiryService");

// [PUBLIK] Endpoint untuk 'Contact Form'
const createInquiry = async (req, res) => {
  try {
    // (Nanti kita tambahkan Joi/Validator di sini)
    const inquiryData = req.body;

    const newInquiry = await inquiryService.createInquiry(inquiryData);

    return res.success(newInquiry, "Permintaan Anda berhasil dikirim.", 201);
  } catch (error) {
    return res.error(error.message, 400); // 400 Bad Request
  }
};

// [ADMIN] List semua inquiries (dengan pagination & filter)
const getAllInquiries = async (req, res) => {
  try {
    const inquiries = await inquiryService.getAllInquiries(req.query);
    return res.success(inquiries, "Inquiries berhasil diambil.");
  } catch (error) {
    return res.error(error.message, 500);
  }
};

// [ADMIN] Lihat detail
const getInquiryById = async (req, res) => {
  try {
    const { id } = req.params;
    const inquiry = await inquiryService.getInquiryById(id);
    return res.success(inquiry, "Inquiry berhasil diambil.");
  } catch (error) {
    // Cek jika error-nya "Tidak Ditemukan"
    if (error.message.includes("tidak ditemukan")) {
      return res.error(error.message, 404);
    }
    return res.error(error.message, 500);
  }
};

// [ADMIN] Update status
const updateInquiryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.error('Field "status" wajib diisi.', 400);
    }

    const updatedInquiry = await inquiryService.updateInquiryStatus(id, status);
    return res.success(updatedInquiry, "Status inquiry berhasil diperbarui.");
  } catch (error) {
    if (error.message.includes("tidak ditemukan")) {
      return res.error(error.message, 404);
    }
    if (error.message.includes("tidak valid")) {
      return res.error(error.message, 400);
    }
    return res.error(error.message, 500);
  }
};

// [ADMIN] Hapus inquiry
const deleteInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    await inquiryService.deleteInquiry(id);
    return res.success(null, "Inquiry berhasil dihapus.");
  } catch (error) {
    if (error.message.includes("tidak ditemukan")) {
      return res.error(error.message, 404);
    }
    return res.error(error.message, 500);
  }
};

module.exports = {
  createInquiry,
  getAllInquiries,
  getInquiryById,
  updateInquiryStatus,
  deleteInquiry,
};
