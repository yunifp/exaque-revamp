import React from 'react';

import solutionImage from "../../assets/solution-stats.png";

// --- Placeholder Icons ---
// Ganti ini dengan file SVG Anda yang sebenarnya
const QueueIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
);
const JourneyIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
);
const VirtualTicketIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
);
const CalendarIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
);
const VideoIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 5h11a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z"></path></svg>
);
// --- /Placeholder Icons ---


// Sub-komponen untuk setiap item
function SolutionItem({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4">
      {/* Styling ikon diperbarui agar sesuai gambar */}
      <div className="flex-shrink-0 p-3 bg-antiflash-white hover:bg-accent rounded-full text-white">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

// Komponen utama
function IntegratedSolutions() {
  // Konten didefinisikan di dalam komponen
  const title = "Solusi Terpadu Exaque";
  // Deskripsi diperbarui sesuai gambar
  const description = "Di Exaque, kami tidak hanya mengelola titik interaksi. Kami merancang sebuah ekosistem. Setiap fitur, mulai dari antrean virtual hingga rapat jarak jauh, terintegrasi untuk memberikan efisiensi operasional bagi Anda dan pengalaman yang mulus tanpa hambatan bagi pelanggan Anda.";
  const imageUrl = solutionImage;

  return (
    // Latar belakang diubah menjadi putih
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        
        {/* Bagian Atas: Judul dan Deskripsi */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Kolom Kiri: Judul */}
          <div className="text-left">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
              Solusi <br />
              Terpadu Exaque
            </h2>
          </div>
          {/* Kolom Kanan: Deskripsi */}
          <div className="text-left pt-2">
            <p className="text-lg text-gray-600">
              {description}
            </p>
          </div>
        </div>

        {/* Bagian Bawah: Daftar Solusi dan Gambar */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Kolom Kiri: Daftar Solusi */}
          <div className="space-y-8">
            <SolutionItem
              icon={<QueueIcon />}
              title="Manajemen Antrean"
              description="Melayani pelanggan secara efisien dan mengurangi waktu tunggu"
            />
            <SolutionItem
              icon={<JourneyIcon />}
              title="Manajemen Perjalanan Pelanggan"
              description="Mengelola alur dari awal hingga akhir, dan dapatkan wawasan tentang operasi Anda"
            />
            <SolutionItem
              icon={<VirtualTicketIcon />}
              title="Antrean Virtual"
              description="Memungkinkan pelanggan menunggu di mana saja dengan mobile ticket"
            />
            <SolutionItem
              icon={<CalendarIcon />}
              title="Manajemen Jadwal Janji Temu"
              description="Meningkatkan operasi dengan pemesanan janji temu dan manajemen kedatangan"
            />
            <SolutionItem
              icon={<VideoIcon />}
              title="Rapat Virtual"
              description="Pelayanan pelanggan dapat dilakukan dari jarak jauh melalui aplikasi rapat virtual."
            />
          </div>

          {/* Kolom Kanan: Gambar */}
          <div>
            <img 
              src={imageUrl} 
              alt="Solusi Terpadu Exaque" 
              className="w-full rounded-lg shadow-lg" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default IntegratedSolutions;