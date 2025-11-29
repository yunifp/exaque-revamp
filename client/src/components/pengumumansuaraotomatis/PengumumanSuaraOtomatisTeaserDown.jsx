import React from "react";
// Import komponen umum yang baru
import Teaser from "../common/Teaser";
import teaser1 from "../../assets/pengumuman-suara-otomatis-Teaser-Down-1.svg";
import teaser2 from "../../assets/pengumuman-suara-otomatis-Teaser-Down-2.svg";

function PengumumanSuaraOtomatisTeaserDown() {
  return (
    <section className="bg-primary pt-16 md:pt-20 pb-10">

      {/* --- Teaser 1 --- */}
      <Teaser
        preTitle="QMATIC TEXT-TO-SPEECH"
        title="Ubah teks jadi suara kustom berkualitas tinggi berbasis AI."
        description="Buat pengumuman suara dalam 50+ bahasa menggunakan Qmatic Text-To-Speech. Pilih dari beragam suara pria dan wanita. Sistem ini terintegrasi dengan Qmatic Display, memungkinkan Anda menyiarkan pengumuman dalam bahasa lokal dan bahasa kedua langsung dari layar di area tunggu."
        imageSrc={teaser1}
        imageAlt="teaser1 Ubah teks jadi suara kustom berkualitas tinggi berbasis AI."
        imageOnRight={true}
        disableButton={true}
      />
      {/* --- Teaser 2 --- */}
      <Teaser
        preTitle="QMATIC TEXT-TO-SPEECH"
        title="Bagaimana Cara Kerja Qmatic Text-To-Speech?"
        description="Menggunakan fitur teks-ke-suara sangat mudah. Cukup tulis teks yang Anda inginkan, pilih bahasa dan suara yang Anda sukai, lalu generate pengumuman Anda."
        imageSrc={teaser2}
        imageAlt="teaser2 Bagaimana Cara Kerja Qmatic Text-To-Speech?"
        imageOnRight={false}
        disableButton={true}
      />
    </section>
  );
}

export default PengumumanSuaraOtomatisTeaserDown;
