import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Heart, ArrowRight, ChevronRight, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  // Card expansion states
  const [expandedCard, setExpandedCard] = useState(null);

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
  
  // Stats card hover animations
  const statsCardHover = {
    rest: { 
      scale: 1,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      y: 0,
      backgroundColor: "#FFFFFF"
    },
    hover: { 
      scale: 1.05, 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      backgroundColor: "#F0FDFA",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };
  
  // Core values card animations
  const coreCardVariants = {
    rest: { 
      scale: 1,
      borderRadius: "0.75rem",
      height: "auto",
    },
    hover: { 
      scale: 1.02,
      borderRadius: "1rem",
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    expanded: (i) => ({
      scale: 1.05,
      borderRadius: "1.25rem",
      height: "auto",
      zIndex: 10,
      transition: { type: "spring", stiffness: 300, damping: 25 }
    }),
    collapsed: {
      scale: 1,
      borderRadius: "0.75rem",
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };
  
  // New morphing blob background for cards
  const blobVariants = {
    rest: { 
      borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
      rotate: 0,
      scale: 1
    },
    hover: { 
      borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
      rotate: 5,
      scale: 1.05,
      transition: { duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }
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
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/Services')}
              className="inline-flex items-center px-6 py-3 bg-teal-900 hover:bg-teal-800 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Our Services
              <ChevronRight className="ml-2 w-4 h-4" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/Contact')}
              className="inline-flex items-center px-6 py-3 bg-white hover:bg-slate-50 text-teal-900 font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200"
            >
              Join Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </motion.button>
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
              {[
                { value: "500+", label: "Healthcare Partners" },
                { value: "5M+", label: "Lives Impacted" },
                { value: "15+", label: "Countries" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial="rest"
                  whileHover="hover"
                  variants={statsCardHover}
                  className="relative overflow-hidden rounded-lg"
                >
                  <motion.div 
                    className="absolute inset-0 bg-teal-400 opacity-10"
                    variants={blobVariants}
                  />
                  <div className="relative p-4 text-center z-10">
                    <motion.div 
                      className="text-3xl font-bold text-teal-700"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
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
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative overflow-hidden rounded-2xl shadow-xl border border-white/20"
            >
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Medical Innovation"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent opacity-60"></div>
              
              <motion.div
                initial={{ scale: 0.97, opacity: 0.7 }}
                whileHover={{ scale: 1, opacity: 1 }}
                className="absolute inset-0 bg-teal-900/20 backdrop-blur-[2px] opacity-0 hover:opacity-100 flex items-center justify-center transition-all duration-300"
              >
                <motion.div 
                  initial={{ y: 20, opacity: 0 }} 
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="px-8 py-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg"
                >
                  <p className="text-teal-900 font-bold text-xl">Discover Our Innovation</p>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ y: -8, rotate: -3, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-xl p-6"
            >
              <div className="text-4xl font-bold text-teal-700">10+</div>
              <div className="text-sm text-slate-600">Weeks of E-Lab</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values Section - Polymorphic Cards */}
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
              description: "To revolutionize healthcare delivery through innovative technology and AI-driven solutions that make emergency response faster, more efficient, and accessible to all.",
              extraContent: "By 2030, we aim to reduce emergency response times to under 5 minutes in urban areas and 15 minutes in rural areas across Africa. Our AI-powered dispatching and routing system optimizes resource allocation in real-time, ensuring the right responder reaches the right patient at the right time."
            },
            {
              icon: <Heart className="w-12 h-12 text-white" />,
              title: "Our Values",
              description: "Patient-first approach, innovation, integrity, and continuous improvement guide everything we do as we strive for excellence in healthcare transformation.",
              extraContent: "We believe in human-centered design and ethical AI deployment. Our solutions are built with privacy and security by design, ensuring patient data is protected while enabling life-saving interventions. We value diversity of thought and collaborative problem-solving among our teams."
            },
            {
              icon: <Award className="w-12 h-12 text-white" />,
              title: "Our Impact",
              description: "Transforming emergency healthcare delivery across Africa, we aim to serve millions of patients with faster, more reliable care that saves lives every day.",
              extraContent: "Our early implementations show basic data response to first aid situations, however while not as contextual as it should be yet, with the right partnerships and continuous implementation of technology we should be able to implement KiongoziCare as a beacon of technology and Emergency Response."
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              custom={index}
              initial="rest"
              whileHover={expandedCard === index ? "expanded" : "hover"}
              animate={expandedCard === index ? "expanded" : "collapsed"}
              variants={coreCardVariants}
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              className="relative overflow-hidden rounded-xl shadow-xl transition-all duration-500 cursor-pointer"
              style={{ transformOrigin: expandedCard === index ? "center" : index === 0 ? "right" : index === 2 ? "left" : "center" }}
            >
              {/* Animated background gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-teal-900 to-teal-700"
                animate={{ 
                  background: expandedCard === index 
                    ? "linear-gradient(135deg, rgb(19, 78, 74) 0%, rgb(17, 94, 89) 100%)" 
                    : "linear-gradient(135deg, rgb(13, 148, 136) 0%, rgb(15, 118, 110) 100%)" 
                }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Animated blob in background */}
              <motion.div 
                className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-xl"
                animate={{ 
                  x: [0, 10, -10, 0],
                  y: [0, -10, 10, 0],
                  scale: expandedCard === index ? [1, 1.1, 1.2, 1.1] : [1, 1.05, 1, 1.05]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              <motion.div 
                className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-lg"
                animate={{ 
                  x: [0, -10, 10, 0],
                  y: [0, 10, -10, 0],
                  scale: expandedCard === index ? [1, 1.2, 1.1, 1.2] : [1, 1.05, 1, 1.05]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              <div className="relative p-8 z-10 text-white group transition-all duration-300">
                <motion.div 
                  className="mb-6 p-4 rounded-full bg-teal-800/50 inline-block group-hover:bg-teal-700/50 transition-colors duration-300"
                  animate={{ 
                    backgroundColor: expandedCard === index ? "rgba(20, 184, 166, 0.3)" : "rgba(17, 94, 89, 0.5)"
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    animate={{ 
                      rotate: expandedCard === index ? [0, 15, -15, 0] : 0
                    }}
                    transition={{ 
                      duration: expandedCard === index ? 1 : 0.3,
                      delay: 0.2
                    }}
                  >
                    {item.icon}
                  </motion.div>
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-bold text-white mb-4"
                  animate={{ 
                    fontSize: expandedCard === index ? "28px" : "24px",
                    y: expandedCard === index ? -5 : 0
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.title}
                </motion.h3>
                
                <motion.p 
                  className="text-teal-100 leading-relaxed"
                  animate={{ opacity: 1 }}
                >
                  {item.description}
                </motion.p>
                
                {/* Extra content that appears when expanded */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: expandedCard === index ? 1 : 0,
                    height: expandedCard === index ? "auto" : 0
                  }}
                  transition={{ duration: 0.3, delay: expandedCard === index ? 0.2 : 0 }}
                  className="mt-6 overflow-hidden"
                >
                  <div className="w-full h-px bg-teal-400/30 my-4"></div>
                  <p className="text-teal-50 leading-relaxed">{item.extraContent}</p>
                </motion.div>
                
                <motion.div 
                  className="mt-6 pt-6 border-t border-teal-800/50 flex justify-between items-center"
                  animate={{ 
                    borderColor: expandedCard === index ? "rgba(20, 184, 166, 0.3)" : "rgba(17, 94, 89, 0.5)"
                  }}
                >
                  <motion.button 
                    className="inline-flex items-center text-teal-100 hover:text-white font-medium transition-colors duration-300"
                    animate={{ 
                      x: expandedCard === index ? [0, 5, 0] : 0
                    }}
                    transition={{ 
                      duration: 0.5,
                      delay: expandedCard === index ? 0.3 : 0
                    }}
                  >
                    {expandedCard === index ? "Read less" : "Read more"}
                    <motion.div
                      animate={{ 
                        rotate: expandedCard === index ? 180 : 0,
                        x: expandedCard === index ? 0 : 5
                      }}
                      transition={{ duration: 0.3 }}
                      className="ml-2"
                    >
                      {expandedCard === index ? 
                        <ChevronRight className="w-4 h-4 rotate-90" /> :
                        <Plus className="w-4 h-4" />
                      }
                    </motion.div>
                  </motion.button>
                  
                  {/* Interactive particle effect on click */}
                  {expandedCard === index && (
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="bg-teal-300/20 p-2 rounded-full"
                    >
                      <Target className="w-5 h-5 text-teal-100" />
                    </motion.div>
                  )}
                </motion.div>
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
          
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full opacity-20 blur-sm"
                style={{
                  width: 10 + Math.random() * 20,
                  height: 10 + Math.random() * 20,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  y: [0, -100, 0],
                  x: [0, Math.random() * 50 - 25, 0],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
              />
            ))}
          </div>
          
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
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/Contact')}
                  className="inline-flex items-center px-8 py-4 bg-white text-teal-900 hover:bg-teal-50 font-medium rounded-lg transition-all duration-300 shadow-lg"
                >
                  Join Our Mission
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
