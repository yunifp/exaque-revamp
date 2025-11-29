import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CallToAction from "../components/common/CallToAction";

// --- SEMENTARA: Kita copy data dummy ke sini agar bisa dicari ---
// Idealnya data ini ada di satu file terpisah (misal: src/data/stories.js)
const ALL_STORIES = [
  {
    id: 1,
    category: "Bank",
    title: "Standard Chartered Bank Indonesia",
    description: "Standard Chartered Bank Indonesia (SCBI) merupakan salah satu kantor cabang Standard Chartered Bank di wilayah Asia...",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Standard_Chartered.svg/1200px-Standard_Chartered.svg.png",
    // Data tambahan untuk detail page
    heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80", 
    fullContent: `
      <p>Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra.</p>
      <br/>
      <p>Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra.</p>
    `,
    challenges: "Mengelola antrean nasabah prioritas dengan waktu tunggu seminimal mungkin.",
    results: "Peningkatan kepuasan nasabah sebesar 40% dan efisiensi staf meningkat 25%."
  },
  // ... (Tambahkan dummy data lain seperlunya agar ID 1, 2, 3 bisa dibuka)
  {
    id: 2,
    category: "Bank",
    title: "Bank of China KCP Mangga Dua",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Bank_of_China_logo.svg/1200px-Bank_of_China_logo.svg.png",
    heroImage: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=1200&q=80",
    fullContent: "<p>Konten detail Bank of China...</p>",
    challenges: "Lokasi baru membutuhkan sistem yang modern.",
    results: "Operasional cabang berjalan lancar sejak hari pertama."
  }
];

const DetailKisahPelanggan = () => {
  const { id } = useParams(); // Tangkap ID dari URL
  
  // Cari data berdasarkan ID
  // ParseInt karena params ID dari URL berupa string
  const story = ALL_STORIES.find((item) => item.id === parseInt(id));

  // Scroll ke atas saat halaman dibuka
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!story) {
    return <div className="min-h-screen flex items-center justify-center">Data tidak ditemukan</div>;
  }

  return (
    <div className="bg-primary min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Breadcrumb Sederhana */}
        <div className="text-sm text-txt-subtle mb-6 uppercase tracking-wide">
          <Link to="/kisah-pelanggan" className="hover:text-accent">KISAH PELANGGAN</Link> 
          <span className="mx-2">/</span> 
          <span className="text-txt-primary font-medium">DETAIL KISAH PELANGGAN</span>
        </div>

        {/* --- GRID UTAMA (2 Kolom: Konten Kiri & Sidebar Kanan) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* KOLOM KIRI: Konten Utama (Span 2 kolom) */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold text-txt-primary mb-8 leading-tight">
              {story.title}
            </h1>

            {/* Gambar Hero Artikel */}
            <div className="rounded-2xl overflow-hidden mb-10 shadow-sm">
              <img 
                src={story.heroImage} 
                alt={story.title} 
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </div>

            {/* Isi Artikel (Render HTML dari data dummy) */}
            <div 
              className="prose prose-lg max-w-none text-txt-subtle leading-relaxed"
              dangerouslySetInnerHTML={{ __html: story.fullContent }}
            />
            {/* Teks Lorem Ipsum Default (Fallback jika fullContent kosong) */}
             <div className="mt-6 text-txt-subtle space-y-6 text-lg leading-relaxed">
                <p>Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra.</p>
                <p>Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper viverra.</p>
             </div>
          </div>

          {/* KOLOM KANAN: Sidebar Informasi (Span 1 kolom) */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.05)] border border-gray-100 sticky top-28">
              <h3 className="text-2xl font-bold text-txt-primary mb-6">Informasi</h3>
              
              <div className="space-y-6">
                {/* Detail Singkat */}
                <div>
                  <h4 className="font-bold text-txt-primary mb-2">Detail Singkat</h4>
                  <p className="text-txt-subtle text-sm leading-relaxed">
                    {story.description}
                  </p>
                </div>

                {/* Tantangan */}
                <div>
                  <h4 className="font-bold text-txt-primary mb-2">Tantangan</h4>
                  <p className="text-txt-subtle text-sm leading-relaxed">
                    {story.challenges || "Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra."}
                  </p>
                </div>

                {/* Hasil */}
                <div>
                  <h4 className="font-bold text-txt-primary mb-2">Hasil</h4>
                  <p className="text-txt-subtle text-sm leading-relaxed">
                    {story.results || "Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra."}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bagian Bawah: CTA (Sama seperti desain) */}
    </div>
  );
};

export default DetailKisahPelanggan;