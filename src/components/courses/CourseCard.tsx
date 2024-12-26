import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star } from 'lucide-react';
import { Course } from '../../types/course';
import { useLanguage } from '../../contexts/LanguageContext';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const { dir } = useLanguage();
  
  return (
    <Link 
      to={`/courses/${course.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl animate-fade-in"
    >
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className={`text-xl font-semibold text-gray-900 mb-2 text-${dir === 'rtl' ? 'right' : 'left'}`}>
          {course.title}
        </h3>
        <p className={`text-gray-600 mb-4 text-${dir === 'rtl' ? 'right' : 'left'}`}>
          {course.description}
        </p>
        <div className={`flex items-center ${dir === 'rtl' ? 'justify-start' : 'justify-end'} text-sm text-gray-500`}>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mx-1" />
            {course.duration}
          </div>
          <div className="flex items-center mx-4">
            <Users className="h-4 w-4 mx-1" />
            {course.students}
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 mx-1 text-yellow-400" />
            {course.rating}
          </div>
        </div>
      </div>
    </Link>
  );
}