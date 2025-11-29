import React from "react";
// Import komponen umum yang baru
import Teaser from "../common/Teaser";
import teaser1 from "../../assets/antrean-virtual-teaser-1.svg";
import teaser2 from "../../assets/antrean-virtual-teaser-2.svg";
import teaser3 from "../../assets/antrean-virtual-teaser-3.svg";


function AntrianVirtualTeaser() {
  return (
    <section className="bg-primary pt-16 md:pt-20 pb-10">
      {/* --- Teaser 1 --- */}
      <Teaser
        preTitle="Untuk Pelanggan"
        title="Bebaskan pelanggan menunggu di mana saja dengan Mobile Ticket"
        description={
          <>
            <p className="mb-4">
              Izinkan pelanggan bergabung ke antrian virtual melalui SMS, QR
              Code, atau tautan URL. Pelanggan dapat menunggu secara remote
              sambil memantau posisi antrean mereka secara real-time melalui
              ponsel.
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>Notifikasi otomatis saat giliran mereka tiba</li>
              <li>Mengurangi persepsi waktu tunggu</li>
              <li>Pelanggan lebih nyaman dan tetap dalam kendali</li>
            </ul>
          </>
        }
        imageSrc={teaser1}
        imageAlt="teaser1 Bebaskan pelanggan menunggu di mana saja dengan Mobile Ticket"
        buttonText="Selengkapnya"
        buttonLink="/mobile-ticket"
        imageOnRight={false}
        disableButton={false}
      />
      {/* --- Teaser 2 --- */}
      <Teaser
        preTitle="Untuk Staff"
        title="Kelola alur pelanggan dan tingkatkan efisiensi operasional"
        description={
          <>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>
                Pantau dan kelola pergerakan pelanggan di cabang secara
                real-time
              </li>
              <li>
                Dapatkan insight kondisi cabang melalui dashboard live Akses
                data
              </li>
              <li>Untuk mempersiapkan layanan berikutnya dengan lebih tepat</li>
              <li>
                Menerapkan antrian yang aman dan tertib di cabang Tingkatkan
              </li>
              <li> produktivitas dan efektivitas staf</li>
            </ul>
          </>
        }
        imageSrc={teaser2}
        imageAlt="teaser2 Kelola alur pelanggan dan tingkatkan efisiensi operasional"
        imageOnRight={true}
        disableButton={true}
      />
      {/* --- Teaser 3 --- */}
      <Teaser
        preTitle="Untuk Manajemen"
        title="Dapatkan insight untuk keputusan bisnis berbasis data"
        description={
          <>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>
                Kumpulkan data untuk menciptakan pengalaman pelanggan yang lebih
                personal
              </li>
              <li>
                Kelola seluruh perjalanan pelanggan dalam satu platform
                terintegrasi
              </li>
              <li>
                Kurangi waktu tunggu di lokasi dan minimalkan kepadatan di area
                tunggu
              </li>
              <li>
                Hadirkan pengalaman layanan yang konsisten di semua channel
              </li>
            </ul>
          </>
        }
        imageSrc={teaser3}
        imageAlt="teaser3 Dapatkan insight untuk keputusan bisnis berbasis data"
        imageOnRight={false}
        disableButton={true}
      />
    </section>
  );
}

export default AntrianVirtualTeaser;
