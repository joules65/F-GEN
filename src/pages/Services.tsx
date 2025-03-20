import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Brain, Database, Shield, Clock, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Remote Patient Monitoring",
      description: "24/7 real-time monitoring of patient vitals with AI-powered alerts and predictive analytics.",
      features: ["Real-time vitals tracking", "Automated alerts", "Trend analysis", "Mobile app integration"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Voice Based First Aid Assistance",
      description: "Advanced support using machine learning algorithms and medical imaging analysis to asssist in first aid.",
      features: ["Step-by-step CPR and first aid instructions", "Multi-language support for diverse communities", "Risk assessment", "Hands-free operation for accessibility in critical situations","Real-time emergency response via AI-powered voice guidance"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Health Records Management",
      description: "Secure, blockchain-verified electronic health records with seamless integration capabilities.",
      features: ["Encrypted storage", "Easy access", "Interoperability", "Audit trails"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Solutions",
      description: "Enterprise-grade security for healthcare data with HIPAA compliance and advanced encryption.",
      features: ["End-to-end encryption", "Access control", "Compliance monitoring", "Threat detection"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Workflow Optimization",
      description: "Streamlined clinical workflows with automated task management and resource allocation.",
      features: ["Task automation", "Resource scheduling", "Performance analytics", "Custom workflows"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Smart Emergency Device Integration",
      description: " IoT connectivity with smart first aid kits and defibrillators with integrated health monitoring.",
      features: ["Toll-Free Call", "Remote monitoring for caregivers and emergency responders", "Automatic detection and response based on patient vitals", "Mobile App integration"]
    }
  ];

  return (
    <div className="pt-24 pb-32 min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="feature-card p-8"
            >
              <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 inline-block">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-gray-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;