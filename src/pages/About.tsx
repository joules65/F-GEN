import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Heart, ArrowRight } from 'lucide-react';

const About = () => {
  // Animation variants for staggered animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 mb-3 rounded-full bg-yellow-400 text-blue-800 text-sm font-semibold tracking-wide"
          >
            ABOUT US
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-teal-500 bg-clip-text text-transparent"
          >
            Revolutionizing Emergency Response
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-black max-w-2xl mx-auto text-lg mb-8"
          >
            F-gen is at the forefront of healthcare innovation, combining cutting-edge technology with medical expertise to transform emergency services across Africa.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="/Services" className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-yellow-400 text-white font-medium rounded-lg transition-colors duration-300">
              Learn More
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Our Story Section */}
        <div id="learn-more" className="grid md:grid-cols-12 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 space-y-6 order-2 md:order-1"
          >
            <div className="inline-block px-4 py-1 mb-2 bg-teal-100 text-teal-800 rounded-lg text-sm font-medium">
              OUR JOURNEY
            </div>
            <h2 className="text-3xl font-bold text-slate-800">Our Story</h2>
            <div className="w-20 h-1 bg-blue-500 rounded-full mb-6"></div>
            <p className="text-slate-600">
              Founded in 2025, F-gen emerged from a vision to transform healthcare delivery through innovative technology. Our team of young entrepreneurs and tech experts came together with a shared mission: to make quality healthcare more accessible, efficient, and precise.
            </p>
            <p className="text-slate-600">
              We aim to serve over 500 healthcare institutions and impact millions of lives through our AI-driven solutions, starting with revolutionizing emergency response services.
            </p>
            
            <div className="pt-4 flex space-x-6">
              <div className="items-center text-3xl font-bold text-yellow-400"> Our Target</div>
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-slate-500">Healthcare Partners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">5M+</div>
                <div className="text-sm text-slate-500">Lives Impacted</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600">15+</div>
                <div className="text-sm text-slate-500">Countries</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 relative order-1 md:order-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-2xl -rotate-6 scale-105 blur-xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-2xl rotate-3 scale-105 blur-xl" />
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Medical Innovation"
              className="relative rounded-2xl shadow-lg border border-white/20 w-full h-80 object-cover"
            />
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 md:p-6">
              <div className="text-4xl font-bold text-blue-600">10+</div>
              <div className="text-sm text-slate-600">Weeks of E-Lab</div>
            </div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {[
            {
              icon: <Target className="w-10 h-10 text-blue-500" />,
              title: "Our Mission",
              description: "To revolutionize healthcare delivery through innovative technology and AI-driven solutions that make emergency response faster and more efficient."
            },
            {
              icon: <Heart className="w-10 h-10 text-rose-500" />,
              title: "Our Values",
              description: "Patient-first approach, innovation, integrity, and continuous improvement guide everything we do as we strive for excellence."
            },
            {
              icon: <Award className="w-10 h-10 text-amber-500" />,
              title: "Our Impact",
              description: "Transforming Emergency delivery across Africa, we aim to serve millions of patients worldwide with faster, more reliable care."
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-100"
            >
              <div className="mb-6 p-4 rounded-full bg-slate-50 inline-block">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Vision Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-teal-500 opacity-90"></div>
          <div className="relative py-16 px-8 md:px-16 text-white z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision for the Future</h2>
              <p className="text-white/90 mb-8 text-lg">
                By 2030, we envision a world where emergency healthcare is accessible to everyone, anywhere, with response times under 10 minutes and AI-driven diagnostics that save countless lives.
              </p>
              <a href="/Contact" className="inline-flex items-center px-6 py-3 bg-white text-yellow-400 hover:bg-blue-50 font-medium rounded-lg transition-colors duration-300">
                Join Our Mission
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="absolute inset-0 bg-yellow-400 backdrop-blur-sm z-0"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;