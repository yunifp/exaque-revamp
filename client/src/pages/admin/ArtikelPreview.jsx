import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi";

const BASE_URL = import.meta.env.VITE_API_BASE_URL.replace('/api/v1', '');

const ArrowLeftIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>);

const ArtikelPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { request } = useApi();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await request("/articles?limit=1000");
        const found = response.data.data.find(a => a.id === parseInt(id));
        setArticle(found);
      } catch (error) {
        console.error("Gagal mengambil artikel", error);
      }
    };
    fetchArticle();
  }, [id, request]);

  if (!article) return <div className="p-8 text-center text-txt-subtle">Memuat artikel...</div>;

  const imageUrl = article.featured_image_url
    ? `${BASE_URL}${article.featured_image_url}`
    : "https://placehold.co/800x400/png?text=No+Image";

  return (
    <div className="p-8 min-h-screen bg-primary">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate("/admin/artikel")}
          className="p-2 bg-white rounded-lg border border-subtle hover:bg-gray-50 transition-colors"
        >
          <ArrowLeftIcon />
        </button>
        <h1 className="text-2xl font-bold text-txt-primary">Preview Artikel</h1>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-subtle max-w-4xl mx-auto">
        <div className="mb-6">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 capitalize
            ${article.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
            {article.status}
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{article.title}</h1>
          <div className="flex items-center text-sm text-gray-500 gap-4">
            <span>Penulis: {article.author?.name || "Admin"}</span>
            <span>|</span>
            <span>{new Date(article.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden mb-8 bg-gray-100 w-full h-[400px]">
          <img src={imageUrl} alt={article.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-wrap">
          {article.content}
        </div>

        {article.tags && article.tags.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-100">
            <h4 className="text-sm font-bold text-gray-700 mb-2">Tags:</h4>
            <div className="flex flex-wrap gap-2">
              {article.tags.map(tag => (
                <span key={tag.id} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtikelPreview;