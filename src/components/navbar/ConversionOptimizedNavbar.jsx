import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBars, 
  FaTimes, 
  FaRocket, 
  FaCalendarAlt, 
  FaDownload,
  FaWhatsapp,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa';

const ConversionOptimizedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'services', 'projects', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleNavClick = (href) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    setIsOpen(false);
  };

  const handleQuickAction = (action) => {
    // Track conversion event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'navbar_cta', {
        event_category: 'Navigation',
        event_label: action
      });
    }

    switch (action) {
      case 'consultation':
        window.open('https://calendly.com/burakamal13/consultation', '_blank');
        break;
      case 'whatsapp':
        window.open('https://wa.me/919491862415?text=Hi, I\'m interested in your IoT development services', '_blank');
        break;
      case 'email':
        window.open('mailto:burakamal13@gmail.com?subject=IoT Project Inquiry', '_blank');
        break;
      case 'download':
        // Implement portfolio download
        console.log('Download portfolio');
        break;
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-950/95 backdrop-blur-lg shadow-2xl border-b border-white/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-primary-500 rounded-xl flex items-center justify-center">
                <FaRocket className="w-5 h-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white">IoT Solutions</div>
                <div className="text-xs text-accent-400 font-medium">by Burak Amal</div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-accent-400 ${
                    activeSection === item.href.substring(1)
                      ? 'text-accent-400'
                      : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => handleQuickAction('download')}
                className="text-gray-300 hover:text-accent-400 transition-colors text-sm font-medium"
              >
                <FaDownload className="w-4 h-4 inline mr-2" />
                Portfolio
              </button>
              
              <button
                onClick={() => handleQuickAction('consultation')}
                className="btn-primary px-6 py-2 text-sm font-semibold"
              >
                <FaCalendarAlt className="w-4 h-4 mr-2" />
                Book Call
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-950/98 backdrop-blur-lg border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              
              {/* Mobile Navigation Links */}
              <div className="space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`block w-full text-left py-3 px-4 rounded-lg transition-colors duration-200 ${
                      activeSection === item.href.substring(1)
                        ? 'bg-accent-500/20 text-accent-400 border border-accent-400/30'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Mobile Quick Actions */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <button
                  onClick={() => handleQuickAction('consultation')}
                  className="w-full btn-primary py-3 text-center"
                >
                  <FaCalendarAlt className="w-4 h-4 mr-2" />
                  Book Free Consultation
                </button>
                
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => handleQuickAction('whatsapp')}
                    className="btn-secondary py-3 text-center text-sm"
                  >
                    <FaWhatsapp className="w-4 h-4 mx-auto mb-1" />
                    WhatsApp
                  </button>
                  
                  <button
                    onClick={() => handleQuickAction('email')}
                    className="btn-secondary py-3 text-center text-sm"
                  >
                    <FaEnvelope className="w-4 h-4 mx-auto mb-1" />
                    Email
                  </button>
                  
                  <button
                    onClick={() => handleQuickAction('download')}
                    className="btn-secondary py-3 text-center text-sm"
                  >
                    <FaDownload className="w-4 h-4 mx-auto mb-1" />
                    Portfolio
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="pt-4 border-t border-white/10 text-center">
                <div className="text-sm text-gray-400 mb-2">Quick Contact</div>
                <div className="text-accent-400 font-medium">+91 9491862415</div>
                <div className="text-gray-300 text-sm">burakamal13@gmail.com</div>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.5, type: "spring" }}
          onClick={() => handleQuickAction('whatsapp')}
          className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full shadow-xl flex items-center justify-center group hover:scale-110 transition-transform"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaWhatsapp className="w-6 h-6 text-white" />
        </motion.button>
      </div>

      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-900">
        <motion.div
          className="h-full bg-gradient-to-r from-accent-400 to-primary-500"
          style={{
            scaleX: scrolled ? 0.1 : 0,
            transformOrigin: "left"
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </>
  );
};

export default ConversionOptimizedNavbar;
