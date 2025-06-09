import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaClock, 
  FaStar, 
  FaUsers, 
  FaCode, 
  FaRocket,
  FaCheckCircle,
  FaMedal,
  FaGlobe,
  FaHeadset
} from 'react-icons/fa';

const TrustSignals = ({ variant = "hero" }) => {
  const stats = [
    { number: "50+", label: "Projects Delivered", icon: FaRocket },
    { number: "100%", label: "Client Satisfaction", icon: FaStar },
    { number: "24/7", label: "Support Available", icon: FaHeadset },
    { number: "5+", label: "Years Experience", icon: FaMedal }
  ];

  const testimonials = [
    {
      text: "Exceptional IoT development skills. Delivered our ESP32 project ahead of schedule with perfect integration.",
      author: "Sarah Chen",
      role: "CTO, TechStart",
      rating: 5,
      avatar: "SC"
    },
    {
      text: "Professional, reliable, and technically brilliant. Our smart home system exceeded all expectations.",
      author: "Michael Rodriguez",
      role: "Product Manager, HomeTech",
      rating: 5,
      avatar: "MR"
    },
    {
      text: "Outstanding communication and delivery. The mobile app integration was flawless.",
      author: "Priya Sharma",
      role: "Founder, IoT Innovations",
      rating: 5,
      avatar: "PS"
    }
  ];

  const certifications = [
    { name: "AWS IoT Certified", icon: FaShieldAlt },
    { name: "ESP32 Expert", icon: FaCode },
    { name: "React Professional", icon: FaUsers },
    { name: "Security Specialist", icon: FaShieldAlt }
  ];

  const features = [
    { text: "48-hour response guarantee", icon: FaClock },
    { text: "End-to-end encryption", icon: FaShieldAlt },
    { text: "Global deployment ready", icon: FaGlobe },
    { text: "Free consultation included", icon: FaCheckCircle }
  ];

  if (variant === "hero") {
    return (
      <div className="space-y-8">
        {/* Quick Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 text-sm"
        >
          {features.map((feature, index) => (
            <div key={index} className="trust-badge">
              <feature.icon className="w-4 h-4" />
              <span>{feature.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex flex-col items-center space-y-2">
                <stat.icon className="w-6 h-6 text-accent-400 group-hover:text-accent-300 transition-colors" />
                <div className="text-2xl md:text-3xl font-bold text-white gradient-text">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Client Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out">
              {testimonials.slice(0, 1).map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="card text-center p-6 bg-white/5 border border-white/10">
                    <div className="flex justify-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-primary-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {testimonial.avatar}
                      </div>
                      <div className="text-left">
                        <div className="text-white font-medium">{testimonial.author}</div>
                        <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (variant === "detailed") {
    return (
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-headline-large text-white mb-4">
              Trusted by <span className="gradient-text">Industry Leaders</span>
            </h2>
            <p className="text-body-large text-gray-400 max-w-2xl mx-auto">
              Join 50+ satisfied clients who chose excellence for their IoT projects
            </p>
          </div>

          {/* Detailed Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card text-center group hover:bg-white/10"
              >
                <stat.icon className="w-12 h-12 text-accent-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold text-white gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="card group hover:bg-white/10"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="text-white font-semibold">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="text-center">
            <h3 className="text-headline-small text-white mb-8">
              Professional <span className="gradient-text">Certifications</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="trust-badge"
                >
                  <cert.icon className="w-4 h-4" />
                  <span>{cert.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
};

export default TrustSignals;
