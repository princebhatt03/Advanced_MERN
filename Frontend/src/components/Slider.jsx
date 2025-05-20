import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const images = [
  '/Slider-Images/img1.jpg',
  '/Slider-Images/img2.jpg',
  '/Slider-Images/img3.jpeg',
  '/Slider-Images/img4.jpeg',
  '/Slider-Images/img5.jpeg',
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-10 overflow-hidden rounded-xl shadow-lg">
      <div className="relative h-64 sm:h-80 md:h-[400px] lg:h-[500px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={`Slide ${current + 1}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="absolute w-full h-full object-cover object-center"
          />
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full text-gray-700 hover:bg-white transition z-10">
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full text-gray-700 hover:bg-white transition z-10">
          <FaArrowRight />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? 'bg-blue-500 scale-110' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
