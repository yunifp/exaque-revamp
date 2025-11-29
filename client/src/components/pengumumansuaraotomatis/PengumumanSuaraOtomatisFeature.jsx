import React from "react";
// Import komponen FeatureCard
import FeatureCard from "../common/FeatureCard";

// --- Placeholder Icons (Dibuat ulang agar sesuai dengan visual pada gambar) ---

// Ikon umum (Re-use atau buat baru)
const ChartIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    </svg>
);
const TimeChartIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm4-8h-2v-2h2v2zM7 9h2v2H7V9zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </svg>
);
const ThumbUpIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.43-.18-.83-.49-1.11L14 3 7.02 9.99 7 21h13c1.1 0 2-.9 2-2v-8.31c0-.28-.11-.55-.31-.75l-1.68-1.68c-.2-.2-.47-.31-.75-.31z" />
    </svg>
);
const FeedbackIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 12h-2v-2h2v2zm0-4h-2V6h2v4z" />
    </svg>
);
const AppointmentIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
    </svg>
);
const TrendIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 6l-3.5 4.5-2.5-1.5-4 5h14V6z" />
    </svg>
);

// Data kartu yang diisi sesuai gambar image_74d945.png
const featureData = [
  {
    icon: <ChartIcon />,
    title: "Performa Analitik",
    description:
      "Bandingkan cabang-cabang berbeda dari indikator kinerja utama (KPI) yang berbeda, seperti jumlah pelanggan yang tidak hadir dan waktu tunggu tingkat layanan.",
  },
  {
    icon: <TimeChartIcon />,
    title: "Pola Harian",
    description:
      "Pantau tren waktu kedatangan, kedatangan, dan pelayanan. Ideal untuk HR Manager dan staf, menemukan waktu kerja pada aktivitas yang berbeda.",
  },
  {
    icon: <ThumbUpIcon />,
    title: "Performa Staf",
    description:
      "Bandingkan waktu transaksi rata-rata (untuk layanan dan karyawan) dan berbagai metrik untuk menentukan kinerja kompetitif.",
  },
  {
    icon: <FeedbackIcon />,
    title: "Feedback Pelanggan dan NPS",
    description:
      "Pahami apa yang mendorong pelanggan yang puas per pelanggan dan dapatkan nilai dari NPS (Net Promoter Score). Sesuaikan Metrik untuk mencerminkan batas waktu tunggu layanan Anda.",
  },
  {
    icon: <AppointmentIcon />,
    title: "Analisis Janji Temu",
    description:
      "Pelajari berapa banyak pelanggan yang datang untuk janji temu, berapa banyak pelanggan yang datang/walk-in, dan analisis waktu yang dihabiskan untuk layanan dan staf yang berbeda terkait kualitas.",
  },
  {
    icon: <TimeChartIcon />,
    title: "Analisis Distribusi Waktu Tunggu dan Waktu Transaksi",
    description:
      "Tentukan waktu tunggu dan waktu transaksi Anda yang sebenarnya, bukan dengan melihat rata-rata. Bandingkan metrik dengan tujuan di berbagai tingkat layanan.",
  },
  {
    icon: <TrendIcon />,
    title: "Analisis Tren Waktu/Tanggal",
    description:
      "Analisis tingkat kesibukan, atau perubahan aktivitas antara periode yang berbeda. Temukan sub-wilayah dengan pengujung yang paling banyak, dan kemungkinan pelanggan yang diabaikan untuk mengambil keputusan mengenai periode masa yang paling sibuk.",
  },
];

function PengumumanSuaraOtomatisFeature() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Header Teks */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Gunakan Wawasan Data Untuk Mengambil Keputusan Terbaik Demi Layanan Pelanggan
          </h2>
          <p className="text-lg text-gray-600">
            Dengan akses mudah ke data dari setiap tahap perjalanan pelanggan, 
            serta layanan pilihan untuk mengintegrasikan data lain seperti suku 
            atau penjualan, Anda dapat meningkatkan efisiensi sambil membuat pelanggan 
            semakin puas.
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

export default PengumumanSuaraOtomatisFeature;