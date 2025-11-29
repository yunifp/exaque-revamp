import React from "react";

// Ikon Panah Sederhana
const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Jika total halaman cuma 1, tidak perlu menampilkan pagination
  if (totalPages <= 1) return null;

  // --- Logic untuk membuat array nomor halaman dengan '...' ---
  const getPageNumbers = () => {
    const pages = [];
    const delta = 1; // Berapa banyak angka di kiri/kanan halaman aktif yang ditampilkan

    // Selalu tampilkan halaman 1
    pages.push(1);

    // Hitung range (start - end) di sekitar currentPage
    let rangeStart = Math.max(2, currentPage - delta);
    let rangeEnd = Math.min(totalPages - 1, currentPage + delta);

    // Tambahkan '...' jika ada jarak antara halaman 1 dan rangeStart
    if (rangeStart > 2) {
      pages.push("...");
    }

    // Masukkan halaman di tengah (range)
    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i);
    }

    // Tambahkan '...' jika ada jarak antara rangeEnd dan halaman terakhir
    if (rangeEnd < totalPages - 1) {
      pages.push("...");
    }

    // Selalu tampilkan halaman terakhir (jika lebih dari 1)
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-12">
      {/* Tombol Previous */}
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 text-gray-500 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft />
      </button>

      {/* Loop Nomor Halaman */}
      {getPageNumbers().map((page, index) => {
        if (page === "...") {
          return (
            <span key={`dots-${index}`} className="px-2 text-gray-400">
              ...
            </span>
          );
        }

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`
              w-8 h-8 flex items-center justify-center rounded text-sm font-medium transition-all duration-200
              ${
                currentPage === page
                  ? "bg-accent text-white shadow-md" // Style Aktif (Merah) sesuai gambar
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300" // Style Tidak Aktif (Abu)
              }
            `}
          >
            {page}
          </button>
        );
      })}

      {/* Tombol Next */}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 text-gray-500 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Pagination;