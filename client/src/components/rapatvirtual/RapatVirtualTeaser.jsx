import React from "react";
// Import komponen umum yang baru
import Teaser from "../common/Teaser";

import teaser1 from "../../assets/manajemen-perjalanan-pelanggan-teaser-1.svg";


function RapatVirtualTeaser() {
  return (
    <section className="bg-primary pt-16 md:pt-20 pb-10">
      {/* --- Teaser 1 --- */}
      <Teaser
        preTitle=""
        title="Terhubung dengan pelanggan di mana saja"
        description="Jembatani jarak antara Anda dan pelanggan. Dengan alat konferensi video kami yang aman dan mudah digunakan, Anda dapat menghadirkan layanan tatap muka yang personal langsung ke perangkat pelanggan, di mana pun mereka berada. Ini adalah solusi ideal untuk memaksimalkan jangkauan layanan dan menjaga interaksi berkualitas tinggi di era kerja hybrid."
        imageSrc={teaser1}
        imageAlt="teaser1 Terhubung dengan pelanggan di mana saja"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={true}
      />{" "}
    </section>
  );
}

export default RapatVirtualTeaser;
