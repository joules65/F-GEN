import React from 'react';
import { BookOpen, Code, FileText, ArrowRight } from 'lucide-react';

const Documentation = () => {
  const docs = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Getting Started",
      description: "Quick start guide and basic concepts of F-gen's healthcare platform",
      link: "#"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "API Reference",
      description: "Complete API documentation with examples and use cases",
      link: "#"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Integration Guide",
      description: "Step-by-step guide for seamless system integration",
      link: "#"
    }
  ];

  return (
    <div className="py-32 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-sm sm:text-base text-teal-400 font-mono">DOCUMENTATION</h2>
          <h3 className="text-3xl sm:text-5xl font-bold gradient-text">
            Build with Confidence
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive documentation and resources to help you implement F-gen's healthcare solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {docs.map((doc, index) => (
            <a
              key={index}
              href={doc.link}
              className="hover-card group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl"
            >
              <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 inline-block">
                {doc.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-teal-400 transition-colors">
                {doc.title}
              </h3>
              <p className="text-gray-400 mb-6">{doc.description}</p>
              <div className="flex items-center text-teal-400 group-hover:text-teal-300 transition-colors">
                <span className="mr-2">Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documentation;