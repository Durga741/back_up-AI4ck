import React from 'react';
import { motion } from 'framer-motion';
import { FiLayers, FiCode, FiDatabase, FiCpu } from 'react-icons/fi';

const AIModeling = () => {
  const features = [
    {
      icon: <FiLayers />,
      title: "Model Architecture",
      description: "Learn to design and implement various AI model architectures"
    },
    {
      icon: <FiCode />,
      title: "Implementation",
      description: "Hands-on experience with popular AI frameworks and tools"
    },
    {
      icon: <FiDatabase />,
      title: "Data Processing",
      description: "Master data preprocessing and feature engineering techniques"
    },
    {
      icon: <FiCpu />,
      title: "Model Optimization",
      description: "Optimize AI models for better performance and efficiency"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Modeling & Design
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Master the art and science of building sophisticated AI models
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-purple-600 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Start Learning
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-purple-600 text-3xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AIModeling;