import React from 'react';

const SimpleServicesPage = () => {
  const services = [
    {
      icon: '🔧',
      title: 'ESP32 Development',
      description: 'Custom firmware development for ESP32 microcontrollers with optimized performance and power consumption.',
      features: ['Custom Firmware', 'Power Optimization', 'Real-time Processing', 'Wireless Communication']
    },
    {
      icon: '🌐',
      title: 'IoT Solutions',
      description: 'Complete IoT ecosystems from sensor networks to cloud integration with secure data transmission.',
      features: ['Sensor Networks', 'Cloud Integration', 'Data Analytics', 'Remote Monitoring']
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for controlling and monitoring your IoT devices.',
      features: ['iOS & Android', 'Real-time Control', 'Data Visualization', 'Push Notifications']
    },
    {
      icon: '🔒',
      title: 'Security & Encryption',
      description: 'Implement robust security protocols and encryption standards for your IoT infrastructure.',
      features: ['End-to-End Encryption', 'Secure Authentication', 'OTA Updates', 'Vulnerability Testing']
    },
    {
      icon: '☁️',
      title: 'Cloud Integration',
      description: 'Seamless integration with AWS IoT, Google Cloud IoT, and Azure IoT for scalable solutions.',
      features: ['AWS IoT Core', 'Google Cloud IoT', 'Azure IoT Hub', 'Custom APIs']
    },
    {
      icon: '⚡',
      title: 'Consulting & Support',
      description: 'Technical consulting, architecture design, and ongoing support for your IoT projects.',
      features: ['Architecture Design', 'Code Review', 'Performance Optimization', '24/7 Support']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Professional ESP32 & IoT Services
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            From prototyping to production, I deliver comprehensive IoT solutions 
            that are scalable, secure, and built to last.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300 group"
            >
              {/* Service Icon */}
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="mt-6">
                <button className="text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors duration-200 group-hover:translate-x-1 transform inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your IoT Project?
          </h3>
          <p className="text-gray-600 mb-8">
            Let's discuss your requirements and build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Get Free Consultation
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleServicesPage;
