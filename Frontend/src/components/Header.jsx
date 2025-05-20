import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold text-blue-600"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}>
          AdvancedMERN
        </motion.h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition duration-300">
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 transition duration-300">
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-blue-600 transition duration-300">
            Contact
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <div
          className="md:hidden text-gray-700 text-2xl cursor-pointer"
          onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white px-4 py-4 flex flex-col gap-4 shadow-md"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}>
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition duration-300"
            onClick={toggleMenu}>
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 transition duration-300"
            onClick={toggleMenu}>
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-blue-600 transition duration-300"
            onClick={toggleMenu}>
            Contact
          </Link>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
