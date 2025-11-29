import React from "react";
// Import komponen umum yang baru
import Teaser from "../common/Teaser";
import teaser1 from "../../assets/pengumuman-suara-otomatis-Teaser-1.svg";
import teaser2 from "../../assets/pengumuman-suara-otomatis-Teaser-2.svg";
import teaser3 from "../../assets/pengumuman-suara-otomatis-Teaser-3.svg";
import teaser4 from "../../assets/pengumuman-suara-otomatis-Teaser-4.svg";
import teaser5 from "../../assets/pengumuman-suara-otomatis-Teaser-5.svg";

function PengumumanSuaraOtomatisTeaser() {
  return (
    <section className="bg-primary pt-16 md:pt-20 pb-10">
      <div className="container mx-auto px-6 mb-16 text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Dapatkan nilai maksimal dari data perjalanan pelanggan Anda
        </h2>
        <p className="text-lg text-gray-600">
          Dapatkan kendali penuh atas kinerja layanan Anda melalui dashboard
          real-time Exaque, yang menyajikan data performa terkini sekaligus
          historis. Untuk analisis yang lebih mendalam, integrasikan data ini
          secara mulus dengan alat BI yang sudah Anda gunakan melalui Data
          Connect API. Ini memungkinkan Anda menggali wawasan strategis untuk
          mengambil keputusan yang tepat—baik untuk mengelola biaya,
          meningkatkan penjualan, mengoptimalkan kinerja staf, maupun
          menyempurnakan pengalaman pelanggan Anda.
        </p>
      </div>

      {/* --- Teaser 1 --- */}
      <Teaser
        preTitle=""
        title="Ciptakan pengalaman menunggu yang lebih baik"
        description={
          <>
            <p className="mb-4">
              Pengalaman menunggu seringkali dihadapkan pada tantangan seperti
              area yang ramai, kebisingan latar belakang, dan gangguan lain yang
              dapat mengganggu perhatian pelanggan.
            </p>
            <br />
            <p className="mb-4">
              Dengan pengumuman, Anda dapat memberikan komunikasi yang jelas dan
              memenuhi kebutuhan pelanggan yang berbeda secara tepat waktu dan
              menyeluruh saat giliran mereka tiba memberikan mereka rasa kontrol
              yang lebih besar dan ketenangan pikiran selama menunggu.
            </p>
          </>
        }
        imageSrc={teaser1}
        imageAlt="teaser1 Ciptakan pengalaman menunggu yang lebih baik"
        imageOnRight={false}
        disableButton={true}
      />
      {/* --- Teaser 2 --- */}
      <Teaser
        preTitle=""
        title="Perbaiki inklusi dan aksesibilitas di area tunggu Anda."
        description={
          <>
            <p className="mb-4">
              Memberikan pengumuman sangat penting untuk meningkatkan pengalaman
              menunggu dan mengoptimalkan aliran pelanggan Anda.
            </p>
            <br />
            <p className="mb-4">
              Dengan memasukkan pengumuman di area tunggu Anda, Anda tidak hanya
              akan meningkatkan efisiensi layanan tetapi juga menciptakan
              lingkungan yang lebih inklusif bagi individu dengan gangguan
              pendengaran dan penglihatan.
            </p>
          </>
        }
        imageSrc={teaser2}
        imageAlt="teaser2 Perbaiki inklusi dan aksesibilitas di area tunggu Anda."
        imageOnRight={true}
        disableButton={true}
      />
      {/* --- Teaser 3 --- */}
      <Teaser
        preTitle=""
        title="Tidak ada lagi Giliran yang terlewatkan"
        description="Pastikan pelanggan Anda tidak ketinggalan giliran dan dapat dengan mudah menavigasi fasilitas Anda dengan menggabungkan pengumuman dengan informasi antrean yang tersedia di layar-layar di seluruh area tunggu Anda. Hal ini juga akan memungkinkan staf Anda untuk lebih fokus dalam memberikan layanan yang terbaik."
        imageSrc={teaser3}
        imageAlt="teaser3 Tidak ada lagi Giliran yang terlewatkan"
        imageOnRight={false}
        disableButton={true}
      />
      {/* --- Teaser 4 --- */}
      <Teaser
        preTitle=""
        title="Sampaikan berbagai pengumuman"
        description={
          <>
            <p className="mb-4">
              Pengumuman kami dapat digunakan untuk berbagai tujuan, termasuk:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>Pengumuman tiket</li>
              <li>Panduan arah</li>
              <li>Promosi</li>
              <li>Pengumuman lain</li>
            </ul>
            <br />
            <p className="mb-4">
              Anda juga dapat memilih suara tertentu yang akan diputar saat
              pelanggan dipanggil untuk layanan.
            </p>
          </>
        }
        imageSrc={teaser4}
        imageAlt="teaser4 Sampaikan berbagai pengumuman"
        imageOnRight={true}
        disableButton={true}
      />
      {/* --- Teaser 5 --- */}
      <Teaser
        preTitle=""
        title="Pilihan Penyampaian yang beragam"
        description={
          <>
            <p className="mb-4">
              Pengumuman kami mendukung opsi pengiriman yang fleksibel, pilih
              antara berkas suara atau buat sendiri menggunakan teknologi
              Text-to-Speech berbasis AI:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>
                Berkas suara: Kirim pengumuman yang telah direkam sebelumnya
                menggunakan aplikasi Qmatic Display atau pemutar media.
              </li>
              <li>
                AI Text-To-Speech: Buat dan kirim pengumuman dalam berbagai
                bahasa menggunakan mesin Text-to-Speech bawaan Qmatic yang
                tersedia di aplikasi Qmatic Display.
              </li>
            </ul>
          </>
        }
        imageSrc={teaser5}
        imageAlt="teaser5 Pilihan Penyampaian yang beragam"
        imageOnRight={false}
        disableButton={true}
      />
    </section>
  );
}

export default PengumumanSuaraOtomatisTeaser;
