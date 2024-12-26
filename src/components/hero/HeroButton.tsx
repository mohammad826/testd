import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroButton() {
  return (
    <Link 
      to="/courses"
      className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all transform hover:-translate-y-1 hover:shadow-xl inline-block"
    >
      Explore Courses
    </Link>
  );
}