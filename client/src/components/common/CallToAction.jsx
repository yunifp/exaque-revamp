import React from "react";
import { Link } from "react-router-dom";

// Import gambar default yang sudah ada
import CtaImage from "../../assets/cta-woman-1.svg"; 

/**
 * Komponen Call To Action (CTA) yang dapat digunakan kembali.
 * @param {object} props
 * @param {string} [props.preTitle] - Teks di atas judul (pre-title).
 * @param {string} [props.title] - Judul utama CTA.
 * @param {string} [props.buttonText] - Teks tombol.
 * @param {string} [props.buttonLink] - Link tombol.
 * @param {string} [props.imageUrl] - URL gambar. Jika tidak diisi, menggunakan default.
 * @param {string} [props.bgColor] - Kelas background kustom. Default: 'bg-gray-50'.
 * @param {string} [props.buttonColor] - Kelas warna background tombol. Default: 'bg-accent text-white hover:bg-accent-hover'.
 * @param {string} [props.titleColor] - Kelas warna judul kustom. Default: 'text-gray-800'.
 */
function CallToAction({
  preTitle = "Siap Mentransformasi Pengalaman Pelanggan Anda?",
  title = "Mari Diskusikan Kebutuhan Anda, Kami Akan Tunjukkan Solusinya.",
  buttonText = "Konsultasi Sekarang",
  buttonLink = "/konsultasi",
  imageUrl = CtaImage,
  bgColor = "bg-gray-50",
  buttonColor = "bg-accent text-white hover:bg-accent-hover",
  titleColor = "text-gray-800",
}) {
  
  // Menentukan styling tombol
  const finalButtonClass = `inline-block px-8 py-3 font-semibold rounded-2xl shadow-md transition-colors ${buttonColor}`;

  return (
    // Latar belakang diubah ke prop bgColor
    <section className={`py-20 md:py-28 ${bgColor}`}>
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Kolom Kiri: Teks */}
        <div className="space-y-6">
          <p className="text-lg text-gray-600">{preTitle}</p>
          <h2 className={`text-4xl md:text-5xl font-bold leading-tight ${titleColor}`}>
            {title}
          </h2>
          <Link
            to={buttonLink}
            className={finalButtonClass}
          >
            {buttonText}
          </Link>
        </div>

        {/* Kolom Kanan: Gambar */}
        <div className="text-center md:text-right">
          <img
            src={imageUrl}
            alt={title}
            // Gambar dibuat agar pas di kolomnya
            className="inline-block w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;