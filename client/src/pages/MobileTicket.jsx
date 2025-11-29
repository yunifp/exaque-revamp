import React from "react";

// Mengubah path impor ke common/Hero
import Hero from "../components/common/Hero";
import MobileTicketTeaser from "../components/mobileticket/MobileTicketTeaser";
import MobileTicketFeature from "../components/mobileticket/MobileTicketFeature"; 
import MobileTicketAccordion from "../components/mobileticket/MobileTicketAccordion";
// Tambahkan CallToAction yang hilang
import MobileTicketCTA from "../components/mobileticket/MobileTicketCTA";

import MobileTicketHeroImage from "../assets/hero-mobile-ticket.svg";

function MobileTicket() {
  const MobileTicketHeroProps = {
    welcomeText: "Qmatic Orchestra",
    // Perbaikan: Judul yang benar adalah Mobile Ticket
    title: "Mobile Ticket", 
    subtitle: "Biarkan pelanggan Anda menunggu secara virtual, di mana saja.",
    imageUrl: MobileTicketHeroImage,
    textAlign: "text-center mx-auto",
    buttonJustify: "justify-center",
    button1Text: "Permintaan Demo",
    button1Link: "/demo",
    button2Text: "Konsultasi",
    button2Link: "/konsultasi",
  };

  return (
    <div className="bg-primary min-h-screen">
      {/* 1. Hero */}
      <Hero {...MobileTicketHeroProps} />

      {/* 2. Solusi Modern */}
      <MobileTicketTeaser />

      {/* 3. Fitur Unggulan (Menggunakan fitur spesifik Mobile Ticket) */}
      <MobileTicketFeature />

      {/* 4. Accordion Platform Terpusat */}
      <MobileTicketAccordion />
      
      {/* 5. Call To Action (Ditambahkan kembali) */}
      <MobileTicketCTA />
    </div>
  );
}

export default MobileTicket;