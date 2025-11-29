import React from 'react';
import { Link } from 'react-router-dom';

// Impor gambar
import integrationImage from "../../assets/integration-gfx.png";

function IntegrationSection() {
  // Konten diperbarui sesuai gambar
  const title = "Integrasi Exaque";
  const subtitle = "Terintegrasi dengan platform rapat virtual Anda, kalender, CRM, papan informasi digital, alat visualisasi data, dan lainnya";
  const buttonText = "Lihat Selengkapnya";
  const buttonLink = "/integrasi";
  const imageUrl = integrationImage;

  return (
    // Latar belakang diubah ke putih
    <section className="container mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
      
      {/* Kolom Kiri: Teks */}
      <div className="space-y-6">
        {/* Judul diperbarui */}
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
          Integrasi <br />
          Exaque
        </h2>
        <p className="text-lg text-gray-600 max-w-lg">
          {subtitle}
        </p>
        <Link
          to={buttonLink}
          // Tombol diperbarui
          className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-2xl shadow-md hover:bg-accent-hover transition-colors"
        >
          {buttonText}
        </Link>
      </div>
      
      {/* Kolom Kanan: Gambar */}
      <div>
        <img src={imageUrl} alt="Integrasi" className="w-full rounded-lg shadow-lg" />
      </div>
    </section>
  );
}

export default IntegrationSection;