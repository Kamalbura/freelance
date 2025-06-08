import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, rootMargin: "-100px" });

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'SmartHome Solutions',
      image: '👩‍💼',
      rating: 5,
      text: 'Outstanding ESP32 development work! The IoT solution delivered exceeded our expectations. The code quality is excellent, and the real-time data streaming works flawlessly. Highly recommended for any IoT project.',
      project: 'Smart Home Automation System'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Engineering Manager',
      company: 'AgriTech Innovations',
      image: '👨‍💻',
      rating: 5,
      text: 'Incredible expertise in sensor integration and data analytics. The agricultural monitoring system has improved our crop yields by 25%. Professional, timely, and delivers exactly what was promised.',
      project: 'Agricultural IoT Network'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      company: 'Industrial Systems Inc',
      image: '👩‍🔬',
      rating: 5,
      text: 'The industrial monitoring solution provided real-time insights that transformed our operations. The ESP32 implementation is robust and the cloud dashboard is intuitive. Exceptional work!',
      project: 'Industrial Monitoring Platform'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Startup Founder',
      company: 'GreenTech Solutions',
      image: '👨‍💼',
      rating: 5,
      text: 'From concept to deployment, the entire process was smooth and professional. The energy monitoring system helps our clients save 30% on electricity costs. Outstanding technical skills and communication.',
      project: 'Energy Management System'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-slate-600'}`}
      />
    ));
  };

  return (
    <section 
      id="testimonials"
      ref={ref}
      className="py-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Client{' '}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">
              Testimonials
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What my clients say about working with me on their IoT projects
          </motion.p>
        </motion.div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-teal-500/10 to-indigo-500/10 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-indigo-500/10 to-purple-500/10 rounded-full translate-x-20 translate-y-20"></div>
            
            {/* Quote Icon */}
            <div className="relative z-10 text-6xl text-teal-400/30 mb-6">
              <FaQuoteLeft />
            </div>
            
            {/* Testimonial Content */}
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8 text-center font-inter italic">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  
                  {/* Project Badge */}
                  <div className="flex justify-center mb-6">
                    <span className="bg-gradient-to-r from-teal-500/20 to-indigo-500/20 border border-teal-400/30 text-teal-300 px-4 py-2 rounded-full text-sm font-medium">
                      Project: {testimonials[currentIndex].project}
                    </span>
                  </div>
                  
                  {/* Client Info */}
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-indigo-500 rounded-full flex items-center justify-center mr-4 text-2xl">
                      {testimonials[currentIndex].image}
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-white text-lg font-poppins">{testimonials[currentIndex].name}</h4>
                      <p className="text-slate-300 font-inter">{testimonials[currentIndex].role}</p>
                      <p className="text-sm text-slate-400 font-inter">{testimonials[currentIndex].company}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-slate-700/80 transition-all duration-300"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-slate-700/80 transition-all duration-300"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-teal-400 scale-125'
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-400 mb-2 font-poppins">50+</div>
            <div className="text-slate-400 text-sm font-inter">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2 font-poppins">100+</div>
            <div className="text-slate-400 text-sm font-inter">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2 font-poppins">15+</div>
            <div className="text-slate-400 text-sm font-inter">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2 font-poppins">5+</div>
            <div className="text-slate-400 text-sm font-inter">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
