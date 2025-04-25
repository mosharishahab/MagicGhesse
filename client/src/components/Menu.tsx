import React from 'react';
import { FaHome, FaMagic, FaInfoCircle } from 'react-icons/fa';

const Menu = () => {
  return (
    <nav className="bg-pink-100 border-4 border-purple-300 text-purple-800 p-4 rounded-full shadow-xl flex justify-center gap-10 font-bold text-lg tracking-wider animate-bounce-slow">
      <a href="/" className="flex items-center gap-2 hover:text-fuchsia-600 transition-all duration-300">
        <FaHome className="text-xl" /> خانه
      </a>
      <a href="#story" className="flex items-center gap-2 hover:text-fuchsia-600 transition-all duration-300">
        <FaMagic className="text-xl" /> قصه بساز
      </a>
      <a href="#about" className="flex items-center gap-2 hover:text-fuchsia-600 transition-all duration-300">
        <FaInfoCircle className="text-xl" /> درباره ما
      </a>
    </nav>
  );
};

export default Menu;
