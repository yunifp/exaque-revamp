import React from "react";
import { Link } from "react-router-dom";
// Hapus: import aboutImage from "../../assets/mockup-1.png";

function AboutTeaser() {
  // Konten didefinisikan di dalam komponen
  const title = "Jelajahi Tentang Kami";
  const subtitle =
    "Exaque menawarkan sebuah platform manajemen perjalanan pelanggan yang dipercaya oleh merek-merek terkemuka untuk meningkatkan operasional, meningkatkan keuntungan, dan memperbaiki pengalaman pelanggan dan karyawan.";
  const buttonText = "Lihat Selengkapnya";
  const buttonLink = "/tentang-kami";

  return (
    // Bagian utama, padding container
    <section className="container mx-auto px-6 py-10 md:py-28">
      {/* Bagian Atas: Grid 2 Kolom (TIDAK BERUBAH) */}
      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
        {/* Kolom Kiri: Judul */}
        <div className="text-left">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            Jelajahi <br />
            Tentang Kami
          </h2>
        </div>

        {/* Kolom Kanan: Teks Subtitle dan Tombol */}
        <div className="text-left pt-2">
          <p className="text-lg text-gray-600 mb-8">{subtitle}</p>
          <Link
            to={buttonLink}
            className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-2xl shadow-md hover:bg-accent-hover transition-colors"
          >
            {buttonText}
          </Link>
        </div>
      </div>

      {/* Bagian Bawah: EMBED VIDEO YOUTUBE */}
      <div className="mt-16">
        {/* Menggunakan wrapper untuk membuat iframe responsif (aspect ratio 16:9) */}
        <div
          className="relative w-full overflow-hidden rounded-md shadow-lg"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/DuLE7SUtYls?si=ytSijaiM1B4Q50Id"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default AboutTeaser;
