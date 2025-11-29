import React from "react";
import { Link } from "react-router-dom";
// Impor gambar hero Anda
import heroImage from "../../assets/hero-product.svg";

function Hero() {
  // Semua 'const' untuk konten telah dihapus.

  // Definisikan style untuk background image di sini
  const heroStyle = {
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
      url(${heroImage})
    `,
  };

  return (
    <section
      // Class dan style ditambahkan kembali
      className="relative min-h-[600px] w-full flex items-center bg-cover bg-center text-white rounded-b-2xl overflow-hidden"
      style={heroStyle} // Menggunakan style yang didefinisikan di atas
    >
      <div className="container mx-auto px-6">
        <div className="md:w-1/2 lg:w-2/3 text-center mx-auto">
          {/* Konten 'welcomeText' di-inline */}
          <span className="block text-lg font-medium mb-2">
            Produk
          </span>
          {/* Konten 'title' di-inline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Qmatic Orchestra 7
          </h1>
          {/* Konten 'subtitle' di-inline */}
          <p className="text-lg md:text-xl mb-10">
            Terapkan struktur pada operasional Anda dengan solusi manajemen antrian untuk perusahaan.
          </p>
          <div className="flex flex-wrap gap-4 mx-auto justify-center">
            {/* Konten 'buttonLink' dan 'buttonText' di-inline */}
            <Link
              to="/demo"
              className="px-6 py-3 bg-primary text-gray-900 font-semibold rounded-md shadow-md hover:bg-gray-200 transition-colors duration-300"
            >
              Permintaan Demo
            </Link>
            {/* Konten 'secondaryButtonLink' dan 'secondaryButtonText' di-inline */}
            <Link
              to="/konsultasi"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-primary hover:text-gray-900 transition-colors duration-300"
            >
              Konsultasi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;