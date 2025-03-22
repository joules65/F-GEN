import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const events = [
    {
      id: 1,
      title: "The Day at Strive",
      date: "February 27, 2025",
      description: "Our Team with the strive team. Great prospects for the future.",
      image: "https://res.cloudinary.com/dhkscpkf5/image/upload/v1742426605/IMG_2319_1_rveqcf.png",
      type: "image"
    },
    {
      id: 2,
      title: "Quick Break",
      date: "March 19, 2025",
      description: "Break from the heat.",
      video: "https://res.cloudinary.com/dhkscpkf5/video/upload/v1742426610/IMG_2527_llh3pb.mp4",
      type: "video"
    },
    {
      id: 3,
      title: "Pov: I know a place...",
      date: "January 23, 2025",
      description: "Group leader laments the sun for challenge 1.",
      image: "https://res.cloudinary.com/dhkscpkf5/image/upload/v1740432327/wokd_x6cyjl.png",
      type: "image"
    },
    {
      id: 4,
      title: "Challenge 6 Ahead!",
      date: "March 8, 2025",
      description: "Refining UI/UX based on user testing results.",
      image: "https://res.cloudinary.com/dhkscpkf5/image/upload/v1742426605/IMG_2452_amskic.png",
      type: "image"
    },
    {
      id: 5,
      title: "Interviews and out in the field",
      date: "March 12, 2025",
      description: "Team collaborations for fun and capacity building.",
      image: "https://res.cloudinary.com/dhkscpkf5/image/upload/v1742426605/IMG_2392_1_b9obs2.png",
      type: "image"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(null);
  const [view, setView] = useState('featured'); // 'featured', 'grid', or 'timeline'
  const carouselRef = useRef(null);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, events.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getMonth = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('default', { month: 'short' });
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section with Parallax */}
      <div className="relative h-64 sm:h-80 md:h-96 mb-16 overflow-hidden rounded-3xl">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${events[0].image})`,
            transform: 'translateZ(-10px) scale(2)',
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent"
          >
            Our Journey So Far
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-xl text-white max-w-2xl"
          >
            A visual timeline showcasing our team's incredible progress and defining moments
          </motion.p>
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-white shadow-md p-1 rounded-full flex space-x-1">
          {['featured', 'grid', 'timeline'].map((viewType) => (
            <button 
              key={viewType}
              onClick={() => setView(viewType)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                view === viewType 
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {viewType.charAt(0).toUpperCase() + viewType.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Featured View */}
      {view === 'featured' && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full h-96 md:h-[36rem] overflow-hidden rounded-3xl shadow-2xl mb-8"
            ref={carouselRef}
          >
            {/* Main Carousel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                {events[currentIndex].type === "image" ? (
                  <img 
                    src={events[currentIndex].image} 
                    alt={events[currentIndex].title} 
                    className="w-full h-full object-cover" 
                  />
                ) : (
                  <video
                    src={events[currentIndex].video}
                    className="w-full h-full object-cover"
                    controls
                    autoPlay={!isAutoPlaying}
                    loop
                    muted
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={`content-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-6 md:p-10"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{events[currentIndex].title}</h2>
                <div className="flex items-center mb-4">
                  <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-full">
                    {events[currentIndex].date}
                  </span>
                </div>
                <p className="text-xl text-white max-w-2xl">{events[currentIndex].description}</p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute top-1/2 left-4 -translate-y-1/2 flex flex-col space-y-4">
              <button 
                onClick={prevSlide} 
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={toggleAutoPlay} 
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
                aria-label={isAutoPlaying ? "Pause" : "Play"}
              >
                {isAutoPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </button>
              <button 
                onClick={nextSlide} 
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mb-16 space-x-2 overflow-x-auto py-2 px-4 snap-x">
            {events.map((event, index) => (
              <motion.button 
                key={event.id}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden snap-start ${
                  index === currentIndex ? 'ring-2 ring-red-500 ring-offset-2 ring-offset-slate-50' : 'opacity-60'
                }`}
              >
                {event.type === "image" ? (
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="relative w-full h-full">
                    <img src={`https://res.cloudinary.com/dhkscpkf5/image/upload/v1742426610/IMG_2527_llh3pb.jpg`} alt={event.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      </svg>
                    </div>
                  </div>
                )}
              </motion.button>
            ))}
          </div>
        </>
      )}

      {/* Grid View */}
      {view === 'grid' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-xl"
              onMouseEnter={() => setIsHovering(event.id)}
              onMouseLeave={() => setIsHovering(null)}
            >
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                {event.type === "image" ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <video
                    src={event.video}
                    className="w-full h-64 object-cover"
                    autoPlay={isHovering === event.id}
                    loop
                    muted
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-600 text-white">
                    {event.date}
                  </span>
                </div>
                
                {event.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-red-600 rounded-full p-3 opacity-80 group-hover:opacity-100 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      </svg>
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors">
                  {event.title}
                </h3>
                <p className="mt-3 text-gray-600">
                  {event.description}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Timeline View */}
      {view === 'timeline' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative max-w-4xl mx-auto mt-8 mb-16"
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 rounded-full" />
          
          {events.map((event, index) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-16 ${index % 2 === 0 ? 'pl-8 md:pl-0 md:pr-8 md:text-right md:ml-auto md:mr-1/2' : 'pl-8 md:ml-1/2'}`}
              style={{ maxWidth: '45%' }}
            >
              {/* Timeline Circle */}
              <div className="absolute left-0 md:left-auto md:right-0 w-6 h-6 bg-red-600 rounded-full shadow-lg border-4 border-slate-50 z-10 transform -translate-x-1/2 md:translate-x-1/2 translate-y-1/2" />
              
              {/* Month Marker */}
              <div className={`text-sm font-bold absolute -top-8 left-0 md:left-auto md:right-0 text-red-600 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                {getMonth(event.date)}
              </div>
              
              {/* Content Card */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-xl"
              >
                <div className="mb-4 overflow-hidden rounded-lg">
                  {event.type === "image" ? (
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <video
                      src={event.video}
                      className="w-full h-48 object-cover"
                      controls
                      loop
                      muted
                    />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{event.date}</p>
                <p className="text-gray-600">{event.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-full shadow-lg text-white"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

export default Gallery;