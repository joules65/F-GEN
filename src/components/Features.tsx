import React, { useRef, ReactNode } from 'react';
import { motion, useMotionTemplate, useMotionValue, MotionProps } from 'framer-motion';

// Custom SVG Icon Type
interface IconProps {
  className?: string;
}

// Custom SVG Icons
const AIIcon: React.FC<IconProps> = ({ className = "w-10 h-10 stroke-white" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
    <circle cx="32" cy="32" r="24" fill="none" strokeWidth="3" />
    <path d="M32 14 L38 24 Q40 28 36 30 L28 34 Q24 36 26 40 L32 50" 
      fill="none" strokeWidth="3" strokeLinecap="round" />
    <circle cx="32" cy="22" r="2" fill="white" />
    <circle cx="32" cy="42" r="2" fill="white" />
  </svg>
);

const MonitorIcon: React.FC<IconProps> = ({ className = "w-10 h-10 stroke-white" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
    <rect x="10" y="15" width="44" height="30" rx="4" fill="none" strokeWidth="3" />
    <path d="M20 45 L28 35 L36 42 L44 30" fill="none" strokeWidth="3" strokeLinecap="round" />
    <circle cx="20" cy="25" r="2" fill="white" />
    <circle cx="44" cy="40" r="2" fill="white" />
  </svg>
);

const SecureIcon: React.FC<IconProps> = ({ className = "w-10 h-10 stroke-white" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
    <path d="M32 10 L52 22 L52 42 L32 54 L12 42 L12 22 Z" 
      fill="none" strokeWidth="3" strokeLinecap="round" />
    <path d="M32 30 L32 44" fill="none" strokeWidth="3" strokeLinecap="round" />
    <circle cx="32" cy="24" r="2" fill="white" />
  </svg>
);

const ProcessIcon: React.FC<IconProps> = ({ className = "w-10 h-10 stroke-white" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
    <circle cx="32" cy="32" r="22" fill="none" strokeWidth="3" />
    <path d="M32 10 L32 32 L42 22" fill="none" strokeWidth="3" strokeLinecap="round" />
    <path d="M54 32 A22 22 0 0 1 32 54" fill="none" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const CollaborationIcon: React.FC<IconProps> = ({ className = "w-10 h-10 stroke-white" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
    <circle cx="22" cy="22" r="12" fill="none" strokeWidth="3" />
    <circle cx="42" cy="22" r="12" fill="none" strokeWidth="3" />
    <path d="M32 54 C42 44, 52 44, 62 54" fill="none" strokeWidth="3" strokeLinecap="round" />
    <path d="M2 54 C12 44, 22 44, 32 54" fill="none" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const ReportIcon: React.FC<IconProps> = ({ className = "w-10 h-10 stroke-white" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className}>
    <rect x="15" y="10" width="34" height="44" rx="4" fill="none" strokeWidth="3" />
    <path d="M22 20 L42 20" fill="none" strokeWidth="3" strokeLinecap="round" />
    <path d="M22 30 L42 30" fill="none" strokeWidth="3" strokeLinecap="round" />
    <path d="M22 40 L32 40" fill="none" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// Feature Interface
interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  bgImage: string;
}

// FeatureCard Component
const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <motion.div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ 
        opacity: 0, 
        scale: 0.9,
        rotateX: -20,
        rotateY: 20
      }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotateX: 0,
        rotateY: 0
      }}
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: -5,
        transition: { duration: 0.3 }
      }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 50
      }}
      className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl transform transition-all duration-300 perspective-1000 h-full"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20 blur-sm"
        style={{ 
          backgroundImage: `url(${feature.bgImage})`,
          backgroundSize: 'cover'
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 to-blue-900/80 mix-blend-multiply z-10" />

      {/* Content */}
      <div className="relative z-20 p-8 text-white flex flex-col h-full">
        <motion.div 
          whileTap={{ scale: 0.9 }}
          whileHover={{ 
            rotate: [0, 10, -10, 0],
            transition: { duration: 0.5 }
          }}
          className="mb-6 p-4 rounded-2xl bg-white/20 backdrop-blur-lg inline-block self-start"
        >
          {feature.icon}
        </motion.div>

        <div className="flex-grow">
          <motion.h3 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold mb-4 tracking-tight"
          >
            {feature.title}
          </motion.h3>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-base leading-relaxed"
          >
            {feature.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

// Main Features Component
const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <AIIcon />,
      title: "AI assisted First-Aid Care",
      description: "Empower users to perform first aid with real-time assistance from our AI; Kiongozi.",
      bgImage: "https://res.cloudinary.com/dhkscpkf5/image/upload/v1740432321/woki_nwu7la.png"
    },
    {
      icon: <MonitorIcon />,
      title: "Real-time Monitoring",
      description: "Continuous patient vitals tracking with instant alerts and predictive analytics.",
      bgImage: "https://images.unsplash.com/photo-1516841273335-e39b37888115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      icon: <SecureIcon />,
      title: "Secure Records",
      description: "End-to-end encrypted health records with blockchain verification.",
      bgImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      icon: <ProcessIcon />,
      title: "Fast Processing",
      description: "Lightning-fast data processing for immediate medical insights.",
      bgImage: "https://res.cloudinary.com/dhkscpkf5/image/upload/v1738585175/det_pulp3p.jpg"
    },
    {
      icon: <CollaborationIcon />,
      title: "Team Collaboration",
      description: "Seamless communication between healthcare providers and specialists.",
      bgImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      icon: <ReportIcon />,
      title: "Smart Reports",
      description: "Automated medical reports with natural language processing.",
      bgImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-900 to-blue-900 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-sm text-teal-300 font-mono tracking-widest uppercase">
            CAPABILITIES
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Transforming Emergency Response
          </h1>
          <p className="text-teal-100 max-w-2xl mx-auto text-lg md:text-xl">
            Our comprehensive suite of healthcare technology solutions enables better patient care and streamlined operations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;