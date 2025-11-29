import React from "react";
// Import komponen umum yang baru
import Teaser from "../common/Teaser";

import teaser1 from "../../assets/janji-temu-teaser-1.svg";
import teaser2 from "../../assets/janji-temu-teaser-2.svg";
import teaser3 from "../../assets/janji-temu-teaser-3.svg";
import teaser4 from "../../assets/janji-temu-teaser-4.svg";
import teaser5 from "../../assets/janji-temu-teaser-5.svg";
import teaser6 from "../../assets/janji-temu-teaser-6.svg";
import teaser7 from "../../assets/janji-temu-teaser-7.svg";
import teaser8 from "../../assets/janji-temu-teaser-8.svg";
function JanjiTeaser() {
  return (
    <section className="bg-primary pt-16 md:pt-20 pb-10">
      <div className="container mx-auto px-6 mb-16 text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Solusi Cerdas Untuk Manajemen Janji Temu
        </h2>
        <p className="text-lg text-gray-600">
          Ubah proses booking janji temu Anda menjadi lebih terorganisir, cepat,
          dan efisien. Beralih dari sistem walk-in menjadi penjadwalan terkelola
          agar pelanggan dapat memesan kapan pun dan di mana pun mereka butuh.
        </p>
      </div>
      {/* --- Teaser 1: Pemesanan Online (Gambar di KANAN) --- */}
      <Teaser
        preTitle="Pemesanan Online"
        title="Hadirkan Pengalaman Booking Intuitif Bagi Pelanggan"
        description="Mudahkan pelanggan menjadwalkan janji temu untuk layanan Anda. Anda dapat dengan mudah membagikan halaman pemesanan melalui tautan langsung atau menyematkannya pada situs web Anda. Kustomisasi halaman dengan logo dan warna merek Anda. Halaman pemesanan online kami tersedia dalam enam bahasa (Inggris, Spanyol, Prancis, Jerman, Belanda, dan Italia) serta mendukung berbagai zona waktu."
        imageSrc={teaser1} // Menggunakan mockup-1.png
        imageAlt="teaser2 Online Exaque"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={false}
      />
      {/* --- Teaser 2: Rapat Virtual (Gambar di KIRI) --- */}
      <Teaser
        preTitle="Pemesanan Staf"
        title="Rapat Yang Lebih Personal Dan Efisien"
        description="Ciptakan pengalaman yang lebih bernilai dan personal. Izinkan pelanggan Anda memesan janji temu langsung dengan anggota staf spesifik yang mereka inginkan."
        imageSrc={teaser2}
        imageAlt="Rapat Staf Virtual Exaque"
        imageOnRight={false}
        disableButton={true}
      />
      {/* --- Teaser 3: Pemesanan Online (Gambar di KANAN) --- */}
      <Teaser
        preTitle="Pertemuan Virtual"
        title="Selenggarakan Janji Temu Virtual dengan Mudah"
        description="Tawarkan rapat virtual dan layani pelanggan anda dari jarak jauh. Saat pelanggan memesan rapat online, sistem akan secara otomatis membuat tautan rapat yang dapat diakses dari mana saja melalui Microsoft Teams atau Zoom."
        imageSrc={teaser3} // Menggunakan mockup-1.png
        imageAlt="teaser2 Online Exaque"
        buttonText="Selengkapnya"
        buttonLink="/demo"
        imageOnRight={true}
      />
      {/* --- Teaser 4: PEMESANAN MULTI-LAYANAN --- */}
      <Teaser
        preTitle="Pemesanan Multi-Layanan"
        title="Pesan Beberapa Layanan dalam Satu Janji Temu"
        description="Hilangkan waktu tunggu dan potensi kesalahan pemesanan. Izinkan pelanggan Anda menambahkan beberapa layanan sekaligus dalam satu sesi janji temu. Anda juga dapat menambahkan buffer time (waktu jeda) secara otomatis di antara janji temu untuk mengantisipasi keterlambatan atau perpindahan lokasi."
        imageSrc={teaser4}
        imageAlt="Rapat Staf Virtual Exaque"
        imageOnRight={false}
        disableButton={true}
      />{" "}
      {/* --- Teaser 5: PENJADWALAN SUMBER DAYA --- */}
      <Teaser
        preTitle="Penjadwalan Sumber Daya"
        title="Manajemen Penjadwalan Berbagai Sumber Daya"
        description="Kelola, jadwalkan, dan hubungkan berbagai sumber daya seperti staf, ruangan, dan peralatan untuk satu janji temu. Manajemen penjadwalan ini memastikan bahwa setiap kebutuhan spesifik janji temu dapat dipenuhi oleh anggota tim dan sumber daya yang paling tepat."
        imageSrc={teaser5} // Menggunakan mockup-1.png
        imageAlt="teaser2 Online Exaque"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
      />
      {/* --- Teaser 6: PERENCANAAN SUMBER DAYA --- */}
      <Teaser
        preTitle="Perencanaan Sumber Daya"
        title="Dapatkan Gambaran Penuh Ketersediaan Sumber Daya Anda"
        description="Lihat gambaran lengkap semua layanan dan sumber daya anda. Pantau ketersediaan sumber daya secara harian, mingguan, atau bulanan, dan ubah ketersediaan layanan atau sumber daya kapan pun anda membutuhkannya."
        imageSrc={teaser6}
        imageAlt="teaser6 Perencanaan Sumber Daya Exaque"
        buttonText="Selengkapnya"
        buttonLink="/demo"
        imageOnRight={false}
      />{" "}
      {/* --- Teaser 7: ANALISA DAN LAPORAN --- */}
      <Teaser
        preTitle="Analisa dan Laporan"
        title="Pantau Performa Cabang Anda"
        description="Kumpulkan data janji temu dan data perjalanan pelanggan. Pelajari cara mengoptimalkan alur pelanggan, meningkatkan kepuasan mereka, dan menyesuaikan tingkat kepegawaian agar selalu sesuai dengan permintaan."
        imageSrc={teaser7}
        imageAlt="teaser7 Analisa dan Laporan Exaque"
        buttonText="Selengkapnya"
        buttonLink="/demo"
        imageOnRight={true}
      />
      {/* --- Teaser 8: INTEGRASI KALENDER --- */}
      <Teaser
        preTitle="Integrasi Kalender"
        title="Sinkronisasi Penuh dengan Kalender Outlook Anda"
        description="Hubungkan kalender Outlook anda dengan Qmatic Experience Cloud. Jaga agar semua janji temu dan acara tetap up-to-date di satu lokasi terpusat dan cegah pemesanan ganda."
        imageSrc={teaser8}
        imageAlt="Teaser8 Integrasi Kalender Exaque"
        buttonText="Selengkapnya"
        buttonLink="/demo"
        imageOnRight={false}
        disableButton={false}
      />
    </section>
  );
}

export default JanjiTeaser;
