import React from 'react';

// Komponen sekarang menerima 'title'
function CustomerCard({ logoUrl, title, description }) {
  return (

    <div className="bg-primary p-8 rounded-2xl shadow-lg text-center h-full border-t-10 border-transparent hover:border-t-[var(--color-accent)] transition-colors duration-300">
      <img 
        src={logoUrl} 
        alt={title} 
        // Logo diatur agar pas dan ditengah
        className="h-10 w-auto mx-auto mb-6 object-contain" 
      />
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </div>
  );
}

export default CustomerCard;