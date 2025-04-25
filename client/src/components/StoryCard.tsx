import React from 'react';

interface StoryCardProps {
  story: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <div className="mt-8 mx-auto max-w-xl bg-yellow-100 border-l-4 border-yellow-400 p-6 rounded shadow animate-fade-in">
      <h3 className="text-xl font-bold mb-2 text-yellow-700">قصه‌ی شما:</h3>
      <p className="text-gray-800 leading-relaxed">{story}</p>
    </div>
  );
};

export default StoryCard;
