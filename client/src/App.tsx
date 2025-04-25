import React from 'react';
import Menu from './components/Menu';
import StoryForm from './components/StoryForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-4 font-sans">
      <Menu />
      <main>
        <h1 className="text-4xl font-extrabold text-center text-purple-700 mt-8">قصه‌های شب جادویی</h1>
        <p className="text-center mt-2 text-gray-700">یه اسم بده، یه قصه بگیر!</p>
        <StoryForm />
      </main>
      <footer id="about" className="mt-20 text-center text-sm text-gray-500">
        ساخته‌شده با عشق برای بچه‌های گل ایران
      </footer>
    </div>
  );
}

export default App;
