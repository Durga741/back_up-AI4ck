// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { navigation } from '../../data/navigationData';
// import { NavDropdown } from './NavDropdown';
// import { MobileNav } from './MobileNav';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const isActive = (path) => {
//     return location.pathname === path;
//   };

//   return (
//     <nav className="bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex-shrink-0">
//               <motion.span 
//                 className="text-2xl font-bold text-purple-600"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Ai4CoolKids
//               </motion.span>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex md:items-center md:space-x-4">
//             {navigation.main.map((item) => (
//               <div key={item.name}>
//                 {item.dropdown ? (
//                   <NavDropdown item={item} />
//                 ) : (
//                   <motion.div
//                     whileHover={{ y: -2 }}
//                     whileTap={{ y: 0 }}
//                   >
//                     <Link
//                       to={item.path}
//                       className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
//                         isActive(item.path)
//                           ? 'text-purple-600'
//                           : 'text-gray-700 hover:text-purple-600'
//                       }`}
//                     >
//                       {item.name}
//                     </Link>
//                   </motion.div>
//                 )}
//               </div>
//             ))}
//             <div className="ml-4 flex items-center space-x-2">
//               {navigation.auth.map((item) => (
//                 <motion.div
//                   key={item.name}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Link
//                     to={item.path}
//                     className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
//                       item.name === 'Login'
//                         ? 'text-purple-600 border border-purple-600 hover:bg-purple-50'
//                         : 'bg-purple-600 text-white hover:bg-purple-700'
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <motion.button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50"
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="sr-only">Open main menu</span>
//               <motion.svg
//                 animate={{ rotate: isOpen ? 90 : 0 }}
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </motion.svg>
//             </motion.button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <MobileNav isOpen={isOpen} navigation={navigation} setIsOpen={setIsOpen} />
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navigation } from '../../data/navigationData';
import { NavDropdown } from './NavDropdown';
import { MobileNav } from './MobileNav';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check active path
  const isActive = (path) => location.pathname === path;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white shadow-md transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <motion.span
                className="text-2xl font-bold text-purple-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ai4CoolKids
              </motion.span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navigation.main.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <NavDropdown item={item} />
                ) : (
                  <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                    <Link
                      to={item.path}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        isActive(item.path)
                          ? 'text-purple-600'
                          : 'text-gray-700 hover:text-purple-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )}
              </div>
            ))}
            <div className="ml-4 flex items-center space-x-2">
              {navigation.auth.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                      item.name === 'Login'
                        ? 'text-purple-600 border border-purple-600 hover:bg-purple-50'
                        : 'bg-purple-600 text-white hover:bg-purple-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              <motion.svg
                animate={{ rotate: isOpen ? 90 : 0 }}
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isOpen} navigation={navigation} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Navbar;
