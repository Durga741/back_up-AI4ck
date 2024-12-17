import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://192.168.20.14:1337/api/ai-courses?populate=Image'); // Include 'populate=Image'
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();

        if (result.data) {
          const formattedCourses = result.data.map((course) => ({
            id: course.id,
            title: course.Title || 'Untitled Course',
            description: course.Description || 'No description available.',
            duration: `${course.Duration} weeks` || 'Duration not specified',
            price: `₹${course.cost}` || 'Price not available',
            image: course.Image?.url || '', // Use full-size image URL
          }));
          setCourses(formattedCourses);
        } else {
          setError('No courses found');
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching courses:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return ;
  }

  if (error) {
    return <div className="text-center py-20">Error: {error}</div>;
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Ai4CoolKids Learning Courses</h1>
            <p className="text-xl opacity-90">
              Discover our comprehensive AI courses designed specifically for women in AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative pb-48">
                  {course.image ? (
                    <img
                      className="absolute h-full w-full object-cover"
                      src={`http://192.168.20.14:1337${course.image}`} // Construct the full image URL
                      alt={course.title}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-700 font-bold">No Image Available</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-700 mb-4">{course.description}</p>
                  <div className="flex items-center mb-4">
                    <span className="ml-1 text-gray-600">Duration: {course.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                      <Link to="/register">Enroll Now</Link>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Course;
