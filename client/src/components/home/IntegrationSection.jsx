import React from "react";
import { Link } from "react-router-dom";

// Impor gambar
import integrationImage from "../../assets/integration-gfx.png";

function IntegrationSection() {
  // Konten diperbarui sesuai gambar
  const title = "Integrasi Exaque";
  const subtitle =
    "Terintegrasi dengan platform rapat virtual Anda, kalender, CRM, papan informasi digital, alat visualisasi data, dan lainnya";
  const buttonText = "Lihat Selengkapnya";
  const buttonLink = "/integrasi";
  const imageUrl = integrationImage;

  return (
    // Hapus items-center dari sini
    <section className="container mx-auto px-6 py-10 md:py-28 grid md:grid-cols-2 gap-12 space-x-20">
      {/* Kolom Kiri: Teks */}
      {/* Pastikan teks dimulai dari atas (default) atau gunakan self-start jika perlu */}
      <div className="space-y-6 w-full self-start"> {/* Menambahkan self-start */}
        {/* Judul diperbarui */}
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
          Integrasi
          Exaque
        </h2>
        <p className="text-lg text-gray-600 w-full">{subtitle}</p>
        <Link
          to={buttonLink}
          // Tombol diperbarui
          className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-2xl shadow-md hover:bg-accent-hover transition-colors"
        >
          {buttonText}
        </Link>
      </div>

      {/* Kolom Kanan: Gambar */}
      {/* Gambar akan disejajarkan ke bawah dalam kolomnya */}
      <div className="flex justify-end"> {/* Menambahkan h-full untuk mengisi tinggi, dan justify-center untuk gambar yang w-2/3 */}
        <img
          src={imageUrl}
          alt="Integrasi"
          className="w-full md:w-5/6 h-full rounded-lg" // Biarkan w-2/3 jika ingin gambar tidak mengisi penuh
        />
      </div>
    </section>
  );
}

export default IntegrationSection;