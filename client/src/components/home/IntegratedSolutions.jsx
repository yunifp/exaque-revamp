import React from 'react';

import solutionImage from "../../assets/solution-stats.png";

import AntreanVirtual from "../../assets/icons/ic_antrean-virtual.svg";
import ManajemenAntrean from "../../assets/icons/ic_manajemen-antrean.svg";
import ManajemenJadwalJanjiTemu from "../../assets/icons/ic_manajemen-jadwal-janji-temu.svg";
import ManajemenPerjalananPelanggan from "../../assets/icons/ic_manajemen-perjalanan-pelanggan.svg";
import RapatVirtual from "../../assets/icons/ic_rapat-virtual-beranda.svg";

// Sub-komponen untuk setiap item
function SolutionItem({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4">
      {/* Styling ikon diperbarui agar sesuai gambar */}
      <div className="flex-shrink-0">
         {typeof icon === "string" ? (
          <img
            src={icon}
            alt={`${title} icon`}
            className="p-3 bg-antiflash-white hover:bg-accent rounded-full"
          />
        ) : (
          icon
        )}
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
    <section className="bg-white py-10 md:py-28">
      <div className="container mx-auto px-6 space-y-20">
        {/* Bagian Atas: Judul dan Deskripsi */}
        <div className="w-full flex flex-col md:flex-row space-y-5 space-x-0 md:space-x-30">
          {/* Kolom Kiri: Judul */}
          <div className="text-left w-full md:w-1/3">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
              Solusi <br />
              Terpadu Exaque
            </h2>
          </div>
          {/* Kolom Kanan: Deskripsi */}
          <div className="text-left pt-2 w-full md:w-2/3">
            <p className="text-lg text-gray-600">
              {description}
            </p>
          </div>
        </div>

        {/* Bagian Bawah: Daftar Solusi dan Gambar */}
        <div className="w-full flex flex-col md:flex-row space-y-10 space-x-30">
          {/* Kolom Kiri: Daftar Solusi */}
          <div className="space-y-8 w-full md:w-1/3">
            <SolutionItem
              icon={ManajemenAntrean}
              title="Manajemen Antrean"
              description="Melayani pelanggan secara efisien dan mengurangi waktu tunggu"
            />
            <SolutionItem
              icon={ManajemenPerjalananPelanggan}
              title="Manajemen Perjalanan Pelanggan"
              description="Mengelola alur dari awal hingga akhir, dan dapatkan wawasan tentang operasi Anda"
            />
            <SolutionItem
              icon={AntreanVirtual}
              title="Antrean Virtual"
              description={
                <>
                  Memungkinkan pelanggan menunggu di mana saja dengan{" "}
                  <em>mobile ticket</em>
                </>
              }
            />
            <SolutionItem
              icon={ManajemenJadwalJanjiTemu}
              title="Manajemen Jadwal Janji Temu"
              description="Meningkatkan operasi dengan pemesanan janji temu dan manajemen kedatangan"
            />
            <SolutionItem
              icon={RapatVirtual}
              title="Rapat Virtual"
              description="Pelayanan pelanggan dapat dilakukan dari jarak jauh melalui aplikasi rapat virtual."
            />
          </div>

          {/* Kolom Kanan: Gambar */}
          <div className='w-full md:w-2/3'>
            <img 
              src={imageUrl} 
              alt="Solusi Terpadu Exaque" 
              className="w-full rounded-lg" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default IntegratedSolutions;