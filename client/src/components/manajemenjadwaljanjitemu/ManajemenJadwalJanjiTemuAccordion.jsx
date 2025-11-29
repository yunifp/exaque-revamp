import React, { useState } from "react";
import Accordion from "../common/Accordion";

// --- IMPORT ASSET GAMBAR BARU ---
// Asumsi: Aset ini diletakkan di client/src/assets/
import flowImage1 from "../../assets/mobile-ticket_flow-1.svg";
import flowImage2 from "../../assets/mobile-ticket_flow-2.svg";
import flowImage3 from "../../assets/mobile-ticket_flow-3.svg";

// --- Ikon Chevron (Wajib ada untuk Accordion.jsx berfungsi) ---
const ChevronDownIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    width="20"
    height="20"
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
      clipRule="evenodd"
    />
  </svg>
);
// --- /Ikon Chevron ---

// Data langkah-langkah kerja (dengan referensi gambar)
const accordionData = [
  {
    title: "Reservasi Online 24/7",
    content: (
      <>
        <p className="text-gray-600 mb-4">
          Bebaskan pelanggan Anda untuk membuat janji temu kapan saja dan di
          mana saja. Mereka dapat memilih slot waktu yang paling sesuai,
          menerima konfirmasi instan, dan mendapatkan pengingat otomatis
          menjelang hari-H.
        </p>
      </>
    ),
  },
  {
    title: "Check-in Mandiri",
    content: (
      <>
        <p className="text-gray-600 mb-4">
          Lewati antrean di meja resepsionis. Dengan link pengingat atau
          pemindaian (scan) QR code di lokasi, pelanggan bisa langsung check-in.
          Tiket antrean digital akan otomatis diterbitkan ke ponsel mereka,
          memberikan pengalaman yang cepat dan contactless.
        </p>
      </>
    ),
  },
  {
    title: "Notifikasi Panggilan Real-Time",
    content: (
      <>
        <p className="text-gray-600 mb-4">
          Tidak ada lagi ketidakpastian dalam menunggu. Pelanggan akan menerima
          notifikasi otomatis secara real-time tepat saat giliran mereka untuk
          dilayani tiba. Efisien bagi Anda, nyaman bagi pelanggan.
        </p>
      </>
    ),
  },
];

function ManajemenJadwalJanjiTemuFeatureAccordion() {
  // State untuk melacak item mana yang terbuka. Default: item pertama (index 0).
  const [openIndex, setOpenIndex] = useState(0);

  // Handler untuk membuka/menutup item
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header Teks */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sistem Manajemen Janji Temu <br /> Efisien, Modern, Tanpa Antrean
          </h2>
          <p className="text-lg text-gray-600">
            Alur Pelayanan yang Mulus untuk Bisnis Anda
          </p>
        </div>

        {/* Konten Accordion */}
        <div className="space-y-4">
          {accordionData.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
              chevronIcon={<ChevronDownIcon className="-rotate-90" />}
            >
              {item.content}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ManajemenJadwalJanjiTemuFeatureAccordion;
