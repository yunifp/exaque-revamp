import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// --- DUMMY DATA ---
// Data ini nanti bisa diganti dengan fetch API
const BLOG_DATA = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Sit Amet",
    date: "October 30, 2024",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80",
    content: `
      <p>Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra.</p>
      <br/>
      <p>Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra.</p>
      <br/>
      <p>Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobortis viverra laoreet matti ullamcorper posuere viverra.</p>
    `
  },
  // Tambahkan data dummy lain agar tidak error jika ID 2 atau 3 dibuka
  {
    id: 2,
    title: "Strategi Customer Journey di Era Digital",
    date: "October 15, 2025",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80",
    content: "<p>Isi artikel kedua...</p>"
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

const DetailBlog = () => {
  const { id } = useParams();
  
  // Cari artikel berdasarkan ID, jika tidak ada pakai data pertama sebagai fallback
  const post = BLOG_DATA.find(p => p.id === parseInt(id)) || BLOG_DATA[0];

  // Scroll ke paling atas saat halaman dibuka
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="bg-white min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8 uppercase tracking-wide font-medium">
          <Link to="/blog" className="hover:text-accent transition-colors">BLOG</Link> 
          <span className="mx-2">/</span> 
          <span className="text-gray-900">DETAIL BLOG</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* --- KOLOM KIRI: KONTEN UTAMA --- */}
          <div className="lg:col-span-2">
            
            {/* Gambar Utama */}
            <div className="rounded-2xl overflow-hidden mb-8 shadow-sm">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </div>

            {/* Tanggal */}
            <div className="flex items-center gap-2 text-red-600 font-semibold mb-4 text-sm">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
               <span>{post.date}</span>
            </div>

            {/* Judul */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Isi Konten */}
            <div 
              className="prose prose-lg max-w-none text-gray-600 leading-relaxed text-justify"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* --- KOLOM KANAN: SIDEBAR --- */}
          {/* Struktur Sidebar ini SAMA PERSIS dengan BlogMainSection */}
          <div className="lg:col-span-1 pl-0 lg:pl-8">
            <div className="sticky top-28 space-y-12">
              
              {/* Widget: Artikel Terbaru */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                  Artikel Terbaru
                </h3>
                <div className="space-y-6">
                  {RECENT_POSTS.map((recent) => (
                    <Link key={recent.id} to={`/blog/${recent.id}`} className="flex items-center gap-4 group">
                      {/* Placeholder Image */}
                      <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 group-hover:bg-gray-300 transition-colors"></div>
                      <div>
                        <p className="text-xs text-red-600 font-semibold mb-1 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                          {recent.date}
                        </p>
                        <h4 className="text-base font-bold text-gray-800 group-hover:text-accent transition-colors line-clamp-2">
                          {recent.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Widget: Kategori */}
              <div className="bg-white p-6 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.02)] border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
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
    </div>
  );
};

export default DetailBlog;