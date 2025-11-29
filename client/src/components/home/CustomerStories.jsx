import React from "react";
import { Link } from "react-router-dom";
// Impor komponen kartu yang baru
import CustomerCard from "./CustomerCard";
// Impor Aset Logo
import Indosat from "../../assets/indosat_ooredoo_logo.png";
import Unilever from "../../assets/unilever-logo.png"
import Ikea from "../../assets/Ikea_logo.png"
import Allianz from "../../assets/allianz-logo.png"
import BankKCP from "../../assets/Bank_of_China_logo.png" // Asumsi Bank Of China
import BankSCD from "../../assets/Bank-Standard-Chartered-Dianisa-logo.png" // Asumsi Standard Chartered

// Placeholder data, diperbarui agar sesuai dengan gambar
const customerData = [
  {
    id: 1,
    // Perbaikan: Gunakan Indosat (variabel yang diimpor) secara langsung
    logo: Indosat,
    title: "Indosat Ooredoo",
    text: "Sistem manajemen antrean Qmatic sudah digunakan di gerai Indosat secara nasional sejak masa Satelindo...",
  },
  {
    id: 2,
    // Perbaikan: Menggunakan BankKCP
    logo: BankKCP,
    title: "Bank Of China KCP Mangga Dua",
    text: "Bank Of China (Hong Kong) Limited KCP Mangga Dua Jakarta baru saja pindah ke lokasi yang baru...",
  },
  {
    id: 3,
    // Perbaikan: Menggunakan BankSCD
    logo: BankSCD,
    title: "Standard Chartered Bank Indonesia",
    text: "Standard Chartered Bank Indonesia (SCBI) merupakan salah satu kantor cabang Standard Chartered Bank di wil...",
  },
  {
    id: 4,
    // Perbaikan: Menggunakan Allianz
    logo: Allianz,
    title: "Allianz Indonesia",
    text: "Allianz merupakan salah satu klien setia Exaque yang sudah menggunakan sistem manajemen antrean Q-WIN sela...",
  },
  {
    id: 5,
    // Perbaikan: Menggunakan Unilever
    logo: Unilever,
    title: "Unilever Indonesia",
    text: "Unilever Indonesia memilih Qmatic Solo sebagai sistem yang dapat mengatur keseluruhan antrean mulai d...",
  },
  {
    id: 6,
    // Perbaikan: Menggunakan Ikea
    logo: Ikea,
    title: "Ikea Sentul City",
    text: "IKEA di Sentul City yang kini mudah diakses oleh warga Bogor dan sekitarnya. Berlokasi di jalan MH Thamri...",
  },
];

function CustomerStories() {
  return (
    // Latar belakang diubah dari 'bg-primary' menjadi 'bg-white' agar sesuai konvensi yang biasanya digunakan
    <section className="bg-white container mx-auto px-6 py-10 md:py-28 max-w-5xl">
      {/* Judul diperbarui */}
      <h2 className="text-5xl md:text-6xl font-bold text-gray-800 text-center mb-16">
        Kisah Pelanggan
      </h2>

      {/* Grid Kartu Pelanggan, 3-kolom di desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {customerData.map((cust) => (
          <CustomerCard
            key={cust.id}
            // Meneruskan variabel logo yang sekarang berisi path gambar
            logoUrl={cust.logo}
            title={cust.title} 
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