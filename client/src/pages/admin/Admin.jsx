import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/sidebar";
import AdminNavbar from "../../components/admin/adminnavbar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-secondary">
      {/* Sidebar Fixed di Kiri */}
      <Sidebar />

      {/* Konten Utama di Kanan */}
      <div className="flex-1 flex flex-col ml-64"> {/* ml-64 memberi jarak selebar sidebar */}
        
        {/* Navbar Fixed di Atas */}
        <AdminNavbar />

        {/* Area Konten (Dashboard, Artikel, dll akan muncul di sini) */}
        <main className="flex-1 overflow-y-auto bg-white p-8">
            {/* Outlet merender child route (Dashboard) */}
            <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;