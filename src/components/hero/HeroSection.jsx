import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
        staggerChildren: 0.3,
      }
    }
  };
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative z-10 px-4">
      {/* Hero background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/90 to-indigo-600/90 z-0" />
      
      {/* Content */}
      <div className="relative z-10">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-poppins text-center drop-shadow-lg"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          Your IoT & ESP32 Solutions
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-white mb-8 font-inter text-center max-w-2xl drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Building cutting-edge IoT systems tailored to your needs. From sensor integration to cloud connectivity, let's bring your ideas to life.
        </motion.p>
        <motion.a
          href="#contact"
          className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 inline-block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Build Your Project
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
