"use strict";
const nodemailer = require("nodemailer");

// 1. Buat 'Transporter' Nodemailer
// Menggunakan kredensial dari .env
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Mengirim email reset password.
 * @param {string} userEmail - Email tujuan
 * @param {string} userName - Nama user
 * @param {string} resetToken - Token unik (yang belum di-hash)
 */
const sendResetPasswordEmail = async (userEmail, userName, resetToken) => {
  // Buat URL yang akan diklik user di frontend
  // (Pastikan FRONTEND_URL di .env sudah benar)
  const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

  const mailOptions = {
    from: process.env.EMAIL_FROM, // "Toko Panjat Tebing <no-reply@tokopanjat.com>"
    to: userEmail,
    subject: "Permintaan Reset Password Akun Exaque",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Halo ${userName},</h2>
        <p>Kami menerima permintaan untuk mereset password akun Exaque Anda.</p>
        <p>Silakan klik tombol di bawah ini untuk melanjutkan:</p>
        <a href="${resetUrl}" style="background-color: #007bff; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px; display: inline-block;">
          Reset Password
        </a>
        <p>Jika Anda tidak bisa mengklik tombol, silakan salin dan tempel URL ini di browser Anda:</p>
        <p>${resetUrl}</p>
        <p>Link ini akan kedaluwarsa dalam 1 jam.</p>
        <p>Jika Anda tidak merasa meminta reset password, silakan abaikan email ini.</p>
        <br>
        <p>Terima kasih,</p>
        <p>Tim Exaque</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email reset password terkirim ke: ${userEmail}`);
  } catch (error) {
    console.error(`Gagal mengirim email ke ${userEmail}:`, error);
    throw new Error("Gagal mengirim email reset password.");
  }
};
/**
 * Mengirim notifikasi inquiry baru ke Admin
 * @param {object} inquiryData - Data lengkap dari form
 */
const sendInquiryToAdmin = async (inquiryData) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM, // "Website Profil Kamu <no-reply@exaque.com>"
    to: process.env.EMAIL_USER_ADMIN,   // Kirim ke email admin/bisnis (ezrampage33@gmail.com)
    subject: `[Permintaan Baru Exaque] ${inquiryData.service_needed} dari ${inquiryData.first_name}`,
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h2>Notifikasi Permintaan Baru (Exaque)</h2>
        <p>Anda menerima permintaan baru dengan detail sebagai berikut:</p>
        <ul style="line-height: 1.8;">
          <li><strong>Nama:</strong> ${inquiryData.first_name} ${inquiryData.last_name}</li>
          <li><strong>Email:</strong> ${inquiryData.email}</li>
          <li><strong>Perusahaan:</strong> ${inquiryData.company || 'N/A'}</li>
          <li><strong>Jabatan:</strong> ${inquiryData.job_title || 'N/A'}</li>
          <li><strong>Telepon:</strong> ${inquiryData.phone_number || 'N/A'}</li>
          <li><strong>Kebutuhan:</strong> <strong>${inquiryData.service_needed}</strong></li>
          <li><strong>Persona:</strong> ${inquiryData.user_persona || 'N/A'}</li>
        </ul>
        <hr>
        <p><strong>Pesan:</strong></p>
        <p style="white-space: pre-wrap; background-color: #f4f4f4; padding: 10px; border-radius: 5px;">${inquiryData.message}</p>
        <br>
        <p>Harap segera tindak lanjuti di dashboard admin.</p>
      </div>
    `
  };
  
  try {
    await transporter.sendMail(mailOptions);
    console.log(`Notifikasi inquiry terkirim ke admin: ${process.env.EMAIL_USER}`);
  } catch (error) {
    console.error('Gagal mengirim email notifikasi admin:', error);
    // Jangan 'throw error' agar alur utama API tidak gagal
  }
};


// === 3. FUNGSI BARU (Konfirmasi ke Pelanggan) ===
/**
 * Mengirim email konfirmasi ke Pelanggan
 * @param {object} inquiryData - Data lengkap dari form
 */
const sendConfirmationToCustomer = async (inquiryData) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM, // "Website Profil Kamu <no-reply@exaque.com>"
    to: inquiryData.email, // Kirim ke email pelanggan
    subject: 'Terima Kasih Telah Menghubungi Exaque',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Halo ${inquiryData.first_name},</h2>
        <p>Terima kasih telah menghubungi kami di Exaque.</p>
        <p>Permintaan Anda untuk <strong>"${inquiryData.service_needed}"</strong> telah kami terima.</p>
        <p>Tim kami akan segera meninjau permintaan Anda dan akan menghubungi Anda kembali (biasanya dalam 1-2 hari kerja).</p>
        <br>
        <p>Hormat kami,</p>
        <p>Tim Exaque</p>
      </div>
    `
  };
  
  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email konfirmasi terkirim ke: ${inquiryData.email}`);
  } catch (error) {
    console.error('Gagal mengirim email konfirmasi pelanggan:', error);
  }
};

module.exports = {
  sendResetPasswordEmail,
  sendInquiryToAdmin,         // <-- Ekspor fungsi baru
  sendConfirmationToCustomer
};
