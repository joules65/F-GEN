import React, { useEffect, useState } from 'react';
import { Activity, Brain, Users, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const IntegratedHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen pt-16 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 z-0" />
              
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-sm sm:text-base textev
              -teal-400 font-mono">OUR HEALTHCARE INNOVATION: <span className="text-yellow-500">THINK TANK</span> </h2>
              <h1 className="text-4xl sm:text-5xl font-bold gradient-text leading-tight">
                The Future of Emergency Response is Here
              </h1>
              <p className="text-gray-400 text-lg max-w-xl">
                F-gen is revolutionizing healthcare delivery through cutting-edge technology and AI-driven solutions.
              </p>
            </div>
                        
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full text-white font-semibold hover:opacity-90 transition-opacity">
                <Link to={"/Prototype"}>
                Get Started
                </Link>
              </button>
              <button className="px-6 py-3 bg-slate-800 rounded-full text-white font-semibold hover:bg-slate-700 transition-colors border border-slate-700">
                View Documentation
              </button>
            </div>
            
            {/* Card section with resized geometric stat cards */}
            <div className="flex flex-wrap gap-4 text-gray-400 justify-start">
              {/* Hexagonal Card - resized */}
              <div 
                className={`stat-card relative overflow-hidden transform hover:scale-105 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ 
                  transitionDelay: '100ms',
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  width: '150px',
                  height: '170px',
                  background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2) 0%, rgba(16, 185, 129, 0.05) 100%)'
                }}
              >
                <div className="hexagon-content flex flex-col items-center justify-center h-full">
                  <div className="icon-container p-2 rounded-full bg-teal-500/20 mb-2 animate-pulse-slow">
                    <Users className="w-5 h-5 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text text-center">500</h3>
                  <p className="text-center text-xs">Healthcare Partners</p>
                </div>
                <div className="absolute inset-0 bg-teal-500/5 hexagon-shimmer"></div>
              </div>
              
              {/* Circular Card - resized */}
              <div 
                className={`stat-card flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ 
                  transitionDelay: '200ms',
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(20, 184, 166, 0.05) 70%)',
                  border: '2px solid rgba(16, 185, 129, 0.2)'
                }}
              >
                <div className="absolute inset-0 circle-pulse"></div>
                <div className="icon-container p-2 rounded-full bg-emerald-500/20 mb-2 rotate-icon">
                  <Brain className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold gradient-text text-center">1M+</h3>
                <p className="text-center text-xs">Patients hope to serve</p>
                <div className="absolute -left-6 -bottom-6 w-10 h-10 rounded-full bg-emerald-500/10 animate-ping-slow"></div>
                <div className="absolute -right-4 -top-8 w-8 h-8 rounded-full bg-teal-500/10 animate-ping-slow" style={{animationDelay: '1.5s'}}></div>
              </div>
              
              {/* Rhombus Card - resized */}
              <div 
                className={`stat-card relative flex items-center justify-center overflow-hidden transition-all duration-500 transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ 
                  transitionDelay: '300ms',
                  width: '140px',
                  height: '140px',
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                  background: 'linear-gradient(45deg, rgba(20, 184, 166, 0.2) 0%, rgba(16, 185, 129, 0.05) 100%)',
                  border: '1px solid rgba(20, 184, 166, 0.3)'
                }}
              >
                <div className="absolute inset-0 rhombus-glow"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="icon-container p-2 rounded-full bg-teal-500/20 mb-2 bounce-icon">
                    <BarChart3 className="w-5 h-5 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text text-center">99%</h3>
                  <p className="text-center text-xs">Accuracy</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side with image and floating icon*/}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-emerald-500/30 rounded-full blur-3xl opacity-70" />
            <img
              src="https://res.cloudinary.com/dhkscpkf5/image/upload/v1740433222/Screenshot_2025-01-27_165743_gibrwp.png"
              alt="AI Healthcare"
              className="relative rounded-2xl shadow-2xl border border-slate-800 w-full"
              style={{ animation: 'float 6s ease-in-out infinite' }}
            />
            <div className="absolute -top-4 -right-4 w-14 h-14 bg-slate-800/80 backdrop-blur-sm rounded-lg border border-teal-500/30 flex items-center justify-center shadow-lg rotate-12" style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '1s' }}>
              <Activity className="w-7 h-7 text-teal-400" />
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(0.2); opacity: 0.8; }
          80%, 100% { transform: scale(1.2); opacity: 0; }
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes shimmer {
          0% { opacity: 0.3; }
          50% { opacity: 0.6; }
          100% { opacity: 0.3; }
        }
        
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.6; }
          100% { transform: scale(0.8); opacity: 0.3; }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 15px 2px rgba(20, 184, 166, 0.2); }
          50% { box-shadow: 0 0 25px 5px rgba(20, 184, 166, 0.4); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .rotate-icon {
          animation: rotate 15s linear infinite;
        }
        
        .bounce-icon {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .hexagon-shimmer {
          animation: shimmer 4s ease-in-out infinite;
        }
        
        .circle-pulse {
          animation: pulse-ring 4s ease-in-out infinite;
          border-radius: 50%;
        }
        
        .rhombus-glow {
          animation: glow 4s ease-in-out infinite;
        }
        
        .gradient-text {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          background-image: linear-gradient(to right, #14b8a6, #10b981);
        }
      `}</style>
    </div>
  );
};

export default IntegratedHero;