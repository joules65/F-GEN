import React, { useState, useEffect, useRef } from 'react';

const Documentation = () => {
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const videoRef = useRef(null);
  
  // Grand Challenges data
  const challenges = [
    {
      id: 1,
      title: "The 1st Challenge: The Intro!",
      description: "Before you see the change, we'll let you know who we are!.",
      videoSrc: "https://res.cloudinary.com/dhkscpkf5/video/upload/v1741708473/77145e659ece4631908ae240081706aa_tdl2st.mp4",
      completionDate: "August 2024",
      achievements: [
        "Let potential investors/spectators feel the aura of the group",
        "Initiated development of plans from Kiongozi Care.",
        "Began training under ALU'S E-Lab incubator."
      ],
      stats: {
        teamSize: 5,
        duration: "1 Week",
        budget: "0FRW"
      }
    },
    {
      id: 2,
      title: "Challenge 1: The Bloopers!",
      description: "Work hard, Play harder!.",
      videoSrc: "https://res.cloudinary.com/dhkscpkf5/video/upload/v1740434655/Untitled_design_1_eetppj.mp4",
      completionDate: "January 2025",
      achievements: [
        "Built diagnostic model with 94% accuracy on test data",
        "Reduce Mortality rates caused by emergencies",
        "Empower comunities to help themselves."
      ],
      stats: {
        teamSize: 5,
        duration: "1 week",
        budget: "0 FRW"
      }
    },
    {
      id: 3,
      title: "Challenge 2",
      description: "The Breakfast show.",
      videoSrc: "https://res.cloudinary.com/dhkscpkf5/video/upload/v1741709735/The_Breakfast_Show_-_F-Gen_720p_h264_wwm3j4.mp4",
      completionDate: "February 2025",
      achievements: [
        "The Talk Show on a case study for our mission",
        "Please note this is not how David is in real life!"
      ],
      stats: {
        teamSize: 5,
        duration: "1 week",
        budget: "1000 FRW"
      }
    },
    {
      id: 4,
      title: "Challenge 3: Help Lab",
      description: "The Help-Lab.",
      videoSrc: "https://res.cloudinary.com/dhkscpkf5/video/upload/v1741710301/F_GEN_HELP_LAB_-_F-Gen_720p_h264_uo9ne0.mp4",
      completionDate: "March 2025",
      achievements: [
        "Out in the field and learning what it takes to commit to social impact.",
        "Changing lives one student at a time!"
      ],
      stats: {
        teamSize: 5,
        duration: "1 week",
        budget: "67000 FRW"
      }
    },
    {
      id: 5,
      title: "Challenge 4: Interviews in the field",
      description: "Finding out what its like to work in related industries..",
      videoSrc: "https://res.cloudinary.com/dhkscpkf5/video/upload/v1741890646/F-GEN_2_1_h8bwbd.mp4",
      completionDate: "March 2025",
      achievements: [
        "A view on how emergencies aren't just physical, they can be mental.",
        "Insightful Information"
      ],
      stats: {
        teamSize: 5,
        duration: "1 week",
        budget: "0 FRW"
      }
    },
    {
      id: 6,
      title: "Challenge 5: Video Pitch",
      description: "Pitching our video for the imaginary $10000 grant",
      videoSrc: "https://res.cloudinary.com/dhkscpkf5/video/upload/v1741891022/F-GEN_CHALLENGE_5_PITCH_VIDEO_dfwgpb.mp4",
      completionDate: "March 2025",
      achievements: [
        "We wish the money were real",
        "KiongoziCare is becoming fleshed out!"
      ],
      stats: {
        teamSize: 5,
        duration: "1 week",
        budget: "0 FRW"
      }
    },
  ];

  // Page load animation
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  // Function to handle video play/pause
  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  // Handle video change when activeChallenge changes
  useEffect(() => {
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [activeChallenge]);

  // Handle video play/pause state changes
  useEffect(() => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoPlaying]);

  // Helper function to determine if source is a video or image
  const isVideoSource = (src) => {
    return src.includes('cloudinary') || src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.mov');
  };

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 transition-opacity duration-700 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 mb-4">
            Grand Challenges
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Pushing the boundaries of innovation to solve humanity's most pressing problems.
          </p>
        </div>

        {/* Challenge navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {challenges.map((challenge, index) => (
              <button
                key={challenge.id}
                onClick={() => setActiveChallenge(index)}
                className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  activeChallenge === index 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/40' 
                    : 'bg-slate-800 hover:bg-slate-700'
                }`}
              >
                {challenge.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main content layout - Modified grid for larger video */}
        <div className="grid md:grid-cols-12 gap-10">
          {/* Video section - Increased to 7 columns */}
          <div className="md:col-span-7 relative rounded-xl overflow-hidden group transform transition-all duration-300 hover:scale-[1.02] shadow-xl">
            <div className="aspect-video bg-slate-800 relative">
              {isVideoSource(challenges[activeChallenge].videoSrc) ? (
                <video 
                  ref={videoRef}
                  src={challenges[activeChallenge].videoSrc} 
                  className="w-full h-full object-cover"
                  playsInline
                />
              ) : (
                <img 
                  src={challenges[activeChallenge].videoSrc} 
                  alt={challenges[activeChallenge].title}
                  className="w-full h-full object-cover"
                />
              )}
              <div 
                className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center cursor-pointer transition-opacity ${isVideoPlaying ? 'opacity-0' : 'opacity-100'}`}
                onClick={toggleVideo}
              >
                <div className="w-20 h-20 bg-blue-600 bg-opacity-80 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Challenge {activeChallenge + 1}/{challenges.length}</span>
                <span className="text-sm">{challenges[activeChallenge].completionDate}</span>
              </div>
            </div>
          </div>

          {/* Challenge details - Decreased to 5 columns */}
          <div className="md:col-span-5 flex flex-col">
            <h2 className="text-3xl font-bold mb-4 text-blue-300">
              {challenges[activeChallenge].title}
            </h2>
            
            <p className="text-lg mb-6">
              {challenges[activeChallenge].description}
            </p>
            
            <div className="flex space-x-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">{challenges[activeChallenge].stats.teamSize}</div>
                <div className="text-sm uppercase tracking-wide text-gray-400">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">{challenges[activeChallenge].stats.duration}</div>
                <div className="text-sm uppercase tracking-wide text-gray-400">Duration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">{challenges[activeChallenge].stats.budget}</div>
                <div className="text-sm uppercase tracking-wide text-gray-400">Spent</div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 text-blue-200">HIGHLIGHTS</h3>
            <div className="space-y-3 mb-6">
              {challenges[activeChallenge].achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3 transform transition-all duration-300 hover:translate-x-2"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>{achievement}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-auto">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30">
                View Complete Project Details
              </button>
            </div>
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="flex justify-between mb-2">
            {challenges.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveChallenge(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeChallenge === index 
                    ? 'bg-blue-500 transform scale-125' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`View challenge ${index + 1}`}
              />
            ))}
          </div>
          <div className="h-1 bg-slate-700 rounded-full">
            <div 
              className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((activeChallenge + 1) / challenges.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;