import React from "react";
import { Link } from "react-router-dom";
// Impor komponen kartu yang baru
import CustomerCard from "./CustomerCard";

// Placeholder data, diperbarui agar sesuai dengan gambar (termasuk 'title' baru)
// Ganti logo placeholder ini dengan path ke aset logo Anda
const customerData = [
  {
    id: 1,
    logo: "https://placehold.co/150x40/f8f8f8/fb0?text=Indosat",
    title: "Indosat Ooredoo",
    text: "Sistem manajemen antrean Qmatic sudah digunakan di gerai Indosat secara nasional sejak masa Satelindo...",
  },
  {
    id: 2,
    logo: "https://placehold.co/150x40/f0f0f0/b00?text=Bank+of+China",
    title: "Bank Of China KCP Mangga Dua",
    text: "Bank Of China (Hong Kong) Limited KCP Mangga Dua Jakarta baru saja pindah ke lokasi yang baru...",
  },
  {
    id: 3,
    logo: "https://placehold.co/150x40/f8f8f8/007?text=Standard+Chartered",
    title: "Standard Chartered Bank Indonesia",
    text: "Standard Chartered Bank Indonesia (SCBI) merupakan salah satu kantor cabang Standard Chartered Bank di wil...",
  },
  {
    id: 4,
    logo: "https://placehold.co/150x40/f8f8f8/005?text=Allianz",
    title: "Allianz Indonesia",
    text: "Allianz merupakan salah satu klien setia Exaque yang sudah menggunakan sistem manajemen antrean Q-WIN sela...",
  },
  {
    id: 5,
    logo: "https://placehold.co/150x40/f8f8f8/008?text=Unilever",
    title: "Unilever Indonesia",
    text: "Unilever Indonesia memilih Qmatic Solo sebagai sistem yang dapat mengatur keseluruhan antrean mulai d...",
  },
  {
    id: 6,
    logo: "https://placehold.co/150x40/f8f8f8/004?text=IKEA",
    title: "Ikea Sentul City",
    text: "IKEA di Sentul City yang kini mudah diakses oleh warga Bogor dan sekitarnya. Berlokasi di jalan MH Thamri...",
  },
];

function CustomerStories() {
  return (
    // Latar belakang putih
    <section className="bg-primary container mx-auto px-6 py-20 md:py-28">
      {/* Judul diperbarui */}
      <h2 className="text-5xl md:text-6xl font-bold text-gray-800 text-center mb-16">
        Kisah Pelanggan
      </h2>

      {/* Grid Kartu Pelanggan, 3-kolom di desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {customerData.map((cust) => (
          <CustomerCard
            key={cust.id}
            logoUrl={cust.logo}
            title={cust.title} // Menambahkan prop 'title'
            description={cust.text}
          />
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/kisah-pelanggan"
          className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-2xl shadow-md hover:bg-accent-hover transition-colors"
        >
          Lihat Selengkapnya
        </Link>
      </div>
    </section>
  );
}

export default CustomerStories;
