import React from "react";

import Hero from "../components/home/Hero";
import AboutTeaser from "../components/home/AboutTeaser";
import IntegratedSolutions from "../components/home/IntegratedSolutions";
import IntegrationSection from "../components/home/IntegrationSection";
import NewsSection from "../components/home/NewsSection";
import CustomerStories from "../components/home/CustomerStories";
import HomeCTA from "../components/home/HomeCTA";

function Home() {
  return (
    <div className="bg-primary min-h-screen">
      {/* 1. Hero (Sudah ada) */}
      <Hero />

      {/* 2. Jelajahi Tentang Kami */}
      <AboutTeaser />

      {/* 3. Solusi Terpadu */}
      <IntegratedSolutions />

      {/* 4. Integrasi Exaque */}
      <IntegrationSection />

      {/* 5. Kisah Pelanggan */}
      <CustomerStories />

      {/* 6. Konten & Berita */}
      <NewsSection />

      {/* 7. Call To Action (CTA) */}
      <HomeCTA />
    </div>
  );
}

export default Home;
