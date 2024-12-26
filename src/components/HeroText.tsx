import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function HeroText() {
  const { t, dir } = useLanguage();
  
  return (
    <div className={`text-${dir === 'rtl' ? 'right' : 'left'} animate-fade-in`}>
      <div className="space-y-4 stagger-children">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight lg:text-6xl">
          <span className="block animate-slide-in">Master Manufacturing</span>
          <span className="block text-blue-600 animate-slide-in">Skills Online</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 animate-slide-in">
          Access premium manufacturing courses from industry experts. Learn practical skills, 
          earn certifications, and advance your career in manufacturing.
        </p>
        <div className="pt-4 animate-scale-in">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all transform hover:-translate-y-1 hover:shadow-xl">
            Explore Courses
          </button>
        </div>
      </div>
    </div>
  );
}