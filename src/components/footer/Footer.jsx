import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  FaGithub, 
  FaLinkedin, 
  FaWhatsapp, 
  FaTwitter, 
  FaEnvelope, 
  FaPhone,
  FaMapMarkerAlt,
  FaHeart,
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/yourusername',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-600'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: 'https://wa.me/yourphonenumber',
      color: 'hover:text-green-500'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/yourusername',
      color: 'hover:text-blue-400'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'ESP32 Development',
    'IoT Solutions',
    'Mobile Apps',
    'Cloud Integration',
    'Security Systems',
    'Consulting'
  ];

  const contactInfo = [
    {
      icon: FaEnvelope,
      text: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: FaPhone,
      text: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: FaMapMarkerAlt,
      text: 'Your City, Country',
      link: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full blur-3xl transform -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-400 to-pink-500 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Brand & Description */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                IoT Expert
              </h3>
              <p className="text-gray-300 mt-3 leading-relaxed">
                Specialized in ESP32, IoT solutions, and embedded systems. 
                Building innovative connected devices that make a difference.
              </p>
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-6 h-6" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group cursor-pointer">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">Get In Touch</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const content = (
                  <div className="flex items-center text-gray-300 hover:text-teal-400 transition-colors duration-300 group">
                    <IconComponent className="w-5 h-5 mr-3 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm">{info.text}</span>
                  </div>
                );

                return (
                  <li key={index}>
                    {info.link ? (
                      <a href={info.link}>{content}</a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>

            {/* CTA Button */}
            <motion.div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg font-medium hover:from-teal-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Project
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          className="border-t border-gray-700 pt-8"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center text-gray-400 text-sm">
              <span>© {currentYear} IoT Expert. Made with</span>
              <FaHeart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
              <span>and lots of coffee</span>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
    </footer>
  );
};

export default Footer;
