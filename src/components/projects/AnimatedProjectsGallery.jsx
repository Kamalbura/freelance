import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaWifi, FaCloud, FaMobile } from 'react-icons/fa';
import { ScrollReveal } from '../ui/IoTAnimations';

const AnimatedProjectsGallery = () => {
  const galleryRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Smart Home Automation",
      description: "Complete IoT ecosystem for home automation with ESP32, mobile app, and cloud dashboard. Features real-time monitoring and intelligent controls.",
      image: "https://images.unsplash.com/photo-1558618666-fbd6c327eea4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["ESP32", "React Native", "AWS IoT", "Node.js"],
      category: "IoT System",
      gradient: "from-blue-500 to-cyan-500",
      icon: <FaCode className="text-blue-500" />
    },
    {
      id: 2,
      title: "Industrial Sensor Network",
      description: "Scalable sensor network for industrial monitoring with LoRaWAN connectivity and real-time analytics dashboard.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["ESP32", "LoRaWAN", "React", "InfluxDB"],
      category: "Industrial IoT",
      gradient: "from-green-500 to-emerald-500",
      icon: <FaWifi className="text-green-500" />
    },
    {
      id: 3,
      title: "Weather Monitoring Station",
      description: "Advanced weather monitoring system with multiple sensors, web dashboard, and mobile alerts for precision agriculture.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["ESP32", "Vue.js", "Firebase", "Flutter"],
      category: "Environmental",
      gradient: "from-purple-500 to-pink-500",
      icon: <FaCloud className="text-purple-500" />
    },
    {
      id: 4,
      title: "Smart Security System",
      description: "Intelligent security system with facial recognition, motion detection, and real-time alerts via mobile app.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["ESP32-CAM", "Python", "React", "TensorFlow"],
      category: "Security",
      gradient: "from-red-500 to-orange-500",
      icon: <FaMobile className="text-red-500" />
    },
    {
      id: 5,
      title: "Energy Management System",
      description: "Smart energy monitoring and management system for homes and offices with predictive analytics and optimization.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["ESP32", "Angular", "MongoDB", "ML"],
      category: "Energy",
      gradient: "from-yellow-500 to-orange-500",
      icon: <FaCode className="text-yellow-500" />
    },
    {
      id: 6,
      title: "Asset Tracking Platform",
      description: "Real-time asset tracking solution using GPS and cellular connectivity for logistics and fleet management.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["ESP32", "GPS", "React Native", "PostgreSQL"],
      category: "Logistics",
      gradient: "from-indigo-500 to-blue-500",
      icon: <FaWifi className="text-indigo-500" />
    }
  ];  useEffect(() => {
    // Staggered project card animation
    animate('.project-card', {
      opacity: [0, 1],
      translateY: [100, 0],
      rotate: [10, 0],
      duration: 1000,
      delay: stagger(200),
      ease: 'out(3)'
    });

    // Category filter animation
    animate('.category-filter', {
      scale: [0, 1],
      opacity: [0, 1],
      duration: 600,
      delay: stagger(100, { start: 300 }),
      ease: 'out(3)'
    });

  }, []);  const handleProjectHover = (e, enter = true) => {
    const card = e.currentTarget;
    const image = card.querySelector('.project-image');
    const overlay = card.querySelector('.project-overlay');
    const tech = card.querySelectorAll('.tech-tag');

    if (enter) {
      animate(card, {
        scale: 1.05,
        rotateY: 5,
        duration: 400,
        ease: 'out(3)'
      });

      animate(image, {
        scale: 1.1,
        duration: 400,
        ease: 'out(3)'
      });

      animate(overlay, {
        opacity: [0.8, 0.9],
        duration: 300,
        ease: 'out(3)'
      });

      animate(tech, {
        translateY: [10, 0],
        opacity: [0, 1],
        duration: 300,
        delay: stagger(50),
        ease: 'out(3)'
      });
    } else {
      animate(card, {
        scale: 1,
        rotateY: 0,
        duration: 300,
        ease: 'out(3)'
      });

      animate(image, {
        scale: 1,
        duration: 300,
        ease: 'out(3)'
      });

      animate(overlay, {
        opacity: 0.8,
        duration: 200,
        ease: 'out(3)'
      });
    }
  };

  return (
    <section 
      ref={galleryRef}
      className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(30deg, transparent 40%, rgba(59, 130, 246, 0.1) 40%, rgba(59, 130, 246, 0.1) 60%, transparent 60%)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of innovative IoT solutions that have transformed businesses and improved lives.
          </p>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal delay={300} className="flex flex-wrap justify-center gap-4 mb-16">
          {['All', 'IoT System', 'Industrial IoT', 'Security', 'Environmental'].map((category, index) => (
            <button 
              key={category}
              className="category-filter opacity-0 px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              {category}
            </button>
          ))}
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card opacity-0 group relative cursor-pointer"
              onMouseEnter={(e) => handleProjectHover(e, true)}
              onMouseLeave={(e) => handleProjectHover(e, false)}
            >
              <div className="relative bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 group-hover:border-cyan-500/50 transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image w-full h-full object-cover"
                  />
                  <div className={`project-overlay absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}></div>
                  
                  {/* Project Icon */}
                  <div className="absolute top-4 right-4 text-3xl">
                    {project.icon}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/50 text-white text-xs rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="tech-tag opacity-0 px-3 py-1 bg-slate-700 text-cyan-400 text-xs rounded-full border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-500 transition-all transform hover:scale-105">
                      <FaGithub className="text-sm" />
                      Code
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-slate-600 text-gray-300 rounded-lg font-medium hover:border-cyan-500 hover:text-cyan-400 transition-all transform hover:scale-105">
                      <FaExternalLinkAlt className="text-sm" />
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <ScrollReveal delay={800} className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AnimatedProjectsGallery;
