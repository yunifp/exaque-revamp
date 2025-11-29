import React from "react";
// Import komponen PromoTeaser yang baru dari common
import PromoTeaser from "../common/PromoTeaser";

// Import aset gambar placeholder
import promoTeaser from "../../assets/pengumuman-suara-otomatis-promo.svg";

function PengumumanSuaraOtomatisPromo() {
  const promoTeaserProps = {
    preTitle: "Aplikasi",
    title: "Qmatic Display App",
    description:
      "Qmatic Display adalah aplikasi pemutar media untuk Android. Aplikasi ini memungkinkan Anda untuk menampilkan konten media terintegrasi, grafis, informasi status antrean, dan pengumuman suara kepada semua orang di lingkungan layanan Anda.",
    imageSrc: promoTeaser,
    imageAlt: "Qmatic Display App",
    buttonText: "Selengkapnya",
    buttonLink: "/experience-cloud",
    imageOnLeft: true, // Gambar di kiri
    disableButton: false,
  };

  return <PromoTeaser {...promoTeaserProps} />;
}

export default PengumumanSuaraOtomatisPromo;
