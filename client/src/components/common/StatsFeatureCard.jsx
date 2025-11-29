import React from "react";

/**
 * Komponen kartu fitur yang reusable untuk menampilkan poin utama dengan visual di atas teks.
 * Memiliki layout vertikal (gambar di atas teks).
 * * @param {object} props
 * @param {string} [props.imageUrl] - URL gambar (misalnya, ikon SVG). Jika ada, ini akan ditampilkan.
 * @param {string} props.title - Judul fitur atau statistik.
 * @param {string} props.description - Deskripsi singkat tentang fitur tersebut.
 * @param {string} [props.bgColor] - Warna latar belakang kustom (default: bg-white).
 */
function StatsFeatureCard({
  imageUrl,
  title,
  description,
  bgColor = "bg-white",
}) {
  // Tentukan konten visual (Hanya Gambar)
  const VisualContent = () => {
    if (imageUrl) {
      return (
        // Wrapper untuk ukuran ikon gambar
        <div className="w-16 h-16 mb-4 flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
      );
    }
    return null; // Tidak menampilkan apa-apa jika imageUrl kosong
  };

  return (
    <div
      className={`flex flex-col items-center text-center ${bgColor} p-6 rounded-xl shadow-lg h-full transition duration-300 hover:shadow-xl`}
    >
      <VisualContent />

      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default StatsFeatureCard;
