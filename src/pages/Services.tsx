import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Stethoscope, Brain, Database, Shield, Clock, Users } from 'lucide-react';

const ServicesMindMap = () => {
  const [activeService, setActiveService] = useState(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const controls = useAnimation();

  // Track window size for responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Initialize size
    handleResize();
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const services = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Remote Patient Monitoring",
      description: "24/7 real-time monitoring of patient vitals with AI-powered alerts.",
      features: ["Real-time vitals tracking", "Automated alerts", "Trend analysis", "Mobile app integration"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Voice Based First Aid",
      description: "Advanced ML support with step-by-step emergency instructions.",
      features: ["Step-by-step CPR", "Multi-language", "Risk assessment", "Hands-free operation"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Health Records Management",
      description: "Secure, blockchain-verified electronic health records system.",
      features: ["Encrypted storage", "Easy access", "Interoperability", "Audit trails"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Solutions",
      description: "Enterprise-grade security with HIPAA compliance and encryption.",
      features: ["End-to-end encryption", "Access control", "Compliance", "Threat detection"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Workflow Optimization",
      description: "Streamlined clinical workflows with automated task management.",
      features: ["Task automation", "Resource scheduling", "Analytics", "Custom workflows"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Smart Emergency Devices",
      description: "IoT connectivity with smart first aid kits and health monitoring.",
      features: ["Toll-Free Call", "Remote monitoring", "Auto detection", "Mobile integration"]
    }
  ];

  // Calculate responsive radius based on screen size and device orientation
  const getRadius = () => {
    // Smaller radius for mobile devices
    if (windowSize.width < 640) return Math.min(windowSize.width * 0.35, 120);
    // Medium radius for tablets
    if (windowSize.width < 1024) return Math.min(windowSize.width * 0.25, 160);
    // Larger radius for desktop
    return Math.min(windowSize.width * 0.2, 200);
  };

  // Calculate positions in a circular arrangement with responsive radius
  const calculateNodePosition = (index, total) => {
    const radius = getRadius();
    // Start from the top position and distribute evenly
    const angleOffset = Math.PI; // Start from bottom
    const angle = (Math.PI * 2 * index / total) + angleOffset;
    
    // Calculate x and y positions
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    
    return { x, y };
  };

  // Responsive card sizing
  const getCardSize = () => {
    if (windowSize.width < 640) return { width: 110, height: 80 };
    if (windowSize.width < 1024) return { width: 130, height: 90 };
    return { width: 150, height: 100 };
  };

  const cardSize = getCardSize();
  const { width: cardWidth, height: cardHeight } = cardSize;

  // Card animations
  const nodeVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i) => ({
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 15,
        delay: i * 0.1
      }
    }),
    hover: { 
      scale: 1.05, 
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      zIndex: 10,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.98 }
  };

  // Feature list animations
  const featureListVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  // Connection line animations
  const connectionVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: (i) => ({
      pathLength: 1,
      opacity: 0.5,
      transition: { 
        delay: 0.5 + (i * 0.05), 
        duration: 1,
        ease: "easeInOut"
      }
    }),
    active: {
      opacity: 0.8,
      strokeWidth: 3,
      transition: { duration: 0.3 }
    },
    inactive: {
      opacity: 0.3,
      strokeWidth: 1.5,
      transition: { duration: 0.3 }
    }
  };

  // Central hub animations
  const hubVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        delay: 0.2
      }
    },
    pulse: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 0 rgba(0, 181, 173, 0.4)",
        "0 0 20px rgba(0, 181, 173, 0.6)",
        "0 0 0 rgba(0, 181, 173, 0.4)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  // Responsive hub size
  const getHubSize = () => {
    if (windowSize.width < 640) return 60;
    if (windowSize.width < 1024) return 70;
    return 80;
  };
  
  const hubSize = getHubSize();

  // Get mind map container height based on screen size
  const getMindMapHeight = () => {
    if (windowSize.width < 640) return 450; // Mobile
    if (windowSize.width < 1024) return 500; // Tablet
    return 600; // Desktop
  };

  // Get responsive canvas height for mindmap
  const mindMapHeight = getMindMapHeight();

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4 space-y-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm sm:text-base text-teal-500 font-mono tracking-wider"
          >
            OUR SERVICES
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-600"
          >
            Healthcare Solutions
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base"
          >
            Comprehensive healthcare technology solutions designed to improve patient care.
          </motion.p>
        </div>

        {/* Mind map container with fixed position relationship to viewport */}
        <div 
          className="relative mx-auto mt-4 overflow-visible"
          style={{ 
            height: mindMapHeight,
            maxWidth: 1200
          }}
        >
          {/* SVG container for connection lines */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            style={{ overflow: 'visible' }}
          >
            {/* Transform group centered in the container */}
            <g transform={`translate(${windowSize.width > 1200 ? 600 : windowSize.width/2}, ${mindMapHeight/2})`}>
              {/* Connection lines from center to each node */}
              {services.map((_, index) => {
                const position = calculateNodePosition(index, services.length);
                return (
                  <motion.path
                    key={`connection-${index}`}
                    d={`M 0,0 L ${position.x},${position.y}`}
                    stroke="#0CB5AD"
                    strokeWidth="1.5"
                    fill="none"
                    variants={connectionVariants}
                    initial="initial"
                    animate="animate"
                    custom={index}
                    strokeDasharray="5,5"
                    animate={activeService === index ? "active" : "inactive"}
                  />
                );
              })}
              
              {/* Animated pulse rings around center */}
              {[...Array(3)].map((_, i) => (
                <motion.circle
                  key={`pulse-${i}`}
                  cx="0"
                  cy="0"
                  r={hubSize/2}
                  stroke="#0CB5AD"
                  strokeWidth="2"
                  fill="none"
                  initial={{ scale: 0.5, opacity: 0.7 }}
                  animate={{ 
                    scale: [0.5, 2, 0.5], 
                    opacity: [0.7, 0, 0.7] 
                  }}
                  transition={{ 
                    duration: 4, 
                    delay: i * 1.3, 
                    repeat: Infinity,
                    repeatType: "loop" 
                  }}
                />
              ))}
            </g>
          </svg>

          {/* Central hub - positioned in the center of the container */}
          <motion.div
            className="absolute bg-white rounded-full shadow-lg flex items-center justify-center z-10"
            style={{
              width: hubSize,
              height: hubSize,
              top: `calc(50% - ${hubSize/2}px)`,
              left: `calc(50% - ${hubSize/2}px)`
            }}
            variants={hubVariants}
            initial="initial"
            animate={["animate", "pulse"]}
          >
            <div className="text-center">
              <div className="bg-teal-500 text-white p-2 rounded-full mx-auto flex items-center justify-center" style={{width: hubSize*0.6, height: hubSize*0.6}}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <svg width={hubSize*0.3} height={hubSize*0.3} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                  </svg>
                </motion.div>
              </div>
              <span className="text-xs font-bold text-teal-600">Healthcare Tech</span>
            </div>
          </motion.div>

          {/* Service nodes positioned around the central hub */}
          {services.map((service, index) => {
            const position = calculateNodePosition(index, services.length);
            return (
              <motion.div
                key={service.title}
                className="absolute z-0"
                style={{ 
                  width: cardWidth,
                  top: `calc(50% - ${cardHeight / 2}px)`,
                  left: `calc(50% - ${cardWidth / 2}px)`
                }}
                animate={{ 
                  x: position.x, 
                  y: position.y,
                  zIndex: activeService === index ? 20 : 0
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 20
                }}
              >
                <motion.div
                  variants={nodeVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  whileTap="tap"
                  custom={index}
                  onClick={() => setActiveService(activeService === index ? null : index)}
                  className="p-3 bg-white rounded-lg shadow-md transform transition duration-300 ease-in-out"
                >
                  <div className="flex items-center mb-2">
                    <div className="mr-2 p-2 bg-teal-500 rounded-lg text-white">
                      {service.icon}
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900">{service.title}</h4>
                  </div>
                  
                  {/* Expandable content */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: activeService === index ? "auto" : 0,
                      opacity: activeService === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 text-xs mb-2">{service.description}</p>
                    
                    <motion.ul 
                      className="space-y-1 text-xs"
                      variants={featureListVariants}
                      initial="hidden"
                      animate={activeService === index ? "show" : "hidden"}
                    >
                      {service.features.map((feature, i) => (
                        <motion.li 
                          key={i} 
                          className="text-gray-600 flex items-center"
                          variants={featureVariants}
                        >
                          <span className="w-1 h-1 bg-teal-500 rounded-full mr-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                  
                  {/* Indicator for expandable content */}
                  <motion.div 
                    className="mt-1 text-right"
                    animate={{ opacity: activeService === index ? 0 : 1 }}
                  >
                    <span className="text-xs text-teal-500">+</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesMindMap;