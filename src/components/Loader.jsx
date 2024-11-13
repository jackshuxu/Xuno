// src/components/Loader.jsx

import React from "react";

const Loader = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-6">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-white rounded-full animate-bounce animation-delay-200"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce animation-delay-400"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce animation-delay-600"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce animation-delay-800"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce animation-delay-1000"></div>
      </div>
      <p className="text-gray-400">{title}</p>
    </div>
  );
};

export default Loader;
