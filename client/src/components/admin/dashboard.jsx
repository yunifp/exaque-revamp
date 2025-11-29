import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// --- Data Mockup untuk Grafik ---
const chartData = [
  { name: "Jan", demo: 35, free: 25 },
  { name: "Feb", demo: 20, free: 20 },
  { name: "Mar", demo: 60, free: 15 },
  { name: "Apr", demo: 35, free: 25 }, // Highlighted in design
  { name: "May", demo: 15, free: 10 },
];

// --- Data Mockup untuk Artikel ---
const articles = [
  {
    id: 1,
    title: "Tata Cara Manajemen Waktu",
    time: "5:30pm",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=100&q=80", // Gambar tangan pegang piala/sukses
    status: "draft", // draft = butuh tombol publish
  },
  {
    id: 2,
    title: "Bertanggung Jawab Adalah Kunci Kesuksesan dari Tim",
    time: "9:00pm",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=100&q=80", // Gambar pemandangan gunung
    status: "published", // published = label status
  },
];

// --- Komponen Halaman Dashboard ---
const Dashboard = () => {
  return (
    <div className="p-8 min-h-screen bg-primary">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-txt-primary mb-1">Hello Admin</h1>
        <p className="text-txt-subtle text-lg">
          Setiap langkah kecil mendekatkan pada impian besar
        </p>
      </div>

      {/* Container Utama: Grid Layout */}
      <div className="space-y-8">
        
        {/* 1. Kartu Grafik Permintaan */}
        <div className="bg-white p-6 rounded-md border border-subtle shadow-sm">
          <h2 className="text-lg font-bold text-txt-primary mb-6">Permintaan</h2>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: -20, bottom: 5 }}
                barSize={40} // Ketebalan bar
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#9CA3AF', fontSize: 12 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#9CA3AF', fontSize: 12 }} 
                />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                />
                <Legend 
                  verticalAlign="top" 
                  align="left" 
                  iconType="square"
                  wrapperStyle={{ paddingBottom: '20px', fontSize: '12px' }}
                />
                
                {/* Bar Bawah (Merah) */}
                <Bar 
                  dataKey="demo" 
                  name="Permintaan Demo" 
                  stackId="a" 
                  fill="#A9023A" // Warna Accent
                  radius={[0, 0, 0, 0]} 
                />
                {/* Bar Atas (Beige) */}
                <Bar 
                  dataKey="free" 
                  name="Coba Gratis" 
                  stackId="a" 
                  fill="#F8EFE2" // Warna Beige Chart
                  radius={[4, 4, 0, 0]} // Radius hanya di atas
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 2. Kartu Draft Artikel */}
        <div className="bg-white p-6 rounded-md border border-subtle shadow-sm">
          <h2 className="text-lg font-bold text-txt-primary mb-6">Draft Artikel</h2>
          
          <div className="space-y-4">
            {articles.map((article) => (
              <div 
                key={article.id} 
                className="flex items-center justify-between p-4 bg-white rounded-lg border border-subtle-light hover:shadow-md transition-shadow"
              >
                {/* Kiri: Gambar & Teks */}
                <div className="flex items-center gap-4">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-16 h-16 rounded-lg object-cover shadow-sm"
                  />
                  <div>
                    <h3 className="text-base font-semibold text-txt-primary">
                      {article.title}
                    </h3>
                    <p className="text-sm text-txt-subtle mt-1">
                      {article.time}
                    </p>
                  </div>
                </div>

                {/* Kanan: Aksi / Status */}
                <div>
                  {article.status === 'draft' ? (
                    <button className="px-6 py-2 bg-accent hover:bg-accent-hover text-white text-xs font-semibold rounded-lg transition-colors">
                      Publish
                    </button>
                  ) : (
                    <span className="px-6 py-2 bg-red-50 text-accent text-xs font-semibold rounded-lg border border-red-100">
                      Published
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;