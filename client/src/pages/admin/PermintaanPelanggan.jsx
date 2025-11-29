import React, { useState } from "react";
import DataTable from "../../components/admin/datatable";

const REQUEST_TYPES = [
  { id: "sales", label: "Berbicara Dengan Sales" },
  { id: "demo", label: "Permintaan Demo" },
  { id: "support", label: "Bantuan Teknis" },
  { id: "location", label: "Lokasi Kantor" },
];

const initialData = [
  { id: 1, type: "sales", firstName: "Budi", lastName: "Santoso", email: "budi@companyA.com", company: "PT Maju Mundur", job: "CEO", message: "Info harga", date: "2023-11-01", status: "New" },
  { id: 2, type: "demo", firstName: "John", lastName: "Doe", email: "john@tech.com", company: "Tech Solutions", job: "CTO", message: "Request demo", date: "2023-11-05", status: "Scheduled" },
  { id: 3, type: "support", firstName: "Eko", lastName: "Prasetyo", email: "eko@client.com", company: "Bank ABC", job: "IT", message: "Error printer", date: "2023-10-30", status: "Open" },
];

const PermintaanPelanggan = () => {
  const [data, setData] = useState(initialData);
  const [activeTab, setActiveTab] = useState("sales");

  // Filter data sesuai tab
  const filteredData = data.filter((item) => item.type === activeTab);

  // Definisi Kolom
  const columns = [
    {
      header: "Nama Lengkap",
      accessor: "firstName",
      render: (item) => (
        <div>
          <p className="font-semibold text-txt-primary">{item.firstName} {item.lastName}</p>
          <p className="text-xs text-txt-subtle">{item.job}</p>
        </div>
      ),
    },
    { header: "Email", accessor: "email" },
    { header: "Perusahaan", accessor: "company" },
    { header: "Tanggal", accessor: "date" },
    {
      header: "Status",
      accessor: "status",
      render: (item) => {
        let colorClass = "bg-gray-100 text-gray-800";
        if (item.status === "New" || item.status === "Open") colorClass = "bg-red-100 text-red-800";
        if (item.status === "Scheduled") colorClass = "bg-green-100 text-green-800";
        return <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClass}`}>{item.status}</span>;
      },
    },
  ];

  const handleViewDetail = (item) => alert(`Pesan dari ${item.firstName}:\n"${item.message}"`);
  const handleDelete = (id) => { if(confirm("Hapus?")) setData(data.filter(i => i.id !== id)); };

  return (
    // Kita gunakan DataTable sebagai wrapper utama
    <DataTable
      title="Permintaan Masuk"
      subtitle="Kelola semua permintaan masuk dari formulir website."
      data={filteredData}
      columns={columns}
      onEdit={handleViewDetail}
      onDelete={handleDelete}
      searchPlaceholder={`Cari ${REQUEST_TYPES.find(t => t.id === activeTab).label}...`}
    >
      
      {/* --- TAB SECTION (Dimasukkan sebagai children) --- */}
      <div className="flex items-center gap-2 border-b border-subtle overflow-x-auto mt-2">
        {REQUEST_TYPES.map((type) => (
          <button
            key={type.id}
            onClick={() => setActiveTab(type.id)}
            className={`
              px-6 py-3 text-sm font-medium transition-all duration-200 border-b-2 whitespace-nowrap outline-none
              ${
                activeTab === type.id
                  ? "border-accent text-accent bg-white rounded-t-lg shadow-sm" // Aktif
                  : "border-transparent text-txt-subtle hover:text-txt-primary hover:bg-white/50" // Tidak Aktif
              }
            `}
          >
            {type.label}
          </button>
        ))}
      </div>
      
    </DataTable>
  );
};

export default PermintaanPelanggan;