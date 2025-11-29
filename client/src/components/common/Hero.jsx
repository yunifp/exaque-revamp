import React from "react";
import { Link } from "react-router-dom";
// Impor gambar default yang sudah ada
import defaultProductImage from "../../assets/hero-product.png";
import defaultHomeImage from "../../assets/hero-1.jpg";

function Hero({
  // PROPS UTAMA UNTUK KONTEN
  welcomeText = "Selamat Datang",
  title = "Judul Hero Default",
  subtitle = "Subtitel default yang menjelaskan inti dari bagian ini.",

  // PROPS UNTUK TAMPILAN
  imageUrl = defaultProductImage, // Default ke gambar produk generik
  minHeight = "min-h-[600px]", // Ketinggian default

  // PROPS UNTUK BUTTON 1 (Primary)
  button1Text = "Aksi Utama",
  button1Link = "/demo",

  // PROPS UNTUK BUTTON 2 (Secondary/Outline)
  button2Text = "Aksi Sekunder",
  button2Link = "/konsultasi",

  // PROPS UNTUK STYLING POSISI
  contentWidth = "md:w-1/2 lg:w-2/3", // Lebar konten
  textAlign = "text-left", // Perataan teks
  buttonJustify = "justify-start",
  isHome = false,
}) {
  // Tentukan gambar dan tinggi jika ini adalah halaman Home
  const finalImageUrl = isHome ? defaultHomeImage : imageUrl;
  const finalMinHeight = isHome ? "min-h-[900px]" : minHeight;

  // Definisikan style untuk background image
  const heroStyle = {
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
      url(${finalImageUrl})
    `,
  };

  const finalButtonJustify = textAlign.includes("text-center")
    ? "mx-auto justify-center"
    : buttonJustify;

  const finalContentWidth = textAlign.includes("text-center")
    ? "mx-auto"
    : contentWidth;

  return (
    <section
      className={`relative ${finalMinHeight} w-full flex items-center bg-cover bg-center text-white rounded-b-2xl overflow-hidden ${
        isHome ? "rounded-b-3xl" : "rounded-b-2xl"
      }`}
      style={heroStyle}
    >
      <div className="container mx-auto px-6">
        <div className={`${finalContentWidth} ${textAlign}`}>
          <span className="block text-lg font-medium mb-2">{welcomeText}</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className={`text-lg md:text-xl mb-10 ${isHome ? "max-w-xl" : ""}`}>
            {subtitle}
          </p>
          <div className={`flex flex-wrap gap-4 ${finalButtonJustify}`}>
            <Link
              to={button1Link}
              className={`px-6 py-3 bg-primary text-gray-900 font-semibold shadow-md hover:bg-gray-200 transition-colors duration-300 rounded-2xl`}
            >
              {button1Text}
            </Link>
            <Link
              to={button2Link}
              className={`px-6 py-3 bg-transparent border-2 border-white text-white font-semibold hover:bg-primary hover:text-gray-900 transition-colors duration-300 rounded-2xl`}
            >
              {button2Text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
