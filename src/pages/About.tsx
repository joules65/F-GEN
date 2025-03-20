import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-32 min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm sm:text-base text-teal-400 font-mono"
          >
            ABOUT US
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-5xl font-bold gradient-text"
          >
            Revolutionizing Emergency Response
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            F-gen is at the forefront of healthcare innovation, combining cutting-edge technology with medical expertise.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <h4 className="text-2xl font-bold text-white">Our Story</h4>
            <p className="text-gray-400">
              Founded in 2025, F-gen emerged from a vision to transform healthcare delivery through innovative technology. Our team of young entrepreneurs and tech experts came together with a shared mission: to make quality healthcare more accessible, efficient, and precise.
            </p>
            <p className="text-gray-400">
              We hope to serve over 500 healthcare institutions and impact millions of lives through our AI-driven solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-emerald-500/30 rounded-full blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Medical Innovation"
              className="relative rounded-2xl shadow-2xl border border-slate-800"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Target className="w-8 h-8" />,
              title: "Our Mission",
              description: "To revolutionize healthcare delivery through innovative technology and AI-driven solutions."
            },
            {
              icon: <Heart className="w-8 h-8" />,
              title: "Our Values",
              description: "Patient-first approach, innovation, integrity, and continuous improvement guide everything we do."
            },
            {
              icon: <Award className="w-8 h-8" />,
              title: "Our Impact",
              description: "Transforming healthcare delivery across 500+ institutions, serving millions of patients worldwide."
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 1 }}
              className="feature-card p-8"
            >
              <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 inline-block">
                {item.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;