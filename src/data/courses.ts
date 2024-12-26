import { Course } from '../types/course';

export const courses: Course[] = [
  {
    id: 'cnc-machining',
    title: "CNC Machining Fundamentals",
    description: "Master the basics of CNC programming and operation",
    duration: "8 weeks",
    students: "1.2k",
    rating: 4.8,
    price: 299,
    instructor: "Dr. Sarah Miller",
    image: "https://images.unsplash.com/photo-1565439311799-5d6d49bb4705",
    fullDescription: "This comprehensive course covers all aspects of CNC machining, from basic principles to advanced techniques. Learn programming, setup, and operation of CNC machines through hands-on projects and real-world applications.",
    learningOutcomes: [
      "Understand CNC programming fundamentals",
      "Master machine setup and operation",
      "Learn tool selection and optimization",
      "Develop troubleshooting skills",
      "Create complex machining programs"
    ],
    requirements: [
      "Basic understanding of manufacturing processes",
      "Familiarity with technical drawings",
      "Access to a computer for CAD/CAM software"
    ],
    includes: [
      "80+ hours of video content",
      "Downloadable resources",
      "Certificate of completion",
      "Lifetime access",
      "24/7 support"
    ]
  },
  {
    id: 'quality-control',
    title: "Quality Control Essentials",
    description: "Learn modern quality control techniques and standards",
    duration: "6 weeks",
    students: "950",
    rating: 4.7,
    price: 249,
    instructor: "Michael Chen",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
    fullDescription: "Master the essential techniques and methodologies of modern quality control. This course covers statistical process control, measurement systems analysis, and quality management systems.",
    learningOutcomes: [
      "Implement statistical process control",
      "Conduct measurement system analysis",
      "Apply Six Sigma principles",
      "Develop quality management systems",
      "Lead quality improvement projects"
    ],
    requirements: [
      "Basic statistics knowledge",
      "Manufacturing industry experience",
      "Excel proficiency"
    ],
    includes: [
      "60+ hours of video content",
      "Practice exercises",
      "Real-world case studies",
      "Industry templates",
      "Professional certification prep"
    ]
  },
  {
    id: 'industrial-automation',
    title: "Industrial Automation",
    description: "Comprehensive guide to automation systems",
    duration: "10 weeks",
    students: "2.1k",
    rating: 4.9,
    price: 399,
    instructor: "Prof. James Wilson",
    image: "https://images.unsplash.com/photo-1565439312352-5b3dd4e0bc96",
    fullDescription: "Dive deep into industrial automation systems, including PLCs, SCADA, and industrial networks. Learn to design, implement, and maintain modern automated manufacturing systems.",
    learningOutcomes: [
      "Program PLCs and industrial controllers",
      "Design SCADA systems",
      "Implement industrial networks",
      "Configure sensors and actuators",
      "Develop HMI applications"
    ],
    requirements: [
      "Basic electrical knowledge",
      "Programming fundamentals",
      "Industrial safety awareness"
    ],
    includes: [
      "100+ hours of video content",
      "Virtual PLC simulator access",
      "Project files",
      "Industry certification prep",
      "Expert consultation sessions"
    ]
  }
];