import React, { useState } from "react";
import DataTable from "../../components/admin/datatable";
import { useNavigate } from "react-router-dom";

// --- Mock Data ---
const initialArticles = [
  { id: 1, title: "Tata Cara Manajemen Waktu", author: "admin", date: "2023-10-01", status: "Published", views: 120, image: "https://placehold.co/100x100/png?text=Img" },
  { id: 2, title: "Pentingnya Keamanan Cyber", author: "admin", date: "2023-10-05", status: "Draft", views: 0, image: "https://placehold.co/100x100/png?text=Img" },
  { id: 3, title: "Tips Produktivitas Tim", author: "admin", date: "2023-09-20", status: "Published", views: 340, image: "https://placehold.co/100x100/png?text=Img" },
  // ... data lainnya
];

const Artikel = () => {
  const [articles, setArticles] = useState(initialArticles);

  // --- Definisi Kolom ---
  const columns = [
    {
      header: "Artikel",
      accessor: "title",
      // Custom Render untuk menampilkan Gambar + Judul
      render: (item) => (
        <div className="flex items-center gap-4">
          <img src={item.image} alt={item.title} className="w-12 h-12 rounded-lg object-cover bg-gray-200" />
          <div>
            <p className="font-semibold text-txt-primary line-clamp-1">{item.title}</p>
            <p className="text-xs text-txt-subtle mt-0.5">{item.views}x Dilihat</p>
          </div>
        </div>
      ),
    },
    { header: "Penulis", accessor: "author" },
    { header: "Tanggal", accessor: "date" },
    {
      header: "Status",
      accessor: "status",
      // Custom Render untuk Badge Status
      render: (item) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
          ${item.status === "Published" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}>
          {item.status}
        </span>
      ),
    },
  ];

  // --- Handlers ---
  const handleDelete = (id) => {
    if (window.confirm("Hapus artikel ini?")) {
      setArticles(articles.filter((a) => a.id !== id));
    }
  };
  const navigate = useNavigate();
  const handleAdd = () => navigate("/admin/artikel/tambah");
  const handleEdit = (item) => navigate(`/admin/artikel/edit/${item.id}`);
  return (
    <DataTable
      title="Manajemen Artikel"
      subtitle="Kelola semua konten blog dan berita dari sini."
      data={articles}
      columns={columns}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      searchPlaceholder="Cari judul artikel..."
    />
  );
};

export default Artikel;