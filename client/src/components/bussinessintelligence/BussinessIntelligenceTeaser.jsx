import React from "react";
// Import komponen umum yang baru
import Teaser from "../common/Teaser";
import teaser1 from "../../assets/bussiness-intelligence-teaser-1.svg";
import teaser2 from "../../assets/bussiness-intelligence-teaser-2.svg";
import teaser3 from "../../assets/bussiness-intelligence-teaser-3.svg";

function BussinessIntelligenceTeaser() {
  return (
    <section className="bg-primary pt-16 md:pt-20 pb-10">
      <div className="container mx-auto px-6 mb-16 text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Dapatkan nilai maksimal dari data perjalanan pelanggan Anda
        </h2>
        <p className="text-lg text-gray-600">
          Dapatkan kendali penuh atas kinerja layanan Anda melalui dashboard
          real-time Exaque, yang menyajikan data performa terkini sekaligus
          historis. Untuk analisis yang lebih mendalam, integrasikan data ini
          secara mulus dengan alat BI yang sudah Anda gunakan melalui Data
          Connect API. Ini memungkinkan Anda menggali wawasan strategis untuk
          mengambil keputusan yang tepat—baik untuk mengelola biaya,
          meningkatkan penjualan, mengoptimalkan kinerja staf, maupun
          menyempurnakan pengalaman pelanggan Anda.
        </p>
      </div>
      
      {/* --- Teaser 1: Dashboard Real-Time --- */}
      <Teaser
        preTitle="Dashboard Real-Time"
        title="Pantau operasi Anda secara real-time"
        // PERUBAHAN: Menggunakan JSX (<ul><li>) untuk formatting list
        description={
          <>
            <p className="mb-4">
              Semua data yang Anda butuhkan dalam satu dasbor, sehingga Anda dapat 
              dengan cepat mengetahui kinerja cabang Anda, termasuk:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1">
              <li>Waktu tunggu rata-rata</li>
              <li>Jumlah pelanggan yang dilayani</li>
              <li>Pelanggan yang tidak hadir</li>
              <li>Pelanggan yang menunggu</li>
              <li>Waktu transaksi rata-rata</li>
            </ul>
          </>
        }
        imageSrc={teaser1} // Menggunakan placeholder
        imageAlt="Dashboard Real-Time"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={false}
        disableButton={true}
      />
      
      {/* --- Teaser 2: Laporan --- */}
      <Teaser
        preTitle="Laporan"
        title="Buat laporan yang komprehensif"
        // PERUBAHAN: Menggunakan JSX (<ul><li>)
        description={
          <ul className="list-disc list-outside pl-5 space-y-2">
            <li>Buat laporan tentang metrik kinerja terpenting Anda</li>
            <li>
              Perbaiki proses pelaporan untuk manajer dan tim, memastikan akses 
              yang lancar ke data yang diperlukan.
            </li>
            <li>Semua laporan dapat diunduh dalam format PDF, CSV, atau XLSX.</li>
            <li>
              Jadwalkan laporan dan terima semua data Anda langsung ke email 
              Anda—harian, mingguan, atau bulanan.
            </li>
          </ul>
        }
        imageSrc={teaser2} // Menggunakan placeholder
        imageAlt="Buat laporan yang komprehensif"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={true}
      />
      
      {/* --- Teaser 3: Koneksi Data --- */}
      <Teaser
        preTitle="Koneksi Data"
        title="Integrasikan dan analisis data secara fleksibel menggunakan alat BI pilihan Anda."
        // PERUBAHAN: Menggunakan JSX (<ul><li>)
        description={
          <>
            <p className="mb-4">
              Buka potensi wawasan paling berharga Anda dengan Data Connect API:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>Gunakan alat BI favorit Anda seperti Power BI</li>
              <li>
                Integrasikan dengan mulus ke sistem dan sumber data lain untuk 
                mengungkap nilai tersembunyi
              </li>
              <li>
                Impor dengan mudah lebih dari 70 titik data dari platform Qmatic
              </li>
            </ul>
          </>
        }
        imageSrc={teaser3} // Menggunakan placeholder
        imageAlt="Koneksi Data"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={false}
        disableButton={true}
      />
    </section>
  );
}

export default BussinessIntelligenceTeaser;