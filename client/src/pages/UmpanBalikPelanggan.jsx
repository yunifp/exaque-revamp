import React from "react";

// Mengubah path impor ke common/Hero
import Hero from "../components/common/Hero";

import CallToAction from "../components/common/CallToAction";

import productHeroImage from "../assets/hero-umpan-balik.svg";
import UmpanBalikPelangganTeaser from "../components/umpanbalikpelanggan/UmpanBalikPelangganTeaser";
import UmpanBalikPelangganTeaserDown from "../components/umpanbalikpelanggan/UmpanBalikPelangganTeaserDown";
import UmpanBalikPelangganAccordion from "../components/umpanbalikpelanggan/UmpanBalikPelangganAccordion";
import UmpanBalikPelangganStatsFeature from "../components/umpanbalikpelanggan/UmpanBalikPelangganStatsFeature";

function UmpanBalikPelanggan() {
  const productHeroProps = {
    welcomeText: "Qmatic Orchestra",
    title: "Umpan Balik Pelanggan",
    subtitle:
      "Alokasikan sumber daya secara efisien untuk memenuhi permintaan pelanggan tanpa membebani staf anda",
    imageUrl: productHeroImage,
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
      <Hero {...productHeroProps} />

      {/* 2. Solusi Modern */}
      <UmpanBalikPelangganTeaser />
      
      <UmpanBalikPelangganStatsFeature />
      {/* 3. Fitur Unggulan */}
      <UmpanBalikPelangganTeaserDown />

      {/* 4. Accordion Platform Terpusat */}
      <UmpanBalikPelangganAccordion />

      {/* 5. Call To Action (CTA) */}
      <CallToAction />
    </div>
  );
}

export default UmpanBalikPelanggan;
