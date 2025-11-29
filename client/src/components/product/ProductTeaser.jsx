import React from "react";
import { Link } from "react-router-dom";

// Mengganti gambar 'mockup-1.png' dengan 'solution-stats.png'
import productImage from "../../assets/picture.png";

function ProductTeaser() {
  // Konten diperbarui agar sesuai dengan gambar baru
  const title = "Solusi Modern Untuk Antrean Perjalanan Pelanggan Anda.";
  const description =
    "Qmatic Orchestra mengelola seluruh aliran pelanggan Anda secara efisien mulai dari janji temu, antrean, umpan balik, hingga analisis canggih. Ini adalah alat lengkap Anda untuk menciptakan pengalaman pelanggan yang luar biasa, meningkatkan lingkungan kerja, dan mengoptimalkan operasional melalui wawasan yang mendalam.";
  const buttonText = "Permintaan Demo";
  const buttonLink = "/demo";
  const imageUrl = productImage;

  return (
    // Bagian utama, padding container
    <section className="container mx-auto px-6 py-20 md:py-28">
      {/* Tata letak diubah menjadi grid 2 kolom */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Kolom Kiri: Teks */}
        <div className="text-left max">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">{description}</p>
          <Link
            to={buttonLink}
            // Style tombol disesuaikan (rounded-full)
            className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-full shadow-md hover:bg-accent-hover transition-colors"
          >
            {buttonText}
          </Link>
        </div>

        {/* Kolom Kanan: Gambar */}
        <div>
          <img
            src={imageUrl}
            alt="Solusi Modern Exaque"
            className="w-full mx-auto rounded-lg" // Diberi rounded-lg sesuai gambar
          />
        </div>
      </div>
    </section>
  );
}

export default ProductTeaser;