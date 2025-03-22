import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://res.cloudinary.com/dhkscpkf5/image/upload/v1742648830/david-vives-l_ov5A67rI4-unsplash_kjcp8c.jpg",
  "https://res.cloudinary.com/dhkscpkf5/image/upload/v1742648827/samuel-scalzo-iqGtaQnk3VM-unsplash_k4qdg8.jpg",
  "https://res.cloudinary.com/dhkscpkf5/image/upload/v1742648826/p-l-FfJJD6SCcvs-unsplash_h3xjck.jpg",
  "https://res.cloudinary.com/dhkscpkf5/image/upload/v1742648845/andy-vult-zwZpdhoTbU0-unsplash_al5qfq.jpg",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  // Image slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animation on load
  useEffect(() => {
    setIsVisible(true);
    
    // Optional: Intersection Observer for scroll-based animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  // Calculate indicator positions
  const indicators = Array.from({ length: images.length });

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 sm:px-12 bg-cover bg-center overflow-hidden"
    >
      {/* Background Images with Enhanced Transition */}
      <AnimatePresence>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0, scale: index === currentImage ? 1.05 : 1 }}
            animate={{ 
              opacity: index === currentImage ? 1 : 0,
              scale: index === currentImage ? 1 : 1.05
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        ))}
      </AnimatePresence>

      {/* Enhanced Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-0"></div>

      {/* Content Wrapper */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="max-w-5xl mx-auto flex flex-col items-center justify-center space-y-8 relative z-10"
      >
        {/* Animated Logo */}
        <motion.div
          variants={itemVariants}
          className="relative"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-50 blur-sm"
          />
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg relative z-10">
            <img src="/logo.png" alt="Logo" className="w-24 h-24" />
          </div>
        </motion.div>

        {/* Main Heading with Mask Animation */}
        <motion.div variants={itemVariants} className="overflow-hidden">
          <motion.h1
            className="text-4xl sm:text-6xl font-extrabold leading-tight text-white"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">
              Transforming Healthcare
            </span>
            <br />
            <span className="text-white">with the community and AI</span>
          </motion.h1>
        </motion.div>

        {/* Subheading with typing animation */}
        <motion.p
          variants={itemVariants}
          className="mt-4 text-xl text-gray-200 max-w-3xl mx-auto font-light"
        >
          Revolutionizing first aid and emergency response through
          <span className="text-yellow-400 font-medium ml-2">
            smart AI-driven solutions.
          </span>
        </motion.p>

        {/* Call to Action Buttons - Improved Layout */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md justify-center"
        >
          <motion.a
            href="/documentation"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="px-8 py-4 bg-gradient-to-r from-red-800 to-red-600 text-white font-bold rounded-full shadow-lg text-lg flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Documentation
          </motion.a>
          <motion.a
            href="/prototype"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white font-bold rounded-full shadow-lg text-lg flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            Prototype
          </motion.a>
        </motion.div>

        {/* Image Indicators - Improved Positioning */}
        <motion.div 
          variants={itemVariants}
          className="flex gap-3 mt-6"
        >
          {indicators.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentImage === index ? "bg-yellow-400" : "bg-gray-400 bg-opacity-60"
              } focus:outline-none`}
              onClick={() => setCurrentImage(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={currentImage === index ? { 
                scale: [1, 1.2, 1],
                transition: { duration: 1, repeat: Infinity }
              } : {}}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator - Better Positioning */}
      <motion.div
        variants={itemVariants}
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: 1,
          y: [0, 10, 0],
          transition: { 
            opacity: { delay: 1.5, duration: 0.5 },
            y: { delay: 1.5, duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-yellow-400 text-sm mb-2 font-light">Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;