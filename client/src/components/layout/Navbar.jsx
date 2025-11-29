import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Impor Logo
import LogoImage from "../../assets/logo-red.svg";

// --- Impor Komponen Dropdown ---
import MegaMenuProduct from "./dropdown/MegaMenuProduct";
import MegaMenuSolusi from "./dropdown/MegaMenuSolution";
import MegaMenuInformasi from "./dropdown/MegaMenuInformation";

// --- Icon SVG (Tidak Berubah) ---
const ChevronDownIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    width="20"
    height="20"
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
      clipRule="evenodd"
    />
  </svg>
);
const MenuIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    width="24"
    height="24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);
const CloseIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    width="24"
    height="24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);
const SearchIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    width="24"
    height="24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
);

// --- KOMPONEN DROPDOWN DESKTOP (Tidak Berubah) ---
const NavLinkDropdown = ({ title, children }) => (
  <div className="group relative">
    <button
      type="button"
      className="flex items-center gap-1 py-5 hover:text-accent-hover "
      aria-haspopup="true"
    >
      {title}
      <ChevronDownIcon className="transition-transform duration-200 group-hover:rotate-180" />
    </button>
    <div className="fixed top-16 left-0 right-0 z-20 origin-top scale-y-95 transform-gpu opacity-0 transition-all duration-200 group-hover:scale-y-100 group-hover:opacity-100 hidden group-hover:block">
      <div className="bg-gray/75 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 text-white">{children}</div>
        </div>
      </div>
    </div>
  </div>
);

// --- Komponen Mobile Dropdown ---
const MobileNavLinkDropdown = ({ title, children, isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  // --- MODIFIKASI 1: Hover/focus dinamis ---
  // Hanya terapkan border jika dropdown TERTUTUP
  const hoverFocusClass = isOpen
    ? "hover:border-l-4 hover:border-accent focus:border-l-4 focus:border-accent"
    : "hover:border-l-4 hover:border-accent";

  return (
    <div className="px-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex w-full items-center justify-between py-3 border-b border-subtle hover:border-b-subtle focus:border-b-subtle focus:outline-none ${hoverFocusClass}`}
        aria-expanded={isOpen}
      >
        <span className="font-medium pl-4">{title}</span>
        <ChevronDownIcon
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div
          className={`pl-4 pb-2 ${
            isScrolled ? "bg-primary" : ""
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

// --- Komponen Search Bar (Tidak Berubah) ---
const FloatingSearchBar = ({ isOpen, onClose }) => (
  <div
    className={`fixed w-full top-20 left-0 z-40 transition-all duration-300 ease-in-out ${
      isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
    }`}
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-end">
        <form className="relative flex w-full max-w-xs items-center gap-2 rounded-2xl bg-gray/75 p-3 shadow-lg">
          <input
            type="search"
            placeholder="Cari..."
            className="flex-1 bg-transparent text-white placeholder:text-gray-400 focus:outline-none"
            aria-label="Kolom Pencarian"
          />
          <button
            type="submit"
            className="rounded-full p-1 text-white transition-colors bg-black hover:bg-primary/20"
            aria-label="Cari"
          >
            <SearchIcon className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  </div>
);

// --- Komponen NAVIGASI UTAMA ---
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Class dinamis (Tidak Berubah) ---
  const navClass = isScrolled
    ? "bg-primary text-txt-primary shadow-lg"
    : "bg-transparent text-txt-secondary";
  const mobileMenuClass = isScrolled
    ? "bg-primary shadow-lg"
    : "bg-gray/75 backdrop-blur-sm shadow-lg";
  const mobileMenuContentClass = isScrolled
    ? "text-txt-primary"
    : "text-txt-secondary";
  const mobileDropdownLinkClass = isScrolled
    ? "text-txt-primary hover:border-l-4 border-accent"
    : "text-txt-secondary hover:border-l-4 border-accent";
  const iconHoverClass = isScrolled
    ? "hover:bg-subtle-light"
    : "hover:bg-primary/20";
  const outlineBtnClass = isScrolled
    ? "border border-gray text-txt-primary hover:bg-subtle-light"
    : "border border-primary text-txt-secondary hover:bg-primary/20";
  const solidBtnClass = isScrolled
    ? "bg-accent text-txt-secondary hover:bg-accent-hover"
    : "bg-primary text-txt-primary hover:bg-subtle";

  // --- Logika Toggle (Tidak Berubah) ---
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMobileMenuOpen(false);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsSearchOpen(false);
  };
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navClass}`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  className="h-8 w-auto"
                  src={LogoImage}
                  alt="Exaque Logo"
                />
              </Link>
            </div>

            {/* NAVIGASI DESKTOP (Tidak Berubah) */}
            <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
              <NavLinkDropdown title="Produk">
                <MegaMenuProduct />
              </NavLinkDropdown>
              <NavLinkDropdown title="Solusi">
                <MegaMenuSolusi />
              </NavLinkDropdown>
              <Link to="/integrasi" className="py-5 hover:text-accent-hover">
                Integrasi
              </Link>
              <Link
                to="/kisah-pelanggan"
                className="py-5 hover:text-accent-hover"
              >
                Kisah Pelanggan
              </Link>
              <NavLinkDropdown title="Informasi">
                <MegaMenuInformasi />
              </NavLinkDropdown>
            </div>

            {/* Button + SEARCH */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/demo"
                className={`px-4 py-2 rounded-2xl text-sm font-medium transition-colors ${outlineBtnClass}`}
              >
                Permintaan Demo
              </Link>
              <Link
                to="/kontak"
                className={`px-4 py-2 rounded-2xl text-sm font-medium transition-colors ${solidBtnClass}`}
              >
                Kontak
              </Link>
              <button
                onClick={toggleSearch}
                className={`p-2 rounded-full transition-colors ${iconHoverClass}`}
                aria-label="Buka pencarian"
              >
                <SearchIcon className="h-5 w-5" />
              </button>
            </div>

            {/* HAMBURGER & SEARCH MOBILE */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleSearch}
                className="inline-flex items-center justify-center rounded-full p-2 focus:outline-none"
                aria-label="Buka pencarian"
              >
                <SearchIcon className="block h-6 w-6" />
              </button>
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center rounded-2xl p-2 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Buka menu</span>
                {isMobileMenuOpen ? (
                  <CloseIcon className="block h-6 w-6" />
                ) : (
                  <MenuIcon className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* --- MENU MOBILE --- */}
        <div
          className={`md:hidden ${mobileMenuClass} transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-screen" : "max-h-0"
          } ${mobileMenuContentClass}`}
          id="mobile-menu"
        >
          {/* Wrapper internal untuk scrolling */}
          <div className="max-h-[calc(100vh-10rem)] px-4 overflow-y-auto">
            {/* Daftar Link */}
            <div
              className={`space-y-1 pt-2 sm:px-6 ${mobileMenuContentClass}`}
            >
              {/* --- Dropdown Produk --- */}
              <MobileNavLinkDropdown title="Produk" isScrolled={isScrolled}>
                <Link
                  onClick={handleMobileLinkClick}
                  to="/qmatic-orchestra"
                  className={`block px-4 py-2 text-base ${mobileDropdownLinkClass} focus:outline-none`}
                >
                  Qmatic Orchestra
                </Link>

                {/* --- NESTED DROPDOWN "KAPABILITAS" --- */}
                <div className="">
                  <MobileNavLinkDropdown title="Kapabilitas" isScrolled={isScrolled}>
                    <Link onClick={handleMobileLinkClick} to="/janji-temu" className={`block px-4 py-2 text-base ${mobileDropdownLinkClass} focus:outline-none`}> Jadwal Temu Digital </Link>
                    <Link onClick={handleMobileLinkClick} to="/perencanaan-sumber-daya" className={`block px-4 py-2 text-base ${mobileDropdownLinkClass} focus:outline-none`}> Perencanaan Sumber Daya </Link>
                    <Link onClick={handleMobileLinkClick} to="/mobile-ticket" className={`block px-4 py-2 text-base ${mobileDropdownLinkClass} focus:outline-none`}> Mobile Ticket </Link>
                    <Link onClick={handleMobileLinkClick} to="/umpan-balik" className={`block px-4 py-2 text-base ${mobileDropdownLinkClass} focus:outline-none`}> Umpan Balik Pelanggan </Link>
                    <Link onClick={handleMobileLinkClick} to="/business-intelligence" className={`block px-4 py-2 text-base ${mobileDropdownLinkClass} focus:outline-none`}> Business Intelligence </Link>
                    <Link onClick={handleMobileLinkClick} to="/pesan-otomatis" className={`block px-4 py-2 text-base ${mobileDropdownLinkClass} focus:outline-none`}> Pesan Otomatis </Link>
                    <Link onClick={handleMobileLinkClick} to="/keamanan-sistem" className={`block px-4 py-2 text-base ${mobileDropdownLinkClass} focus:outline-none`}> Keamanan Sistem </Link>
                    <Link onClick={handleMobileLinkClick} to="/kios-layanan-mandiri" className={`block px-4 py-2 text-base ${mobileDropdownLinkClass} focus:outline-none`}> Kios Layanan Mandiri </Link>
                    <Link onClick={handleMobileLinkClick} to="/tampilan-papan-informasi-digital" className={`block px-4 py-2 text-base ${mobileDropdownLinkClass} focus:outline-none`}> Tampilan & Papan Informasi Digital </Link>
                    <Link onClick={handleMobileLinkClick} to="/pengumuman-suara-otomatis" className={`block px-4 py-2 text-base ${mobileDropdownLinkClass} focus:outline-none`}> Pengumuman Suara Otomatis </Link>
                    <Link onClick={handleMobileLinkClick} to="/dukungan-perangkat-lunak" className={`block px-4 py-2 text-base ${mobileDropdownLinkClass} focus:outline-none`}> Dukungan Perangkat Lunak </Link>
                  </MobileNavLinkDropdown>
                </div>
              </MobileNavLinkDropdown>

              {/* Dropdown */}
              <MobileNavLinkDropdown title="Solusi" isScrolled={isScrolled}>
                <Link onClick={handleMobileLinkClick} to="/manajemen-antrean" className={`block px-4 py-2 text-base ${mobileDropdownLinkClass} focus:outline-none`}> Manajemen Antrean </Link>
                <Link onClick={handleMobileLinkClick} to="/manajemen-perjalanan-pelanggan" className={`block px-4 py-2 text-base ${mobileDropdownLinkClass} focus:outline-none`}> Manajemen Perjalanan Pelanggan </Link>
                <Link onClick={handleMobileLinkClick} to="/antrean-virtual" className={`block px-4 py-2 text-base ${mobileDropdownLinkClass} focus:outline-none`}> Antrean Virtual </Link>
                <Link onClick={handleMobileLinkClick} to="/manajemen-jadwal-janji-temu" className={`block px-4 py-2 text-base ${mobileDropdownLinkClass} focus:outline-none`}> Manajemen Jadwal Janji Temu </Link>
                <Link onClick={handleMobileLinkClick} to="/rapat-virtual" className={`block px-4 py-2 text-base ${mobileDropdownLinkClass} focus:outline-none`}> Rapat Virtual </Link>
              </MobileNavLinkDropdown>

              <Link
                onClick={handleMobileLinkClick}
                to="/integrasi"
                className="block py-3 font-medium px-4 border-b border-subtle hover:border-l-4 hover:border-b-subtle hover:border-accent focus:border-l-4 focus:border-accent focus:border-b-subtle focus:outline-none"
              >
                Integrasi
              </Link>
              <Link
                onClick={handleMobileLinkClick}
                to="/kisah-pelanggan"
                className="block py-3 font-medium px-4 border-b border-subtle hover:border-l-4 hover:border-b-subtle hover:border-accent focus:border-l-4 focus:border-accent focus:border-b-subtle focus:outline-none"
              >
                Kisah Pelanggan
              </Link>

              {/* --- Dropdown Informasi --- */}
              <MobileNavLinkDropdown title="Informasi" isScrolled={isScrolled}>
                <Link onClick={handleMobileLinkClick} to="/tentang-exaque" className={`block px-4 py-2 text-base ${mobileDropdownLinkClass} focus:outline-none`}> Tentang Exaque </Link>
                <Link onClick={handleMobileLinkClick} to="/blog" className={`block px-4 py-2 text-base ${mobileDropdownLinkClass} focus:outline-none`}> Blog </Link>
                <Link onClick={handleMobileLinkClick} to="/faq" className={`block px-4 py-2 text-base ${mobileDropdownLinkClass} focus:outline-none`}> FAQ </Link>
              </MobileNavLinkDropdown>
            </div>

            {/* Tombol Aksi Mobile */}
            <div className="space-y-3 p-4">
              <Link
                onClick={handleMobileLinkClick}
                to="/demo"
                className={`block w-full text-center px-4 py-2 rounded-2xl text-sm font-medium transition-colors ${outlineBtnClass}`}
              >
                Permintaan Demo
              </Link>
              <Link
                onClick={handleMobileLinkClick}
                to="/kontak"
                className={`block w-full text-center px-4 py-2 rounded-2xl text-sm font-medium transition-colors ${solidBtnClass}`}
              >
                Kontak
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* --- RENDER FLOATING SEARCH BAR --- */}
      <FloatingSearchBar
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}