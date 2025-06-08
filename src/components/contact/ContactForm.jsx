import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaUser, FaBuilding, FaComment, FaRocket, FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, rootMargin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    urgent: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    'ESP32 Development',
    'IoT Solution',
    'Mobile App Development',
    'Cloud Integration',
    'Security Implementation',
    'Consulting & Support',
    'Other'
  ];

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+',
    'Let\'s discuss'
  ];

  const timelineOptions = [
    'ASAP (Rush job)',
    '1-2 weeks',
    '3-4 weeks',
    '1-2 months',
    '3+ months',
    'Flexible'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12"
          >
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-3xl font-bold text-white mb-4 font-poppins">Thank You!</h2>
            <p className="text-xl text-slate-300 mb-8 font-inter">
              Your message has been sent successfully. I'll get back to you within 24 hours.
            </p>
            <motion.button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-teal-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Another Message
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="contact"
      ref={ref}
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)`,
          backgroundSize: '20px 20px'
        }} />
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
            Let's Build{' '}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">
              Together
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to start your next IoT project? Let's discuss your requirements and bring your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 font-poppins">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center text-slate-300">
                  <FaEnvelope className="text-teal-400 mr-3" />
                  <span className="font-inter">contact@iotexpert.dev</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <FaRocket className="text-indigo-400 mr-3" />
                  <span className="font-inter">Available Worldwide</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl">
              <h4 className="text-lg font-bold text-white mb-4 font-poppins">Response Time</h4>
              <div className="space-y-3 text-sm text-slate-300 font-inter">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                  <span>Email: Within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                  <span>Project Quote: 2-3 business days</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                  <span>Urgent Projects: Same day</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2"
          >
            <motion.div variants={itemVariants} className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2 font-inter">
                      <FaUser className="inline mr-2 text-teal-400" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-700/50 border ${errors.name ? 'border-red-400' : 'border-slate-600'} rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-teal-400 transition-colors duration-200 font-inter`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1 font-inter">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2 font-inter">
                      <FaEnvelope className="inline mr-2 text-teal-400" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-700/50 border ${errors.email ? 'border-red-400' : 'border-slate-600'} rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-teal-400 transition-colors duration-200 font-inter`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1 font-inter">{errors.email}</p>}
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2 font-inter">
                    <FaBuilding className="inline mr-2 text-teal-400" />
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-teal-400 transition-colors duration-200 font-inter"
                    placeholder="Your company name"
                  />
                </div>

                {/* Project Details Row */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2 font-inter">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-teal-400 transition-colors duration-200 font-inter"
                    >
                      <option value="">Select type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2 font-inter">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-teal-400 transition-colors duration-200 font-inter"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2 font-inter">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-teal-400 transition-colors duration-200 font-inter"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2 font-inter">
                    <FaComment className="inline mr-2 text-teal-400" />
                    Project Description *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-slate-700/50 border ${errors.message ? 'border-red-400' : 'border-slate-600'} rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-teal-400 transition-colors duration-200 resize-none font-inter`}
                    placeholder="Tell me about your project requirements, goals, and any specific features you need..."
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1 font-inter">{errors.message}</p>}
                </div>

                {/* Urgent Checkbox */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="urgent"
                    id="urgent"
                    checked={formData.urgent}
                    onChange={handleChange}
                    className="w-4 h-4 text-teal-600 bg-slate-700 border-slate-600 rounded focus:ring-teal-500 focus:ring-2"
                  />
                  <label htmlFor="urgent" className="ml-2 text-sm text-slate-300 font-inter">
                    This is an urgent project (I'll prioritize your request)
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-teal-600 to-indigo-600 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 font-poppins"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
