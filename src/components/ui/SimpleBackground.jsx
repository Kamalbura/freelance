import React from 'react';

const SimpleBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Transparent base until image is added */}
      <div className="absolute inset-0 bg-transparent" />
      
      {/* Very subtle circuit pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="simpleCircuit" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
              <path d="M0 75h150M75 0v150" stroke="#22d3ee" strokeWidth="0.5" opacity="0.3"/>
              <circle cx="75" cy="75" r="2" fill="#22d3ee" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#simpleCircuit)"/>
        </svg>
      </div>
    </div>
  );
};

export default SimpleBackground;
