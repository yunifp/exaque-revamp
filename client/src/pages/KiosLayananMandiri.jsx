import React from "react";

import Hero from "../components/product/Hero";
import ProductTeaser from "../components/product/ProductTeaser";
import ProductFeature from "../components/product/ProductFeature";
import ProductAccordion from "../components/product/ProductAccordion";
import CallToAction from "../components/common/CallToAction";

function KiosLayananMandiri() {
  return (
    <div className="bg-primary min-h-screen">
      {/* 1. Hero */}
      <Hero />

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

export default KiosLayananMandiri;