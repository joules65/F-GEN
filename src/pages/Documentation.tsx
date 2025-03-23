import React, { useState, useEffect, useRef } from 'react';
import { Play, CheckCircle, ChevronRight, ChevronLeft, Info, Calendar, Users, DollarSign, Download, Maximize } from 'lucide-react';

const Documentation = () => {
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  
  // Grand Challenges data
  const challenges = [
    {
      id: 1,
      title: "The 1st Challenge: The Intro!",
      description: "Before you see the change, we'll let you know who we are!",
      videoSrc: "https://res.cloudinary.com/dhkscpkf5/video/upload/v1741708473/77145e659ece4631908ae240081706aa_tdl2st.mp4",
      completionDate: "January 2025",
      achievements: [
        "Let potential investors/spectators feel the aura of the group",
        "Initiated development of plans from Kiongozi Care",
        "Began training under ALU'S E-Lab incubator"
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
      description: "Work hard, Play harder!",
      videoSrc: "https://res.cloudinary.com/dhkscpkf5/video/upload/v1740434655/Untitled_design_1_eetppj.mp4",
      completionDate: "January 2025",
      achievements: [
        "Built diagnostic model with 94% accuracy on test data",
        "Reduce Mortality rates caused by emergencies",
        "Empower communities to help themselves"
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
      description: "The Breakfast show",
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
      description: "The Help-Lab",
      videoSrc: "https://res.cloudinary.com/dhkscpkf5/video/upload/v1741710301/F_GEN_HELP_LAB_-_F-Gen_720p_h264_uo9ne0.mp4",
      completionDate: "March 2025",
      achievements: [
        "Out in the field and learning what it takes to commit to social impact",
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
      description: "Finding out what it's like to work in related industries",
      videoSrc: "https://res.cloudinary.com/dhkscpkf5/video/upload/v1741890646/F-GEN_2_1_h8bwbd.mp4",
      completionDate: "March 2025",
      achievements: [
        "A view on how emergencies aren't just physical, they can be mental",
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

  // Navigation functions
  const goToPreviousChallenge = () => {
    setActiveChallenge((prev) => (prev === 0 ? challenges.length - 1 : prev - 1));
  };

  const goToNextChallenge = () => {
    setActiveChallenge((prev) => (prev === challenges.length - 1 ? 0 : prev + 1));
  };

  // Helper function to determine if source is a video or image
  const isVideoSource = (src) => {
    return src.includes('cloudinary') || src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.mov');
  };

  // Function to download current video
  const downloadVideo = () => {
    const videoSrc = challenges[activeChallenge].videoSrc;
    const fileName = `${challenges[activeChallenge].title.replace(/\s+/g, '_')}.mp4`;
    
    // Create an anchor element
    const a = document.createElement('a');
    a.href = videoSrc;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Function to enter fullscreen and play video
  const viewFullScreenVideo = () => {
    if (videoRef.current) {
      // First play the video
      videoRef.current.play();
      setIsVideoPlaying(true);
      
      // Then enter fullscreen
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) { /* Safari */
        videoRef.current.webkitRequestFullscreen();
      }
    }
  };

  return (
    <div className={`min-h-screen py-16 px-6 sm:px-8 bg-slate-50 transition-opacity duration-500 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-yellow-400 text-teal-800 rounded-md mb-3">Documentation</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
            Grand Challenges
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Pushing the boundaries of innovation to solve humanity's most pressing problems
          </p>
        </div>

        {/* Challenge navigation tabs */}
        <div className="mb-12 border-b border-slate-200">
          <div className="flex overflow-x-auto hide-scrollbar py-2 mb-0.5">
            {challenges.map((challenge, index) => (
              <button
                key={challenge.id}
                onClick={() => setActiveChallenge(index)}
                className={`px-5 py-3 whitespace-nowrap mr-2 font-medium transition-all duration-200 rounded-t-lg ${
                  activeChallenge === index 
                    ? 'text-yellow-400 border-b-2 border-teal-600 bg-blue-50' 
                    : 'text-teal-600 hover:text-slate-800 hover:bg-slate-100'
                }`}
              >
                {challenge.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main content layout */}
        <div className="grid md:grid-cols-12 gap-10">
          {/* Video section */}
          <div className="md:col-span-7 space-y-6">
            <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-md bg-white">
              <div className="aspect-video bg-slate-100 relative">
                {isVideoSource(challenges[activeChallenge].videoSrc) ? (
                  <video 
                    ref={videoRef}
                    src={challenges[activeChallenge].videoSrc} 
                    className="w-full h-full object-cover"
                    playsInline
                    controls={isVideoPlaying}
                  />
                ) : (
                  <img 
                    src={challenges[activeChallenge].videoSrc} 
                    alt={challenges[activeChallenge].title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div 
                  className={`absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center cursor-pointer transition-opacity ${isVideoPlaying ? 'opacity-0 hover:opacity-30' : 'opacity-100'}`}
                  onClick={toggleVideo}
                >
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center transition-transform duration-200 hover:bg-yellow-700 hover:scale-105">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center p-4 border-t border-slate-100">
                <div className="flex items-center space-x-2 text-sm text-slate-500">
                  <Calendar className="h-4 w-4" />
                  <span>{challenges[activeChallenge].completionDate}</span>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={goToPreviousChallenge} 
                    className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors"
                    aria-label="Previous challenge"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={goToNextChallenge} 
                    className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors"
                    aria-label="Next challenge"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Challenge progress */}
            <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-slate-700">Progress</span>
                <span className="text-sm font-medium text-yellow-400">{activeChallenge + 1} of {challenges.length}</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-2 bg-yellow-400 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${((activeChallenge + 1) / challenges.length) * 100}%` }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-slate-500">Challenge 1</span>
                <span className="text-xs text-slate-500">Challenge {challenges.length}</span>
              </div>
            </div>
          </div>

          {/* Challenge details */}
          <div className="md:col-span-5 bg-white rounded-lg p-6 border border-slate-200 shadow-md self-start">
            <h2 className="text-2xl font-bold mb-2 text-slate-800">
              {challenges[activeChallenge].title}
            </h2>
            
            <p className="text-slate-600 mb-6 pb-6 border-b border-slate-100">
              {challenges[activeChallenge].description}
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-50 rounded-md p-3 border border-slate-200">
                <div className="flex items-center space-x-2 mb-2 text-slate-500 text-sm">
                  <Users className="h-4 w-4" />
                  <span>Team Size</span>
                </div>
                <div className="text-2xl font-bold text-slate-800">{challenges[activeChallenge].stats.teamSize}</div>
              </div>
              
              <div className="bg-slate-50 rounded-md p-3 border border-slate-200">
                <div className="flex items-center space-x-2 mb-2 text-slate-500 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>Duration</span>
                </div>
                <div className="text-2xl font-bold text-slate-800">{challenges[activeChallenge].stats.duration}</div>
              </div>
              
              <div className="bg-slate-50 rounded-md p-3 border border-slate-200">
                <div className="flex items-center space-x-2 mb-2 text-slate-500 text-sm">
                  <DollarSign className="h-4 w-4" />
                  <span>Budget</span>
                </div>
                <div className="text-2xl font-bold text-slate-800">{challenges[activeChallenge].stats.budget}</div>
              </div>
            </div>
            
            <div className="mb-2 flex items-center space-x-2">
              <h3 className="text-lg font-semibold text-slate-700">Key Achievements</h3>
              <div className="w-full h-px bg-slate-200 flex-grow"></div>
            </div>
            
            <div className="space-y-3 mb-8">
              {challenges[activeChallenge].achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{achievement}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <button 
                onClick={viewFullScreenVideo}
                className="px-4 py-2 bg-yellow-400 text-white rounded-md hover:bg-teal-700 transition-colors duration-200 font-medium flex items-center justify-center gap-2 text-sm"
              >
                <Maximize className="h-4 w-4" />
                View Complete Details
              </button>
              <button 
                onClick={downloadVideo}
                className="px-4 py-2 border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 transition-colors duration-200 font-medium flex items-center justify-center gap-2 text-sm"
              >
                <Download className="h-4 w-4" />
                Download Resources
              </button>
            </div>
          </div>
        </div>
        
        {/* Related information */}
        <div className="mt-16 p-6 bg-teal-50 rounded-lg border border-teal-100">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-teal-100 rounded-full">
              <Info className="h-6 w-6 text-yellow-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">About Grand Challenges</h3>
              <p className="text-slate-600">Our Grand Challenges document the journey of the Kiongozi initiative from concept to implementation. Each challenge represents a milestone in our mission to revolutionize emergency response systems through community and technology.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;