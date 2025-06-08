import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ service, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.1
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group relative bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-teal-500/50 overflow-hidden"
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon */}
      <div className="relative z-10 mb-6">
        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>
      </div>
      
      {/* Title */}
      <h3 className="relative z-10 text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors duration-300 font-poppins">
        {service.title}
      </h3>
      
      {/* Description */}
      <p className="relative z-10 text-slate-300 mb-6 leading-relaxed font-inter">
        {service.description}
      </p>

      {/* Features List */}
      {service.features && (
        <div className="relative z-10 mb-6">
          <h4 className="text-sm font-semibold text-teal-400 mb-3 uppercase tracking-wide">Key Features</h4>
          <div className="grid grid-cols-2 gap-2">
            {service.features.map((feature, idx) => (
              <span
                key={idx}
                className="text-xs text-slate-400 bg-slate-700/50 px-3 py-1 rounded-full border border-slate-600/50"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Pricing */}
      {service.pricing && (
        <div className="relative z-10 flex items-center justify-between">
          <span className="text-lg font-bold text-teal-400 font-poppins">
            {service.pricing}
          </span>
          <motion.button
            className="bg-gradient-to-r from-teal-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
      )}

      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-teal-500/10 to-indigo-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-tl from-teal-500/5 to-indigo-500/5 rounded-full group-hover:scale-110 transition-transform duration-500" />
    </motion.div>
  );
};

export default ServiceCard;
