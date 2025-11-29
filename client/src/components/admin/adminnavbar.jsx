import React, { useState } from "react";
import adminAvatar from "../../assets/avatar-admin.png";       // Gambar Profil
import chevronIcon from "../../assets/CaretDown.svg";  // Icon Panah Bawah
import logoutIcon from "../../assets/logout.svg";         // Icon Logout
import { useAuth } from "../../context/AuthContext";
const AdminNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    // Header Container: Tinggi h-20, Background #E4E4E4 (bg-secondary)
    <header className="h-20 bg-primary flex items-center justify-end px-8 border-b border-subtle sticky top-0 z-20">

      {/* Profil Container */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-3 focus:outline-none hover:opacity-80 transition-opacity group"
        >
          {/* Avatar Image */}
          <div className="w-10 h-10 rounded-full overflow-hidden border border-subtle bg-white">
            <img
              src={adminAvatar}
              alt="Admin Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-medium text-txt-primary text-sm">
            {user ? user.name : "Admin"}
          </span>

          {/* Nama & Chevron Icon */}
          <div className="flex items-center gap-2">
            <span className="font-medium text-txt-primary text-sm"></span>
            <img
              src={chevronIcon}
              alt="Dropdown"
              className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                }`}
            />
          </div>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-xl border border-subtle py-1 overflow-hidden animate-in fade-in zoom-in-95 duration-100 origin-top-right">
            <button
              className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-subtle-light hover:text-accent flex items-center justify-between group transition-colors"
              onClick={logout}
            >
              Keluar
              {/* Logout Icon */}
              <img
                src={logoutIcon}
                alt="Keluar"
                className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert-[15%] group-hover:sepia-[95%] group-hover:saturate-[6000%] group-hover:hue-rotate-[330deg]"
              // Class CSS panjang di atas adalah trik Tailwind untuk mengubah warna icon hitam -> merah accent saat hover (jika icon berupa SVG hitam)
              />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default AdminNavbar;