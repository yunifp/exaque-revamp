import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../common/Pagination"; // Import Pagination yang sudah ada

// --- DUMMY DATA ---
const BLOG_POSTS = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Sit Amet",
    excerpt: "Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
    date: "October 19, 2025"
  },
  {
    id: 2,
    title: "Strategi Customer Journey di Era Digital",
    excerpt: "Menemukan cara baru untuk berinteraksi dengan pelanggan melalui pendekatan omnichannel yang terintegrasi dan efisien untuk bisnis skala enterprise.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    date: "October 15, 2025"
  },
  {
    id: 3,
    title: "Optimasi Antrean dengan AI",
    excerpt: "Bagaimana kecerdasan buatan dapat memprediksi lonjakan pengunjung dan mengatur alokasi staf secara otomatis untuk mengurangi waktu tunggu.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    date: "October 10, 2025"
  },
  {
    id: 4,
    title: "Masa Depan Layanan Perbankan",
    excerpt: "Transformasi digital di sektor perbankan mengubah cara nasabah berinteraksi dengan layanan finansial fisik maupun digital.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    date: "October 05, 2025"
  },
  {
    id: 5,
    title: "Keamanan Data Pelanggan",
    excerpt: "Pentingnya menjaga privasi dan keamanan data dalam sistem manajemen pelanggan modern sesuai standar internasional.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    date: "October 01, 2025"
  }
];

const RECENT_POSTS = [
  { id: 101, title: "Lorem Ipsum", date: "October 19, 2025" },
  { id: 102, title: "Lorem Ipsum", date: "October 19, 2025" },
  { id: 103, title: "Lorem Ipsum", date: "October 19, 2025" },
];

const CATEGORIES = [
  "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"
];

const BlogMainSection = () => {
  // --- Pagination Logic ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Menampilkan 3 artikel per halaman

  const totalPages = Math.ceil(BLOG_POSTS.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPosts = BLOG_POSTS.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll ke atas section saat ganti halaman
    document.getElementById("blog-top").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="blog-top" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* --- KOLOM KIRI: Feed Artikel Utama (2/3 Lebar) --- */}
          <div className="lg:col-span-2">
            <div className="space-y-16">
              {currentPosts.map((post) => (
                // --- KARTU BLOG (Inline Component) ---
                <div key={post.id} className="group">
                  {/* Gambar */}
                  <div className="rounded-2xl overflow-hidden mb-6 shadow-sm">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Konten */}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-accent transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    
                    {/* Tombol Lihat Selengkapnya */}
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-block bg-accent text-white font-semibold px-8 py-3 rounded-full hover:bg-red-800 transition-colors shadow-md"
                    >
                      Lihat Selengkapnya &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* --- PAGINATION (Reuse Component) --- */}
            <div className="mt-16">
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>

          {/* --- KOLOM KANAN: Sidebar (1/3 Lebar) --- */}
          <div className="lg:col-span-1 pl-0 lg:pl-8">
            <div className="sticky top-24 space-y-12">
              
              {/* Widget: Artikel Terbaru */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                  Artikel Terbaru
                </h3>
                <div className="space-y-6">
                  {RECENT_POSTS.map((recent) => (
                    <div key={recent.id} className="flex items-center gap-4 group cursor-pointer">
                      {/* Placeholder Kotak Abu-abu */}
                      <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 group-hover:bg-gray-300 transition-colors"></div>
                      <div>
                        <p className="text-xs text-red-600 font-semibold mb-1 flex items-center gap-1">
                          {/* Icon Kalender Kecil */}
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                          {recent.date}
                        </p>
                        <h4 className="text-base font-bold text-gray-800 group-hover:text-accent transition-colors">
                          {recent.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Widget: Kategori */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                  Kategori
                </h3>
                <ul className="space-y-3">
                  {CATEGORIES.map((cat, idx) => (
                    <li key={idx}>
                      <Link 
                        to="#" 
                        className="text-gray-600 hover:text-accent hover:pl-2 transition-all block text-sm border-b border-gray-100 pb-2"
                      >
                        {cat}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogMainSection;