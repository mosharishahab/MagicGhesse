import React from 'react';
import { FaHome, FaMagic, FaInfoCircle } from 'react-icons/fa';

const Menu = () => {
  return (
    <nav className="bg-gradient-to-r from-pink-200 via-purple-200 to-yellow-100 text-purple-800 p-4 rounded-xl shadow-md flex justify-center gap-6 font-bold text-lg tracking-wide border-2 border-purple-300">
      <a href="/" className="flex items-center gap-2 hover:text-purple-600 transition">
        <FaHome /> خانه
      </a>
      <a href="#story" className="flex items-center gap-2 hover:text-purple-600 transition">
        <FaMagic /> قصه بساز
      </a>
      <a href="#about" className="flex items-center gap-2 hover:text-purple-600 transition">
        <FaInfoCircle /> درباره ما
      </a>
    </nav>
  );
};

export default Menu;
