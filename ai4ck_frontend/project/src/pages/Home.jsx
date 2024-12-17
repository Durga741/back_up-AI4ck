import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { FaUserGraduate, FaCertificate, FaClock, FaUsers, FaQuoteLeft } from 'react-icons/fa';

// Features and Stats Data
const features = [
  {
    icon: <FaUserGraduate className="w-6 h-6" />,
    title: 'Innovative Curriculum Tailored for Kids',
    description: 'Stress how the courses are specifically designed to be engaging and age-appropriate.',
  },
  {
    icon: <FaCertificate className="w-6 h-6" />,
    title: 'Creating the AI Innovators of Tomorrow',
    description: 'Position your platform as a space for nurturing the next generation of AI innovators.',
  },
  {
    icon: <FaClock className="w-6 h-6" />,
    title: 'Empowering Young Minds with Cloud Expertise',
    description: 'Highlight the platform’s mission to nurture technological curiosity and expertise in cloud computing.',
  },
  {
    icon: <FaUsers className="w-6 h-6" />,
    title: 'Build AI Models with Kids in Mind',
    description: 'Stress how your AI/ML curriculum is specially designed for young minds to grasp advanced topics.',
  },
];

const stats = [
  { number: '2+', text: 'Number Of Courses' },
  { number: '20+', text: 'Total Trainers' },
  { number: '50+', text: 'Total Batches & Numbers' },
  { number: '1k+', text: 'Students Registered' },
];

const AboutStats = () => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
    {stats.map((stat, index) => (
      <motion.div
        key={index}
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white p-6 rounded-lg shadow-lg text-center group hover:bg-blue-600 transition-all duration-300"
      >
        <h3 className="text-3xl font-bold text-blue-600 group-hover:text-white mb-2">{stat.number}</h3>
        <p className="text-gray-600 group-hover:text-white/90">{stat.text}</p>
      </motion.div>
    ))}
  </div>
);

const AboutFeatures = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {features.map((feature, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div className="text-blue-600 p-3 bg-blue-50 rounded-lg">{feature.icon}</div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

const PopularCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://192.168.20.14:1337/api/ai-courses?populate=Image');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        if (result.data) {
          setCourses(
            result.data.map((course) => ({
              id: course.id,
              title: course.Title,
              description: course.Description,
              duration: `${course.Duration} weeks`,
              image: course.Image?.url
                ? `http://192.168.20.14:1337${course.Image.url}`
                : '/default-course.jpg',
              price: `₹${course.cost}`,
            }))
          );
        }
      } catch (err) {
        setError(err.message);
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Popular AI Courses</h2>
          <p className="mt-4 text-xl text-gray-600">Learn from our most demanded AI courses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative pb-48">
                <img
                  className="absolute h-full w-full object-cover"
                  src={course.image}
                  alt={course.title}
                  onError={(e) => (e.target.src = '/default-course.jpg')}
                />
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
  );
};

const OurPartners = () => {
  const bgImageUrl = "https://cloud4coolkids.com/assets/front/images/about.png";

  return (
    <section
      className="py-20 bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${bgImageUrl})`,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Our Partners</h2>
          <h3 className="text-2xl font-semibold mt-4">Our Partnership with Cloud4coolkids</h3>
          <p className="mt-4 text-xl">We are proud to collaborate with these amazing organizations.</p>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-white bg-opacity-20 backdrop-blur-md text-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <a
              href="https://cloud4coolkids.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center font-semibold text-white-500 hover:text-white-600 transition"
            >
              Cloud4coolkids
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('http://192.168.20.14:1337/api/testimonials');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        if (result.data) {
          setTestimonials(
            result.data.map((testimonial) => ({
              id: testimonial.id,
              name: testimonial.Name,
              feedback: testimonial.Description,
            }))
          );
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return ;
  }

  if (error) {
    return <div className="text-center py-20">Error: {error}</div>;
  }

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">What Our Students Say</h2>
          <p className="mt-4 text-xl text-gray-600">Hear from those who have benefited from Ai4CoolKids.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 font-bold">{testimonial.name[0]}</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                </div>
              </div>
              <p className="text-gray-600 italic">
                <FaQuoteLeft className="text-blue-600 inline-block mr-2" />
                {testimonial.feedback}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => (
  <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue">
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative pt-16 pb-32 flex content-center items-center justify-center"
      style={{ minHeight: '85vh' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-6/12 px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              AI & ML: The Future is Now for Kids <span className="text-purple-600">AI4CoolKids</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Join our community of ambitious students learning and excelling in AI with AI4CoolKids.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/course"
                className="px-8 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors duration-300 flex items-center"
              >
                Start Learning <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-6/12 px-4 mt-12 lg:mt-0"
          >
            <img src="./public/bg_1.png" alt="AI4coolkids" />
          </motion.div>
        </div>
      </div>
    </motion.section>

    <section
      className="py-10 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('./public/bg 4.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-opacity-70 py-10 rounded-md max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Why Choose Us?</h2>
          <p className="mt-4 text-xl text-white">
            Ai4CoolKids offers unique benefits tailored to support women in their learning journey.
          </p>
        </div>
        <AboutFeatures />
      </div>
    </section>

    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Our Achievements</h2>
          <p className="mt-4 text-xl text-gray-600">We’re proud of our milestones over the years.</p>
        </div>
        <AboutStats />
      </div>
    </section>

    <PopularCourses />
    <OurPartners />
    <Testimonials />
  </div>
);

export default Home;
