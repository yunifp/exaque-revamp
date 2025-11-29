import React from "react";
// Import komponen umum yang baru
import Teaser from "../common/Teaser";

import teaser1 from "../../assets/manajemen-jadwal-janji-temu-teaser-1.svg";
import teaser2 from "../../assets/manajemen-jadwal-janji-temu-teaser-2.svg";
import teaser3 from "../../assets/manajemen-jadwal-janji-temu-teaser-3.svg";
import teaser4 from "../../assets/manajemen-jadwal-janji-temu-teaser-4.svg";
import teaser5 from "../../assets/manajemen-jadwal-janji-temu-teaser-5.svg";

function ManajemenJadwalJanjiTemuFeatureTeaser() {
  return (
    <section className="bg-primary pt-16 md:pt-20 pb-10">
      {/* --- Teaser 1 --- */}
      <Teaser
        preTitle=""
        title="Jadwalkan Janji Temu dengan Mudah dan Fleksibel"
        description="Tingkatkan kenyamanan pelanggan dengan sistem booking online yang memudahkan mereka menjadwalkan janji temu kapan saja. Melalui platform penjadwalan layanan digital, pelanggan dapat memesan, mengubah, atau membatalkan janji temu dengan mudah, sementara sistem otomatis mengirim pengingat jadwal untuk pengalaman layanan yang lebih efisien dan profesional."
        imageSrc={teaser1}
        imageAlt="teaser1 Bebaskan Pelanggan Exaque"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={false}
      />{" "}
      {/* --- Teaser 2 --- */}
      <Teaser
        preTitle=""
        title="Kelola Kedatangan dan Check-in dengan Mudah"
        description="Tingkatkan efisiensi layanan dengan sistem manajemen kedatangan dan check-in online yang terintegrasi. Pelanggan dapat melakukan check-in melalui tautan SMS atau email dan menerima tiket digital untuk menunggu secara nyaman tanpa antre. Sistem ini akan memberi notifikasi otomatis kepada staf, membantu mengurangi kerumunan, serta memastikan proses check-in berjalan efisien, aman, dan profesional."
        imageSrc={teaser2}
        imageAlt="teaser1 Bebaskan Pelanggan Exaque"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={false}
        disableButton={true}
      />{" "}
      {/* --- Teaser 3 --- */}
      <Teaser
        preTitle=""
        title="Dapatkan Wawasan Mendalam tentang Operasional Bisnis Anda"
        description="Manfaatkan kekuatan data dan analitik dengan Business Intelligence untuk memahami perilaku pelanggan serta kinerja cabang bisnis Anda. Dapatkan informasi akurat mengenai data janji temu, waktu tunggu, performa staf, dan umpan balik pelanggan secara real-time. Dengan analisis tren layanan dan perkiraan permintaan, Anda dapat meningkatkan efisiensi operasional, mengoptimalkan keputusan bisnis, dan memberikan pengalaman pelanggan yang lebih baik"
        imageSrc={teaser3}
        imageAlt="teaser1 Bebaskan Pelanggan Exaque"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={true}
      />{" "}
      {/* --- Teaser 4 --- */}
      <Teaser
        preTitle=""
        title="Layanan Virtual Kapan Saja dan di Mana Saja"
        description="Berikan pelanggan kemudahan untuk mengakses layanan secara online melalui pertemuan virtual yang efisien dan aman. Pelanggan dapat menjadwalkan janji temu virtual, berinteraksi melalui video call atau chat, serta terhubung langsung dengan tim Anda menggunakan platform meeting digital yang sudah familiar. Solusi ini mendukung layanan hybrid yang cepat, fleksibel, dan sesuai kebutuhan pelanggan masa kini."
        imageSrc={teaser4}
        imageAlt="teaser1 Bebaskan Pelanggan Exaque"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={false}
        disableButton={true}
      />{" "}
      {/* --- Teaser 5 --- */}
      <Teaser
        preTitle=""
        title="Kelola Semua Layanan dalam Satu Sistem Terpadu"
        description="Sederhanakan operasional anda dengan Sistem Manajemen Jadwal Janji Temu terpusat yang mengatur alur pelanggan, check-in, antrean, dan pelayanan dalam satu platform. Atur jadwal kunjungan terencana maupun mendadak, alihkan pelanggan dari layanan online ke kunjungan langsung, serta sesuaikan staf dengan kebutuhan mereka. Dengan fitur perencanaan sumber daya berbasis data dan tren permintaan, sistem ini membantu mengoptimalkan efisiensi layanan dan mengurangi kerumunan di area tunggu."
        imageSrc={teaser5}
        imageAlt="teaser1 Bebaskan Pelanggan Exaque"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={true}
      />
    </section>
  );
}

export default ManajemenJadwalJanjiTemuFeatureTeaser;
