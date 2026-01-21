import React from 'react';

export const Lightbox = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" 
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full" 
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={image} 
          alt="Preview" 
          className="mx-auto max-h-[90vh] w-auto object-contain rounded shadow-2xl" 
        />
        <button 
          className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};