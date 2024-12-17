import React from 'react';
import { Menu } from '@headlessui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';

const dropdownAnimation = {
  hidden: { opacity: 0, y: -10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

export const NavDropdown = ({ item }) => {
  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <Menu.Button className="flex items-center px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors duration-200">
            <span>{item.name}</span>
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiChevronDown className="ml-1" />
            </motion.span>
          </Menu.Button>

          <Menu.Items as={motion.div}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownAnimation}
            className="absolute z-10 w-48 py-2 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
          >
            {item.dropdown.map((subItem) => (
              <Menu.Item key={subItem.path}>
                {({ active }) => (
                  <Link
                    to={subItem.path}
                    className={`${
                      active ? 'bg-purple-50 text-purple-600' : 'text-gray-700'
                    } block px-4 py-2 text-sm transition-colors duration-200`}
                  >
                    {subItem.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};