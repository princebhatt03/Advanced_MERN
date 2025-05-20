import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <motion.div
        className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}>
        {/* Logo or Company Name */}
        <div className="text-lg font-bold text-blue-400">AdvancedMERN</div>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <Link
            to="/"
            className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-400 transition">
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-400 transition">
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition">
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition">
            <FaTwitter />
          </a>
        </div>
      </motion.div>

      {/* Bottom Text */}
      <motion.p
        className="text-center text-sm text-gray-400 mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}>
        &copy; {new Date().getFullYear()} AdvancedMERN. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
