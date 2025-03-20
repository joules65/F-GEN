/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';

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
      image: "https://res.cloudinary.com/dhkscpkf5/image/upload/v1740432327/wokd_x6cyjl.png", // Replace with your converted image URL
      type: "image"
    },
    {
      id: 4,
      title: "Challenge 6 Ahead!",
      date: "March 15, 2025",
      description: "Refining UI/UX based on user testing results.",
      image: "https://res.cloudinary.com/dhkscpkf5/image/upload/v1742426605/IMG_2452_amskic.png",
      type: "image"
    },
    {
      id: 5,
      title: "Interviews and out in the field",
      date: "April 8, 2025",
      description: "Team collaborations for fun and capacity building.",
      image: "https://res.cloudinary.com/dhkscpkf5/image/upload/v1742426605/IMG_2392_1_b9obs2.png",
      type: "image"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  const goToSlide = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Our Journey So Far
        </h1>
        <p className="mt-4 text-xl text-slate-300">A visual timeline of our group's progress and milestones</p>
      </div>

      {/* Carousel */}
      <div className="relative w-full h-96 overflow-hidden rounded-xl bg-slate-900 shadow-2xl">
        {events[currentIndex].type === "image" ? (
          <img src={events[currentIndex].image} alt={events[currentIndex].title} className="w-full h-full object-cover transition-all duration-700" />
        ) : (
          <video
            src={events[currentIndex].video}
            className="w-full h-full object-cover"
            controls
            autoPlay
            loop
            muted
          />
        )}
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mt-4">
        <button onClick={prevSlide} className="text-white bg-black/50 p-2 rounded-full">◀</button>
        <button onClick={nextSlide} className="text-white bg-black/50 p-2 rounded-full">▶</button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center mt-8 space-x-2">
        {events.map((_, index) => (
          <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-500 w-6' : 'bg-gray-600'}`} />
        ))}
      </div>

      {/* Regular Gallery Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div key={event.id} className="bg-slate-800 rounded-lg overflow-hidden shadow-lg">
            {event.type === "image" ? (
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-auto object-contain"  // Adjusted for larger images
              />
            ) : (
              <video
                src={event.video}
                className="w-full h-auto object-contain"  // Ensure video fits properly as well
                muted
                loop
              />
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-500">{event.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{event.date}</p>
              <p className="mt-2 text-sm text-slate-300">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
