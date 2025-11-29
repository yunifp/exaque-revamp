import React from "react";
// Import komponen umum yang baru
import Teaser from "../common/Teaser";

import teaser1 from "../../assets/mobile-ticket-teaser-1.svg";
import teaser2 from "../../assets/mobile-ticket-teaser-2.svg";
import teaser3 from "../../assets/mobile-ticket-teaser-3.svg";
import teaser4 from "../../assets/mobile-ticket-teaser-4.svg";
function PSDTeaser() {
  return (
    <section className="bg-primary pt-16 md:pt-20 pb-10">
      {/* --- Teaser 1 --- */}
      <Teaser
        preTitle=""
        title="Bebaskan Pelanggan Anda dari Ruang Tunggu"
        description="Sistem Antrean Virtual kami mengubah waktu tunggu yang membosankan menjadi waktu bebas. Biarkan pelanggan Anda menunggu di kafe, di taman, atau di mana pun mereka suka."
        imageSrc={teaser1}
        imageAlt="teaser1 Bebaskan Pelanggan Exaque"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={true}
      />
      {/* --- Teaser 2 --- */}
      <Teaser
        preTitle=""
        title="Pangkas Waktu Tunggu, Hapus Kerumunan"
        description="Sistem kami secara drastis mengurangi waktu tunggu dan menghilangkan antrean fisik di dalam area layanan Anda, menciptakan lingkungan yang lebih santai dan produktif."
        imageSrc={teaser2}
        imageAlt="teaser2 Pangkas Waktu Tunggu Exaque"
        imageOnRight={false}
        disableButton={true}
      />
    </section>
  );
}

export default PSDTeaser;
