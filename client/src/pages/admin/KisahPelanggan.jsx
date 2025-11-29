import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// --- Icons ---
const ArrowLeftIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>);
const UploadIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>);
const SaveIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>);

// --- Mock Data Kategori (Simulasi Tabel Database) ---
const MOCK_CATEGORIES = [
  { id: 1, name: "Studi Kasus" },
  { id: 2, name: "Berita & Event" },
  { id: 3, name: "Tips & Trik" },
  { id: 4, name: "Wawasan Industri" },
];

const KisahPelangganForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Ambil ID dari URL jika ada (Mode Edit)
  const isEditMode = Boolean(id);

  // --- State Form ---
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    category_id: "",
    tags: "",
    status: "Draft",
  });
  
  const [featuredImage, setFeaturedImage] = useState(null); // File object
  const [imagePreview, setImagePreview] = useState(null);   // URL string untuk preview

  // --- 1. Load Data Saat Edit Mode ---
  useEffect(() => {
    if (isEditMode) {
      const timer = setTimeout(() => {
        
        const mockApiData = {
          id: 2,
          title: "Kisah Sukses Klinik Sehat",
          slug: "kisah-sukses-klinik-sehat",
          content: "Ini adalah konten artikel yang panjang...",
          featured_image_url: "https://placehold.co/600x400/png?text=Featured+Image",
          categories: [{ id: 1, name: "Studi Kasus" }],
          tags: [
            { id: 2, name: "Klinik" },
            { id: 3, name: "Bank" },
            { id: 4, name: "Baru" }
          ],
          status: "Published"
        };

        // Populate State
        setFormData({
          title: mockApiData.title || "",
          slug: mockApiData.slug || "",
          content: mockApiData.content || "",
          category_id: mockApiData.categories?.[0]?.id || "",
          // Menangani tags dengan aman
          tags: (mockApiData.tags || []).map(t => t.name).join(", "),
          status: mockApiData.status || "Draft"
        });
        
        setImagePreview(mockApiData.featured_image_url);

      }, 100); // Memberi jeda 100ms (sepersepuluh detik)

      // Membersihkan timer jika komponen ditutup sebelum data termuat
      return () => clearTimeout(timer);
    }
  }, [isEditMode]);

  // --- Handlers ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Auto-generate slug jika user mengetik title (hanya jika slug belum diedit manual)
    if (name === "title" && !isEditMode) {
      const slugValue = value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
      setFormData(prev => ({ ...prev, title: value, slug: slugValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFeaturedImage(file);
      setImagePreview(URL.createObjectURL(file)); // Buat preview lokal
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Logic Menyimpan Data
    // Di sini kita ubah string tags kembali menjadi format yang diinginkan backend (jika perlu)
    const payload = {
      ...formData,
      // Split string menjadi array string dulu, backend nanti yang handle 'Find or Create'
      tags: formData.tags.split(",").map(tag => tag.trim()).filter(tag => tag !== ""),
      image: featuredImage,
    };

    console.log("Submitting Data:", payload);
    alert(isEditMode ? "Artikel berhasil diperbarui!" : "Artikel berhasil dibuat!");
    navigate("/admin/artikel");
  };

  return (
    <div className="p-8 min-h-screen bg-primary">
      {/* Header Form */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate("/admin/artikel")} 
            className="p-2 hover:bg-white rounded-lg transition-colors text-txt-subtle hover:text-txt-primary"
          >
            <ArrowLeftIcon />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-txt-primary">
              {isEditMode ? "Edit Kisah Pelanggan" : "Tambah Kisah Pelanggan"}
            </h1>
          </div>
        </div>
        <button 
          onClick={handleSubmit}
          className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium shadow-md transition-colors"
        >
          <SaveIcon />
          <span>{isEditMode ? "Perbarui Artikel" : "Terbitkan Artikel"}</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- KOLOM KIRI (Konten Utama) --- */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Judul */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-subtle">
            <label className="block text-sm font-semibold text-txt-primary mb-2">Judul Artikel</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Masukkan judul artikel..."
              className="w-full p-3 rounded-lg border border-subtle focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-lg font-medium"
              required
            />
            
            {/* Slug */}
            <div className="mt-4">
              <label className="block text-xs font-semibold text-txt-subtle mb-1">Slug (URL)</label>
              <div className="flex items-center bg-gray-50 border border-subtle rounded-lg px-3 py-2">
                <span className="text-gray-500 text-sm">exaque.com/blog/</span>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  className="bg-transparent flex-1 ml-1 text-sm text-txt-primary focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Konten Editor (Textarea Sederhana) */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-subtle">
            <label className="block text-sm font-semibold text-txt-primary mb-2">Konten</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows="12"
              placeholder="Tulis konten artikel di sini..."
              className="w-full p-3 rounded-lg border border-subtle focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            ></textarea>
          </div>
        </div>

        {/* --- KOLOM KANAN (Sidebar Settings) --- */}
        <div className="space-y-6">
          
          {/* Status Publish */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-subtle">
            <h3 className="font-semibold text-txt-primary mb-4 border-b border-subtle pb-2">Status</h3>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-subtle bg-white focus:outline-none focus:border-accent"
            >
              <option value="Draft">Draft</option>
              <option value="Published">Published</option>
              <option value="Archived">Archived</option>
            </select>
          </div>

          {/* Kategori & Tag */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-subtle">
            <h3 className="font-semibold text-txt-primary mb-4 border-b border-subtle pb-2">Pengaturan</h3>
            
            {/* Kategori (Select dari Tabel) */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-txt-primary mb-1">Kategori</label>
              <select
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                className="w-full p-2 rounded-lg border border-subtle bg-white focus:outline-none focus:border-accent"
              >
                <option value="">-- Pilih Kategori --</option>
                {MOCK_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
              <p className="text-xs text-txt-subtle mt-1">*Diambil dari data tabel kategori</p>
            </div>

            {/* Tags (Input Manual) */}
            <div>
              <label className="block text-sm font-medium text-txt-primary mb-1">Tags</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="Contoh: Klinik, Bank, Baru"
                className="w-full p-2 rounded-lg border border-subtle focus:outline-none focus:border-accent"
              />
              <p className="text-xs text-txt-subtle mt-1">*Pisahkan dengan koma (manual input)</p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-subtle">
            <h3 className="font-semibold text-txt-primary mb-4 border-b border-subtle pb-2">Gambar Utama</h3>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors relative">
              <input 
                type="file" 
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              
              {imagePreview ? (
                <div className="relative">
                  <img src={imagePreview} alt="Preview" className="w-full h-40 object-cover rounded-md" />
                  <p className="text-xs text-gray-500 mt-2">Klik untuk ganti gambar</p>
                </div>
              ) : (
                <div className="py-8">
                  <div className="mx-auto w-12 h-12 text-gray-400 mb-2">
                    <UploadIcon />
                  </div>
                  <p className="text-sm font-medium text-gray-600">Klik untuk upload</p>
                  <p className="text-xs text-gray-400">PNG, JPG, WEBP up to 2MB</p>
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