import React from 'react';
import { Search, BookOpen, Award } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Find Your Course",
    description: "Browse our curated selection of manufacturing courses"
  },
  {
    icon: BookOpen,
    title: "Start Learning",
    description: "Access high-quality content from industry experts"
  },
  {
    icon: Award,
    title: "Get Certified",
    description: "Earn recognized certifications in your field"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <step.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}