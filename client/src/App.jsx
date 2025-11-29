import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Outlet, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Product from "./pages/Product";
import JanjiTemuDigital from "./pages/JanjiTemuDigital";
import PerencanaanSumberDaya from "./pages/PerencanaanSumberDaya";
import MobileTicket from "./pages/MobileTicket";
import UmpanBalikPelanggan from "./pages/UmpanBalikPelanggan";
import BussinessIntelligence from "./pages/BussinessIntelligence";
import PesanOtomatis from "./pages/PesanOtomatis";
import KeamananSistem from "./pages/KeamananSistem";
import KiosLayananMandiri from "./pages/KiosLayananMandiri";
import TampilanPapanInformasiDigital from "./pages/TampilanPapanInformasiDigital";
import PengumumanSuaraOtomatis from "./pages/PengumumanSuaraOtomatis";
import DukunganPerangkatLunak from "./pages/DukunganPerangkatLunak";

import Solusi from "./pages/Solution";
import ManajemenAntrean from "./pages/ManajemenAntrean";
import ManajemenPerjalananPelanggan from "./pages/ManajemenPerjalananPelanggan";
import ManajemenJadwalJanjiTemu from "./pages/ManajemenJadwalJanjiTemu";
import AntreanVirtual from "./pages/AntreanVirtual";
import RapatVirtual from "./pages/RapatVirtual";
import Integrasi from "./pages/Integration";

import Login from "./pages/Login";
import { AuthProvider, useAuth } from "./context/AuthContext";

import AdminLayout from "./pages/admin/Admin";
import Dashboard from "./components/admin/dashboard";
import Artikel from "./pages/admin/Artikel";
import ArtikelForm from "./pages/admin/ArtikelForm";
import KisahPelangganForm from "./pages/admin/KisahPelangganForm";
import KisahPelanggan from "./pages/admin/KisahPelanggan";
import PermintaanPelanggan from "./pages/admin/PermintaanPelanggan";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const ProtectedRoute = () => {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

const GuestRoute = () => {
  const { user } = useAuth();
  return !user ? <Outlet /> : <Navigate to="/admin/dashboard" replace />;
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/qmatic-orchestra" element={<Product />} />
              <Route path="/janji-temu" element={<JanjiTemuDigital />} />
              <Route path="/perencanaan-sumber-daya" element={<PerencanaanSumberDaya />} />
              <Route path="/mobile-ticket" element={<MobileTicket />} />
              <Route path="/umpan-balik" element={<UmpanBalikPelanggan />} />
              <Route path="/business-intelligence" element={<BussinessIntelligence />} />
              <Route path="/pesan-otomatis" element={<PesanOtomatis />} />
              <Route path="/keamanan-sistem" element={<KeamananSistem />} />
              <Route path="/kios-layanan-mandiri" element={<KiosLayananMandiri />} />
              <Route path="/tampilan-papan-informasi-digital" element={<TampilanPapanInformasiDigital />} />
              <Route path="/pengumuman-suara-otomatis" element={<PengumumanSuaraOtomatis />} />
              <Route path="/dukungan-perangkat-lunak" element={<DukunganPerangkatLunak />} />
              <Route path="/solusi" element={<Solusi />} />
              <Route path="/manajemen-antrean" element={<ManajemenAntrean />} />
              <Route path="/manajemen-perjalanan-pelanggan" element={<ManajemenPerjalananPelanggan />} />
              <Route path="/manajemen-jadwal-janji-temu" element={<ManajemenJadwalJanjiTemu />} />
              <Route path="/antrean-virtual" element={<AntreanVirtual />} />
              <Route path="/rapat-virtual" element={<RapatVirtual />} />
              <Route path="/integrasi" element={<Integrasi />} />
            </Route>

            <Route element={<GuestRoute />}>
              <Route path="/login" element={<Login />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Navigate to="/admin/dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="artikel" element={<Artikel />} />
                <Route path="artikel/tambah" element={<ArtikelForm />} />
                <Route path="artikel/edit/:id" element={<ArtikelForm />} />
                <Route path="kisah-pelanggan" element={<KisahPelanggan />} />
                <Route path="kisah-pelanggan/tambah" element={<KisahPelangganForm />} />
                <Route path="kisah-pelanggan/edit/:id" element={<KisahPelangganForm />} />
                <Route path="permintaan-demo" element={<PermintaanPelanggan />} />
              </Route>
            </Route>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;