import React, { useState } from "react";
// Impor komponen Accordion yang baru kita buat
import Accordion from "../common/Accordion";
import accordionimage1 from "../../assets/icons/ic_daftar-pengunjung.svg";
import accordionimage2 from "../../assets/icons/ic_antrian-virtual.svg";
import accordionimage3 from "../../assets/icons/ic_layanan-pesan.svg";
import accordionimage4 from "../../assets/icons/ic_pelanggan.svg";
// --- Ikon Chevron (Sama seperti sebelumnya) ---
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

// --- KONTEN DIPERBARUI DI SINI ---
const accordionData = [
  {
    title: "Self check-in",
    content: (
      <>
        <div className="flex flex-row mx-auto space-x-5">
          <p className="mb-4">
            Pelanggan dapat melakukan check-in secara mandiri dengan sangat
            mudah. Cukup scan QR code atau menggunakan bantuan staf melalui
            aplikasi Mobile Concierge. Proses ini menghilangkan kebutuhan untuk
            mengantri fisik dari awal, sekaligus memberikan pengalaman awal yang
            jauh lebih modern, efisien, dan bebas friksi.
          </p>
          <img
            src={accordionimage1}
            className="w-max mx-auto pr-14"
          />
        </div>
      </>
    ),
  },
  {
    title: "Terima Mobile Ticket & tunggu dari mana saja",
    content: (
      <>
        <div className="flex flex-row mx-auto space-x-5">
          <p className="mb-4">
            Setelah memilih layanan yang diinginkan, pelanggan akan langsung
            menerima Mobile Ticket digital di ponsel mereka. Pelanggan tidak
            perlu berdiri menunggu di lokasi. Mereka dapat memonitor
            perkembangan antrean secara real-time melalui ponsel, sehingga waktu
            tunggu dapat dimanfaatkan lebih produktif.
          </p>
          <img
            src={accordionimage2}
            className="w-max mx-auto pr-14"
          />
        </div>
      </>
    ),
  },
  {
    title: "Feedback Pengguna",
    content: (
      <>
        <div className="flex flex-row mx-auto space-x-5">
          <p className="mb-4">
            Sistem akan mengirimkan notifikasi otomatis ketika giliran mereka
            hampir tiba. Dengan pemberitahuan ini, pelanggan bisa kembali ke
            area layanan tepat waktu tanpa memenuhi ruang tunggu. Hal ini
            membantu mengurangi penumpukan antrean, menjaga alur lebih lancar,
            dan meningkatkan pengalaman pelanggan secara keseluruhan.
          </p>
          <img
            src={accordionimage3}
            className="w-max mx-auto pr-14"
          />
        </div>
      </>
    ),
  },
  {
    title: "Analisa Dan Laporan",
    content: (
      <>
        <div className="flex flex-row mx-auto space-x-5">
          <p className="mb-4">
            Ketika nomor mereka dipanggil, pelanggan tinggal menuju lokasi
            layanan untuk langsung dilayani tanpa perlu menunggu lama di depan
            counter. Proses ini menciptakan perjalanan pelanggan yang lebih
            terarah, konsisten, dan optimal dari awal hingga akhir.
          </p>
          <img
            src={accordionimage4}
            className="w-max mx-auto pr-14"
          />
        </div>
      </>
    ),
  },
];
// --- /KONTEN DIPERBARUI ---

function AntrianVirtualAccordion() {
  // State untuk melacak item mana yang terbuka. 0 = item pertama.
  const [openIndex, setOpenIndex] = useState(0);

  // Handler untuk membuka/menutup item
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Header Teks */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h3 className="text-sm font-semibold uppercase text-accent">
            CARA KERJA
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            solusi antrean virtual
          </h2>
          <p className="text-lg text-gray-600">
            Exaque melalui Qmatic adalah ekosistem terpadu yang dirancang untuk
            mengelola seluruh spektrum layanan Anda, mulai dari penjadwalan
            janji temu yang kompleks hingga alur antrean walk-in yang dinamis.
          </p>
        </div>

        {/* Wrapper/Container untuk Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {accordionData.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
              chevronIcon={
                <ChevronDownIcon className="-rotate-90" /> // Rotasi awal
              }
            >
              {item.content}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AntrianVirtualAccordion;
