import React from "react";
// Import komponen FeatureCard
import FeatureCard from "../common/FeatureCard";

// --- Placeholder Icons (Dibuat ulang agar sesuai dengan visual pada gambar) ---

// Ikon umum (re-used dari ProductFeature.jsx / JanjiFeature.jsx)
const GenericDocumentIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
    </svg>
);
const EyeIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12c-2.48 0-4.5-2.02-4.5-4.5S9.52 7.5 12 7.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5zm0-7c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" />
    </svg>
);
const LocationIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
);
const MessageIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
    </svg>
);
const SecurityIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z" />
    </svg>
);
const VirtualMeetingIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 17.01V6.99C21 5.89 20.1 5 19 5H5c-1.1 0-2 .89-2 1.99V17.01C3 18.11 3.9 19 5 19h14c1.1 0 2-.89 2-1.99zM19 17H5V7h14v10zM12 8l-6 4.5V16h12v-3.5L12 8z" />
    </svg>
);
const BellIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2z" />
    </svg>
);
const TimeIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 13H11V7h1.5v8zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </svg>
);
const CheckPlusIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 10h-3v3h-2v-3H8V9h3V6h2v3h3v3z" />
    </svg>
);
const ChartIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
);
const SendIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.01 21L23 12 2.01 3v7l15 2-15 2v7z" />
    </svg>
);
const LanguageIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.31 15.02c-.37-.5-1.29-.98-2.61-1.33-1.65-.43-3.32-.67-4.7-.67-1.38 0-3.05.24-4.7.67-1.32.35-2.24.83-2.61 1.33C4.18 16.54 4 15.28 4 14V8h16v6c0 1.28-.18 2.54-.57 3.02z" />
    </svg>
);
const HeartIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
);
const ComputerIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
    </svg>
);
const CheckmarkIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
);

// Data kartu yang diisi sesuai gambar image_582a3d.png
const featureData = [
  {
    icon: <GenericDocumentIcon />,
    title: "Akses Mudah",
    description:
      "Daftar antrian menggunakan QR Code, atau tautan unik.",
  },
  {
    icon: <MessageIcon />,
    title: "Notifikasi Otomatis",
    description:
      "Dapat kirim update status antrian melalui SMS, WhatsApp, atau email secara real-time.",
  },
  {
    icon: <EyeIcon />,
    title: "Monitoring Proses Antrian",
    description:
      "Pantau proses antrian terkini, status antrian, perkiraan waktu tunggu dan perkiraan waktu perjalanan ke lokasi layanan.",
  },
  {
    icon: <LocationIcon />,
    title: "Branches Berlapis",
    description:
      "Tentukan dan konfigurasi antrean virtual di lokasi cabang terdekat.",
  },
  {
    icon: <GenericDocumentIcon />, // Menggunakan ikon yang sama seperti Akses Mudah (Placeholder)
    title: "Ketersediaan Pelayanan",
    description:
      "Lihat semua layanan, persyaratan, dan personil yang tersedia sesuai dengan alur di web/app.",
  },
  {
    icon: <SendIcon />,
    title: "Pre-Entry",
    description:
      "Dapatkan registrasi dengan pendaftaran virtual sebelum Anda datang.",
  },
  {
    icon: <ComputerIcon />,
    title: "Umpan Balik",
    description:
      "Dapatkan umpan balik setelah pelayanan selesai, dalam satu aplikasi.",
  },
  {
    icon: <GenericDocumentIcon />, // Menggunakan ikon dokumen
    title: "Pendaftaran Janji Temu",
    description:
      "Daftar dan kelola janji temu yang sudah dijadwalkan.",
  },
  {
    icon: <LanguageIcon />,
    title: "Mendukung Berbagai Bahasa",
    description:
      "Termasuk bahasa utama dan kustomisasi bahasa lokal.",
  },
  {
    icon: <HeartIcon />,
    title: "Kustomisasi Branding",
    description:
      "Kustomisasi semua dengan identitas merek Anda, lebih dari 300 font dan logo.",
  },
  {
    icon: <SecurityIcon />,
    title: "Keamanan",
    description:
      "Verifikasi identitas dan perlindungan data yang komprehensif di lokasi atau geofence, saat janji temu dimulai.",
  },
  {
    icon: <CheckmarkIcon />,
    title: "Virtual Meetings",
    description:
      "Laksanakan Rapat Virtual dengan mengintegrasikan Microsoft Teams dan Zoom.",
  },
  {
    icon: <BellIcon />,
    title: "Kontak Pesan",
    description:
      "Termasuk pesan yang mengarah ke formulir, survei, video, atau tautan dengan pelanggan ketika diperlukan.",
  },
  {
    icon: <TimeIcon />,
    title: "Estimasi Waktu Tunggu",
    description:
      "Berikan pelanggan perkiraan waktu tunggu dan waktu perjalanan yang realistis, sesuai kondisi di lokasi.",
  },
  {
    icon: <CheckPlusIcon />,
    title: "Delay Visit",
    description:
      "Berikan pelanggan kemampuan untuk menunda kunjungan mereka jika mereka membutuhkan waktu tambahan.",
  },
  {
    icon: <ChartIcon />,
    title: "Lacak Pelanggan",
    description:
      "Pantau perjalanan pelanggan secara real-time dari Mobile Ticket hingga selesai.",
  },
];

function MobileTicketFeature() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Header Teks */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Fitur Unggulan
          </h2>
          <p className="text-lg text-gray-600">
            Fitur Unggulan Mobile Ticketing
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

export default MobileTicketFeature;