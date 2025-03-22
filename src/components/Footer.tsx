import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-900 to-teal-700 text-white py-10 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-6 lg:px-8 text-center sm:text-left"
      >
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div>
            <h3 className="text-3xl font-extrabold text-slate-50 tracking-wide animate-pulse">F-GEN</h3>
            <p className="text-stone-50 mt-3 max-w-sm leading-relaxed">
              Innovative healthcare solutions for a better tomorrow.
            </p>
          </div>
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-6 mt-6 sm:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            {["About", "Prototype", "Contact", "Services", "Gallery", "Documentation"].map((item, index) => (
              <motion.a
                key={index}
                href={`/${item}`}
                className="text-yellow-400 hover:text-white transition duration-300 transform hover:scale-110"
                whileHover={{ scale: 1.2, color: "#ffffff" }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="mt-10 border-t border-teal-500 pt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <p className="text-white text-sm md:text-base tracking-wider">
            © 2025 F-GEN. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
      
      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          className="w-40 h-40 bg-yellow-400 opacity-20 rounded-full absolute -top-10 -left-10"
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="w-32 h-32 bg-yellow-400 opacity-15 rounded-full absolute bottom-10 right-10"
          animate={{ scale: [1, 1.8, 1], opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
    </footer>
  );
};

export default Footer;