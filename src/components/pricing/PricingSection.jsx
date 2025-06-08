import React from 'react';
import { motion } from 'framer-motion';
import { useRegional } from '../../contexts/RegionalContext';
import { FaCheck, FaGlobe, FaRupeeSign, FaDollarSign } from 'react-icons/fa';

const PricingSection = () => {
  const { pricing, region, toggleRegion, formatPrice } = useRegional();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose the perfect package for your IoT project. All prices include consultation, development, and initial support.
            </p>
            
            {/* Region Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-lg font-medium ${region === 'IN' ? 'text-blue-600' : 'text-gray-500'}`}>
                <FaRupeeSign className="inline mr-1" />
                India (INR)
              </span>
              <button
                onClick={toggleRegion}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                  region === 'US' ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    region === 'US' ? 'translate-x-9' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg font-medium ${region === 'US' ? 'text-blue-600' : 'text-gray-500'}`}>
                <FaDollarSign className="inline mr-1" />
                Global (USD)
              </span>
            </div>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Basic Plan */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{pricing.basic.title}</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {formatPrice(pricing.basic.price)}
              </div>
              <p className="text-gray-500">Perfect for small projects</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {pricing.basic.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </motion.div>

          {/* Standard Plan */}
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white relative transform scale-105"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">{pricing.standard.title}</h3>
              <div className="text-4xl font-bold mb-2">
                {formatPrice(pricing.standard.price)}
              </div>
              <p className="text-blue-100">Best value for growing businesses</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {pricing.standard.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheck className="text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-blue-50">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Choose Standard
            </button>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{pricing.premium.title}</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {formatPrice(pricing.premium.price)}
              </div>
              <p className="text-gray-500">For enterprise solutions</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {pricing.premium.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all">
              Go Premium
            </button>
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="bg-white rounded-lg p-8 shadow-md max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6">
              Every project is unique. Let's discuss your specific requirements and create a tailored solution that fits your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Custom Quote
              </a>
              <a
                href="tel:+919491862415"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
