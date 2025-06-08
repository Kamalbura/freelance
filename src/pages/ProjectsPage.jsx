import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Smart Home Monitoring System",
    description: "Complete IoT solution for home monitoring with ESP32, various sensors, and a cloud dashboard.",
    image: "https://placehold.co/600x400/png?text=Smart+Home+System",
    tags: ["ESP32", "MQTT", "React", "AWS IoT"],
  },
  {
    id: 2,
    title: "Industrial Sensor Network",
    description: "Wireless sensor network for industrial monitoring with real-time alerts and data logging.",
    image: "https://placehold.co/600x400/png?text=Industrial+IoT",
    tags: ["ESP32", "LoRa", "Node.js", "Time Series DB"],
  },
  {
    id: 3,
    title: "Agricultural Automation System",
    description: "Smart irrigation and monitoring system for precision agriculture using soil moisture sensors.",
    image: "https://placehold.co/600x400/png?text=AgriTech+IoT",
    tags: ["ESP32", "Soil Sensors", "Solar Power", "Mobile App"],
  },
  {
    id: 4,
    title: "Remote Weather Station",
    description: "Low-power weather station with solar charging, sending data over LoRa to a central gateway.",
    image: "https://placehold.co/600x400/png?text=Weather+Station",
    tags: ["ESP32", "LoRa", "Solar Power", "Weather Sensors"],
  },
  {
    id: 5,
    title: "Asset Tracking System",
    description: "GPS and Bluetooth based asset tracking solution for inventory and logistics management.",
    image: "https://placehold.co/600x400/png?text=Asset+Tracking",
    tags: ["ESP32", "GPS", "Bluetooth", "Web Dashboard"],
  },
  {
    id: 6,
    title: "Energy Monitoring Device",
    description: "Power consumption monitoring system for residential and commercial buildings with analytics.",
    image: "https://placehold.co/600x400/png?text=Energy+Monitor",
    tags: ["ESP32", "Current Sensors", "Cloud Analytics", "Mobile App"],
  },
];

const ProjectsPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Explore our portfolio of innovative IoT solutions and projects
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-slate-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-primary-500/50"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="bg-slate-700 text-primary-400 text-xs px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6">
                    <a 
                      href="#" 
                      className="inline-flex items-center font-medium text-primary-500 hover:text-primary-400"
                    >
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
