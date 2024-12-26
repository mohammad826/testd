import React from 'react';
import CourseCard from './CourseCard';
import { Course } from '../../types/course';

interface CourseGridProps {
  courses: Course[];
}

export default function CourseGrid({ courses }: CourseGridProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8 stagger-children">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}