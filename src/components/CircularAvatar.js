import React from 'react';

const CircularAvatar = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
      {/* Main circle with gradient border */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 animate-spin-slow">
        <div className="absolute inset-[3px] rounded-full bg-[#0A0118] flex items-center justify-center">
          {/* Emoji/Avatar */}
          <div className="text-8xl md:text-9xl animate-bounce-slow">
            👨‍💻
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-purple-500/30 animate-pulse"></div>
      <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-indigo-500/30 animate-pulse-slow"></div>
      <div className="absolute top-1/2 -right-8 w-6 h-6 rounded-full bg-pink-500/30 animate-ping"></div>

      {/* Tech stack circles */}
      {[
        { icon: '⚛️', label: 'React', position: 'top-0 -right-16' },
        { icon: '🚀', label: 'Node.js', position: 'top-1/4 -left-16' },
        { icon: '🎨', label: 'UI/UX', position: 'bottom-1/4 -right-16' },
        { icon: '⚡', label: 'Fast', position: 'bottom-0 -left-16' },
      ].map((tech, index) => (
        <div
          key={tech.label}
          className={`absolute ${tech.position} flex items-center gap-2 animate-float`}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="w-12 h-12 rounded-full bg-purple-900/50 backdrop-blur-sm flex items-center justify-center text-2xl shadow-lg">
            {tech.icon}
          </div>
          <span className="text-sm font-medium text-purple-300 hidden md:block">
            {tech.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CircularAvatar; 