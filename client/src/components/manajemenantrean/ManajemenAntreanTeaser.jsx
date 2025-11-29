import React from "react";
// Import komponen umum yang baru
import Teaser from "../common/Teaser";

import teaser1 from "../../assets/manajemen-antrean-teaser-1.svg";

function ManajemenAntreanTeaser() {
  return (
    <section className="bg-primary pt-16 md:pt-20 pb-10">
      {/* --- Teaser 1 --- */}
      <Teaser
        preTitle=""
        title="Peningkatan Operasional, Pengalaman Pelanggan Yang Lebih Baik."
        description="Solusi Manajemen Antrian Exaque membantu perusahaan mengoptimalkan operasional, mengurangi waktu tunggu, dan memberikan pengalaman pelanggan yang lancar di berbagai lokasi."
        imageSrc={teaser1}
        imageAlt="teaser1 Bebaskan Pelanggan Exaque"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={false}
      />
    </section>
  );
}

export default ManajemenAntreanTeaser;
