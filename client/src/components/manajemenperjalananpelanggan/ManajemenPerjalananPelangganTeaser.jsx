import React from "react";
// Import komponen umum yang baru
import Teaser from "../common/Teaser";

import teaser1 from "../../assets/manajemen-perjalanan-pelanggan-teaser-1.svg";
import teaser2 from "../../assets/manajemen-perjalanan-pelanggan-teaser-2.svg";
import teaser3 from "../../assets/manajemen-perjalanan-pelanggan-teaser-3.svg";
import teaser4 from "../../assets/manajemen-perjalanan-pelanggan-teaser-4.svg";

function ManajemenPerjalananPelangganTeaser() {
  return (
    <section className="bg-primary pt-16 md:pt-20 pb-10">
      {/* --- Teaser 1 --- */}
      <Teaser
        preTitle=""
        title="Satu Platform untuk Pengalaman Pelanggan Menyeluruh"
        description="Platform manajemen perjalanan pelanggan dari Exaque membantu Anda mengelola pengalaman pelanggan sebelum, selama, dan setelah layanan. Mulai dari pemesanan janji temu dan proses kedatangan, hingga penyampaian layanan dan pengumpulan umpan balik, kelola semuanya dalam satu platform."
        imageSrc={teaser1}
        imageAlt="teaser1 Bebaskan Pelanggan Exaque"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={false}
      />{" "}
      {/* --- Teaser 2 --- */}
      <Teaser
        preTitle="Untuk Pelanggan"
        title="Tingkatkan pengalaman pelanggan di setiap titik layanan"
        description={
          <>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>
                Berikan fleksibilitas bagi pelanggan untuk memilih cara
                mengakses layanan anda secara langsung di lokasi, secara
                digital, atau kombinasi keduanya.
              </li>
              <li>
                Izinkan pelanggan menunggu secara remote melalui Mobile Ticket
                sehingga mereka tidak harus antri secara fisik.
              </li>
              <li>
                Sediakan layanan tatap muka virtual melalui video meeting untuk
                pelanggan yang tidak dapat hadir langsung.
              </li>
              <li>
                Pastikan pelanggan selalu terinformasi dan mendapatkan update
                real-time sepanjang perjalanan layanan mereka melalui notifikasi
                otomatis dan tampilan informasi di lokasi.
              </li>
            </ul>
          </>
        }
        imageSrc={teaser2}
        imageAlt="teaser1 Bebaskan Pelanggan Exaque"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={false}
        disableButton={true}
      />{" "}
      {/* --- Teaser 3 --- */}
      <Teaser
        preTitle="Untuk Manajemen"
        title="Optimalkan organisasi dan dapatkan data yang tepat"
        description={
          <>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>
                Tingkatkan efisiensi layanan dengan mencocokkan kebutuhan dan
                prioritas pelanggan dengan ketersediaan serta kompetensi staf.
              </li>
              <li>
                Distribusikan beban kerja staf secara merata sepanjang hari agar
                operasional lebih stabil dan terukur.
              </li>
              <li>
                Kumpulkan data dari setiap touchpoint untuk meningkatkan
                performa layanan sekaligus membuka peluang benchmarking.
              </li>
              <li>
                Temukan area perbaikan dengan memanfaatkan data historis,
                insight, analitik, dan laporan performa yang lebih akurat.
              </li>
            </ul>
          </>
        }
        imageSrc={teaser3}
        imageAlt="teaser3 Optimalkan organisasi dan dapatkan data yang tepat"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={true}
      />{" "}
      {/* --- Teaser 4 --- */}
      <Teaser
        preTitle="Untuk Staf"
        title="Tingkatkan efisiensi operasional dan kinerja tim"
        description={
          <>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>
                Kendalikan seluruh alur pelanggan dan tingkat hunian cabang
                secara menyeluruh.
              </li>
              <li>
                Tingkatkan produktivitas staf dengan otomatisasi tugas
                administratif dan alur kerja.
              </li>
              <li>
                Dapatkan insight operasional secara real-time melalui dashboard,
                sehingga manajer cabang maupun staf dapat mengambil keputusan
                dengan cepat dan berbasis data.
              </li>
            </ul>
          </>
        }
        imageSrc={teaser4}
        imageAlt="teaser1 Bebaskan Pelanggan Exaque"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={false}
        disableButton={true}
      />
    </section>
  );
}

export default ManajemenPerjalananPelangganTeaser;
