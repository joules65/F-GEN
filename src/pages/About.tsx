import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Heart, ArrowRight, ChevronRight } from 'lucide-react';

const About = () => {
  // Enhanced animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };
  
  const fadeInRight = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };
  
  const fadeInLeft = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="inline-block px-4 py-1 mb-3 rounded-full bg-teal-100 text-teal-900 text-sm font-medium tracking-wide"
          >
            ABOUT F-GEN
          </motion.div>
          
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent"
          >
            Revolutionizing Emergency Response
          </motion.h1>
          
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-slate-700 max-w-2xl mx-auto text-lg mb-10"
          >
            F-gen combines cutting-edge technology with medical expertise to transform emergency services across Africa, setting new standards in healthcare innovation and accessibility.
          </motion.p>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex justify-center space-x-4"
          >
            <a href="/Services" className="inline-flex items-center px-6 py-3 bg-teal-900 hover:bg-teal-800 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Our Services
              <ChevronRight className="ml-2 w-4 h-4" />
            </a>
            <a href="/Contact" className="inline-flex items-center px-6 py-3 bg-white hover:bg-slate-50 text-teal-900 font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200">
              Join Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Our Story Section */}
        <div id="learn-more" className="grid md:grid-cols-12 gap-12 items-center mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
            className="md:col-span-5 space-y-6 order-2 md:order-1"
          >
            <div className="inline-block px-4 py-1 mb-2 bg-teal-100 text-teal-900 rounded-lg text-sm font-medium">
              OUR JOURNEY
            </div>
            <h2 className="text-3xl font-bold text-slate-800">Our Story</h2>
            <div className="w-20 h-1 bg-teal-600 rounded-full mb-6"></div>
            <p className="text-slate-600 leading-relaxed">
              Founded in 2025, F-gen emerged from a vision to transform healthcare delivery through innovative technology. Our team of seasoned healthcare professionals and tech experts came together with a shared mission: to make quality healthcare more accessible, efficient, and precise across the African continent.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our ambitious goals include serving over 500 healthcare institutions and positively impacting millions of lives through our AI-driven solutions, starting with revolutionizing emergency response services where every minute counts.
            </p>
            <div className="text-2xl font-bold text-yellow-400"> Our Target</div>
            
            <div className="pt-6 grid grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center p-4 rounded-lg bg-white shadow-md"
              >
                
                <div className="text-3xl font-bold text-teal-700">500+</div>
                <div className="text-sm text-slate-500 mt-1">Healthcare Partners</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center p-4 rounded-lg bg-white shadow-md"
              >
                <div className="text-3xl font-bold text-teal-700">5M+</div>
                <div className="text-sm text-slate-500 mt-1">Lives Impacted</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center p-4 rounded-lg bg-white shadow-md"
              >
                <div className="text-3xl font-bold text-teal-700">15+</div>
                <div className="text-sm text-slate-500 mt-1">Countries</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
            className="md:col-span-7 relative order-1 md:order-2"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-900/20 to-blue-900/20 rounded-2xl -rotate-3 scale-105 blur-xl" />
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-900/20 to-blue-900/20 rounded-2xl rotate-6 scale-105 blur-xl" />
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative overflow-hidden rounded-2xl shadow-xl border border-white/20"
            >
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Medical Innovation"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent opacity-60"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-xl p-6"
            >
              <div className="text-4xl font-bold text-teal-700">10+</div>
              <div className="text-sm text-slate-600">Weeks of E-Lab</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 mb-32"
        >
          {[
            {
              icon: <Target className="w-12 h-12 text-white" />,
              title: "Our Mission",
              description: "To revolutionize healthcare delivery through innovative technology and AI-driven solutions that make emergency response faster, more efficient, and accessible to all."
            },
            {
              icon: <Heart className="w-12 h-12 text-white" />,
              title: "Our Values",
              description: "Patient-first approach, innovation, integrity, and continuous improvement guide everything we do as we strive for excellence in healthcare transformation."
            },
            {
              icon: <Award className="w-12 h-12 text-white" />,
              title: "Our Impact",
              description: "Transforming emergency healthcare delivery across Africa, we aim to serve millions of patients with faster, more reliable care that saves lives every day."
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="bg-teal-900 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-teal-800 text-white group"
            >
              <div className="mb-6 p-4 rounded-full bg-teal-800/50 inline-block group-hover:bg-teal-700/50 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-teal-100 leading-relaxed">{item.description}</p>
              <div className="mt-6 pt-6 border-t border-teal-800/50">
                <a href={`/${item.title.replace(/\s+/g, '')}`} className="inline-flex items-center text-teal-100 hover:text-white font-medium transition-colors duration-300">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Vision Banner */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900 to-blue-900 opacity-95"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="relative py-20 px-8 md:px-16 text-white z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block px-4 py-1 mb-4 rounded-full bg-teal-800/50 text-teal-100 text-sm font-medium"
              >
                LOOKING FORWARD
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Our Vision for the Future
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-white/90 mb-10 text-lg leading-relaxed"
              >
                By 2030, we envision a world where emergency healthcare is accessible to everyone, anywhere in Africa, with response times under 10 minutes and AI-driven diagnostics that save countless lives daily.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <a href="/Contact" className="inline-flex items-center px-8 py-4 bg-white text-teal-900 hover:bg-teal-50 font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                  Join Our Mission
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;