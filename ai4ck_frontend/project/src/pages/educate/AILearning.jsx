// import React from 'react';
// import { motion } from 'framer-motion';
// import { FiBook, FiClock, FiStar, FiUser } from 'react-icons/fi';

// const courses = [
//   {
//     id: 1,
//     title: "Introduction to Artificial Intelligence",
//     description: "Learn the fundamentals of AI and machine learning",
//     duration: "8 weeks",
//     level: "Beginner",
//     rating: 4.8,
//     students: 1200,
//     image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//   },
//   {
//     id: 2,
//     title: "Machine Learning Fundamentals",
//     description: "Master the basics of machine learning algorithms",
//     duration: "10 weeks",
//     level: "Intermediate",
//     rating: 4.9,
//     students: 980,
//     image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//   },
//   {
//     id: 3,
//     title: "Deep Learning Specialization",
//     description: "Advanced deep learning and neural networks",
//     duration: "12 weeks",
//     level: "Advanced",
//     rating: 4.7,
//     students: 750,
//     image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//   }
// ];

// const AILearning = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="min-h-screen bg-gray-50"
//     >
//       {/* Hero Section */}
//       <section className="bg-purple-600 text-white py-20">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-center max-w-4xl mx-auto"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">
//               AI Learning Courses
//             </h1>
//             <p className="text-xl opacity-90">
//               Discover our comprehensive AI courses designed specifically for women in technology
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Courses Grid */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {courses.map((course, index) => (
//               <motion.div
//                 key={course.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 + index * 0.1 }}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="relative h-48">
//                   <img
//                     src={course.image}
//                     alt={course.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center text-sm text-gray-500 mb-4">
//                     <FiClock className="mr-2" />
//                     <span className="mr-4">{course.duration}</span>
//                     <FiUser className="mr-2" />
//                     <span>{course.level}</span>
//                   </div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                     {course.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4">
//                     {course.description}
//                   </p>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                       <FiStar className="text-yellow-400 mr-1" />
//                       <span className="text-gray-600">{course.rating}</span>
//                       <span className="text-gray-400 ml-2">({course.students} students)</span>
//                     </div>
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300"
//                     >
//                       Enroll Now
//                     </motion.button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </motion.div>
//   );
// };

// export default AILearning;