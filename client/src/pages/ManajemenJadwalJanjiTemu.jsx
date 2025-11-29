import React from "react";

import Hero from "../components/common/Hero";
import ManajemenJadwalJanjiTemuHeroImage from "../assets/hero-manajemen-jadwal-janji-temu.svg";
import ManajemenJadwalJanjiTemuTeaser from "../components/manajemenjadwaljanjitemu/ManajemenJadwalJanjiTemuTeaser";
import ManajemenJadwalJanjiTemuFeature from "../components/manajemenjadwaljanjitemu/ManajemenJadwalJanjiTemuFeature";
import ManajemenJadwalJanjiTemuAccordion from "../components/manajemenjadwaljanjitemu/ManajemenJadwalJanjiTemuAccordion";

function ManajemenJadwalJanjiTemu() {
  const ManajemenJadwalJanjiTemuHeroProps = {
    welcomeText: "Solusi",
    title: "Manajemen Jadwal Janji Temu",
    subtitle:
      "Terapkan struktur pada operasional Anda dengan solusi manajemen antrian untuk perusahaan.",
    imageUrl: ManajemenJadwalJanjiTemuHeroImage,
    textAlign: "text-center mx-auto",
    buttonJustify: "justify-center",
    button1Text: "Permintaan Demo",
    button1Link: "/demo",
    button2Text: "Konsultasi",
    button2Link: "/konsultasi",
  };

  return (
    <div className="bg-primary min-h-screen">
      <Hero {...ManajemenJadwalJanjiTemuHeroProps} />
      <ManajemenJadwalJanjiTemuTeaser />
      <ManajemenJadwalJanjiTemuFeature />
      <ManajemenJadwalJanjiTemuAccordion />
    </div>
  );
}

export default ManajemenJadwalJanjiTemu;
