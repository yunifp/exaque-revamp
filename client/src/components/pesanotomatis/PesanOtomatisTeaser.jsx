import React from "react";
// Import komponen umum yang baru
import Teaser from "../common/Teaser";
import teaser1 from "../../assets/pengumuman-suara-otomatis-Teaser-1.svg";

function PesanOtomatisTeaser() {
  return (
    <section className="bg-primary pt-16 md:pt-20 pb-10">
      {/* --- Teaser 1 --- */}
      <Teaser
        preTitle=""
        title="Ciptakan pengalaman menunggu yang lebih baik"
        description={
          <>
            <p className="mb-4">
              Layanan Pesan Qmatic memudahkan komunikasi SMS global Anda. Tak
              perlu lagi mengurus gateway lokal atau banyak mitra di berbagai
              negara; Qmatic menangani registrasi jaringan dan memastikan
              kepatuhan regulasi. Platform kami yang tangguh menjamin tingkat
              pengiriman optimal dan terintegrasi mulus dengan solusi janji temu
              serta antrean virtual Anda, lengkap dengan laporan penggunaan
              untuk menyempurnakan pengalaman pelanggan.
            </p>
          </>
        }
        imageSrc={teaser1}
        imageAlt="teaser1 Ciptakan pengalaman menunggu yang lebih baik"
        imageOnRight={true}
        disableButton={true}
      />
    </section>
  );
}

export default PesanOtomatisTeaser;
