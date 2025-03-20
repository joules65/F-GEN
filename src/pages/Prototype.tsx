import { Bold } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Prototype = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  // Single prototype data
  const prototype = {
    title: "Smart First-Aid Kit and Defibrillators",
    subtitle: "Revolutionizing Emergency Response systems through community and Technology",
    description: "Our flagship prototype represents a breakthrough in First Aid technology, combining advanced AI technology with integrated communual awareness. Designed to operate even offline and in low internet-penetration regions, the Kiongozi first aid system demonstrates our commitment to saving lives, while empowering communities to act.",
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
    category: "Innovative & Sustainable HealthCare",
    prototypeUrl: "https://kiongozi-ai.vercel.app/",
    specs: [
      { label: "Offline Capability", value: "LoRa (For low-power rural communication)" },
      { label: "Hygienic", value: "UV-C light to disinfect wound care tools" },
      { label: "Lifespan", value: "25+ years" },
      { label: "Weight", value: "8kg per box" }
    ],
    features: [
      "Shock-resistant polycarbonate",
      "Preloaded AI Voice Assistance ",
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
  const handleThumbnailClick = (index: React.SetStateAction<number>) => {
    setActiveImageIndex(index);
  };

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 transition-opacity duration-700 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-600 mb-3">
            Prototype Showcase
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Turning visionary concepts into tangible innovations
          </p>
        </div>

        {/* Main content area */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {/* Left column - Image Gallery */}
          <div className="space-y-9">
            {/* Main Image */}
            <div className="relative rounded-xl overflow-hidden bg-slate-800 shadow-2xl">
              <img 
                src={prototype.images[activeImageIndex].src} 
                alt={prototype.title}
                className="w-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {prototype.stage}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white text-sm">
                  {prototype.images[activeImageIndex].caption}
                </p>
              </div>
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {prototype.images.map((image, index) => (
                <div 
                  key={index} 
                  className={`rounded-lg overflow-hidden cursor-pointer transition-all duration-300 transform ${
                    activeImageIndex === index 
                      ? 'ring-2 ring-emerald-500 scale-105' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img 
                    src={image.src} 
                    alt={`${prototype.title} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* Specifications */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-emerald-300">Technical Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {prototype.specs.map((spec, index) => (
                  <div key={index} className="bg-slate-700 rounded-lg p-4">
                    <div className="text-sm text-gray-400">{spec.label}</div>
                    <div className="text-lg font-medium">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column - Details */}
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="text-sm font-medium text-emerald-400 uppercase tracking-wider">
                {prototype.category}
              </span>
            </div>
            
            <h2 className="text-3xl font-bold mb-2 text-white">
              {prototype.title}
            </h2>
            
            <h3 className="text-xl text-blue-300 mb-6">
              {prototype.subtitle}
            </h3>
            
            <p className="text-lg mb-8 text-gray-300 leading-relaxed">
              {prototype.description}
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-blue-200">Key Features</h3>
            <div className="space-y-3 mb-8">
              {prototype.features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3 transform transition-all duration-300 hover:translate-x-2"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-200">{feature}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-auto">
              <Link to={prototype.prototypeUrl} className="inline-block w-full">
                <button className="w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center space-x-2 font-bold text-lg">
                  <span>Experience The Prototype</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Call to action section */}
        <div className="mt-12 bg-slate-800 rounded-xl p-8 shadow-xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to See Our Technology in Action?</h2>
            <p className="text-gray-300 mb-6">
              Experience an interactive demonstration of our product.
            </p>
            <p className='text-yellow-500 font-bold mb-2 p-5
            '>Please note that this demo is not the realisation of our product but a bare skeletal showcase to give you an idea of our goals.</p>
            <Link to="https://kiongozi-ai.vercel.app/">
              <button className="px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium">
                Launch Interactive Demo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prototype;