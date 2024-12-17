import React from 'react';
import { motion } from 'framer-motion';

export const PageComponent = ({ title }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div className="max-w-7xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold text-gray-900 mb-8"
      >
        {title}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-gray-600"
      >
        This is a placeholder page for {title}. Content will be added soon.
      </motion.p>
    </div>
  </motion.div>
);