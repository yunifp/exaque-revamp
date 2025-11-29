import React from "react";

import Hero from "../components/common/Hero";
import JanjiTeaser from "../components/janjitemu/JanjiTeaser";
import JanjiFeature from "../components/janjitemu/JanjiFeature";
import JanjiPromo from "../components/janjitemu/JanjiPromo"; 

import productHeroImage from "../assets/hero-janji-temu.svg";

function JanjiTemuDigital() {
  const productHeroProps = {
    welcomeText: "Qmatic Orchestra",
    title: "Janji Temu",
    subtitle: "Optimalkan perencanaan & penjadwalan janji temu anda",
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
      
      {/* 2. Solusi Cerdas untuk Manajemen Janji Temu */}
      <JanjiTeaser />
      
      {/* 3. Fitur Unggulan Janji Temu */}
      <JanjiFeature />

      {/* 4. Promo Teaser Qmatic Experience Cloud (Menggunakan JanjiPromo) */}
      <JanjiPromo />
    </div>
  );
}

export default JanjiTemuDigital;