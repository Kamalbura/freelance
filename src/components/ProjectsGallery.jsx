// ProjectsGallery.jsx - Premium ESP32 & IoT Projects Showcase
// Grid layout with scroll animations and hover effects
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "Smart Home Automation System",
    description: "Complete IoT solution using ESP32 with sensor integration, mobile app control, and cloud connectivity. Features real-time monitoring, voice control, and energy optimization.",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&crop=center",
    tags: ["ESP32", "WiFi", "Sensors", "Mobile App", "Cloud"],
    category: "IoT Systems",
    featured: true,
    status: "Completed",
    duration: "3 months",
    tech: ["ESP32-WROOM", "Firebase", "React Native", "Node.js"],
    client: "TechCorp Solutions"
  },
  {
    id: 2,
    title: "Weather Monitoring Station",
    description: "Real-time environmental monitoring with data logging, web dashboard, and alert notifications. Supports multiple sensors and wireless communication.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center",
    tags: ["ESP32", "Sensors", "Cloud", "Dashboard", "Analytics"],
    category: "Environmental",
    status: "In Progress",
    duration: "2 months",
    tech: ["ESP32-S3", "AWS IoT", "React", "Python"],
    client: "Weather Systems Inc"
  },
  {
    id: 3,
    title: "Industrial Asset Tracker",
    description: "LoRa-based tracking system for industrial equipment with long-range communication and GPS. Includes predictive maintenance and asset optimization.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center",
    tags: ["ESP32", "LoRa", "GPS", "Industrial", "Tracking"],
    category: "Industrial IoT",
    featured: true,
    status: "Completed",
    duration: "4 months",
    tech: ["ESP32", "LoRaWAN", "PostgreSQL", "Docker"],
    client: "Industrial Dynamics"
  },
  {
    id: 4,
    title: "Smart Agriculture System",
    description: "Automated irrigation control with soil monitoring, weather integration, and crop optimization. AI-powered decision making for maximum yield.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop&crop=center",
    tags: ["ESP32", "Agriculture", "Automation", "AI", "IoT"],
    category: "AgriTech",
    featured: true,
    status: "Completed",
    duration: "5 months",
    tech: ["ESP32", "TensorFlow Lite", "MQTT", "MongoDB"],
    client: "AgriSmart Solutions"
  },
  {
    id: 5,
    title: "Energy Management Platform",
    description: "Real-time energy consumption monitoring with optimization algorithms and cost analysis. Includes demand response and grid integration.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop&crop=center",
    tags: ["ESP32", "Energy", "Analytics", "Optimization", "Grid"],
    category: "Energy",
    status: "Planning",
    duration: "6 months",
    tech: ["ESP32-C3", "InfluxDB", "Grafana", "Python"],
    client: "EnergyFlow Corp"
  },
  {
    id: 6,
    title: "Security Surveillance System",
    description: "AI-powered security system with facial recognition, motion detection, and remote monitoring. Includes edge computing and cloud backup.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&crop=center",
    tags: ["ESP32", "AI", "Camera", "Security", "Edge Computing"],
    category: "Security",
    status: "Completed",
    duration: "4 months",
    tech: ["ESP32-CAM", "OpenCV", "TensorFlow", "Redis"],
    client: "SecureTech Industries"
  },
  {
    id: 7,
    title: "Fleet Management System",
    description: "GPS tracking and fleet optimization solution with real-time monitoring, route planning, and driver behavior analysis.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&crop=center",
    tags: ["ESP32", "GPS", "Fleet", "Analytics", "Optimization"],
    category: "Transportation",
    status: "Completed",
    duration: "3 months",
    tech: ["ESP32", "Google Maps API", "Vue.js", "MySQL"],
    client: "LogiTrack Solutions"
  },
  {
    id: 8,
    title: "Healthcare Monitoring Wearable",
    description: "Continuous health monitoring device with heart rate, temperature, and activity tracking. Includes emergency alerts and data analytics.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center",
    tags: ["ESP32", "Healthcare", "Wearable", "Sensors", "BLE"],
    category: "Healthcare",
    featured: true,
    status: "In Progress",
    duration: "4 months",
    tech: ["ESP32-S2", "Bluetooth LE", "Flutter", "Firebase"],
    client: "HealthTech Innovations"
  }
];

// Filter categories
const categories = ["All", ...new Set(projects.map(project => project.category))];

// Status colors
const statusColors = {
  "Completed": "bg-green-500/20 text-green-400 border-green-500/30",
  "In Progress": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Planning": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const cardHover = {
  y: -8,
  scale: 1.02,
  transition: {
    duration: 0.3,
    ease: "easeOut"
  }
};

const ProjectsGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [sortBy, setSortBy] = useState("featured"); // featured, recent, category
  const [showFilters, setShowFilters] = useState(false);
  const gridRef = useRef(null);

  // Filter and sort projects
  let filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Sort projects
  if (sortBy === "featured") {
    filteredProjects = [...filteredProjects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  } else if (sortBy === "recent") {
    filteredProjects = [...filteredProjects].sort((a, b) => b.id - a.id);
  }

  // Smooth scroll to grid when category changes
  useEffect(() => {
    if (gridRef.current && activeCategory !== "All") {
      gridRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    }
  }, [activeCategory]);

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Featured{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-500">
              Projects
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto font-inter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore a curated collection of innovative ESP32 and IoT solutions 
            that demonstrate cutting-edge technology and exceptional engineering.
          </motion.p>
        </motion.div>        {/* Enhanced Category filter with controls */}
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Category filters */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-slate-800/80 backdrop-blur-sm text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/50 hover:border-slate-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
                <span className="ml-2 text-xs opacity-75">
                  ({category === "All" ? projects.length : projects.filter(p => p.category === category).length})
                </span>
              </motion.button>
            ))}
          </div>

          {/* View controls */}
          <div className="flex items-center gap-4">
            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 text-slate-300 px-4 py-2 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
              >
                <option value="featured">Featured First</option>
                <option value="recent">Most Recent</option>
                <option value="category">By Category</option>
              </select>
            </div>

            {/* View mode toggle */}
            <div className="flex bg-slate-800/80 backdrop-blur-sm rounded-lg p-1 border border-slate-700/50">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-all ${
                  viewMode === "grid" 
                    ? "bg-primary-600 text-white" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-all ${
                  viewMode === "list" 
                    ? "bg-primary-600 text-white" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>        {/* Projects grid with AnimatePresence for smooth transitions */}
        <motion.div 
          ref={gridRef}
          className={`${
            viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
              : "flex flex-col gap-6"
          }`}
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={`${activeCategory}-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={cardHover}
                className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-primary-500/50 transition-all duration-500 ${
                  viewMode === "list" ? "flex flex-row" : ""
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Featured badge */}
                {project.featured && (
                  <motion.div 
                    className="absolute top-4 left-4 z-20 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-3 py-1 rounded-full text-xs font-semibold"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    ⭐ Featured
                  </motion.div>
                )}

                {/* Status badge */}
                <motion.div 
                  className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${statusColors[project.status]}`}
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                >
                  {project.status}
                </motion.div>

                {/* Project image */}
                <div className={`relative overflow-hidden ${viewMode === "list" ? "w-80 flex-shrink-0" : ""}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  
                  {/* Enhanced hover overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-600/20 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ 
                        scale: hoveredProject === project.id ? 1 : 0,
                        rotate: hoveredProject === project.id ? 0 : -180
                      }}
                      transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-4 shadow-lg"
                    >
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </motion.div>
                  </motion.div>

                  {/* Duration indicator */}
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs">
                    📅 {project.duration}
                  </div>
                </div>

                {/* Enhanced project content */}
                <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300 font-poppins mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-400">👤 {project.client}</p>
                    </div>
                    <span className="text-xs text-primary-400 bg-primary-400/10 px-2 py-1 rounded-full border border-primary-400/20">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-slate-300 mb-4 font-inter leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs text-slate-300 bg-slate-700/70 px-2 py-1 rounded-md border border-slate-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs text-primary-300 bg-primary-400/10 px-2 py-1 rounded-md border border-primary-400/20"
                        >
                          #{tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-xs text-slate-400">
                          +{project.tags.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Enhanced action buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      className="flex-1 bg-gradient-to-r from-slate-700 to-slate-600 text-white py-3 rounded-lg font-semibold group-hover:from-primary-600 group-hover:to-primary-700 transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Details
                      <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.button>
                    
                    <motion.button
                      className="px-4 py-3 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-600/50 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      title="View live demo"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>        {/* Enhanced stats and CTA section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Project statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-primary-400 mb-2">{projects.length}+</div>
              <div className="text-slate-400 text-sm">Projects Completed</div>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-accent-400 mb-2">50+</div>
              <div className="text-slate-400 text-sm">Happy Clients</div>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-slate-400 text-sm">Success Rate</div>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">5★</div>
              <div className="text-slate-400 text-sm">Average Rating</div>
            </motion.div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg shadow-primary-500/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800/80 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-slate-700 transition-all duration-300 border border-slate-700/50 hover:border-slate-600"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </motion.a>
          </div>

          {/* Testimonial quote */}
          <motion.div 
            className="mt-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-lg text-slate-300 italic mb-4">
              "The ESP32 solutions delivered exceeded our expectations. Professional, 
              innovative, and reliable - exactly what we needed for our IoT infrastructure."
            </blockquote>
            <cite className="text-primary-400 font-semibold">— Sarah Johnson, CTO at TechCorp</cite>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
