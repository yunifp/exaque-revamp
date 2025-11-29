import React from "react";
import { Link, useLocation } from "react-router-dom";

// Import Icon dari Assets
import logoImage from "../../assets/logo-red.svg";
import dashboardIcon from "../../assets/piechart.svg";
import articleIcon from "../../assets/books-light.svg";
import storiesIcon from "../../assets/books-light.svg";
import demoIcon from "../../assets/permintaan-demo-icon.svg";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      path: "/admin/dashboard",
      icon: dashboardIcon,
    },
    {
      title: "Artikel",
      path: "/admin/artikel",
      icon: articleIcon,
    },
    {
      title: "Kisah Pelanggan",
      path: "/admin/kisah-pelanggan",
      icon: storiesIcon,
    },
    {
      title: "Permintaan Demo",
      path: "/admin/permintaan-demo",
      icon: demoIcon,
    },
  ];

  return (
    // MENGGUNAKAN VAR: bg-secondary (#E4E4E4)
    <aside className="w-64 min-h-screen bg-sidebar flex flex-col fixed left-0 top-0 border-r border-subtle z-10">
      
      {/* Bagian Logo */}
      <div className="h-20 flex items-center px-8 bg-sidebar">
        <Link to="/admin/dashboard">
          <img 
            src={logoImage} 
            alt="Exaque Logo" 
            className="h-8 w-auto object-contain" // Ukuran disesuaikan
          />
        </Link>
      </div>

      {/* Bagian Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={index}
              to={item.path}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-sm text-sm font-medium transition-all duration-200 group
                ${
                  isActive
                    ? "bg-accent text-txt-secondary shadow-md" // Aktif: Merah Accent & Teks Putih
                    : "text-txt-subtle hover:bg-accent-light hover:text-accent" // Tidak Aktif: Abu-abu, Hover Merah Pudar & Teks Merah
                }
              `}
            >
              <img
                src={item.icon}
                alt={item.title}
                className={`w-5 h-5 transition-all duration-200 ${
                  isActive 
                    ? "brightness-0 invert" // Icon jadi putih saat aktif
                    : "grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100" // Icon abu saat tidak aktif
                }`}
              />

              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;