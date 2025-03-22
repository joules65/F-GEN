import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

// Convert flag emojis to images using country code
const getFlagImage = (countryCode: string) => {
  return `https://flagcdn.com/w80/${countryCode.toLowerCase()}.png`;
};

const teamMembers = [
  {
    name: "Tumba Michael Z. Kongolo II",
    role: "Team Lead",
    image: "https://res.cloudinary.com/dhkscpkf5/image/upload/v1740594251/Teejay_h4giyp.png",
    description: "Utilizing human resources to present a cohesive project and guide the team vision.",
    quote: "Excellence is not a skill. It's an attitude.",
    countries: [
      { code: "bj", name: "Benin" },
      { code: "cd", name: "Democratic Republic of Congo" },
      { code: "ng", name: "Nigeria" },
      { code: "za", name: "South Africa" }
    ]
  },
  {
    name: "David Chukwuebuka Achibiri",
    role: "Technical Lead",
    image: "https://res.cloudinary.com/dhkscpkf5/image/upload/v1738056892/c6bb7769-39ea-459a-81b7-9a6e79332645_gh5y4i.jpg",
    description: "Pioneering innovator in healthcare technology with a focus on AI and IoT integration.",
    quote: "You can't stop progress. It will happen, whether you lead it or not.-Lex Luthor, Superman Red Son",
    countries: [
      { code: "ng", name: "Nigeria" }
    ]
  },
  {
    name: "Mercy Erioluwa Akintayo",
    role: "Creative Lead",
    image: "https://res.cloudinary.com/dhkscpkf5/image/upload/v1741974732/tresor-kande-LakFt4OtKxg-unsplash_pstro3.jpg",
    description: "Directing the creative vision and managing media strategy for all team initiatives.",
    quote: "If it ain't broke, don't fix it.",
    countries: [
      { code: "ng", name: "Nigeria" }
    ]
  },
  {
    name: "Keyanne Imfura Neeve",
    role: "Research Coordinator",
    image: "https://res.cloudinary.com/dhkscpkf5/image/upload/v1740560470/Neeve_dkxa39.png",
    description: "Sources the best data, statistics, locations and budget for every challenge.",
    quote: "The future depends on what we do in the present.",
    countries: [
      { code: "rw", name: "Rwanda" }
    ]
  },
  {
    name: "Jean Luc Mucyando",
    role: "Activity Coordinator",
    image: "https://res.cloudinary.com/dhkscpkf5/image/upload/v1740561168/Jean_zznxjp.png",
    description: "Taking charge of group logistics to ensure all challenges are executed smoothly.",
    quote: "Success is not final, failure is not fatal. It is the courage to continue that counts.",
    countries: [
      { code: "rw", name: "Rwanda" }
    ]
  }
];

const Team = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 mb-3 rounded-full bg-yellow-400 text-teal-800 text-sm font-semibold tracking-wide"
          >
            OUR TEAM
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-teal-500 bg-clip-text text-transparent"
          >
            Meet the Innovators
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Our diverse team is dedicated to revolutionizing healthcare through innovative technology.
          </motion.p>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Card Header with Image */}
              <div className="relative h-72 overflow-hidden bg-slate-200">
                {/* Special handling for Tumba's image to ensure better display */}
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full ${member.name.includes("Tumba") ? "object-contain bg-slate-100" : "object-cover"}`}
                />
                
                {/* Flag Banner */}
                <div className="absolute top-0 left-0 right-0 p-2 bg-gradient-to-b from-slate-800/70 to-transparent flex items-center space-x-2">
                  {member.countries.map((country, i) => (
                    <div key={i} className="relative group">
                      <img 
                        src={getFlagImage(country.code)} 
                        alt={country.name}
                        className="h-6 rounded-sm border border-white/20 shadow-md"
                      />
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {country.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
                <div className="inline-block px-3 py-1 bg-yellow-400 rounded-full mb-4">
                  <p className="text-teal-600 font-medium text-sm">{member.role}</p>
                </div>
                <p className="text-slate-600 mb-4">{member.description}</p>
                
                {/* Quote Section */}
                <div className="bg-slate-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <div className="flex items-start">
                    <Quote className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1 mr-2" />
                    <p className="text-slate-700 italic text-sm">
                      "{member.quote}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;