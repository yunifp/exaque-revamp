import React from "react";

// Mengubah path impor ke common/Hero
import Hero from "../components/common/Hero";
import PengumumanSuaraOtomatisTeaser from "../components/pengumumansuaraotomatis/PengumumanSuaraOtomatisTeaser";
import PengumumanSuaraOtomatisFeature from "../components/pengumumansuaraotomatis/PengumumanSuaraOtomatisFeature";
import PengumumanSuaraOtomatisTeaserDown from "../components/pengumumansuaraotomatis/PengumumanSuaraOtomatisTeaserDown";
import PengumumanSuaraOtomatisPromo from "../components/pengumumansuaraotomatis/PengumumanSuaraOtomatisPromo";
import PengumumanSuaraOtomatisFlag from "../components/pengumumansuaraotomatis/PengumumanSuaraOtomatisFlag";
import PengumumanSuaraOtomatisCTA from "../components/pengumumansuaraotomatis/PengumumanSuaraOtomatisCTA";

import PengumumanSuaraOtomatisHeroImage from "../assets/hero-pengumuman-suara-otomatis.svg";

function PengumumanSuaraOtomatis() {
  const PengumumanSuaraOtomatisHeroProps = {
    welcomeText: "Qmatic Orchestra",
    // Perbaikan: Judul yang benar adalah Mobile Ticket
    title: "Pengumuman Suara Otomatis",
    subtitle:
      "Berkomunikasilah dengan jelas kepada semua orang di area tunggu Anda.",
    imageUrl: PengumumanSuaraOtomatisHeroImage,
    textAlign: "text-center mx-auto",
    buttonJustify: "justify-center",
    button1Text: "Permintaan Demo",
    button1Link: "/demo",
    button2Text: "Konsultasi",
    button2Link: "/konsultasi",
  };

  return (
    <div className="bg-primary min-h-screen">
      {/* 1. Hero */}
      <Hero {...PengumumanSuaraOtomatisHeroProps} />

      {/* 2. Solusi Modern */}
      <PengumumanSuaraOtomatisTeaser />

      {/* 3. Fitur Unggulan (Menggunakan fitur spesifik Mobile Ticket) */}
      <PengumumanSuaraOtomatisFeature />

      <PengumumanSuaraOtomatisTeaserDown />
      {/* 4. Dukungan Bahasa/Flag */}
      <PengumumanSuaraOtomatisFlag />

      {/* 5. Promo Teaser */}
      <PengumumanSuaraOtomatisPromo />
      {/* 6. Call To Action (Ditambahkan kembali) */}
      <PengumumanSuaraOtomatisCTA />
    </div>
  );
}

export default PengumumanSuaraOtomatis;
