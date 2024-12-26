import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The quality of instruction and hands-on projects helped me secure a promotion at work.",
    author: "Sarah Johnson",
    role: "Production Manager",
    company: "Tesla Manufacturing"
  },
  {
    quote: "These courses filled the gaps in my knowledge and made me more confident in my role.",
    author: "Michael Chen",
    role: "Quality Control Specialist",
    company: "Boeing"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Students Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              <p className="text-gray-600 mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}