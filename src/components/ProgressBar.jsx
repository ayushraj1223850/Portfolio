import React, { useState, useEffect } from 'react';

const ProgressBar = ({ skill, percentage }) => {
  const [width, setWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Animate on mount
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 300);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div 
      className="mb-6 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-white-800 text-lg font-medium group-hover:text-white transition-colors duration-300">
          {skill}
        </span>
        <span className={`text-lg font-medium transition-all duration-300 
          ${isHovered ? 'text-white scale-110' : 'text-white-600'}`}
        >
          {Math.round(width)}%
        </span>
      </div>
      <div className="w-full bg-black-300 rounded-lg h-3 p-[2px] transition-all duration-300 group-hover:bg-black-500">
        <div 
          className={`relative h-full rounded-md transition-all duration-700 ease-out
            ${isHovered ? 'bg-gradient-to-r from-white via-white-700 to-white-800' : 'bg-gradient-to-r from-white-700 to-white-800'}
          `}
          style={{ 
            width: `${width}%`,
            boxShadow: isHovered ? '0 0 20px rgba(255, 255, 255, 0.2)' : 'none'
          }}
        >
          <div className={`
            absolute inset-0 rounded-md
            bg-gradient-to-r from-transparent via-white/20 to-transparent
            ${isHovered ? 'animate-pulse-slow' : ''}
          `}/>
          <div className={`
            absolute inset-0 rounded-md
            bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.2)_50%,transparent_75%)]
            bg-[length:200%_200%]
            ${isHovered ? 'animate-shimmer' : ''}
          `}/>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar; 