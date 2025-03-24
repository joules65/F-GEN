"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/bg.webp')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 max-w-3xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          Empowering Your Digital Presence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-gray-200"
        >
          We craft digital solutions that drive success and innovation.
        </motion.p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/Services" className="inline-flex items-center px-6 py-3 bg-teal-900 hover:bg-teal-800 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            Our Services
            <ChevronRight className="ml-2 w-4 h-4" />
          </Link>
          <Link to="/Contact" className="inline-flex items-center px-6 py-3 bg-white hover:bg-slate-50 text-teal-900 font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200">
            Join Us
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
