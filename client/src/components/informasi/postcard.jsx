import React from "react";

const postcard = ({ 
  logo, 
  title, 
  description, 
  isActive = false, // Prop untuk memaksa status aktif (merah muncul terus)
  onClick 
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        relative group bg-white rounded-2xl p-8 shadow-lg cursor-pointer 
        transition-all duration-300 border border-transparent
        ${isActive ? "-translate-y-2" : "hover:-translate-y-2"} 
      `}
    >
      {/* --- 1. Bar Merah (Top Accent) --- */}
      {/* Logic: Absolute positioning di paling atas. 
          Default opacity 0 (hilang). 
          Jika 'isActive' ATAU 'group-hover', maka opacity 100 (muncul).
      */}
      <div 
        className={`
          absolute top-0 left-0 w-full h-6 bg-accent rounded-t-2xl 
          transition-opacity duration-300
          ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
        `}
      />

      {/* --- 2. Logo Container --- */}
      <div className="relative z-10 w-24 h-24 mx-auto mb-6 bg-white rounded-full border border-gray-200 flex items-center justify-center overflow-hidden">
        {/* Menggunakan object-contain agar logo tidak terpotong */}
        <img 
          src={logo} 
          alt={title} 
          className="w-14 h-14 object-contain"
        />
      </div>

      {/* --- 3. Konten Teks --- */}
      <div className="relative z-10 text-center">
        <h3 className="text-xl font-bold text-txt-primary mb-4 leading-tight">
          {title}
        </h3>
        
        <p className="text-sm text-txt-subtle text-justify leading-relaxed line-clamp-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default postcard;