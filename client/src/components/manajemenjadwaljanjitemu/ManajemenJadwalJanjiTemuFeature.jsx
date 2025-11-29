import React from "react";
// Import komponen FeatureCard
import FeatureCard from "../common/FeatureCard";
import PenjadwalanJanjitemu from "../../assets/icons/ic_penjadwalan-janji-temu.svg";
import KonfirmasiOtomatis from "../../assets/icons/ic_konfirmasi-otomatis.svg";
import CheckInMandiri from "../../assets/icons/ic_pendaftaran-mandiri.svg";
import RapatVirtual from "../../assets/icons/ic_rapat-virtual.svg";
import DatadanLaporanRealTime from "../../assets/icons/ic_analisa-dan-laporan.svg";
import ManajemenPerjalanan from "../../assets/icons/ic_manajemen-perjalanan.svg";

// Data kartu
const featureData = [
  {
    icon: PenjadwalanJanjitemu,
    title: "Penjadwalan Janji temu",
    description:
      "Optimalkan jadwal layanan dengan sistem janji temu online. Izinkan pelanggan memesan via online atau telepon untuk alur kerja yang lebih efisien dan antrean kunjungan langsung yang lebih singkat.",
  },
  {
    icon: KonfirmasiOtomatis,
    title: "Konfirmasi Otomatis",
    description:
      "Hemat waktu dengan konfirmasi dan pengingat otomatis. Kirim notifikasi pemesanan, konfirmasi, serta pengingat melalui SMS atau email secara otomatis untuk mencegah pembatalan dan meningkatkan kepuasan pelanggan.",
  },
  {
    icon: CheckInMandiri,
    title: "Check-In Mandiri",
    description:
      "Permudah pelanggan dengan fitur check-in mandiri. Pelanggan dapat melakukan check-in sendiri melalui smartphone atau kios layanan mandiri untuk pengalaman yang cepat dan praktis tanpa antre.",
  },
  {
    icon: RapatVirtual,
    title: "Rapat Virtual",
    description:
      "Berikan layanan terbaik tanpa batasan lokasi.  Lakukan pertemuan virtual melalui video, chat, atau platform digital lainnya untuk memudahkan pelanggan mendapatkan layanan di mana pun mereka berada.",
  },
  {
    icon: DatadanLaporanRealTime,
    title: "Data dan Laporan Real-Time",
    description:
      "Pantau kinerja bisnis Anda secara real-time.  Dapatkan wawasan akurat melalui dashboard analitik dan laporan canggih untuk meningkatkan efisiensi, mengelola sumber daya, serta memprediksi kebutuhan pelanggan.",
  },
  {
    icon: ManajemenPerjalanan,
    title: "Manajemen Perjalanan",
    description:
      "Kelola pengalaman pelanggan end-to-end. Penjadwalan Qmatic terintegrasi penuh dengan manajemen perjalanan pelanggan untuk layanan yang mulus dan efisien.",
  },
];

function ManajemenJadwalJanjiTemuFeature() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Header Teks */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Fitur Utama
          </h2>
          <p className="text-lg text-gray-600">
            Sistem Manajemen Jadwal Janji Temu
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

export default ManajemenJadwalJanjiTemuFeature;
