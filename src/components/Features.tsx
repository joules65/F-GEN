import { motion } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
  bgImage: string;
}

const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const iconVariants = {
    hidden: { scale: 0, rotate: -30 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 10,
        delay: 0.1 + (index * 0.1)
      }
    },
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.9 }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: 0.2 + (index * 0.1),
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3 + (index * 0.1)
      }
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      className="relative overflow-hidden rounded-xl shadow-lg bg-white border border-slate-200 h-full"
    >
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.2 }}
        whileHover={{ scale: 1.3, transition: { duration: 1.5 } }}
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url(${feature.bgImage})`,
        }}
      />

      {/* Gradient Overlay with Animation */}
      <motion.div
        initial={{ opacity: 0.3 }}
        whileHover={{ opacity: 0.5 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-yellow-500/20 z-10"
      />

      {/* Animated Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden z-10">
        <motion.div 
          initial={{ rotate: -90, x: 20 }}
          animate={{ rotate: 0, x: 0 }}
          transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
          className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-teal-400 to-yellow-400 transform origin-top-right"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={contentVariants}
        className="relative z-20 p-8 text-slate-700 flex flex-col h-full"
      >
        <motion.div
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
          className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-teal-500/20 to-yellow-500/20 backdrop-blur-sm inline-flex items-center justify-center self-start w-16 h-16 border border-teal-500/30"
        >
          {feature.icon}
        </motion.div>

        <motion.div className="flex-grow flex flex-col">
          <motion.h3
            variants={textVariants}
            className="text-2xl font-bold mb-4 tracking-tight bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent"
          >
            {feature.title}
          </motion.h3>

          <motion.p
            variants={textVariants}
            className="text-slate-600 text-base leading-relaxed mb-6"
          >
            {feature.description}
          </motion.p>

          <motion.div
            variants={textVariants}
            whileHover={{ x: 5 }}
            className="mt-auto flex items-center text-teal-600 font-medium"
          >
            <span>Learn more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features: Feature[] = [
    {
      icon: <i className="fas fa-heartbeat text-3xl text-teal-600" />,
      title: 'Real-time Assistance',
      description: 'Get real-time voice assistance for emergency situations, with AI-powered guidance that adapts to the situation as it evolves.',
      bgImage: 'https://res.cloudinary.com/dhkscpkf5/image/upload/v1742648830/david-vives-l_ov5A67rI4-unsplash_kjcp8c.jpg',
    },
    {
      icon: <i className="fas fa-ambulance text-3xl text-teal-600" />,
      title: 'Instant First Aid Instructions',
      description: 'Access step-by-step guides for CPR, bleeding control, and more with clear visual and audio instructions.',
      bgImage: 'https://res.cloudinary.com/dhkscpkf5/image/upload/v1742648827/samuel-scalzo-iqGtaQnk3VM-unsplash_k4qdg8.jpg',
    },
    {
      icon: <i className="fas fa-bolt text-3xl text-teal-600" />,
      title: 'Defibrillator Guidance',
      description: 'Learn how to properly use a defibrillator in critical moments with step-by-step guidance and timing support.',
      bgImage: 'https://res.cloudinary.com/dhkscpkf5/image/upload/v1742648826/p-l-FfJJD6SCcvs-unsplash_h3xjck.jpg',
    },
    {
      icon: <i className="fas fa-medkit text-3xl text-teal-600" />,
      title: 'Patient Vital Tracking',
      description: 'Monitor vital signs and send data to professionals in real time, ensuring continuity of care during emergencies.',
      bgImage: 'https://res.cloudinary.com/dhkscpkf5/image/upload/v1742648845/andy-vult-zwZpdhoTbU0-unsplash_al5qfq.jpg',
    },
    {
      icon: <i className="fas fa-phone-alt text-3xl text-teal-600" />,
      title: 'Emergency Services Integration',
      description: 'One-tap connection to emergency services with automatic location sharing and situation briefing.',
      bgImage: 'https://res.cloudinary.com/dhkscpkf5/image/upload/v1742648830/david-vives-l_ov5A67rI4-unsplash_kjcp8c.jpg',
    },
    {
      icon: <i className="fas fa-hospital text-3xl text-teal-600" />,
      title: 'Hospital Coordination',
      description: 'Seamlessly share patient information with receiving hospitals to accelerate treatment upon arrival.',
      bgImage: 'https://res.cloudinary.com/dhkscpkf5/image/upload/v1742648827/samuel-scalzo-iqGtaQnk3VM-unsplash_k4qdg8.jpg',
    },
  ];

  // Header animation variants
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const headerItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-slate-50 py-24 overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 z-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20 space-y-6"
        >
          <motion.div 
            variants={headerItemVariants}
            className="inline-block"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-teal-500/20 to-yellow-500/20 text-teal-600 backdrop-blur-sm border border-teal-500/30">
              <span className="w-2 h-2 bg-teal-600 rounded-full mr-2 animate-pulse"></span>
              CAPABILITIES
            </span>
          </motion.div>
          
          <motion.h1 
            variants={headerItemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            <span className="bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 bg-clip-text text-transparent">
              Transforming Emergency Response
            </span>
          </motion.h1>
          
          <motion.p 
            variants={headerItemVariants}
            className="text-slate-600 max-w-3xl mx-auto text-lg md:text-xl"
          >
            Our comprehensive suite of healthcare technology solutions enables better patient care and streamlined operations during critical moments when every second counts.
          </motion.p>
          
          <motion.div 
            variants={headerItemVariants}
            className="flex justify-center"
          >
            <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-yellow-500 rounded-full"></div>
          </motion.div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold text-lg shadow-lg"
            href="/Prototype"
          >
            <span>Explore All Features</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;