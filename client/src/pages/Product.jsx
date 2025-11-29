import React from "react";

import Hero from "../components/common/Hero";
import ProductTeaser from "../components/product/ProductTeaser";
import ProductFeature from "../components/product/ProductFeature";
import ProductAccordion from "../components/product/ProductAccordion";
import CallToAction from "../components/common/CallToAction";

import productHeroImage from "../assets/hero-product.svg";

function Product() {
  const productHeroProps = {
    welcomeText: "Produk",
    title: "Qmatic Orchestra 7",
    subtitle: "Terapkan struktur pada operasional Anda dengan solusi manajemen antrian untuk perusahaan.",
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
      <ProductTeaser />

      {/* 3. Fitur Unggulan */}
      <ProductFeature />

      {/* 4. Accordion Platform Terpusat */}
      <ProductAccordion />

      {/* 5. Call To Action (CTA) */}
      <CallToAction />
    </div>
  );
}

export default Product;