import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// --- Icons (Sama seperti Artikel) ---
const ArrowLeftIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>);
const UploadIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>);
const SaveIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>);

// --- Mock Data Industri ---
const INDUSTRIES = [
  "Finance", "Retail", "Healthcare", "Telecommunication", "Public Sector", "Other"
];

const KisahPelangganForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);

  // --- State Form (Disesuaikan untuk Pelanggan) ---
  const [formData, setFormData] = useState({
    name: "",        // Nama Perusahaan
    industry: "",    // Industri
    content: "",     // Cerita / Testimoni
    date: "",        // Tanggal Bergabung
    status: "Active", // Active / Inactive
  });
  
  const [logoImage, setLogoImage] = useState(null); 
  const [imagePreview, setImagePreview] = useState(null);

  // --- 1. Load Data Saat Edit Mode ---
  useEffect(() => {
    if (isEditMode) {
      const timer = setTimeout(() => {
        // Mock Data Fetching
        const mockApiData = {
          id: 1,
          name: "Bank Central Asia",
          industry: "Finance",
          content: "BCA berhasil mengurangi waktu tunggu nasabah hingga 30% menggunakan solusi kami...",
          date: "2023-11-01",
          status: "Active",
          logo_url: "https://placehold.co/150x150/png?text=BCA" 
        };

        setFormData({
          name: mockApiData.name || "",
          industry: mockApiData.industry || "",
          content: mockApiData.content || "",
          date: mockApiData.date || "",
          status: mockApiData.status || "Active"
        });
        setImagePreview(mockApiData.logo_url);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isEditMode]);

  // --- Handlers ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formData, logo: logoImage };
    console.log("Submitting Customer Story:", payload);
    alert(isEditMode ? "Data Pelanggan diperbarui!" : "Data Pelanggan ditambahkan!");
    navigate("/admin/kisah-pelanggan");
  };

  return (
    <div className="p-8 min-h-screen bg-secondary">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate("/admin/kisah-pelanggan")} 
            className="p-2 hover:bg-white rounded-lg transition-colors text-txt-subtle hover:text-txt-primary"
          >
            <ArrowLeftIcon />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-txt-primary">
              {isEditMode ? "Edit Kisah Pelanggan" : "Tambah Kisah Pelanggan Baru"}
            </h1>
          </div>
        </div>
        <button 
          onClick={handleSubmit}
          className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium shadow-md transition-colors"
        >
          <SaveIcon />
          <span>Simpan Data</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- KOLOM KIRI (Konten Utama) --- */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Info Dasar */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-subtle">
            <div className="mb-4">
              <label className="block text-sm font-semibold text-txt-primary mb-2">Nama Pelanggan / Perusahaan</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Contoh: Bank Central Asia"
                className="w-full p-3 rounded-lg border border-subtle focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-lg font-medium"
                required
              />
            </div>

            <div className="mb-4">
               <label className="block text-sm font-semibold text-txt-primary mb-2">Industri</label>
               <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-subtle bg-white focus:outline-none focus:border-accent"
                required
              >
                <option value="">-- Pilih Industri --</option>
                {INDUSTRIES.map((ind, idx) => (
                  <option key={idx} value={ind}>{ind}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Konten Cerita */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-subtle">
            <label className="block text-sm font-semibold text-txt-primary mb-2">Kisah Sukses (Testimoni)</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows="10"
              placeholder="Ceritakan bagaimana solusi Exaque membantu klien ini..."
              className="w-full p-3 rounded-lg border border-subtle focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            ></textarea>
          </div>
        </div>

        {/* --- KOLOM KANAN (Sidebar Settings) --- */}
        <div className="space-y-6">
          
          {/* Status & Tanggal */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-subtle">
            <h3 className="font-semibold text-txt-primary mb-4 border-b border-subtle pb-2">Status & Tanggal</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-txt-primary mb-1">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full p-2 rounded-lg border border-subtle bg-white focus:outline-none focus:border-accent"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-txt-primary mb-1">Tanggal Bergabung</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 rounded-lg border border-subtle focus:outline-none focus:border-accent"
              />
            </div>
          </div>

          {/* Logo Pelanggan */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-subtle">
            <h3 className="font-semibold text-txt-primary mb-4 border-b border-subtle pb-2">Logo Pelanggan</h3>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors relative">
              <input 
                type="file" 
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              
              {imagePreview ? (
                <div className="relative flex flex-col items-center">
                  <img src={imagePreview} alt="Preview" className="w-32 h-32 object-contain rounded-md border border-gray-100 bg-gray-50 p-2" />
                  <p className="text-xs text-gray-500 mt-2">Klik untuk ganti logo</p>
                </div>
              ) : (
                <div className="py-8">
                  <div className="mx-auto w-12 h-12 text-gray-400 mb-2">
                    <UploadIcon />
                  </div>
                  <p className="text-sm font-medium text-gray-600">Upload Logo</p>
                  <p className="text-xs text-gray-400">PNG/SVG Transparan disarankan</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </form>
    </div>
  );
};

export default KisahPelangganForm;