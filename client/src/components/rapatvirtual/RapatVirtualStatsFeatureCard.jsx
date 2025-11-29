import React from "react";
import StatsFeatureCard from "../common/StatsFeatureCard";
// Import placeholder icon jika ingin menggunakan gambar
import defaultImage from "../../assets/icons/ic_checklist.svg";

function RapatVirtualStatsFeature() {
  return (
    <div className="w-full bg-subtle-light py-12">
      <div className="container mx-auto px-6">
        <div className="container mx-auto px-6 mb-16 text-center max-w-7xl">
          <h3 className="text-sm font-semibold uppercase text-accent">
            KEUNGGULAN RAPAT VIRTUAL
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Mengapa Rapat Virtual
          </h2>
        </div>
        {/* grid 3*/}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <StatsFeatureCard
            imageUrl={defaultImage}
            title="Tawarkan Fleksibilitas Layanan Hybrid"
            description="Berikan pelanggan Anda layanan yang lebih mudah diakses dan fleksibilitas yang lebih baik dengan menggabungkan opsi layanan tatap muka (in-person) dan online."
          />
          <StatsFeatureCard
            imageUrl={defaultImage}
            title="Platform Terpadu untuk Pengalaman Omnichannel"
            description="Kelola rapat virtual, janji temu, dan antrean dalam satu platform tunggal, serta berikan pengalaman omnichannel yang mulus untuk pelanggan Anda."
          />
          <StatsFeatureCard
            imageUrl={defaultImage}
            title="Ciptakan Tenaga Kerja Hybrid yang Gesit"
            description="Bangun tim kerja hybrid yang gesit (agile) agar dapat melayani permintaan pelanggan di berbagai saluran secara efisien."
          />
        </div>
      </div>
    </div>
  );
}

export default RapatVirtualStatsFeature;
