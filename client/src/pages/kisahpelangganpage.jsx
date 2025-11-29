import React from "react";

// Import Komponen Bagian
import Hero from "../components/common/Hero";
import StoryMainSection from "../components/informasi/storymainsection";
import CallToAction from "../components/common/CallToAction";
// Import Gambar Hero (Gunakan yang ada atau ganti dengan hero khusus pelanggan)
import heroImage from "../assets/hero-1.jpg"; 

function KisahPelangganPage() {
  // Konfigurasi Props Hero
  const heroProps = {
    title: "Kisah Pelanggan",
    subtitle: "Pelajari bagaimana kami membantu mengubah tantangan mereka menjadi pencapaian yang luar biasa.",
    imageUrl: heroImage,
    textAlign: "text-center mx-auto",
    buttonJustify: "justify-center",
    // Hilangkan tombol jika tidak perlu, atau sesuaikan linknya
    button1Text: "Permintaan Demo",
    button1Link: "/demo",
    button2Text: "Kontak Kami",
    button2Link: "/kontak",
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Hero Section */}
      <Hero {...heroProps} />

      {/* 2. Main Content (Filter, Grid, Pagination) */}
      <StoryMainSection />

      {/* 3. CTA Section (Siap Mentransformasi...) */}
      <CallToAction />
    </div>
  );
}

export default KisahPelangganPage;