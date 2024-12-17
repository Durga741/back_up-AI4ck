import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [addressData, setAddressData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const links = {
    'Quick Links': [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about/ai-mahila' },
      { name: 'Courses', path: '/course' },
      { name: 'ContactUs', path: '/contact' }
    ],
    'Support': [
      { name: 'Help Center', path: '/help' },
      { name: 'Terms and Conditions', path: '/terms' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'FAQ', path: '/faq' }
    ]
  };

  const socialLinks = [
    { icon: <FaFacebook />, url: '#', label: 'Facebook' },
    { icon: <FaTwitter />, url: '#', label: 'Twitter' },
    { icon: <FaInstagram />, url: '#', label: 'Instagram' },
    { icon: <FaLinkedin />, url: '#', label: 'LinkedIn' },
    { icon: <FaYoutube />, url: '#', label: 'YouTube' }
  ];

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const response = await fetch('http://192.168.20.14:1337/api/footers');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        if (result.data) {
          setAddressData(
            result.data.map((item) => ({
              id: item.id,
              name: item.name,
              address: item.address,
              lat: item.lat,
              lng: item.lng
            }))
          );
        } else {
          setAddressData([]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAddress();
  }, []);

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const handleMapClick = (lat, lng) => {
    const mapUrl = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(mapUrl, "_blank");
  };

  if (loading) {
    return ;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <img
              src="https://visyscloudtech.com/wp-content/uploads/2023/01/visys_1-1.png"
              alt="Company Logo"
              className="w-40 h-auto"
            />
            <p className="text-gray-400 text-md">
              VISYS Cloud Technologies is committed to providing innovative solutions, advanced courses, and exceptional support to our users and clients worldwide.
            </p>
          </motion.div>

          {/* Quick Links and Support */}
          {Object.entries(links).map(([category, items]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleLinkClick(item.path)}
                      className="text-gray-400 hover:text-white transition duration-300"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Address Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-lg font-semibold mb-4">Our Address</h4>
            <ul className="space-y-3">
              {addressData.map((item) => (
                <li key={item.id} className="text-gray-400 hover:text-white transition duration-300">
                  <div className="flex items-start space-x-3">
                    <FaMapMarkerAlt
                      className="text-2xl md:text-3xl cursor-pointer"
                      onClick={() => handleMapClick(item.lat, item.lng)}
                    />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p>{item.address}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links and Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-between items-center py-4 border-t border-gray-800"
        >
          <div className="flex space-x-6 mb-4 sm:mb-0">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110"
                aria-label={social.label}
              >
                <span className="text-xl sm:text-2xl">{social.icon}</span>
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-right">
            Copyright © 2024, VISYS CLOUD TECHNOLOGIES INDIA. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
