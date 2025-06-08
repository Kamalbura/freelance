import React, { useState, useEffect } from 'react';

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CTO, SmartHome Solutions',
      company: 'TechCorp Inc.',
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
      project: 'Agricultural IoT Monitoring'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Product Manager',
      company: 'Industrial Automation Ltd.',
      image: '👩‍🔬',
      rating: 5,
      text: 'The industrial IoT platform built for us is robust and scalable. The ESP32 firmware handles hundreds of sensors without any issues. Great communication throughout the project and excellent documentation.',
      project: 'Industrial IoT Platform'
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Startup Founder',
      company: 'HealthTech Startup',
      image: '👨‍⚕️',
      rating: 5,
      text: 'Transformed our concept into a working prototype in just 3 weeks. The wearable health monitoring device works perfectly with cloud integration. Professional approach and great technical insights.',
      project: 'Wearable Health Monitor'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Research Director',
      company: 'Environmental Sciences',
      image: '👩‍🔬',
      rating: 5,
      text: 'The environmental monitoring network deployed across our research sites provides real-time data with 99.9% uptime. The power optimization techniques extended battery life significantly.',
      project: 'Environmental Monitoring Network'
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
    return Array(rating).fill(0).map((_, index) => (
      <span key={index} className="text-yellow-400">⭐</span>
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Real feedback from satisfied clients who trusted me with their IoT projects
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50 to-accent-50 transform rotate-45 translate-x-16 -translate-y-16"></div>
            
            {/* Quote Icon */}
            <div className="text-6xl text-primary-200 mb-6">"</div>
            
            {/* Testimonial Content */}
            <div className="relative z-10">
              <div className="mb-6">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                {testimonials[currentIndex].text}
              </blockquote>
              
              {/* Project Badge */}
              <div className="mb-6">
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                  Project: {testimonials[currentIndex].project}
                </span>
              </div>
              
              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">{testimonials[currentIndex].image}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                  <p className="text-sm text-gray-500">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex 
                  ? 'bg-primary-600' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
