import React, { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ScrollReveal } from '../ui/IoTAnimations';

const AnimatedTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonialsRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "CTO, TechVision Solutions",
      company: "TechVision Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "Burak delivered an exceptional IoT solution for our manufacturing facility. The ESP32-based sensor network has improved our operational efficiency by 40%. His expertise in both hardware and software development is remarkable.",
      rating: 5,
      project: "Industrial Monitoring System",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Founder, GreenTech Innovations",
      company: "GreenTech Innovations",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "Working with Burak was a game-changer for our smart agriculture project. His weather monitoring system with predictive analytics has helped farmers increase crop yield by 25%. Professional, timely, and innovative!",
      rating: 5,
      project: "Smart Agriculture Platform",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      name: "Amit Patel",
      position: "Operations Manager, SecureHome Ltd",
      company: "SecureHome Ltd",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "The smart security system Burak developed exceeded our expectations. The real-time facial recognition and mobile alerts have revolutionized our home automation offerings. Highly recommend his services!",
      rating: 5,
      project: "Smart Security System",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      name: "Dr. Sarah Wilson",
      position: "Research Director, InnovateLab",
      company: "InnovateLab",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "Burak's expertise in IoT development is outstanding. He created a comprehensive environmental monitoring solution for our research facility that provides accurate real-time data and beautiful visualizations.",
      rating: 5,
      project: "Environmental Research Platform",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];  useEffect(() => {
    // Initial animation
    animate('.testimonial-card', {
      opacity: [0, 1],
      scale: [0.8, 1],
      rotate: [10, 0],
      duration: 1000,
      delay: stagger(200),
      ease: 'out(3)'
    });

    // Stars animation
    animate('.star-icon', {
      scale: [0, 1],
      rotate: [180, 0],
      duration: 600,
      delay: stagger(100, { start: 500 }),
      ease: 'out(3)'
    });

  }, []);  useEffect(() => {
    // Slide change animation
    animate('.active-testimonial', {
      opacity: [0, 1],
      translateX: [50, 0],
      duration: 600,
      ease: 'out(3)'
    });
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      ref={testimonialsRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59 130 246) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Client <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what our clients say about their experience working with us on innovative IoT projects.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Testimonial Cards (Left Side) */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Main Testimonial */}
              <div className="active-testimonial bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentSlide].gradient} opacity-5 rounded-3xl`}></div>
                
                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <FaQuoteLeft className="text-4xl text-blue-500 opacity-20" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentSlide].rating)].map((_, idx) => (
                      <FaStar key={idx} className="star-icon text-yellow-400 text-xl" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-lg text-gray-700 leading-relaxed mb-8 italic">
                    "{testimonials[currentSlide].content}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        {testimonials[currentSlide].name}
                      </h4>
                      <p className="text-gray-600">{testimonials[currentSlide].position}</p>
                      <p className="text-sm text-blue-600 font-medium">
                        {testimonials[currentSlide].company}
                      </p>
                    </div>
                  </div>

                  {/* Project Tag */}
                  <div className="mt-6">
                    <span className={`inline-block px-4 py-2 bg-gradient-to-r ${testimonials[currentSlide].gradient} text-white text-sm rounded-full font-medium`}>
                      {testimonials[currentSlide].project}
                    </span>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-between items-center mt-8">
                <button 
                  onClick={prevSlide}
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-200 hover:border-blue-400"
                >
                  <FaChevronLeft className="text-gray-600 hover:text-blue-600" />
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-blue-600 w-8' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextSlide}
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-200 hover:border-blue-400"
                >
                  <FaChevronRight className="text-gray-600 hover:text-blue-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Side Testimonials */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card opacity-0 cursor-pointer transition-all duration-300 ${
                  index === currentSlide ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => goToSlide(index)}
              >
                <div className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white border-blue-400 shadow-lg' 
                    : 'bg-white/80 border-gray-200 hover:border-gray-300'
                }`}>
                  <div className="flex items-center gap-4 mb-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h5 className="font-bold text-gray-900 text-sm">
                        {testimonial.name}
                      </h5>
                      <p className="text-gray-600 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                    "{testimonial.content.substring(0, 120)}..."
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <ScrollReveal delay={600} className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">5⭐</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AnimatedTestimonials;
