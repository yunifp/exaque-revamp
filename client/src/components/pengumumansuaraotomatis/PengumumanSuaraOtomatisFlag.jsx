import React from "react";
// Import gambar placeholder
import flagUrlRow1 from "../../assets/flag-row-1.svg";
import flagUrlRow2 from "../../assets/flag-row-2.svg";
import flagUrlRow3 from "../../assets/flag-row-3.svg";
import flagUrlRow4 from "../../assets/flag-row-4.svg";
import flagUrlRow5 from "../../assets/flag-row-5.svg";
import flagUrlRow6 from "../../assets/flag-row-6.svg";
import flagUrlRow7 from "../../assets/flag-row-7.svg";
import flagUrlRow8 from "../../assets/flag-row-8.svg";
import flagUrlRow9 from "../../assets/flag-row-9.svg";
import flagUrlRow10 from "../../assets/flag-row-10.svg";
import flagUrlRow11 from "../../assets/flag-row-11.svg";
import flagUrlRow12 from "../../assets/flag-row-12.svg";
import flagUrlRow13 from "../../assets/flag-row-13.svg";
import flagUrlRow14 from "../../assets/flag-row-14.svg";

const flagData = [
  { flagUrl: flagUrlRow1 },
  { flagUrl: flagUrlRow2 },
  { flagUrl: flagUrlRow3 },
  { flagUrl: flagUrlRow4 },
  { flagUrl: flagUrlRow5 },
  { flagUrl: flagUrlRow6 },
  { flagUrl: flagUrlRow7 },
  { flagUrl: flagUrlRow8 },
  { flagUrl: flagUrlRow9 },
  { flagUrl: flagUrlRow10 },
  { flagUrl: flagUrlRow11 },
  { flagUrl: flagUrlRow12},
  { flagUrl: flagUrlRow13 },
  { flagUrl: flagUrlRow14 },
];

// Sub-komponen untuk menampilkan satu bendera
function FlagItem({ name, flagUrl }) {
  return (
    <div className="flex flex-col items-center text-center p-2">
      <img
        src={flagUrl}
        alt={`Bendera ${name}`}
        // Gunakan w-16 h-16 atau ukuran yang sesuai untuk ikon melingkar
        className="w-full object-cover mb-3"
      />
      <span className="text-sm font-medium text-gray-800">{name}</span>
    </div>
  );
}

function PengumumanSuaraOtomatisFlag() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Header Teks */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase text-accent mb-2">
            BAHASA YANG DIDUKUNG (TEXT-TO-SPEECH)
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Pilih Dari Berbagai Suara Dalam Lebih Dari 50 Bahasa.
          </h2>
        </div>

        {/* Grid Bendera */}
        {/* Menggunakan grid 5 kolom untuk tampilan desktop (sesuai gambar) */}
        <div className=" grid grid-cols-1 max-w-7xl mx-auto">
          {flagData.map((flag, index) => (
            <FlagItem key={index} name={flag.name} flagUrl={flag.flagUrl} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PengumumanSuaraOtomatisFlag;
