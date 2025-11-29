import React from "react";

import Hero from "../components/common/Hero";
import RapatVirtualHeroImage from "../assets/hero-mobile-ticket.svg";

import RapatVirtualTeaser from "../components/rapatvirtual/RapatVirtualTeaser";
import RapatVirtualStatsFeature from "../components/rapatvirtual/RapatVirtualStatsFeatureCard";
import RapatVirtualTeaserDown from "../components/rapatvirtual/RapatVirtualTeaserDown";
import RapatVirtualAccordion from "../components/rapatvirtual/RapatVirtualAccordion";
import RapatVirtualCTA from "../components/rapatvirtual/RapatVirtualCTA";

function RapatVirtual() {
  const RapatVirtualHeroProps = {
    welcomeText: "Solusi",
    title: "Rapat Virtual",
    subtitle:
      "Layani pelanggan secara jarak jauh dan sediakan alat-alat penting untuk konferensi video di lingkungan kerja hybrid Anda.",
    imageUrl: RapatVirtualHeroImage,
    textAlign: "text-center mx-auto",
    buttonJustify: "justify-center",
    button1Text: "Permintaan Demo",
    button1Link: "/demo",
    button2Text: "Konsultasi",
    button2Link: "/konsultasi",
  };

  return (
    <div className="bg-primary min-h-screen">
      <Hero {...RapatVirtualHeroProps} />
      <RapatVirtualTeaser />
      <RapatVirtualStatsFeature />
      <RapatVirtualTeaserDown />
      <RapatVirtualAccordion />
      <RapatVirtualCTA />
    </div>
  );
}

export default RapatVirtual;
