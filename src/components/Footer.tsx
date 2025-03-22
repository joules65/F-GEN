import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h3 className="text-2xl font-bold">F-GEN</h3>
            <p className="text-stone-50 mt-2">Innovative healthcare solutions for a better tomorrow.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="/About" className="text-teal-400 hover:text-white">About</a>
            <a href="/Prototype" className="text-teal-400 hover:text-white">Prototype</a>
            <a href="/Contact" className="text-teal-400 hover:text-white">Contact</a>
            <a href="/Services" className="text-teal-400 hover:text-white">Services</a>
            <a href="/Gallery" className="text-teal-400 hover:text-white">Gallery</a>
            <a href="/Documentation" className="text-teal-400 hover:text-white">Documentation</a>
          </div>
        </div>
        <div className="mt-8 border-t border-teal-700 pt-6 text-center">
          <p className="text-yellow-400">© 2025 F-GEN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
