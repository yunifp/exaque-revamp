import React from "react";

import Hero from "../components/common/Hero";
import IntegrasiHeroImage from "../assets/hero-integrasi.svg";
import IntegrasiCard from "../components/integrasi/IntegrasiCard";


function integrasi() {
  const MobileTicketHeroProps = {
    welcomeText: "",
    title: "Integrasi",
    subtitle: (
      <p>
        Hubungkan alat favorit Anda dengan Exaque.
        <br />
        Di sini Anda akan menemukan beberapa contoh terpilih dari integrasi
        paling populer yang telah dibuat.
      </p>
    ),
    imageUrl: IntegrasiHeroImage,
    textAlign: "text-center mx-auto",
    buttonJustify: "justify-center",
    button1Text: "Permintaan Demo",
    button1Link: "/demo",
    button2Text: "Konsultasi",
    button2Link: "/konsultasi",
  };

  return (
    <div className="bg-primary min-h-screen">
      <Hero {...MobileTicketHeroProps} />
      <IntegrasiCard />
    </div>
  );
}

export default integrasi;
