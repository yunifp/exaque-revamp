import React from 'react';
import { Link } from 'react-router-dom';

function NewsCard({ imageUrl, title, description, link }) {
  return (
    // Kartu sekarang tidak memiliki background atau shadow, hanya grup link
    <Link to={link} className="block group">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-56 object-cover rounded-lg" // Gambar abu-abu dengan rounded-lg
      />
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-base mb-3">
          {description}
        </p>
        <span className="text-accent font-semibold group-hover:underline">
          Baca Selengkapnya &rsaquo;
        </span>
      </div>
    </Link>
  );
}

export default NewsCard;