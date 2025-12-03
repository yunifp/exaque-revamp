import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import useApi from "../../hooks/useApi";

const BASE_URL = import.meta.env.VITE_API_BASE_URL.replace('/api/v1', '');

const chartData = [
  { name: "Jan", demo: 35, free: 25 },
  { name: "Feb", demo: 20, free: 20 },
  { name: "Mar", demo: 60, free: 15 },
  { name: "Apr", demo: 35, free: 25 },
  { name: "May", demo: 15, free: 10 },
];

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const { request } = useApi();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await request("/articles?limit=5");
        if (res.data && res.data.data) {
          setArticles(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [request]);

  const handleArticleClick = (id) => {
    navigate(`/admin/artikel/preview/${id}`);
  };

  return (
    <div className="p-8 min-h-screen bg-primary">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-txt-primary mb-1">Hello Admin</h1>
        <p className="text-txt-subtle text-lg">
          Setiap langkah kecil mendekatkan pada impian besar
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-white p-6 rounded-md border border-subtle shadow-sm">
          <h2 className="text-lg font-bold text-txt-primary mb-6">Permintaan</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: -20, bottom: 5 }} barSize={40}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                <Legend verticalAlign="top" align="left" iconType="square" wrapperStyle={{ paddingBottom: '20px', fontSize: '12px' }} />
                <Bar dataKey="demo" name="Permintaan Demo" stackId="a" fill="#A9023A" radius={[0, 0, 0, 0]} />
                <Bar dataKey="free" name="Coba Gratis" stackId="a" fill="#F8EFE2" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-md border border-subtle shadow-sm">
          <h2 className="text-lg font-bold text-txt-primary mb-6">Artikel Terbaru</h2>

          <div className="space-y-4">
            {articles.length > 0 ? articles.map((article) => {
              const imageUrl = article.featured_image_url
                ? `${BASE_URL}${article.featured_image_url}`
                : "https://placehold.co/100x100/png?text=Img";

              return (
                <div
                  key={article.id}
                  onClick={() => handleArticleClick(article.id)}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-subtle-light hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={imageUrl}
                      alt={article.title}
                      className="w-16 h-16 rounded-lg object-cover shadow-sm group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <h3 className="text-base font-semibold text-txt-primary group-hover:text-accent transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-txt-subtle mt-1">
                        {new Date(article.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div>
                    <span className={`px-4 py-1 text-xs font-semibold rounded-full border capitalize
                      ${article.status === 'published' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-50 text-gray-600 border-gray-200'}`}>
                      {article.status}
                    </span>
                  </div>
                </div>
              );
            }) : (
              <p className="text-gray-500 text-center py-4">Belum ada artikel.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;