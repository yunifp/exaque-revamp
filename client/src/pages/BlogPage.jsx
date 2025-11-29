import React from "react";
import Hero from "../components/common/Hero";
import BlogMainSection from "../components/informasi/BlogMainSection";

// Gambar background hero (bisa pakai gambar laptop/office)
import heroBg from "../assets/hero-1.jpg"; // Atau ganti dengan gambar laptop sesuai desain

function BlogPage() {
  const heroProps = {
    welcomeText: "Informasi",
    title: "Blog Exaque",
    subtitle: "Temukan wawasan, tren industri, dan praktik terbaik seputar Customer Journey Management dan optimalisasi layanan dari para ahli kami.",
    imageUrl: heroBg,
    textAlign: "text-center mx-auto",
    buttonJustify: "justify-center",
    button1Text: "Permintaan Demo",
    button1Link: "/demo",
    button2Text: "Kontak",
    button2Link: "/kontak",
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero */}
      <Hero {...heroProps} />

      {/* 2. Blog Feed & Sidebar */}
      <BlogMainSection />
    </div>
  );
}

export default BlogPage;