import React from "react";

/**
 * Komponen item accordion yang dapat digunakan kembali.
 * Menerima state (isOpen) dan handler (onClick) dari parent.
 *
 * @param {object} props
 * @param {string} props.title - Judul yang selalu terlihat.
 * @param {React.ReactNode} props.children - Konten yang muncul saat accordion terbuka.
 * @param {boolean} props.isOpen - Status apakah accordion sedang terbuka.
 * @param {function} props.onClick - Fungsi yang dipanggil saat header diklik.
 * @param {React.ReactNode} props.chevronIcon - Komponen SVG ikon chevron.
 */
function Accordion({ title, children, isOpen, onClick, chevronIcon }) {
  return (
    <div
      className={`
        ${isOpen ? "bg-subtle-light" : "bg-primary"}
        transition-colors duration-300 rounded-2xl shadow-lg
      `}
    >
      {/* Header (tombol) */}
      <button
        type="button"
        onClick={onClick}
        className="flex justify-between items-center w-full p-6 text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {/* Ikon Wrapper */}
        <div
          className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${
            isOpen ? "bg-accent" : "bg-accent-light"
          }`}
        >
          {/* Render Ikon Chevron dengan rotasi */}
          {React.cloneElement(chevronIcon, {
            className: `w-5 h-5 transition-transform duration-300 ${
              isOpen ? "text-white rotate-0" : "text-accent -rotate-90"
            }`,
          })}
        </div>
      </button>

      {/* Konten (collapsible) */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          {/* Padding diterapkan di sini, kecuali padding-top */}
          <div className="pt-0 p-6 text-gray-600 text-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;