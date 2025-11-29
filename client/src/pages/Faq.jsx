import React, { useState, useEffect } from "react";
import Hero from "../components/common/Hero";
import Accordion from "../components/common/Accordion"; // Pastikan path ini sesuai lokasi file Accordion.jsx Anda

// Gambar Hero (Gunakan yang ada atau ganti nanti)
import heroBg from "../assets/hero-1.jpg";

// --- KOMPONEN IKON CHEVRON ---
// Kita buat ikon SVG di sini agar bisa dikirim sebagai props ke Accordion
const ChevronIcon = ({ className }) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M5 15l7-7 7 7" // Panah mengarah ke ATAS (Up)
    />
  </svg>
);

// --- DUMMY DATA ---
const DATA_EXAQUE = [
  {
    id: 1,
    question: "Apa itu Exaque?",
    answer: "Exaque adalah solusi manajemen perjalanan pelanggan end-to-end yang membantu bisnis enterprise mengelola antrean, janji temu, dan interaksi pelanggan secara efisien dan terintegrasi."
  },
  {
    id: 2,
    question: "Apa itu manajemen antrean?",
    answer: "Manajemen antrean adalah sistem yang mengatur aliran pelanggan untuk mengurangi waktu tunggu, meningkatkan efisiensi layanan, dan memberikan pengalaman yang lebih baik bagi pelanggan maupun staf."
  },
  {
    id: 3,
    question: "Bagaimana cara kerja sistem antrean virtual?",
    answer: "Pelanggan dapat mengambil tiket antrean melalui smartphone mereka tanpa harus berada di lokasi secara fisik. Mereka akan mendapatkan notifikasi saat giliran mereka hampir tiba."
  },
  {
    id: 4,
    question: "Apakah Exaque cocok untuk bisnis kecil?",
    answer: "Exaque dirancang dengan skalabilitas tinggi. Meskipun fokus utama kami adalah enterprise, solusi kami modular dan dapat disesuaikan untuk kebutuhan bisnis berkembang."
  }
];

const DATA_PRODUK = [
  {
    id: 101,
    question: "Bagaimana cara integrasi dengan CRM?",
    answer: "Exaque memiliki API terbuka yang memungkinkan integrasi mulus dengan berbagai platform CRM populer seperti Salesforce, Microsoft Dynamics, dan lainnya."
  },
  {
    id: 102,
    question: "Apakah mendukung multi-cabang?",
    answer: "Ya, Exaque didesain untuk mengelola ratusan hingga ribuan cabang secara terpusat melalui dashboard admin berbasis cloud."
  },
  {
    id: 103,
    question: "Perangkat keras apa yang dibutuhkan?",
    answer: "Kami mendukung berbagai perangkat keras standar seperti kiosk layar sentuh, smart TV untuk display, dan printer tiket termal. Namun, sistem kami juga bisa berjalan 100% digital tanpa kertas."
  },
  {
    id: 104,
    question: "Apakah ada fitur pelaporan data?",
    answer: "Tentu. Modul Business Intelligence kami menyediakan laporan real-time dan historis mengenai waktu tunggu, kinerja staf, volume pelanggan, dan metrik kepuasan."
  },
  {
    id: 105,
    question: "Berapa lama proses implementasi?",
    answer: "Tergantung kompleksitas, namun untuk standar implementasi biasanya memakan waktu 2-4 minggu termasuk pelatihan staf."
  },
  {
    id: 106,
    question: "Bagaimana dengan keamanan data?",
    answer: "Kami menggunakan standar enkripsi tingkat tinggi dan mematuhi regulasi perlindungan data global untuk memastikan keamanan informasi pelanggan Anda."
  }
];

const Faq = () => {
  // State untuk melacak Accordion mana yang terbuka
  // Kita gunakan satu state ID. Jika ID cocok, dia terbuka. Jika null, semua tertutup.
  const [openId, setOpenId] = useState(1); // Default item pertama terbuka

  const handleToggle = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  // Scroll ke atas saat halaman dibuka
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Props untuk Hero
  const heroProps = {
    welcomeText: "Informasi",
    title: "FAQ",
    subtitle: "Kumpulan pertanyaan yang sering diajukan untuk membantu Anda memahami layanan kami dengan lebih baik.",
    imageUrl: heroBg,
    textAlign: "text-center mx-auto",
    buttonJustify: "justify-center",
    // Sembunyikan tombol di Hero FAQ sesuai desain
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <Hero {...heroProps} />

      <div className="container mx-auto px-6 py-20 max-w-6xl">
        
        {/* --- SECTION 1: SEPUTAR EXAQUE --- */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Seputar Exaque
          </h2>
          
          {/* Grid Layout 2 Kolom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {DATA_EXAQUE.map((item) => (
              <Accordion
                key={item.id}
                title={item.question}
                isOpen={openId === item.id}
                onClick={() => handleToggle(item.id)}
                chevronIcon={<ChevronIcon />} // Mengirim ikon SVG
              >
                {item.answer}
              </Accordion>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: SEPUTAR PRODUK --- */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Seputar Produk
          </h2>

          {/* Grid Layout 2 Kolom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {DATA_PRODUK.map((item) => (
              <Accordion
                key={item.id}
                title={item.question}
                isOpen={openId === item.id}
                onClick={() => handleToggle(item.id)}
                chevronIcon={<ChevronIcon />}
              >
                {item.answer}
              </Accordion>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Faq;