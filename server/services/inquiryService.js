const inquiryRepository = require("../repositories/inquiryRepository");
const emailService = require("./emailService");
const { Op } = require("sequelize"); // Untuk filter

const createInquiry = async (inquiryData) => {
  try {
    // Langkah A: Simpan ke DB (tetap sama)
    const newInquiry = await inquiryRepository.createInquiry(inquiryData);

    // === Langkah B: LOGIKA EMAIL (SESUAI RENCANA) ===
    try {
      const service = newInquiry.service_needed;

      if (
        service === "Berbicara Dengan Sales" ||
        service === "Bantuan Teknis"
      ) {
        // Tipe 1: Kirim ke Admin Saja
        await emailService.sendInquiryToAdmin(newInquiry);
      } else if (
        service === "Permintaan Demo" ||
        service === "Lokasi Kantor Exaque"
      ) {
        // Tipe 2: Kirim ke Admin DAN Pelanggan
        await emailService.sendInquiryToAdmin(newInquiry);
        await emailService.sendConfirmationToCustomer(newInquiry);
      }
    } catch (emailError) {
      // PENTING: Gagal kirim email tidak boleh membuat API gagal.
      // Cukup catat error-nya di server.
      console.error(
        "Gagal menjalankan alur email inquiry:",
        emailError.message
      );
    }
    // === SELESAI LOGIKA EMAIL ===

    // Langkah C: Kembalikan data (tetap sama)
    return newInquiry;
  } catch (error) {
    throw new Error(`Gagal membuat inquiry: ${error.message}`);
  }
};

const getAllInquiries = async (queryParams) => {
  const {
    page = 1,
    limit = 10,
    status,
    service_needed,
    sort = "createdAt", // Urutkan berdasarkan
    order = "DESC", // Urutan (terbaru dulu)
  } = queryParams;

  const offset = (parseInt(page) - 1) * parseInt(limit);
  const where = {};

  if (status) where.status = status;
  if (service_needed) where.service_needed = service_needed;
  // (Kamu bisa tambahkan filter 'search' di sini nanti)

  const options = {
    where,
    limit: parseInt(limit),
    offset,
    order: [[sort, order]],
  };

  try {
    const { count, rows } = await inquiryRepository.findAllInquiries(options);
    return {
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page),
      data: rows,
    };
  } catch (error) {
    throw new Error(`Gagal mengambil inquiries: ${error.message}`);
  }
};

const getInquiryById = async (id) => {
  const inquiry = await inquiryRepository.findInquiryById(id);
  if (!inquiry) {
    throw new Error("Inquiry tidak ditemukan.");
  }
  return inquiry;
};

const updateInquiryStatus = async (id, status) => {
  // 1. Validasi status
  const validStatuses = ["new", "contacted", "resolved", "spam"];
  if (!validStatuses.includes(status)) {
    throw new Error("Status tidak valid.");
  }

  // 2. Cek dulu apakah inquiry-nya ada
  const existingInquiry = await inquiryRepository.findInquiryById(id);
  if (!existingInquiry) {
    throw new Error("Inquiry tidak ditemukan.");
  }

  // 3. Lakukan UPDATE
  const rowsUpdated = await inquiryRepository.updateInquiryById(id, {
    status: status,
  });


  // 4. Lakukan SELECT (FIND) terpisah untuk mendapatkan data baru
  const updatedInquiry = await inquiryRepository.findInquiryById(id);

  return updatedInquiry; // Kembalikan data yang sudah fresh
};

const deleteInquiry = async (id) => {
  const deletedRows = await inquiryRepository.deleteInquiryById(id);
  if (deletedRows === 0) {
    throw new Error("Inquiry tidak ditemukan.");
  }
  return { message: "Inquiry berhasil dihapus." };
};

module.exports = {
  createInquiry,
  getAllInquiries,
  getInquiryById,
  updateInquiryStatus,
  deleteInquiry,
};
