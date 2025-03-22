import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Check, ChevronRight } from 'lucide-react';

const Prototype = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  // Single prototype data
  const prototype = {
    title: "Smart First-Aid Kit and Defibrillators",
    subtitle: "Revolutionizing Emergency Response Systems Through Community and Technology",
    description: "Our flagship prototype represents a breakthrough in First Aid technology, combining advanced AI technology with integrated communal awareness. Designed to operate even offline and in low internet-penetration regions, the Kiongozi first aid system demonstrates our commitment to saving lives, while empowering communities to act.",
    mainImage: "https://res.cloudinary.com/dhkscpkf5/image/upload/v1740433222/Screenshot_2025-01-27_165743_gibrwp.png",
    images: [
      {
        src: "https://res.cloudinary.com/dhkscpkf5/image/upload/v1740496605/smartkit_a9mcxp.png",
        caption: "Smart First Aid Kit"
      },
      {
        src: "https://res.cloudinary.com/dhkscpkf5/image/upload/v1740496587/bittham_n6lsry.png",
        caption: "Effective Package design for ease of carriage and opening."
      },
      {
        src: "https://res.cloudinary.com/dhkscpkf5/image/upload/v1740432839/Screenshot_2025-02-05_104557_domoiv.png",
        caption: "Mobile monitoring application"
      }
    ],
    stage: "Beta Testing",
    category: "Innovative & Sustainable Healthcare",
    prototypeUrl: "https://kiongozi-ai.vercel.app/",
    specs: [
      { label: "Offline Capability", value: "LoRa (For low-power rural communication)" },
      { label: "Hygienic", value: "UV-C light to disinfect wound care tools" },
      { label: "Lifespan", value: "25+ years" },
      { label: "Weight", value: "8kg per box" }
    ],
    features: [
      "Shock-resistant polycarbonate",
      "Preloaded AI Voice Assistance",
      "Rechargeable Lithium-Ion (Li-ion)",
      "One-tap alert to emergency contacts & medical professionals",
      "Built-in battery storage",
      "Real-time performance monitoring via smartphone application"
    ]
  };

  // Page load animation
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  // Function to handle thumbnail clicks
  const handleThumbnailClick = (index) => {
    setActiveImageIndex(index);
  };

  return (
    <div className={`min-h-screen py-16 px-6 sm:px-8 bg-slate-50 transition-opacity duration-500 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
            Prototype Showcase
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Turning visionary concepts into tangible innovations that address real-world challenges
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="mb-10 flex items-center text-sm text-slate-500">
          <span>Solutions</span>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span>Healthcare</span>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="font-medium text-slate-700">{prototype.title}</span>
        </div>

        {/* Main content area */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left column - Image Gallery */}
          <div className="space-y-8">
            {/* Main Image */}
            <div className="relative rounded-lg overflow-hidden bg-white shadow-md">
              <img 
                src={prototype.images[activeImageIndex].src} 
                alt={prototype.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-md text-sm font-medium">
                {prototype.stage}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-sm font-medium">
                  {prototype.images[activeImageIndex].caption}
                </p>
              </div>
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {prototype.images.map((image, index) => (
                <div 
                  key={index} 
                  className={`rounded-md overflow-hidden cursor-pointer transition-all duration-200 ${
                    activeImageIndex === index 
                      ? 'ring-2 ring-teal-500 shadow-md' 
                      : 'opacity-75 hover:opacity-100 border border-slate-200'
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img 
                    src={image.src} 
                    alt={`${prototype.title} view ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* Specifications */}
            <div className="bg-white rounded-lg p-6 shadow-md border border-slate-200">
              <h3 className="text-lg font-semibold mb-5 text-slate-800 flex items-center">
                Technical Specifications
              </h3>
              <div className="grid grid-cols-2 gap-5">
                {prototype.specs.map((spec, index) => (
                  <div key={index} className="bg-slate-50 rounded-md p-4 border border-slate-200">
                    <div className="text-sm text-slate-500 mb-1">{spec.label}</div>
                    <div className="text-md font-medium text-slate-800">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column - Details */}
          <div className="flex flex-col">
            <div className="mb-3">
              <span className="text-sm font-medium text-teal-600 uppercase tracking-wider">
                {prototype.category}
              </span>
            </div>
            
            <h2 className="text-3xl font-bold mb-3 text-slate-800">
              {prototype.title}
            </h2>
            
            <h3 className="text-xl text-slate-600 mb-6">
              {prototype.subtitle}
            </h3>
            
            <div className="h-1 w-16 bg-teal-500 mb-6"></div>
            
            <p className="text-slate-700 leading-relaxed mb-8">
              {prototype.description}
            </p>
            
            <h3 className="text-xl font-semibold mb-5 text-slate-800">Key Features</h3>
            <div className="space-y-4 mb-10">
              {prototype.features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start"
                >
                  <div className="w-6 h-6 rounded-full bg-yellow-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-teal-600" />
                  </div>
                  <p className="text-slate-700 ml-3">{feature}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-auto pt-6 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <Link to={prototype.prototypeUrl} className="flex-1">
                  <button className="w-full px-6 py-3 bg-teal-600 rounded-md hover:bg-yellow-400 transition-colors duration-200 flex items-center justify-center space-x-2 font-medium text-white">
                    <span>Experience Prototype</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </Link>
                <button className="flex-1 px-6 py-3 border border-slate-300 bg-white text-slate-700 rounded-md hover:bg-slate-50 transition-colors duration-200 font-medium">
                  Request Documentation
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to action section */}
        <div className="mt-12 bg-gradient-to-r from-teal-600 to-blue-300 rounded-lg p-8 shadow-lg text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Experience Our Technology?</h2>
            <p className="text-yellow-400 mb-8">
              Explore an interactive demonstration of our Kiongozi first aid system and discover how it's transforming emergency response.
            </p>
            <div className="bg-white/10 rounded-md p-4 mb-8 inline-block">
              <p className="text-yellow-400 text-sm">
                Please note that this demo is a prototype showcase to illustrate our vision and core functionality.
              </p>
            </div>
            <Link to="https://kiongozi-ai.vercel.app/">
              <button className="px-8 py-3 bg-white text-teal-700 rounded-md hover:bg-blue-50 transition-all duration-200 font-medium">
                Launch Interactive Demo now!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prototype;