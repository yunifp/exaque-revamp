import React from "react";
import FeatureCard from "../common/FeatureCard";

import ManajemenAntrean from "../../assets/icons/ic_manajemen-antrean-product.svg";
import ManajemenJadwalJanjiTemu from "../../assets/icons/ic_manajemen-jadwal-janji-temu-product.svg";
import AntrianVirtual from "../../assets/icons/ic_antrian-virtual-product.svg";
import AnalisaDanLaporan from "../../assets/icons/ic_analisis-laporan-product.svg";
import RapatVirtual from "../../assets/icons/ic_rapat-virtual-product.svg";
import Pesan from "../../assets/icons/ic_pesan-product.svg";
import FeedbackPengguna from "../../assets/icons/ic_feedback-pengguna-product.svg";
import Integrasi from "../../assets/icons/ic_integrasi-product.svg";
// --- Placeholder Icons ---
const QueueIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
  </svg>
);
const MobileIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
  </svg>
);
const AnalyticsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
  </svg>
);
const VirtualMeetingIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 17.01V6.99C21 5.89 20.1 5 19 5H5c-1.1 0-2 .89-2 1.99V17.01C3 18.11 3.9 19 5 19h14c1.1 0 2-.89 2-1.99zM19 17H5V7h14v10zM12 8l-6 4.5V16h12v-3.5L12 8z" />
  </svg>
);
const MessageIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
  </svg>
);
const FeedbackIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 12h-2v-2h2v2zm0-4h-2V6h2v4z" />
  </svg>
);
const IntegrationIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM11 16.5v-3.5h-3.5v-2h3.5V7.5h2v3.5h3.5v2h-3.5v3.5h-2z" />
  </svg>
);

// Data kartu
const featureData = [
  {
    icon: ManajemenAntrean,
    title: "Manajemen Antrean",
    description:
      "Ciptakan pengalaman menunggu yang terstruktur dan nyaman dengan kios pendaftaran, layar informasi, serta pengumuman suara.",
  },
  {
    icon: ManajemenJadwalJanjiTemu,
    title: "Manajemen Jadwal Janji Temu",
    description:
      (<>Izinkan tim dan pelanggan Anda untuk dengan mudah menjadwalkan janji temu, menerima pengingat, dan melakukan <i>check-in</i> saat tiba.</>),
  },
  {
    icon:  AntrianVirtual,
    title: "Antrian Virtual",
    description:
      "Izinkan pelanggan Anda untuk mengantri secara virtual menggunakan ponsel mereka untuk mengakses sistem tiket elektronik Anda.",
  },
  {
    icon: AnalisaDanLaporan,
    title: "Analisa dan laporan",
    description:
      (<>Buat keputusan yang lebih baik berdasarkan data, tanggapi data <i>real-time</i>, tinjau laporan detail, dan temukan potensi dari nilai tersembunyi menggunakan alat favorit Anda.</>),
  },
  {
    icon: RapatVirtual,
    title: "Rapat Virtual",
    description:
      "Tawarkan pertemuan virtual dan layani pelanggan Anda secara jarak jauh melalui Microsoft Teams atau Zoom.",
  },
  {
    icon: Pesan,
    title: "Pesan",
    description:
      "Penuhi harapan pelanggan Anda dengan selalu memberitahukan mereka tentang setiap langkah dalam perjalanan mereka.",
  },
  {
    icon: FeedbackPengguna,
    title:(<><i>Feedback</i> Pengguna</>),
    description:
      "Buat dan kirimkan survei umpan balik yang ramah pengguna kepada pelanggan setelah kunjungan mereka untuk mengumpulkan wawasan unik tentang kebutuhan pelanggan Anda.",
  },
  {
    icon: Integrasi,
    title: "Integrasi",
    description:
      "Maksimalkan nilai investasi Anda dengan integrasi yang fleksibel ke dalam aplikasi Anda.",
  },
];

function ProductFeature() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Header Teks */}
        <div className="text-center max-w-7xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Fitur Unggulan
          </h2>
          <p className="text-lg text-gray-600">
            Dengan solusi modular dan fleksibelnya, bisnis dan organisasi dapat
            mengakses solusi yang kuat untuk menyediakan pengalaman pelanggan
            yang <br />
            sempurna sesuai dengan kebutuhan Anda.
          </p>
        </div>

        {/* Grid Kartu Fitur */}
        <div className="px-10 xl:px-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductFeature;
