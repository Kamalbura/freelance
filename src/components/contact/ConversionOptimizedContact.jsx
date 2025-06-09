import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPaperPlane, 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaBuilding, 
  FaProjectDiagram,
  FaCalendarAlt,
  FaDownload,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaGlobe
} from 'react-icons/fa';
import { useRegional } from '../../contexts/RegionalContext';

const ConversionOptimizedContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    leadMagnet: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);
  
  const { formatPrice } = useRegional();

  const projectTypes = [
    'IoT Product Development',
    'Mobile App Development',
    'Cloud Integration',
    'Consulting & Strategy',
    'Other'
  ];

  const budgetRanges = [
    'Under ₹50,000 ($600)',
    '₹50,000 - ₹1,50,000 ($600 - $1,800)',
    '₹1,50,000 - ₹5,00,000 ($1,800 - $6,000)',
    '₹5,00,000+ ($6,000+)',
    'Let\'s discuss'
  ];

  const timelines = [
    'ASAP (Rush project)',
    '1-2 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track conversion event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'form_submit', {
        event_category: 'Lead Generation',
        event_label: formData.projectType,
        value: formData.budget
      });
    }

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setShowThankYou(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
        leadMagnet: false
      });

    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuickAction = (action) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'quick_action', {
        event_category: 'Contact',
        event_label: action
      });
    }

    switch (action) {
      case 'calendar':
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

  if (showThankYou) {
    return (
      <section className="py-24 bg-gradient-to-b from-slate-900 to-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto">
              <FaCheckCircle className="w-12 h-12 text-white" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-headline-medium text-white">
                Thank You! 🚀
              </h2>
              <p className="text-body-large text-gray-300 max-w-2xl mx-auto">
                Your project inquiry has been received. I'll get back to you within 24 hours with a personalized proposal.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="card p-6 text-center">
                <FaClock className="w-8 h-8 text-accent-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Quick Response</h4>
                <p className="text-gray-400 text-sm">24-hour reply guaranteed</p>
              </div>
              <div className="card p-6 text-center">
                <FaShieldAlt className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Confidential</h4>
                <p className="text-gray-400 text-sm">Your data is secure</p>
              </div>
              <div className="card p-6 text-center">
                <FaGlobe className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Global Support</h4>
                <p className="text-gray-400 text-sm">Worldwide delivery</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleQuickAction('calendar')}
                className="btn-primary"
              >
                <FaCalendarAlt className="w-5 h-5 mr-2" />
                Schedule Call Now
              </button>
              <button
                onClick={() => setShowThankYou(false)}
                className="btn-secondary"
              >
                Send Another Inquiry
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-headline-large text-white">
              Ready to <span className="gradient-text">Transform</span> Your Ideas?
            </h2>
            <p className="text-body-large text-gray-400 max-w-3xl mx-auto">
              Get a free consultation and detailed proposal for your IoT project. 
              Join 50+ satisfied clients who chose excellence.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="card p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Get Your Free Project Consultation
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-label-medium text-gray-300">
                      <FaUser className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-label-medium text-gray-300">
                      <FaEnvelope className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-label-medium text-gray-300">
                      <FaPhone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20 transition-colors"
                      placeholder="+91 9491862415"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-label-medium text-gray-300">
                      <FaBuilding className="w-4 h-4 inline mr-2" />
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-2">
                  <label className="text-label-medium text-gray-300">
                    <FaProjectDiagram className="w-4 h-4 inline mr-2" />
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20 transition-colors"
                  >
                    <option value="" className="bg-gray-800">Select project type</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type} className="bg-gray-800">{type}</option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-label-medium text-gray-300">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20 transition-colors"
                    >
                      <option value="" className="bg-gray-800">Select budget range</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range} className="bg-gray-800">{range}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-label-medium text-gray-300">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20 transition-colors"
                    >
                      <option value="" className="bg-gray-800">Select timeline</option>
                      {timelines.map(timeline => (
                        <option key={timeline} value={timeline} className="bg-gray-800">{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-label-medium text-gray-300">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20 transition-colors resize-none"
                    placeholder="Tell me about your project requirements, goals, and any specific technical needs..."
                  />
                </div>

                {/* Lead Magnet Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="leadMagnet"
                    checked={formData.leadMagnet}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-accent-400 bg-white/5 border border-white/20 rounded focus:ring-accent-400 focus:ring-2"
                  />
                  <label className="text-sm text-gray-300">
                    Send me your IoT Development Guide and Case Studies (PDF) - 
                    <span className="text-accent-400 font-medium"> Free Download</span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send My Project Details
                    </>
                  )}
                </button>

                {submitStatus === 'error' && (
                  <div className="text-red-400 text-center p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                    Something went wrong. Please try again or contact me directly.
                  </div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Quick Actions & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Quick Actions */}
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Prefer a Quick Call?
              </h3>
              
              <div className="space-y-4">
                <button
                  onClick={() => handleQuickAction('calendar')}
                  className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-accent-500/20 to-primary-500/20 border border-accent-400/30 rounded-lg hover:bg-accent-500/30 transition-colors group"
                >
                  <div className="flex items-center">
                    <FaCalendarAlt className="w-5 h-5 text-accent-400 mr-3" />
                    <div className="text-left">
                      <div className="text-white font-medium">Book Free Consultation</div>
                      <div className="text-gray-400 text-sm">30-min strategy call</div>
                    </div>
                  </div>
                  <div className="text-accent-400 group-hover:translate-x-1 transition-transform">→</div>
                </button>

                <button
                  onClick={() => handleQuickAction('whatsapp')}
                  className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-400/30 rounded-lg hover:bg-emerald-500/30 transition-colors group"
                >
                  <div className="flex items-center">
                    <FaPhone className="w-5 h-5 text-emerald-400 mr-3" />
                    <div className="text-left">
                      <div className="text-white font-medium">WhatsApp Chat</div>
                      <div className="text-gray-400 text-sm">+91 9491862415</div>
                    </div>
                  </div>
                  <div className="text-emerald-400 group-hover:translate-x-1 transition-transform">→</div>
                </button>

                <button
                  onClick={() => handleQuickAction('email')}
                  className="w-full flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-center">
                    <FaEnvelope className="w-5 h-5 text-gray-400 mr-3" />
                    <div className="text-left">
                      <div className="text-white font-medium">Direct Email</div>
                      <div className="text-gray-400 text-sm">burakamal13@gmail.com</div>
                    </div>
                  </div>
                  <div className="text-gray-400 group-hover:translate-x-1 transition-transform">→</div>
                </button>
              </div>
            </div>

            {/* Lead Magnet */}
            <div className="card p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20">
              <h3 className="text-xl font-semibold text-white mb-4">
                Free IoT Development Guide
              </h3>
              <p className="text-gray-300 mb-6">
                Download our comprehensive guide with real project case studies, 
                cost breakdowns, and technical insights.
              </p>
              <button
                onClick={() => handleQuickAction('download')}
                className="w-full btn-secondary group"
              >
                <FaDownload className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Download Free Guide (PDF)
              </button>
            </div>

            {/* Response Guarantee */}
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">24-Hour Response Guarantee</h4>
              <p className="text-gray-400 text-sm">
                I personally review every inquiry and respond within 24 hours with 
                a detailed proposal and next steps.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConversionOptimizedContact;
