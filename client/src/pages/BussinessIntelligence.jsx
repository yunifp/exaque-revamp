import React from "react";

// Mengubah path impor ke common/Hero
import Hero from "../components/common/Hero";
import BussinessIntelligenceTeaser from "../components/bussinessintelligence/BussinessIntelligenceTeaser";
import BussinessIntelligenceFeature from "../components/bussinessintelligence/BussinessIntelligenceFeature";
import BussinessIntelligenceCTA from "../components/bussinessintelligence/BussinessIntelligenceCTA";

import BussinessIntelligenceHeroImage from "../assets/hero-bussiness-intelligence.svg";

function BussinessIntelligence() {
  const BussinessIntelligenceHeroProps = {
    welcomeText: "Qmatic Orchestra",
    // Perbaikan: Judul yang benar adalah Mobile Ticket
    title: "Intelegensi Bisnis  ", 
    subtitle: "Buat keputusan yang lebih baik berdasarkan data. Tanggapi data real-time, tinjau dengan laporan detail, dan temukan potensi dan nilai tersembunyi menggunakan alat favorit Anda.",
    imageUrl: BussinessIntelligenceHeroImage,
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
      <Hero {...BussinessIntelligenceHeroProps} />

      {/* 2. Solusi Modern */}
      <BussinessIntelligenceTeaser />

      {/* 3. Fitur Unggulan (Menggunakan fitur spesifik Mobile Ticket) */}
      <BussinessIntelligenceFeature />
      
      {/* 5. Call To Action (Ditambahkan kembali) */}
      <BussinessIntelligenceCTA />
    </div>
  );
}

export default BussinessIntelligence;