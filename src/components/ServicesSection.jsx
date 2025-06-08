import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, rootMargin: "-100px" });

  console.log('ServicesSection rendering...');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const services = [
    {
      icon: "🔧",
      title: "ESP32 & NodeMCU Programming",
      description: "Custom firmware development, sensor integration, and wireless communication protocols. Full-stack IoT solutions from prototype to production.",
      features: ["Custom Firmware", "Sensor Integration", "Wireless Protocols", "OTA Updates"],
      pricing: "Starting at $500"
    },
    {
      icon: "🔌",
      title: "Sensor & Actuator Integration", 
      description: "Seamless hardware integration with advanced sensor networks, actuator control systems, and real-time data processing.",
      features: ["Multi-Sensor Networks", "Actuator Control", "Data Processing", "Calibration"],
      pricing: "Starting at $300"
    },
    {
      icon: "📡",
      title: "Wireless Communication",
      description: "WiFi, Bluetooth, LoRa, and cellular connectivity solutions with secure protocols and robust networking capabilities.",
      features: ["WiFi/Bluetooth", "LoRa/LoRaWAN", "Cellular IoT", "Mesh Networks"],
      pricing: "Starting at $400"
    }
  ];
  console.log('Services data:', services);

  try {
    return (
      <section ref={ref} className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">IoT Services</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive ESP32 and IoT development services to bring your innovative ideas to life
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-xl shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:border-blue-500/30"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {service.features && service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-400">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-700/50">
                <span className="text-lg font-bold text-green-400">
                  {service.pricing}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Get Quote
                </motion.button>
              </div>
            </motion.div>
          ))}        </motion.div>
      </div>
    </section>
    );
  } catch (error) {
    console.error('Error in ServicesSection:', error);
    return (
      <section className="py-20 bg-red-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-red-400 mb-4">ServicesSection Error</h2>
          <p className="text-red-300">Error: {error.message}</p>
        </div>
      </section>
    );
  }
};

export default ServicesSection;
