import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { motion } from 'framer-motion';
import { FaMicrochip, FaCogs, FaWifi, FaCloud, FaMobile, FaShieldAlt } from 'react-icons/fa';
import { useRegional } from '../../contexts/RegionalContext';
import { ScrollReveal, AnimatedCounter } from '../ui/IoTAnimations';

const AnimatedServicesSection = () => {
  const sectionRef = useRef(null);
  const { formatPrice } = useRegional();

  const services = [
    {
      icon: <FaMicrochip className="text-blue-500" />,
      title: "ESP32 Development",
      description: "Custom firmware development, sensor integration, and IoT device programming with real-time capabilities.",
      features: ["Custom Firmware", "Sensor Integration", "Real-time Processing", "Low Power Design"],
      price: 24999,
      gradient: "from-blue-500 to-blue-600",
      glowColor: "blue"
    },
    {
      icon: <FaCogs className="text-indigo-500" />,
      title: "Sensor & Actuator Integration", 
      description: "Seamless hardware integration with advanced sensor networks, actuator control systems, and data processing.",
      features: ["Multi-Sensor Networks", "Actuator Control", "Data Processing", "Calibration"],
      price: 19999,
      gradient: "from-indigo-500 to-indigo-600",
      glowColor: "indigo"
    },
    {
      icon: <FaWifi className="text-purple-500" />,
      title: "Wireless Communication",
      description: "WiFi, Bluetooth, LoRa, and cellular connectivity solutions with secure protocols and networking.",
      features: ["WiFi/Bluetooth", "LoRa/LoRaWAN", "Cellular IoT", "Mesh Networks"],
      price: 29999,
      gradient: "from-purple-500 to-purple-600",
      glowColor: "purple"
    },
    {
      icon: <FaCloud className="text-cyan-500" />,
      title: "IoT Cloud Solutions",
      description: "Cloud platforms, data analytics, and scalable backend infrastructure for your IoT ecosystem.",
      features: ["Cloud Platforms", "Data Analytics", "API Development", "Scalable Infrastructure"],
      price: 39999,
      gradient: "from-cyan-500 to-cyan-600",
      glowColor: "cyan"
    },
    {
      icon: <FaMobile className="text-green-500" />,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications for device control, monitoring, and data visualization.",
      features: ["Cross-Platform", "Real-time Control", "Data Visualization", "User Analytics"],
      price: 34999,
      gradient: "from-green-500 to-green-600",
      glowColor: "green"
    },
    {
      icon: <FaShieldAlt className="text-red-500" />,
      title: "Security Implementation",
      description: "End-to-end encryption, secure authentication, and comprehensive security auditing for IoT systems.",
      features: ["End-to-end Encryption", "Secure Authentication", "Security Auditing", "Compliance"],
      price: 44999,
      gradient: "from-red-500 to-red-600",
      glowColor: "red"
    }
  ];
  useEffect(() => {
    // Staggered card entrance animation
    animate('.service-card', {
      opacity: [0, 1],
      translateY: [80, 0],
      scale: [0.8, 1],
      duration: 800,
      delay: stagger(150),
      ease: 'out(3)'
    });

    // Stats counter animation
    setTimeout(() => {
      animate('.stat-number', {
        innerHTML: [0, (el) => el.getAttribute('data-value')],
        duration: 2000,
        ease: 'out(3)',
        round: 1
      });
    }, 1000);

  }, []);
  const handleCardHover = (e, enter = true) => {
    const card = e.currentTarget;
    const icon = card.querySelector('.service-icon');
    const features = card.querySelectorAll('.feature-item');

    if (enter) {
      animate(card, {
        scale: 1.05,
        rotate: [0, 2],
        duration: 300,
        ease: 'out(2)'
      });

      animate(icon, {
        rotate: 360,
        scale: 1.2,
        duration: 600,
        ease: 'out(3)'
      });

      animate(features, {
        translateX: [0, 10],
        opacity: [0.7, 1],
        duration: 300,
        delay: stagger(50),
        ease: 'out(2)'
      });
    } else {
      animate(card, {
        scale: 1,
        rotate: 0,
        duration: 300,
        ease: 'out(2)'
      });

      animate(icon, {
        rotate: 0,
        scale: 1,
        duration: 300,
        ease: 'out(2)'
      });

      animate(features, {
        translateX: 0,
        opacity: 0.7,
        duration: 200,
        ease: 'out(2)'
      });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end IoT development services to transform your innovative ideas into intelligent, connected solutions.
          </p>
        </ScrollReveal>

        {/* Stats Section */}
        <ScrollReveal delay={300} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <AnimatedCounter value={50} suffix="+" label="Projects Completed" />
          </div>
          <div className="text-center">
            <AnimatedCounter value={98} suffix="%" label="Client Satisfaction" />
          </div>
          <div className="text-center">
            <AnimatedCounter value={24} suffix="/7" label="Support Available" />
          </div>
          <div className="text-center">
            <AnimatedCounter value={5} suffix="+" label="Years Experience" />
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card opacity-0 group relative"
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              {/* Card Background with Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
              
              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 shadow-2xl shadow-${service.glowColor}-500/50`}></div>

              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                {/* Service Icon */}
                <div className="service-icon text-4xl mb-6 transform transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      className="feature-item flex items-center text-gray-700 opacity-70 transition-all duration-300"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900">
                    {formatPrice(service.price)}
                  </span>
                  <button className={`px-6 py-2 bg-gradient-to-r ${service.gradient} text-white rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollReveal delay={600} className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss your project and bring your IoT vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors transform hover:scale-105">
                  Start Free Consultation
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AnimatedServicesSection;
