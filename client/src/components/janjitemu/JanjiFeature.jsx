import React from "react";
// Import komponen FeatureCard
import FeatureCard from "../common/FeatureCard";

// --- Placeholder Icons (Dibuat ulang agar sesuai dengan visual pada gambar) ---
// Ikon dari ProductFeature.jsx akan digunakan jika cocok.

// 1. Peran dan Izin Pengguna (Menggunakan QueueIcon dari ProductFeature sebagai Person Icon)
const UserRoleIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
);

// 2. Analisa dan Laporan (Menggunakan AnalyticsIcon dari ProductFeature)
const AnalyticsIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
    </svg>
);

// 3. Pengingat dan Notifikasi (Menggunakan MessageIcon dari ProductFeature)
const MessageIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
    </svg>
);

// 4. Keamanan (Menggunakan Ikon Kunci)
const SecurityIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z" />
    </svg>
);

// 5. Single Sign-On (SSO) (Menggunakan Ikon Kumpulan Data/Integrasi)
const SSOIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.38 0 2.5 1.12 2.5 2.5S13.38 10 12 10 9.5 8.88 9.5 7.5 10.62 5 12 5zm0 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
);

// 6. Integrasi Kalender (Menggunakan CalendarIcon dari ProductFeature)
const CalendarIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
    </svg>
);

// 7. Rapat Virtual (Menggunakan VirtualMeetingIcon dari ProductFeature)
const VirtualMeetingIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 17.01V6.99C21 5.89 20.1 5 19 5H5c-1.1 0-2 .89-2 1.99V17.01C3 18.11 3.9 19 5 19h14c1.1 0 2-.89 2-1.99zM19 17H5V7h14v10zM12 8l-6 4.5V16h12v-3.5L12 8z" />
    </svg>
);

// 8. Perencanaan Kapasitas Sumber Daya (Menggunakan Ikon Kapasitas/Resource)
const CapacityIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
    </svg>
);

// 9. Compliance (Menggunakan Ikon Hati/Persetujuan)
const ComplianceIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
);

// 10. Penjadwalan Multi-Sumber Daya (Menggunakan Ikon Plus/Tambah)
const MultiResourceIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
    </svg>
);

// 11. Pemesanan Multi-Layanan (Menggunakan Ikon Komunikasi/Chat)
const MultiServiceIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
    </svg>
);

// 12. Dukungan Multi-Bahasa (Menggunakan Ikon Globe)
const MultiLanguageIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-3.32 2.19-6.1 5.38-7.23V12h5v2h-4v3h4v1.73c3.19-1.13 5.38-3.91 5.38-7.23 0 4.41-3.59 8-8 8z" />
    </svg>
);

// 13. Dukungan Multi-Zona Waktu (Menggunakan Ikon Jam)
const MultiTimezoneIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
    </svg>
);

// 14. Kustomisasi (Menggunakan Ikon Jantung/Bintang)
const CustomizationIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

// 15. API Yang Terstruktur (Menggunakan Ikon Gear)
const APIIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.09-.72-1.71-.96l-.37-2.65c-.06-.24-.27-.42-.51-.42h-4c-.25 0-.45.18-.51.42l-.37 2.65c-.62.24-1.19.57-1.71.96l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.12.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.31.61.22l2.49-1c.52.39 1.09.72 1.71.96l.37 2.65c.06.24.27.42.51.42h4c.25 0 .45-.18.51-.42l.37-2.65c.62-.24 1.19-.57 1.71-.96l2.49 1c.22.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
    </svg>
);
// --- /Placeholder Icons ---


// Data kartu yang diisi sesuai gambar
const featureData = [
  {
    icon: <UserRoleIcon />,
    title: "Peran dan Izin Pengguna",
    description:
      "Kelola akses bertahap yang memungkinkan Anda memutuskan siapa yang dapat melihat dan siapa yang dapat melakukan apa saja.",
  },
  {
    icon: <AnalyticsIcon />,
    title: "Analisa dan laporan",
    description:
      "Dapatkan wawasan berharga (real-time maupun historis). Cetak dan ekspor data dalam berbagai format.",
  },
  {
    icon: <MessageIcon />,
    title: "Pengingat dan Notifikasi",
    description:
      "Komunikasi dua arah yang tepat dan penting. Kirim pengingat otomatis kepada pelanggan untuk mengurangi angka tidak hadir dan laporan.",
  },
  {
    icon: <SecurityIcon />,
    title: "Keamanan",
    description:
      "Qmatic Bereskan ISO 27001, memastikan bahwa data pelanggan dan bisnis Anda terenkripsi saat disimpan maupun saat dikirim.",
  },
  {
    icon: <SSOIcon />,
    title: "Single Sign-On (SSO)",
    description:
      "Integrasi SSO melalui penyedia identitas (AD, Okta/ID, SAML, dll.) mempermudah manajemen masuk dan izin staf di organisasi Anda.",
  },
  {
    icon: <CalendarIcon />,
    title: "Integrasi Kalender",
    description:
      "Sinkronisasi otomatis dengan kalender Outlook Anda.",
  },
  {
    icon: <VirtualMeetingIcon />,
    title: "Rapat Virtual",
    description:
      "Layanan pelanggan dapat dilakukan melalui Microsoft Teams atau Zoom.",
  },
  {
    icon: <CapacityIcon />,
    title: "Perencanaan Kapasitas Sumber Daya",
    description:
      "Lacak ketersediaan waktu staf, alokasikan sumber daya yang tepat dan akurat, serta tentukan jadwal layanan untuk mengelola beban operasional.",
  },
  {
    icon: <ComplianceIcon />,
    title: "Compliance",
    description:
      "Perangkat keras Qmatic mematuhi WCAG 2.1 level AA dan GDPR.",
  },
  {
    icon: <MultiResourceIcon />,
    title: "Penjadwalan Multi-Sumber Daya",
    description:
      "Kelola lebih dari satu sumber daya, contohnya gabungan antara staf, ruangan, dan peralatan untuk satu program.",
  },
  {
    icon: <MultiServiceIcon />,
    title: "Pemesanan Multi-Layanan",
    description:
      "Izinkan pelanggan dan staf reservasi waktu untuk beberapa layanan dalam sekali janji temu.",
  },
  {
    icon: <MultiLanguageIcon />,
    title: "Dukungan Multi-Bahasa",
    description:
      "Aplikasi dan halaman pemesanan kami tersedia dalam bahasa Inggris, Spanyol, Prancis, Belanda dan Jerman.",
  },
  {
    icon: <MultiTimezoneIcon />,
    title: "Dukungan Multi-Zona Waktu",
    description:
      "Pastikan penjadwalan janji temu yang akurat untuk setiap lokasi dan pelanggan Anda di seluruh dunia.",
  },
  {
    icon: <CustomizationIcon />,
    title: "Kustomisasi",
    description:
      "Tambahkan logo, warna, dan tema Anda ke halaman booking dan tiket antrean Anda.",
  },
  {
    icon: <APIIcon />,
    title: "API Yang Terstruktur",
    description:
      "Integrasikan sistem manajemen antrean janji temu kami hanya dengan beberapa baris kode.",
  },
];

function JanjiFeature() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Header Teks */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Fitur Unggulan
          </h2>
          <p className="text-lg text-gray-600">
            Perangkat Lunak Pengelolaan Janji Temu
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

export default JanjiFeature;