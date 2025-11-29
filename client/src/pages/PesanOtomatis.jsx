import React from "react";

import Hero from "../components/common/Hero";
import productHeroImage from "../assets/hero-janji-temu.svg";
import PSDTeaserDown from "../components/perencanaansumberdaya/PSDTeaserDown";
import PesanOtomatisNumberedTeaser from "../components/pesanotomatis/PesanOtomatisNumberedTeaser";
import PesanOtomatisTeaser from "../components/pesanotomatis/PesanOtomatisTeaser";
import CallToAction from "../components/common/CallToAction";

function PesanOtomatis() {
  const productHeroProps = {
    welcomeText: "Qmatic Orchestra",
    title: "Pesan Otomatis",
    subtitle:
      "Layanan pengiriman SMS yang andal dan efektif untuk mendekatkan pelanggan, didukung platform dengan penyiapan mudah dan biaya operasional efisien.",
    imageUrl: productHeroImage,
    textAlign: "text-center mx-auto",
  };

  return (
    <div className="bg-primary min-h-screen">
      <Hero {...productHeroProps} />
      <PesanOtomatisNumberedTeaser />
      <PesanOtomatisTeaser />
      <CallToAction />
    </div>
  );
}

export default PesanOtomatis;
