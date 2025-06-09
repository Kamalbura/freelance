import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaRocket, 
  FaMobile, 
  FaCloud, 
  FaShieldAlt, 
  FaChartLine, 
  FaCog,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaDollarSign,
  FaUsers,
  FaCode,
  FaWifi,
  FaDatabase,
  FaCalendarAlt
} from 'react-icons/fa';
import { useRegional } from '../../contexts/RegionalContext';

const OutcomeDrivenServices = () => {
  const [activeService, setActiveService] = useState(0);
  const { formatPrice } = useRegional();

  const services = [
    {
      id: 'iot-development',
      icon: FaRocket,
      title: 'IoT Product Development',
      subtitle: 'From Prototype to Production',
      description: 'Transform your innovative ideas into market-ready IoT products with end-to-end development expertise.',
      outcomes: [
        'Reduce time-to-market by 40%',
        '99.9% uptime reliability',
        'Enterprise-grade security',
        'Scalable architecture'
      ],
      features: [
        'ESP32/ESP8266 Development',
        'Sensor Integration',
        'Wireless Communication',
        'Data Processing & Analytics',
        'Cloud Connectivity',
        'Mobile App Integration'
      ],
      metrics: {
        timeline: '4-12 weeks',
        satisfaction: '100%',
        projects: '30+',
        support: '24/7'
      },
      pricing: {
        starting: 25000,
        popular: 45000,
        enterprise: 75000
      },
      caseStudy: {
        client: 'Smart Agriculture Startup',
        challenge: 'Real-time crop monitoring system',
        result: '60% increase in crop yield prediction accuracy'
      },
      technologies: ['ESP32', 'React Native', 'AWS IoT', 'MongoDB', 'MQTT'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'mobile-apps',
      icon: FaMobile,
      title: 'IoT Mobile Applications',
      subtitle: 'Native & Cross-Platform',
      description: 'Seamlessly control and monitor your IoT devices with intuitive mobile applications.',
      outcomes: [
        'Increase user engagement by 70%',
        'Real-time device control',
        'Offline functionality',
        'Cross-platform compatibility'
      ],
      features: [
        'React Native Development',
        'Real-time Data Sync',
        'Push Notifications',
        'Device Management',
        'Analytics Dashboard',
        'Offline Capabilities'
      ],
      metrics: {
        timeline: '6-10 weeks',
        satisfaction: '100%',
        downloads: '50K+',
        rating: '4.8/5'
      },
      pricing: {
        starting: 20000,
        popular: 35000,
        enterprise: 55000
      },
      caseStudy: {
        client: 'Home Automation Company',
        challenge: 'Unified device control app',
        result: '85% user retention rate achieved'
      },
      technologies: ['React Native', 'Firebase', 'Redux', 'WebSocket', 'Node.js'],
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'cloud-integration',
      icon: FaCloud,
      title: 'Cloud & Backend Systems',
      subtitle: 'Scalable Infrastructure',
      description: 'Build robust cloud infrastructure that grows with your IoT ecosystem and handles millions of data points.',
      outcomes: [
        'Handle 1M+ daily transactions',
        '99.99% uptime guarantee',
        'Auto-scaling capabilities',
        'Global data replication'
      ],
      features: [
        'AWS/Azure Integration',
        'Real-time Data Processing',
        'API Development',
        'Database Design',
        'Security Implementation',
        'Monitoring & Analytics'
      ],
      metrics: {
        timeline: '8-16 weeks',
        reliability: '99.99%',
        scaling: 'Auto',
        security: 'Enterprise'
      },
      pricing: {
        starting: 30000,
        popular: 50000,
        enterprise: 85000
      },
      caseStudy: {
        client: 'Industrial IoT Platform',
        challenge: 'Process 1M+ sensor readings/day',
        result: '50% reduction in infrastructure costs'
      },
      technologies: ['AWS', 'Node.js', 'MongoDB', 'Redis', 'Docker', 'Kubernetes'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'consulting',
      icon: FaCog,
      title: 'IoT Strategy & Consulting',
      subtitle: 'Expert Guidance',
      description: 'Get strategic insights and technical guidance to make informed decisions for your IoT initiatives.',
      outcomes: [
        'Avoid costly development mistakes',
        'Optimize technology stack',
        'Reduce project risks by 60%',
        'Accelerate development timeline'
      ],
      features: [
        'Technical Architecture Review',
        'Technology Stack Selection',
        'Cost-Benefit Analysis',
        'Security Assessment',
        'Scalability Planning',
        'Team Training'
      ],
      metrics: {
        timeline: '1-4 weeks',
        savings: '40%',
        success: '95%',
        follow_up: 'Included'
      },
      pricing: {
        starting: 8000,
        popular: 15000,
        enterprise: 25000
      },
      caseStudy: {
        client: 'Manufacturing Enterprise',
        challenge: 'Digital transformation strategy',
        result: '$2M cost savings in first year'
      },
      technologies: ['Strategic Planning', 'Risk Assessment', 'ROI Analysis', 'Training'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const PackageCard = ({ title, price, features, isPopular, onSelect }) => (
    <div className={`card p-6 ${isPopular ? 'ring-2 ring-accent-400 bg-white/10' : ''} group hover:bg-white/15 transition-all duration-300`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-accent-400 to-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
        <div className="text-3xl font-bold gradient-text mb-1">{formatPrice(price)}</div>
        <div className="text-gray-400 text-sm">Starting price</div>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <FaCheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <button
        onClick={onSelect}
        className="w-full btn-primary group-hover:scale-105 transition-transform"
      >
        Get Started
        <FaArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  );

  const handleGetQuote = (serviceId, packageType) => {
    const service = services.find(s => s.id === serviceId);
    const price = service?.pricing[packageType];
    
    // Track conversion event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'generate_lead', {
        event_category: 'Services',
        event_label: `${serviceId}-${packageType}`,
        value: price
      });
    }

    // Open consultation booking with pre-filled service
    const consultationUrl = `https://calendly.com/burakamal13/consultation?service=${serviceId}&package=${packageType}`;
    window.open(consultationUrl, '_blank');
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-headline-large text-white">
              <span className="gradient-text">Outcome-Driven</span> IoT Solutions
            </h2>
            <p className="text-body-large text-gray-400 max-w-3xl mx-auto">
              We don't just build products—we deliver measurable business outcomes. 
              Choose the service that matches your goals and see real results.
            </p>
          </motion.div>
        </div>

        {/* Services Navigation */}
        <div className="flex flex-wrap justify-center mb-16 gap-4">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveService(index)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeService === index
                  ? 'bg-gradient-to-r from-accent-400 to-primary-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <service.icon className="w-5 h-5 inline mr-2" />
              {service.title}
            </button>
          ))}
        </div>

        {/* Active Service Detail */}
        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {(() => {
            const service = services[activeService];
            return (
              <>
                {/* Service Overview */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-20`}>
                      <service.icon className="w-12 h-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-headline-medium text-white mb-2">{service.title}</h3>
                      <p className="text-xl text-accent-400 mb-4">{service.subtitle}</p>
                      <p className="text-body-medium text-gray-300 leading-relaxed">{service.description}</p>
                    </div>
                    
                    {/* Key Outcomes */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-white">Key Outcomes:</h4>
                      <ul className="space-y-2">
                        {service.outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <FaCheckCircle className="w-4 h-4 text-emerald-400 mr-3" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Quick Metrics */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      {Object.entries(service.metrics).map(([key, value]) => (
                        <div key={key} className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold gradient-text">{value}</div>
                          <div className="text-sm text-gray-400 capitalize">{key.replace('_', ' ')}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Case Study */}
                  <div className="card bg-gradient-to-br from-white/10 to-white/5 p-8">
                    <h4 className="text-xl font-semibold text-white mb-6">Success Story</h4>
                    <div className="space-y-4">
                      <div>
                        <span className="text-accent-400 font-medium">Client: </span>
                        <span className="text-gray-300">{service.caseStudy.client}</span>
                      </div>
                      <div>
                        <span className="text-accent-400 font-medium">Challenge: </span>
                        <span className="text-gray-300">{service.caseStudy.challenge}</span>
                      </div>
                      <div>
                        <span className="text-accent-400 font-medium">Result: </span>
                        <span className="text-emerald-400 font-semibold">{service.caseStudy.result}</span>
                      </div>
                    </div>
                    
                    {/* Technologies Used */}
                    <div className="mt-6">
                      <h5 className="text-sm font-medium text-gray-400 mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Features */}
                <div className="space-y-8">
                  <h4 className="text-2xl font-semibold text-white text-center">What's Included</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <FaCheckCircle className="w-5 h-5 text-emerald-400" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Pricing Packages */}
                <div className="space-y-8">
                  <div className="text-center">
                    <h4 className="text-2xl font-semibold text-white mb-2">Choose Your Package</h4>
                    <p className="text-gray-400">Transparent pricing with no hidden costs</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8 relative">
                    <PackageCard
                      title="Starter"
                      price={service.pricing.starting}
                      features={service.features.slice(0, 3)}
                      onSelect={() => handleGetQuote(service.id, 'starting')}
                    />
                    <PackageCard
                      title="Professional"
                      price={service.pricing.popular}
                      features={service.features.slice(0, 5)}
                      isPopular={true}
                      onSelect={() => handleGetQuote(service.id, 'popular')}
                    />
                    <PackageCard
                      title="Enterprise"
                      price={service.pricing.enterprise}
                      features={service.features}
                      onSelect={() => handleGetQuote(service.id, 'enterprise')}
                    />
                  </div>
                </div>
              </>
            );
          })()}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20 p-12 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-3xl border border-accent-400/30"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your IoT Vision?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom solution that delivers real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://calendly.com/burakamal13/consultation', '_blank')}
              className="btn-primary px-8 py-4 text-lg"
            >
              <FaCalendarAlt className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </button>
            <button
              onClick={() => window.open('mailto:burakamal13@gmail.com?subject=IoT Project Inquiry', '_blank')}
              className="btn-secondary px-8 py-4 text-lg"
            >
              Send Project Details
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OutcomeDrivenServices;
