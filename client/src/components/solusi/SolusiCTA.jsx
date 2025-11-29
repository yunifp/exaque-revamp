import React from "react";
import CallToAction from "../common/CallToAction";
import CtaImage from "../../assets/cta-woman-4.svg";

function SolusiCTA() {
  const ctaProps = {
    preTitle: "Siap Mentransformasi Pengalaman Pelanggan Anda?",
    title: "Mari Diskusikan Kebutuhan Anda, Kami Akan Tunjukkan Solusinya.",
    buttonText: "Konsultasi Sekarang",
    buttonLink: "/konsultasi",
    imageUrl: CtaImage,
    bgColor: "bg-gray-50",
  };

  return <CallToAction {...ctaProps} />;
}

export default SolusiCTA;
