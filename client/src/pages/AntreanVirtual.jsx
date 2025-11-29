import React from "react";

import Hero from "../components/common/Hero";
import AntreanVirtualHeroImage from "../assets/hero-antrean-virtual.svg";
import AntrianVirtualTeaser from "../components/antreanvirtual/AntreanVirtualTeaser";
import AntrianVirtualAccordion from "../components/antreanvirtual/AntreanVirtualAccordion";

function AntreanVirtual() {
  const ManajemenAntreanHeroProps = {
    welcomeText: "Solusi",
    title: "Antrean Virtual",
    subtitle:
      "Berikan fleksibilitas bagi pelanggan untuk menunggu dari mana saja dengan antrian online berbasis mobile.",
    imageUrl: AntreanVirtualHeroImage,
    textAlign: "text-center mx-auto",
    buttonJustify: "justify-center",
    button1Text: "Permintaan Demo",
    button1Link: "/demo",
    button2Text: "Konsultasi",
    button2Link: "/konsultasi",
  };

  return (
    <div className="bg-primary min-h-screen">
      <Hero {...ManajemenAntreanHeroProps} />
      <AntrianVirtualTeaser />
      <AntrianVirtualAccordion />
    </div>
  );
}

export default AntreanVirtual;
