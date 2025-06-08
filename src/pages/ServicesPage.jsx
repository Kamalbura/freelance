import React from 'react';
import { motion } from 'framer-motion';

const serviceItems = [
  {
    icon: "🔧",
    title: "ESP32 & NodeMCU Programming",
    description: "Custom firmware development, optimization, and implementation for ESP32 and NodeMCU platforms. Specializing in low-power applications and advanced wireless communication."
  },
  {
    icon: "🔌",
    title: "Sensor & Actuator Integration",
    description: "Seamless integration of various sensors (temperature, humidity, pressure, motion) and actuators with microcontrollers. Complete data acquisition and processing systems."
  },
  {
    icon: "☁️",
    title: "IoT Cloud Solutions",
    description: "End-to-end IoT systems connecting your hardware to custom cloud dashboards. Data storage, analysis, and visualization through platforms like AWS IoT, Google Cloud IoT, or custom solutions."
  },
  {
    icon: "📡",
    title: "Wireless Communication",
    description: "Implementation of various wireless protocols including WiFi, Bluetooth, LoRa, and MQTT. Reliable and secure data transmission for your IoT devices."
  },
  {
    icon: "⚡",
    title: "Power Optimization",
    description: "Extending battery life through advanced power management techniques. Sleep mode implementation, efficient coding practices, and hardware optimization."
  },
  {
    icon: "🔒",
    title: "IoT Security Implementation",
    description: "Secure your IoT devices with encryption, secure boot, and secure communication protocols. Protection against common IoT vulnerabilities and attacks."
  }
];

const ServicesPage = () => {
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
            Our IoT Development Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Comprehensive IoT solutions from hardware to cloud, tailored for your specific needs
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {serviceItems.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-slate-800 rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-primary-500/50"
              >
                <div className="text-4xl mb-5">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
