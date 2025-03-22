import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Info, Settings, Image, Users, FileText, Cpu, MessageSquare } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-teal-400 shadow-md backdrop-blur-sm py-1" 
          : "bg-teal-900 py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo Section with minimal animation */}
          <Link to="/" className="flex-shrink-0 flex items-center space-x-2 group">
            <div className="h-8 w-8 flex items-center justify-center">
              <img
                src="/logo.png"
                alt="F-gen Logo"
                className="h-8 w-8 object-contain transition-transform duration-300 group-hover:rotate-6"
              />
            </div>
            <span className="text-xl font-bold text-[#FFD700]">
              F-gen
            </span>
          </Link>

          {/* Desktop Navigation - Slimmer Design */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-2 py-1 text-sm font-medium rounded-md transition-all duration-200 hover:bg-teal-700 ${
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
              className="px-3 py-1 bg-[#800020] text-[#FFD700] text-sm font-medium rounded-md shadow-sm hover:bg-[#660016] transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle - Simplified */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 text-[#FFD700] hover:text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Simplified */}
      <div 
        className={`md:hidden absolute top-12 left-0 right-0 bg-teal-700 transition-all duration-200 shadow-md ${
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
  );
};

export default Navbar;