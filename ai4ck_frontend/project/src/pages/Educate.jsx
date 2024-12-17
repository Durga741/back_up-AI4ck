import React from 'react';
import { BookOpen, Code, Brain, Clock } from 'lucide-react';

export function Educate() {
  const aiLearningCourses = [
    {
      title: "Introduction to AI",
      description: "Learn the fundamentals of artificial intelligence and machine learning.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      level: "Beginner",
      duration: "8 weeks",
      category: "AI Fundamentals"
    },
    {
      title: "Deep Learning Specialization",
      description: "Master deep learning techniques and neural networks.",
      image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      level: "Advanced",
      duration: "12 weeks",
      category: "Deep Learning"
    }
  ];

  const aiModelingCourses = [
    {
      title: "AI Model Development",
      description: "Build and deploy AI models using modern frameworks.",
      image: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      level: "Intermediate",
      duration: "10 weeks",
      category: "Model Development"
    },
    {
      title: "Advanced AI Applications",
      description: "Create sophisticated AI applications for real-world scenarios.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      level: "Advanced",
      duration: "14 weeks",
      category: "Applications"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* AI Learning Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Learning</h2>
            <p className="text-lg text-gray-600">Master the fundamentals of artificial intelligence</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {aiLearningCourses.map((course) => (
              <div key={course.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-indigo-600">{course.category}</span>
                    <span className="text-sm text-gray-500">{course.level}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      <Clock className="inline-block w-4 h-4 mr-1" />
                      {course.duration}
                    </span>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Modeling Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Modeling</h2>
            <p className="text-lg text-gray-600">Advanced courses in AI model development</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {aiModelingCourses.map((course) => (
              <div key={course.title} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-indigo-600">{course.category}</span>
                    <span className="text-sm text-gray-500">{course.level}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      <Clock className="inline-block w-4 h-4 mr-1" />
                      {course.duration}
                    </span>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Educate;