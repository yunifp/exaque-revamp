import React from "react";
// Import komponen helper yang baru
import NumberedTeaser from "../common/NumberedTeaser";
// Import gambar untuk Teaser. Asumsi path baru sudah benar.
import teaserImage from "../../assets/pesan-otomatis-numbered-teaser.svg";

function PesanOtomatisNumberedTeaser({ imageOnRight = false }) {
  // Konten utama
  const preTitle = "";
  const title = "";
  const subtitle = "";

  // Data langkah-langkah (sesuai image_db5465.png)
  const steps = [
    {
      number: "01",
      title: "Kelola Terpusat",
      description:
        "Lihat dan Kelola Semua Janji Temu Dan Sumber Daya Untuk Cabang Dan Berbagai Layanan Anda.",
    },
    {
      number: "02",
      title: "Pastikan Kesiapan",
      description:
        "Pastikan Semua Sumber Daya Yang Diperlukan Siap Dan Tersedia Untuk Layanan Anda.",
    },
    {
      number: "03",
      title: "Penugasan Cerdas",
      description:
        "Tugaskan Sumber Daya Yang Sesuai Ke Layanan Anda Berdasarkan Keahlian Atau Ketersediaan Mereka.",
    },
    {
      number: "04",
      title: "Seimbangkan Beban Kerja",
      description:
        "Pastikan Beban Kerja Tim Anda Seimbang Dan Tugas Terbagi Secara Adil.",
    },
    {
      number: "05",
      title: "Seimbangkan Beban Kerja",
      description:
        "Pastikan Beban Kerja Tim Anda Seimbang Dan Tugas Terbagi Secara Adil.",
    },
    {
      number: "06",
      title: "Seimbangkan Beban Kerja",
      description:
        "Pastikan Beban Kerja Tim Anda Seimbang Dan Tugas Terbagi Secara Adil.",
    },
  ];

  // Tentukan urutan kolom berdasarkan prop imageOnRight
  const contentOrder = imageOnRight ? "md:order-1" : "md:order-2";
  const imageOrder = imageOnRight ? "md:order-2" : "md:order-1";

  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="container mx-auto px-6 mb-16 text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Solusi Cedas Perencanaan Sumber Daya yang efisien
        </h2>
        <p className="text-lg text-gray-600">
          Dapatkan gambaran menyeluruh dan terpusat atas ketersediaan dan
          pemanfaatan semua sumber daya mulai dari staf, ruangan, hingga
          peralatan. Platform cerdas kami membantu anda mengidentifikasi
          kesenjangan sumber daya , mengalokasikan tugas berdasarkan keahlian ,
          dan membuat keputusan berbasis data untuk memaksimalkan produktivitas
          serta meminimalkan waktu henti.
        </p>
      </div>
      {/* Container utama dengan items-center untuk rata tengah vertikal */}
      <div className="container mx-auto pt-10 px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Kolom Kiri/Kanan: Gambar (Dashboard) */}
        <div className={`order-2 ${imageOrder}`}>
          <div className="space-y-4">
            <p className="text-lg font-bold uppercase text-accent">
              {preTitle}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">{subtitle}</p>

            {/* Area Gambar Utama */}
            <img
              src={teaserImage}
              alt="Dashboard Perencanaan Sumber Daya Qmatic"
              className="w-full mx-auto rounded-xl"
            />
          </div>
        </div>

        {/* Kolom Kanan/Kiri: Langkah-Langkah (Kotak Putih Terpisah) */}

        {/* Container ini harus relative untuk menahan garis absolute */}
        <div className={`relative order-1 ${contentOrder}`}>
          <div className="container mx-auto px-6 mb-16 text-start max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Terhubung dengan pelanggan di mana pun mereka berada dalam
              perjalanan mereka.
            </h2>
          </div>
          {/* GARIS DOT PATAH-PATAH (Timeline Connector) */}
          {/* Garis diletakkan di tengah nomor item. Card memiliki padding-left 1.5rem (p-6)
             dan jarak horizontal space-x-4 (1rem). Total ~2.5rem atau ~40px dari tepi kiri container.
             Kita gunakan 42px untuk memastikan garis lurus di bawah angka. */}
          <div
            className="absolute  sm:top-50 bottom-0 z-0 border-l-2 border-dashed border-gray-300"
            style={{ left: "42px" }}
          ></div>
          {/* Konten Langkah-Langkah: z-10 agar kartu berada di atas garis */}
          <div className="space-y-15 relative z-10">
            {steps.map((step, index) => (
              <NumberedTeaser
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PesanOtomatisNumberedTeaser;
