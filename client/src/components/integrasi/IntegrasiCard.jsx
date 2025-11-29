import React from "react";
import Card from "../common/Card";
import dummyImage from "../../assets/dummy.png"; // Placeholder untuk semua logo

// --- Data Integrasi (Disesuaikan dengan image_267afd.png) ---
const integrationData = [
  {
    title: "Microsoft Teams",
    description: "Izinkan pelanggan untuk memesan pertemuan virtual melalui Teams.",
    imageUrl: dummyImage, // Placeholder untuk logo Teams
  },
  {
    title: "Salesforce",
    description: "Kelola antrean dan atur aliran pelanggan langsung di Salesforce.",
    imageUrl: dummyImage, // Placeholder untuk logo Salesforce
  },
  {
    title: "Zoom",
    description: "Memungkinkan pelanggan untuk menjadwalkan pertemuan virtual dengan Zoom.",
    imageUrl: dummyImage, // Placeholder untuk logo Zoom
  },
  {
    title: "Whatsapp",
    description: "Izinkan pelanggan untuk masuk ke antrean virtual melalui WhatsApp.",
    imageUrl: dummyImage, // Placeholder untuk logo WhatsApp
  },
  {
    title: "Power BI",
    description: "Lihat data Anda bersama data dari sistem dan sumber lain untuk mengambil keputusan bisnis yang lebih cerdas.",
    imageUrl: dummyImage, // Placeholder untuk logo Power BI
  },
  {
    title: "Siebel Oracle",
    description: "Identifikasi dan prioritaskan permintaan pelanggan sesuai dengan tingkat prioritasnya.",
    imageUrl: dummyImage, // Placeholder untuk logo Oracle Siebel
  },
];

function IntegrasiCard() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {integrationData.map((item, index) => (
            <Card
              key={index}
              // Card.jsx yang sudah di-adjust seharusnya akan menampilkan imageUrl di atas teks.
              imageUrl={item.imageUrl} 
              title={item.title}
              description={item.description}
              // Tidak ada link 'Selengkapnya' di gambar, jadi kita tidak meneruskan prop link.
            />
          ))}
          {/* Div kosong untuk menjaga tata letak grid terakhir tetap rapi jika jumlah item bukan kelipatan 3 */}
          {integrationData.length % 3 !== 0 && (
            <div className="hidden lg:block"></div>
          )}
        </div>
      </div>
    </section>
  );
}

export default IntegrasiCard;