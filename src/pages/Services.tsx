import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Stethoscope, Brain, Database, Shield, Clock, Users } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
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

  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Remote Patient Monitoring",
      description: "24/7 real-time monitoring of patient vitals with AI-powered alerts and predictive analytics.",
      features: ["Real-time vitals tracking", "Automated alerts", "Trend analysis", "Mobile app integration"],
      demo: () => (
        <motion.div 
          className="h-16 bg-teal-100 rounded-lg overflow-hidden relative mt-4"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <motion.div 
            className="absolute top-0 left-0 h-full w-2 bg-teal-500"
            animate={{ 
              left: ["0%", "100%"], 
              height: [16, 32, 16] 
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      )
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Voice Based First Aid Assistance",
      description: "Advanced support using machine learning algorithms and medical imaging analysis to assist in first aid.",
      features: ["Step-by-step CPR and first aid instructions", "Multi-language support", "Risk assessment", "Hands-free operation", "Real-time emergency guidance"],
      demo: () => (
        <div className="mt-4 relative h-16">
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-white" />
            </div>
          </motion.div>
          {[...Array(3)].map((_, i) => (
            <motion.div 
              key={i} 
              className="absolute inset-0 rounded-full border-2 border-teal-500" 
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 1.5 + i*0.5, opacity: 0 }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.5 
              }}
            />
          ))}
        </div>
      )
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Health Records Management",
      description: "Secure, blockchain-verified electronic health records with seamless integration capabilities.",
      features: ["Encrypted storage", "Easy access", "Interoperability", "Audit trails"],
      demo: () => (
        <div className="mt-4 h-16 flex items-center space-x-1">
          {[...Array(8)].map((_, i) => (
            <motion.div 
              key={i}
              className="h-4 w-6 bg-teal-500 rounded"
              initial={{ height: 4 }}
              animate={{ height: [4, 16, 4] }}
              transition={{ 
                duration: 0.8, 
                repeat: Infinity, 
                delay: i * 0.1, 
                repeatType: "reverse" 
              }}
            />
          ))}
        </div>
      )
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Solutions",
      description: "Enterprise-grade security for healthcare data with HIPAA compliance and advanced encryption.",
      features: ["End-to-end encryption", "Access control", "Compliance monitoring", "Threat detection"],
      demo: () => (
        <div className="mt-4 h-16 flex items-center justify-center relative">
          <motion.div 
            className="w-12 h-12 bg-teal-500 rounded-full"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Shield className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
          <motion.div 
            className="absolute inset-0 border-2 border-teal-300 rounded-full"
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ 
              scale: [0.8, 1.2, 0.8], 
              opacity: [0.5, 1, 0.5],
              rotate: [0, 180, 360] 
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
      )
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Workflow Optimization",
      description: "Streamlined clinical workflows with automated task management and resource allocation.",
      features: ["Task automation", "Resource scheduling", "Performance analytics", "Custom workflows"],
      demo: () => (
        <div className="mt-4 h-16 flex items-center justify-center relative">
          <motion.div 
            className="w-12 h-12 rounded-full border-4 border-teal-500 border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute h-6 w-1 bg-teal-800 rounded origin-bottom"
            style={{ bottom: "calc(50% - 8px)", left: "calc(50% - 2px)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute h-4 w-1 bg-teal-600 rounded origin-bottom"
            style={{ bottom: "calc(50% - 8px)", left: "calc(50% - 2px)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Smart Emergency Device Integration",
      description: "IoT connectivity with smart first aid kits and defibrillators with integrated health monitoring.",
      features: ["Toll-Free Call", "Remote monitoring", "Automatic detection", "Mobile App integration"],
      demo: () => (
        <div className="mt-4 h-16 flex justify-center items-center">
          <div className="relative">
            {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i}
                className="absolute rounded-full bg-teal-500" 
                style={{ 
                  width: 20, 
                  height: 20,
                  top: -10,
                  left: -10
                }}
                animate={{ 
                  x: Math.cos(i * (Math.PI * 2/5)) * 40,
                  y: Math.sin(i * (Math.PI * 2/5)) * 40,
                  opacity: [0.2, 1, 0.2]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: i * 0.4
                }}
              />
            ))}
            <motion.div 
              className="w-8 h-8 rounded-full flex items-center justify-center bg-teal-600"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Users className="w-4 h-4 text-white" />
            </motion.div>
          </div>
        </div>
      )
    }
  ];

  // Card hover animations
  const cardVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05, 
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.98 }
  };

  // Staggered children animation for features
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
  
  return (
    <div className="pt-24 pb-32 min-h-screen bg-stone-50 relative overflow-hidden">
      {/* Low-opacity decorative elements that respect the bg-stone-50 */}
      <motion.div 
        className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-teal-200 opacity-20 mix-blend-multiply blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
      />
      <motion.div 
        className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-teal-300 opacity-20 mix-blend-multiply blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm sm:text-base text-teal-400 font-mono"
          >
            OUR SERVICES
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-5xl font-bold gradient-text"
          >
            Healthcare Solutions
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Comprehensive healthcare technology solutions designed to improve patient care and operational efficiency.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setActiveService(activeService === index ? null : index)}
              className="p-6 bg-white rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:shadow-xl relative overflow-hidden"
            >
              {/* Interactive spotlight effect */}
              <motion.div
                className="absolute -inset-px rounded-xl pointer-events-none"
                animate={{
                  background: activeService === index 
                    ? "radial-gradient(circle at var(--x) var(--y), rgba(0, 181, 173, 0.15) 0%, rgba(255, 255, 255, 0) 80%)" 
                    : "none"
                }}
                style={{
                  '--x': mousePosition.x * 100 + '%',
                  '--y': mousePosition.y * 100 + '%',
                }}
              />
              
              <div className="mb-6 p-4 bg-teal-500 rounded-lg text-white">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
              </div>
              <h4 className="text-xl font-semibold text-teal-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <motion.ul 
                className="space-y-2"
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
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2" />
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
              
              {/* Interactive demo visualization that appears when clicked */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: activeService === index ? "auto" : 0,
                  opacity: activeService === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {service.demo && service.demo()}
              </motion.div>
              
              {/* Subtle indicator */}
              <motion.div 
                className="absolute bottom-3 right-3 text-xs text-gray-400 flex items-center"
                animate={{ opacity: activeService === index ? 0 : 0.7 }}
              >
                <span>Click to {activeService === index ? 'hide' : 'explore'}</span>
                <motion.span 
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="ml-1"
                >→</motion.span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;