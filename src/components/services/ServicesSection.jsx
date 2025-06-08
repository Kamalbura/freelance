import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { FaMicrochip, FaWifi, FaCloud, FaShieldAlt, FaMobile, FaCogs } from 'react-icons/fa';
import { useRegional } from '../../contexts/RegionalContext';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, rootMargin: "-100px" });
  const { region, formatPrice } = useRegional();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };
  const services = [
    {
      icon: <FaMicrochip className="text-teal-400" />,
      title: "ESP32 & NodeMCU Programming",
      description: "Custom firmware development, sensor integration, and wireless communication protocols. Full-stack IoT solutions from prototype to production.",
      features: ["Custom Firmware", "Sensor Integration", "Wireless Protocols", "OTA Updates"],
      pricing: `Starting at ${region === 'IN' ? formatPrice(35000) : formatPrice(500)}`
    },
    {
      icon: <FaCogs className="text-indigo-400" />,
      title: "Sensor & Actuator Integration", 
      description: "Seamless hardware integration with advanced sensor networks, actuator control systems, and real-time data processing.",
      features: ["Multi-Sensor Networks", "Actuator Control", "Data Processing", "Calibration"],
      pricing: `Starting at ${region === 'IN' ? formatPrice(20000) : formatPrice(300)}`
    },
    {
      icon: <FaWifi className="text-purple-400" />,
      title: "Wireless Communication",
      description: "WiFi, Bluetooth, LoRa, and cellular connectivity solutions with secure protocols and robust networking capabilities.",
      features: ["WiFi/Bluetooth", "LoRa/LoRaWAN", "Cellular IoT", "Mesh Networks"],
      pricing: `Starting at ${region === 'IN' ? formatPrice(28000) : formatPrice(400)}`
    },    {
      icon: <FaCloud className="text-blue-400" />,
      title: "IoT Cloud Solutions",
      description: "End-to-end cloud integration with real-time dashboards, data analytics, and scalable infrastructure for your IoT devices.",
      features: ["Cloud Dashboards", "Data Analytics", "Real-time Monitoring", "API Development"],
      pricing: `Starting at ${region === 'IN' ? formatPrice(55000) : formatPrice(800)}`
    },
    {
      icon: <FaMobile className="text-green-400" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for controlling and monitoring your IoT devices with intuitive user interfaces.",
      features: ["React Native", "Flutter", "Real-time Control", "Push Notifications"],
      pricing: `Starting at ${region === 'IN' ? formatPrice(85000) : formatPrice(1200)}`
    },
    {
      icon: <FaShieldAlt className="text-red-400" />,
      title: "Security & Consulting",
      description: "Comprehensive IoT security implementation, code reviews, and expert consulting for your embedded systems projects.",
      features: ["Security Audits", "Code Reviews", "Architecture Design", "Best Practices"],
      pricing: `Starting at ${region === 'IN' ? formatPrice(1500) : formatPrice(150)}/hr`
    }
  ];

  return (
    <section 
      id="services"
      ref={ref} 
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <svg width="60" height="60" viewBox="0 0 60 60" className="absolute top-0 left-0 w-full h-full">
          <defs>
            <pattern id="services-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid)" className="text-white/5" />
        </svg>
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
            Services I{' '}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">
              Offer
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive ESP32 and IoT development services to bring your innovative ideas to life
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              service={service}
              index={index}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            className="bg-gradient-to-r from-teal-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Custom Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
