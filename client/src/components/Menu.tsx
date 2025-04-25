import React from 'react';

const Menu = () => {
  return (
    <nav className="bg-purple-100 text-purple-800 p-4 rounded-md shadow-md flex justify-center gap-8 font-bold text-lg">
      <a href="/" className="hover:text-purple-600">خانه</a>
      <a href="#story" className="hover:text-purple-600">قصه بساز</a>
      <a href="#about" className="hover:text-purple-600">درباره ما</a>
    </nav>
  );
};

export default Menu;
