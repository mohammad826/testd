import React from 'react';
import HeroText from './hero/HeroText';

export default function Hero() {
  return (
    <div className="relative pt-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-20">
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <HeroText />
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-blue-100 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Manufacturing Education"
                className="relative rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 -mt-20 opacity-10">
        <svg width="404" height="384" fill="none" viewBox="0 0 404 384">
          <defs>
            <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
        </svg>
      </div>
    </div>
  );
}