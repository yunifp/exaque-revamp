import React, { useState, } from "react";
import { useNavigate } from "react-router-dom";
import Postcard from "../informasi/postcard"; // Sesuaikan path jika perlu
import Pagination from "../common/Pagination";   // Sesuaikan path jika perlu

// --- DATA DUMMY DIPINDAHKAN KE SINI ---
const CATEGORIES = ["Semua", "Asuransi", "Bank", "MultiFinance", "Ritel"];

const ALL_STORIES = [
  {
    id: 1,
    category: "Bank",
    title: "Standard Chartered Bank Indonesia",
    description: "Standard Chartered Bank Indonesia (SCBI) merupakan salah satu kantor cabang Standard Chartered Bank di wilayah Asia. Bank dimiliki sepenuhnya (100%) oleh Standard Chartered Holdings Limited.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Standard_Chartered.svg/1200px-Standard_Chartered.svg.png"
  },
  {
    id: 2,
    category: "Bank",
    title: "Bank of China KCP Mangga Dua",
    description: "Bank Of China (Hong Kong) Limited KCP Mangga Dua Jakarta baru saja pindah ke lokasi yang baru yang lebih strategis untuk melayani nasabah prioritas di kawasan perdagangan.",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Bank_of_China_logo.svg/1200px-Bank_of_China_logo.svg.png"
  },
  {
    id: 3,
    category: "Asuransi",
    title: "Allianz Indonesia",
    description: "Allianz merupakan salah satu klien setia Exaque yang sudah menggunakan sistem manajemen antrean Q-WIN selama bertahun-tahun untuk meningkatkan kepuasan pemegang polis.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Allianz_logo.svg/2560px-Allianz_logo.svg.png"
  },
  {
    id: 4,
    category: "Ritel",
    title: "IKEA Sentul City",
    description: "IKEA Sentul City mengadopsi sistem antrean virtual untuk area pengambilan barang dan layanan pelanggan, mengurangi kerumunan di area tunggu secara signifikan.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/2560px-Ikea_logo.svg.png"
  },
  {
    id: 5,
    category: "MultiFinance",
    title: "Adira Finance",
    description: "Adira Finance mempercepat proses pengajuan kredit kendaraan bermotor dengan sistem booking janji temu online yang terintegrasi langsung dengan cabang.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Adira_Finance_logo.png/640px-Adira_Finance_logo.png"
  },
  {
    id: 6,
    category: "Bank",
    title: "Bank Mandiri",
    description: "Transformasi digital di cabang-cabang Bank Mandiri didukung oleh kiosk mandiri Exaque yang memungkinkan nasabah mencetak kartu debit baru hanya dalam 3 menit.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/2560px-Bank_Mandiri_logo_2016.svg.png"
  },
  { id: 7, category: "Asuransi", title: "Prudential", description: "Layanan klaim asuransi yang lebih manusiawi dengan sistem antrean prioritas bagi lansia.", logo: "https://placehold.co/200x200?text=Prudential" },
  { id: 8, category: "Ritel", title: "Unilever", description: "Manajemen logistik internal menggunakan dashboard monitoring real-time.", logo: "https://placehold.co/200x200?text=Unilever" },
  { id: 9, category: "Bank", title: "BCA", description: "Solusi antrean digital mobile banking yang terhubung ke mesin tiket fisik.", logo: "https://placehold.co/200x200?text=BCA" },
  { id: 10, category: "MultiFinance", title: "FIF Group", description: "Optimasi layanan pembayaran angsuran di ribuan pos di seluruh Indonesia.", logo: "https://placehold.co/200x200?text=FIF" },
];

const StoryMainSection = () => {
  // --- STATE LOGIC ---
  const [activeCategory, setActiveCategory] = useState("Semua");
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
  const itemsPerPage = 6;

  // Logic Filtering
  const filteredData = ALL_STORIES.filter(item => {
    if (activeCategory === "Semua") return true;
    return item.category === activeCategory;
  });

  // Logic Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleCategoryChange = (category) => {
    setActiveCategory(category); // 1. Ganti Kategori
    setCurrentPage(1);           // 2. Langsung Reset ke Halaman 1
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll sedikit ke atas agar nyaman (opsional)
    const element = document.getElementById("story-section-top");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="story-section-top" className="bg-white py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        
        {/* 1. Filter Kategori */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 overflow-x-auto pb-4 md:pb-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`
                px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300
                ${activeCategory === cat 
                  ? "bg-accent text-white shadow-md" 
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2. Grid Kartu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {currentItems.length > 0 ? (
            currentItems.map((item) => (
              <Postcard
                key={item.id}
                logo={item.logo}
                title={item.title}
                description={item.description}
                onClick={() => navigate(`/kisah-pelanggan/${item.id}`)}
              />
            ))
          ) : (
            <div className="col-span-2 text-center py-20 text-gray-500">
              Tidak ada kisah pelanggan di kategori ini.
            </div>
          )}
        </div>

        {/* 3. Pagination */}
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

      </div>
    </section>
  );
};

export default StoryMainSection;