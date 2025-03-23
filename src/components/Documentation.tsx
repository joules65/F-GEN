import React, { useState, useEffect } from 'react';
import { BookOpen, Code, FileText, ArrowRight, MousePointer } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';

const Documentation = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  // Track mouse position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Update parallax effect based on mouse position
  useEffect(() => {
    controls.start({
      x: mousePosition.x * 20,
      y: mousePosition.y * 20,
      transition: { type: "spring", stiffness: 100, damping: 30 }
    });
  }, [mousePosition, controls]);

  const docs = [
    {
      icon: <BookOpen className="w-6 h-6 text-white" />,
      title: "Getting Started",
      description: "Quick Pitch Deck and basic concepts of F-gen's healthcare platform",
      link: "https://pitch.com/v/f-gen-pitch-deck-abavmm",
      animIcon: () => (
        <motion.div 
          className="relative w-10 h-10"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
        >
          <motion.div 
            className="absolute inset-0"
            animate={{ 
              rotateY: [0, 180],
              opacity: [1, 0.8, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            <BookOpen className="w-10 h-10 text-white" />
          </motion.div>
        </motion.div>
      ),
      preview: [
        "Our Story",
        "Our Mission",
        "Market Analysis",
        "Statistics",
        "Business Model"
      ]
    },
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: "Work Book",
      description: "Complete documentation with examples and use cases",
      link: "https://docs.google.com/spreadsheets/d/1Wuqy_LuCtouIlTgz4Z6HPkfUWjT_Fbsa1uXnXNbQwfg/edit?usp=sharing",
      animIcon: () => (
        <div className="relative w-10 h-10 flex items-center justify-center">
          <motion.div
            animate={{ 
              opacity: [0, 1, 0],
              y: [10, 0, 10]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop", staggerChildren: 0.2 }}
            className="flex space-x-1 absolute"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div 
                key={i}
                className="w-1.5 h-6 bg-white rounded-full"
                animate={{ 
                  height: [6, 10, 6],
                  y: [0, -2, 0]
                }}
                transition={{ 
                  duration: 0.4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.1
                }}
              />
            ))}
          </motion.div>
          <Code className="w-10 h-10 text-white absolute opacity-20" />
        </div>
      ),
      preview: [
        "Team",
        "PESTLE Analysis",
        "Templates",
        "SWOT Analysis",
        "Lean Canvas"
      ]
    },
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "Integration Guide",
      description: "Github Repository with steps to download application prototype.",
      link: "https://github.com/joules65/Kiongozi-Mockup-Prototype",
      animIcon: () => (
        <div className="relative w-10 h-10">
          <motion.div
            className="absolute inset-0"
            animate={{ 
              rotateY: [0, 360],
              opacity: [1, 0.7, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <FileText className="w-10 h-10 text-white" />
          </motion.div>
          <motion.div 
            className="absolute inset-0 w-10 h-10 border-2 border-white rounded-md opacity-30"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.1, 0.3]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      ),
      preview: [
        "System Requirements",
        "Application UI/UX",
        "Development Build",
        "Security Measures",
        "Expo Go"
      ]
    }
  ];

  // Card hover variants
  const cardVariants = {
    initial: { 
      y: 0, 
      backgroundColor: "rgb(250 250 249)",
      borderColor: "rgb(250 250 249)"
    },
    hover: { 
      y: -10,
      backgroundColor: "rgb(17 24 39)",
      borderColor: "rgb(45 212 191)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10,
        backgroundColor: { duration: 0.2 }
      }
    },
    active: {
      y: -10,
      backgroundColor: "rgb(17 24 39)",
      borderColor: "rgb(45 212 191)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10,
        backgroundColor: { duration: 0.2 }
      }
    }
  };

  const textVariants = {
    initial: { color: "rgb(31 41 55)" },
    hover: { color: "rgb(255 255 255)" },
    active: { color: "rgb(255 255 255)" }
  };

  const descTextVariants = {
    initial: { color: "rgb(107 114 128)" },
    hover: { color: "rgb(209 213 219)" },
    active: { color: "rgb(209 213 219)" }
  };

  const linkVariants = {
    initial: { color: "rgb(20 184 166)" },
    hover: { color: "rgb(250 204 21)" },
    active: { color: "rgb(250 204 21)" }
  };

  const arrowVariants = {
    initial: { x: 0 },
    hover: { x: 5 },
    active: { x: 5 }
  };

  // Preview list animation
  const listVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.3, delay: 0.1 }
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };
  
  // Handle direct navigation to link
  const handleNavigation = (link) => {
    window.location.href = link;
  };

  return (
    <div className="py-32 relative bg-stone-50 overflow-hidden">
      {/* Subtle background elements */}
      <motion.div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        animate={controls}
      >
        <div className="absolute top-40 -left-20 w-64 h-64 rounded-full bg-teal-200 mix-blend-multiply blur-3xl opacity-20" />
        <div className="absolute bottom-40 -right-20 w-80 h-80 rounded-full bg-emerald-200 mix-blend-multiply blur-3xl opacity-20" />
      </motion.div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-teal-500 opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm sm:text-base text-teal-500 font-mono tracking-wider"
          >
            BEHIND THE SCENES
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-5xl font-bold gradient-text"
            style={{
              background: "linear-gradient(to right, #0d9488, #115e59)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Build with Confidence
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Comprehensive documentation and resources to highlight F-gen's healthcare solutions.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {docs.map((doc, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileHover={activeCard === null ? "hover" : ""}
              animate={activeCard === index ? "active" : "initial"}
              onClick={() => {
                setActiveCard(activeCard === index ? null : index);
              }}
              variants={cardVariants}
              className="hover-card group p-8 rounded-2xl border transition-all duration-300 backdrop-blur-xl shadow-md relative overflow-hidden cursor-pointer"
            >
              {/* Background gradient overlay that appears on hover */}
              <motion.div 
                className="absolute inset-0 opacity-0 bg-gradient-to-br from-teal-600/20 to-teal-900/10"
                variants={{
                  initial: { opacity: 0 },
                  hover: { opacity: 1 },
                  active: { opacity: 1 }
                }}
              />
              
              {/* Icon background */}
              <motion.div 
                className="mb-6 p-4 rounded-xl inline-block relative z-10 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #0d9488 0%, #115e59 100%)",
                }}
              >
                {activeCard === index ? doc.animIcon() : doc.icon}
                
                {/* Animated border */}
                <motion.div 
                  className="absolute inset-0 opacity-30"
                  animate={{
                    background: [
                      "linear-gradient(0deg, transparent 0%, white 50%, transparent 100%)",
                      "linear-gradient(90deg, transparent 0%, white 50%, transparent 100%)",
                      "linear-gradient(180deg, transparent 0%, white 50%, transparent 100%)",
                      "linear-gradient(270deg, transparent 0%, white 50%, transparent 100%)",
                      "linear-gradient(360deg, transparent 0%, white 50%, transparent 100%)",
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
                />
              </motion.div>
              
              {/* Title text */}
              <motion.h3 
                className="text-xl font-semibold mb-3 transition-colors"
                variants={textVariants}
              >
                {doc.title}
              </motion.h3>
              
              {/* Description text */}
              <motion.p 
                className="mb-6 transition-colors"
                variants={descTextVariants}
              >
                {doc.description}
              </motion.p>
              
              {/* Direct Link Button */}
              <a 
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center transition-colors z-20 relative"
              >
                <motion.span 
                  className="mr-2"
                  variants={linkVariants}
                >
                  Learn more
                </motion.span>
                <motion.div
                  variants={arrowVariants}
                >
                  <ArrowRight className="w-4 h-4 transition-transform" />
                </motion.div>
              </a>
              
              {/* Preview content that appears when clicked */}
              <motion.div
                variants={listVariants}
                initial="hidden"
                animate={activeCard === index ? "visible" : "hidden"}
                className="mt-6 overflow-hidden"
              >
                <div className="pt-4 border-t border-gray-700">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-300 mb-3 text-sm"
                  >
                    Inside this section:
                  </motion.p>
                  <ul className="space-y-2">
                    {doc.preview.map((item, i) => (
                      <motion.li
                        key={i}
                        variants={listItemVariants}
                        custom={i}
                        initial="hidden"
                        animate={activeCard === index ? "visible" : "hidden"}
                        transition={{ delay: 0.1 + (i * 0.1) }}
                        className="flex items-center text-gray-300"
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                          className="w-1 h-1 bg-teal-400 rounded-full mr-2"
                        />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                    }}
                    transition={{ delay: 0.5 }}
                    className="mt-4 pt-4 border-t border-gray-700 flex items-center justify-between"
                  >
                    <a 
                      href={doc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-emerald-400 text-sm flex items-center hover:underline z-20 relative"
                    >
                      <MousePointer className="w-3 h-3 mr-1" />
                      Click to view full docs
                    </a>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity
                      }}
                    >
                      <ArrowRight className="w-4 h-4 text-emerald-400" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documentation;