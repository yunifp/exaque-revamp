import React from 'react';
import { Link } from 'react-router-dom';
import NewsCard from './NewsCard'; // Path diubah ke common

const newsData = [
  { 
    id: 1, 
    title: "Lorem Ipsum Tellus Eu Dui Eget Vitae...", 
    description: "Lorem ipsum Tellus Eu Dui Eget Vitae Ultrices Feugiat Est Nullam Vivamus Non Amet At Interdum Lorem Grav...", 
    link: "/studi-kasus-1", 
    img: "https://placehold.co/400x250/e2e8f0/999?text=Berita+1" 
  },
  { 
    id: 2, 
    title: "Lorem Ipsum Tellus Eu Dui Eget Vitae...", 
    description: "Lorem ipsum Tellus Eu Dui Eget Vitae Ultrices Feugiat Est Nullam Vivamus Non Amet At Interdum Lorem Grav...", 
    link: "/blog-1", 
    img: "https://placehold.co/400x250/e2e8f0/999?text=Berita+2" 
  },
  { 
    id: 3, 
    title: "Lorem Ipsum Tellus Eu Dui Eget Vitae...", 
    description: "Lorem ipsum Tellus Eu Dui Eget Vitae Ultrices Feugiat Est Nullam Vivamus Non Amet At Interdum Lorem Grav...", 
    link: "/berita-1", 
    img: "https://placehold.co/400x250/e2e8f0/999?text=Berita+3" 
  },
];

function NewsSection() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            Artikel Exaque
          </h2>
          <Link
            to="/berita"
            className="inline-block flex-shrink-0 px-8 py-3 bg-accent text-white font-semibold rounded-2xl shadow-md hover:bg-accent-hover transition-colors"
          >
            Lihat Selengkapnya
          </Link>
        </div>
        
        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {newsData.map(item => (
            <NewsCard
              key={item.id}
              title={item.title}
              description={item.description}
              link={item.link}
              imageUrl={item.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;