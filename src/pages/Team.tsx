import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const teamMembers = [
  {
    name: "Tumba Michael Zikoranachukwudi Kongolo II",
    role: "Team Lead",
    image: "https://res.cloudinary.com/dhkscpkf5/image/upload/v1740594251/Teejay_h4giyp.png",
    description: "Utilising human resource to present a cohesive project.",
    quote: "Don't be a bitch."
  },
  {
    name: "David Chukwuebuka Achibiri",
    role: "Technical Lead",
    image: "https://res.cloudinary.com/dhkscpkf5/image/upload/v1738056892/c6bb7769-39ea-459a-81b7-9a6e79332645_gh5y4i.jpg",
    description: "Pioneering innovator in healthcare technology with a focus on AI and Iot integration.",
    quote: '"You can’t stop progress. It will happen, whether you lead it or not." — Lex Luthor, Superman: Red Son.'
  },
  {
    name: "Mercy Erioluwa Akintayo",
    role: "Creative Lead",
    image: "https://res.cloudinary.com/dhkscpkf5/image/upload/v1741974732/tresor-kande-LakFt4OtKxg-unsplash_pstro3.jpg",
    description: "Apart from constantly fainting, I was in charge of media for the group.",
    quote: "If it ain't broke, don't fix it."
  },
  {
    name: "Keyanne Imfura Neeve",
    role: "Research Coordinator",
    image: "https://res.cloudinary.com/dhkscpkf5/image/upload/v1740560470/Neeve_dkxa39.png",
    description: "Sources the best data, statistics, locations and budget for every challenge.",
    quote: "The future depends on what we do in the present. - Mahatma Gandhi"
  },
  {
    name: "Jean Luc Mucyando",
    role: "Activity Coordinator",
    image: "https://res.cloudinary.com/dhkscpkf5/image/upload/v1740561168/Jean_zznxjp.png",
    description: "Taking charge of group logistics to make sure all challenges were executed smoothly.",
    quote: 'Success is not final, failure is not fatal. It is the courage to continue that counts. - Winston Churchill'
  }
];

const Team = () => {
  return (
    <div className="pt-24 pb-32 min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm sm:text-base text-teal-400 font-mono"
          >
            OUR TEAM
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-5xl font-bold gradient-text"
          >
            Meet the Innovators
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Our diverse team of experts is dedicated to revolutionizing healthcare through innovative technology.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="team-card"
            >
              <div className="p-6 space-y-6">
                <div className="relative">
                  <div className="hexagon-clip overflow-hidden aspect-square">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-white">{member.name}</h4>
                  <p className="text-teal-400 font-mono text-sm">{member.role}</p>
                  <p className="text-gray-400">{member.description}</p>
                </div>

                <div className="quote-banner p-4 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <Quote className="w-6 h-6 text-teal-400 flex-shrink-0" />
                    <p className="text-gray-300 italic text-sm">
                      "{member.quote}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;