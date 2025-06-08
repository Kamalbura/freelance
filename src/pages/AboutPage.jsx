import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
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
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Learn about our expertise in IoT development and our mission to create innovative connected solutions
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  Founded in 2018, IoT Dev began with a simple mission: to bridge the gap between innovative ideas and functioning IoT products. Our founder, with over a decade of experience in embedded systems, recognized the need for specialized expertise in the rapidly growing IoT market.
                </p>
                <p>
                  What started as a one-person consultancy has grown into a team of dedicated IoT specialists, each bringing unique expertise in areas such as embedded programming, wireless communications, cloud infrastructure, and user interface design.
                </p>
                <p>
                  Today, we've successfully delivered over 100 IoT projects across industries including smart home, agriculture, industrial monitoring, and healthcare. Our commitment to quality, innovation, and practical solutions remains unwavering.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://placehold.co/600x400/png?text=Our+Team" 
                alt="Our Team" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Our Expertise
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Hardware Design",
                icon: "🔌",
                description: "From microcontroller selection to sensor integration and power management, we design hardware systems optimized for your specific requirements."
              },
              {
                title: "Embedded Programming",
                icon: "💻",
                description: "Custom firmware development for ESP32, Arduino, STM32, and other platforms, with a focus on reliability, efficiency, and power optimization."
              },
              {
                title: "Cloud Infrastructure",
                icon: "☁️",
                description: "Scalable cloud solutions using AWS IoT, Google Cloud IoT, or custom platforms for data storage, processing, and visualization."
              },
              {
                title: "Mobile & Web Applications",
                icon: "📱",
                description: "User-friendly interfaces to control and monitor your IoT devices, with responsive design for all devices."
              },
              {
                title: "Security Implementation",
                icon: "🔒",
                description: "Comprehensive security measures at every layer, from secure boot and encrypted communication to access control and monitoring."
              },
              {
                title: "End-to-End Solutions",
                icon: "🔄",
                description: "Complete IoT ecosystems that seamlessly connect hardware devices to user applications, with reliable communication and data flow."
              }
            ].map((expertise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-slate-700 p-8 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">{expertise.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{expertise.title}</h3>
                <p className="text-slate-300">{expertise.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
