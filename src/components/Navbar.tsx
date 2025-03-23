import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Info, Settings, Image, Users, FileText, Cpu, MessageSquare } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [splashComplete, setSplashComplete] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const location = useLocation();
  const curtainRef = useRef(null);

  // Handle initial splash screen animation
  useEffect(() => {
    // Start with splash screen
    document.body.style.overflow = "hidden";
    
    // Logo animation timeline
    const splashTimer = setTimeout(() => {
      setSplashComplete(true);
      //scroll after logo animation
      document.body.style.overflow = "";
      setContentVisible(true);
    }, 1000); // Reduced time
    
    return () => {
      clearTimeout(splashTimer);
      document.body.style.overflow = "";
    };
  }, []);

  // Handle scroll effects 
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
      
      // parallax effect inputed
      if (curtainRef.current && contentVisible) {
        const scrollPosition = window.scrollY;
        
        // Make opacity drop much faster - almost instantly after 20px of scroll
        const opacity = Math.max(0, 1 - scrollPosition / 20);
        curtainRef.current.style.opacity = opacity.toString();
        
        // Disable pointer events immediately scrolling starts
        if (scrollPosition > 10) {
          curtainRef.current.style.pointerEvents = "none";
        } else {
          curtainRef.current.style.pointerEvents = "auto";
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [contentVisible]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: "/", label: "Home", icon: <Home size={16} /> },
    { path: "/about", label: "About", icon: <Info size={16} /> },
    { path: "/services", label: "Services", icon: <Settings size={16} /> },
    { path: "/gallery", label: "Gallery", icon: <Image size={16} /> },
    { path: "/team", label: "Team", icon: <Users size={16} /> },
    { path: "/documentation", label: "Documentation", icon: <FileText size={16} /> },
    { path: "/prototype", label: "Prototype", icon: <Cpu size={16} /> },
    { path: "/contact", label: "Contact", icon: <MessageSquare size={16} /> },
  ];

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  // Render the splash screen
  if (!splashComplete) {
    return (
      <div className="fixed inset-0 bg-[#800020] flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          <div className="animate-bounce mb-8">
            <img
              src="https://res.cloudinary.com/dhkscpkf5/image/upload/v1742503660/logo_hypiy0.png"
              alt="F-gen Logo"
              className="h-24 w-24 object-contain animate-pulse"
            />
          </div>
          <div className="text-4xl font-bold text-slate-50 tracking-widest animate-pulse">
            F-gen
          </div>
          <div className="mt-8 relative h-2 w-64 bg-[#660016] rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-[#FFD700] animate-loader"></div>
          </div>
          <div className="mt-4 text-white opacity-75">Loading experience...</div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Curtain overlayfade transition */}
      <div 
        ref={curtainRef}
        className="fixed inset-0 bg-gradient-to-b from-teal-900 to-teal-700 z-30 transition-opacity duration-100" // Changed to 100ms for ultra-fast fade
        style={{ 
          opacity: 1,
          pointerEvents: "auto"
        }}
      >
        <div className="h-full flex flex-col items-center justify-center pointer-events-none">
          <div className="text-center p-8 max-w-3xl">
            <img
              src="https://res.cloudinary.com/dhkscpkf5/image/upload/v1742503660/logo_hypiy0.png"
              alt="F-gen Logo"
              className="h-32 w-32 mx-auto mb-8 hover:rotate-12 transition-transform duration-300"
            />
            <h1 className="text-5xl font-bold text-slate-50 mb-6">Welcome to F-gen</h1>
            <p className="text-white text-xl mb-10">Revolutionizing the future through innovative technology solutions</p>
            <div className="animate-bounce">
              <p className="text-white opacity-75">Scroll down to explore</p>
              <div className="mt-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="mx-auto text-white"
                >
                  <path d="M12 5v14"></path>
                  <path d="m19 12-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regular navbar */}
      <nav
        className="fixed w-full top-0 z-50 transition-all duration-300 bg-teal-900 py-2"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            {/* Logo Section animation */}
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2 group">
              <div className="h-8 w-8 flex items-center justify-center overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dhkscpkf5/image/upload/v1742503660/logo_hypiy0.png"
                  alt="F-gen Logo"
                  className="h-8 w-8 object-contain transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
                />
              </div>
              <span className="text-xl font-bold text-slate-50 transition-all duration-100 group-hover:tracking-wider">
                F-gen
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-2 py-1 text-sm font-medium rounded-md transition-all duration-20 hover:bg-teal-600 ${
                    isActivePath(item.path) 
                      ? "text-white bg-teal-700" 
                      : "text-[#FFD700] hover:text-white"
                  }`}
                >
                  {item.icon}
                  <span className="ml-1">{item.label}</span>
                </Link>
              ))}
              <Link
                to="/prototype"
                className="px-3 py-1 bg-[#800020] text-[#FFD700] text-sm font-medium rounded-md shadow-md hover:bg-[#660016] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1 text-[#FFD700] hover:text-white transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-12 left-0 right-0 bg-teal-700 transition-all duration-300 shadow-md ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-3 py-2 text-sm rounded text-[#FFD700] font-medium transition-all duration-200 hover:bg-teal-800 ${
                  isActivePath(item.path) ? "bg-teal-800 text-white" : ""
                }`}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </Link>
            ))}
            <Link
              to="/prototype"
              className="block w-full px-3 py-2 bg-[#800020] text-[#FFD700] text-sm font-medium rounded text-center transition-all duration-200 hover:bg-[#660016]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Add CSS keyframes for custom animations */}
      <style jsx global>{`
        @keyframes loader {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        .animate-loader {
          animation: loader 2.0s ease-in-out;
        }
        
        /* Ensure main content appears below the navbar but is accessible */
        main, div#root > div {
          padding-top: 3rem;
          position: relative;
          z-index: 20;
        }
        
        /* Add skip button for accessibility */
        body::after {
          content: "";
          display: block;
          height: 0;
          clear: both;
        }
      `}</style>
    </>
  );
};

export default Navbar;