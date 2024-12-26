import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { courses } from '../data/courses';
import CourseGrid from './courses/CourseGrid';

export default function FeaturedCourses() {
  const { dir } = useLanguage();

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold text-${dir === 'rtl' ? 'right' : 'left'} text-gray-900 mb-12 animate-fade-in`}>
          Featured Courses
        </h2>
        <CourseGrid courses={courses} />
      </div>
    </section>
  );
}