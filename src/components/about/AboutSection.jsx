import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaTrophy, FaBolt, FaGlobe, FaTools, FaCertificate, FaUsers } from 'react-icons/fa';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, rootMargin: "-100px" });

  const skills = [
    { name: 'ESP32/ESP8266', level: 95 },
    { name: 'Arduino Programming', level: 90 },
    { name: 'IoT Architecture', level: 88 },
    { name: 'MQTT/HTTP Protocols', level: 92 },
    { name: 'React.js/Node.js', level: 85 },
    { name: 'AWS IoT Core', level: 80 },
    { name: 'Circuit Design', level: 87 },
    { name: 'Mobile Development', level: 82 }
  ];

  const achievements = [
    {
      icon: <FaTrophy className="text-yellow-400" />,
      title: '50+ Projects Completed',
      description: 'Successfully delivered IoT solutions across various industries'
    },
    {
      icon: <FaBolt className="text-teal-400" />,
      title: '99.9% Uptime',
      description: 'Proven track record of reliable and stable IoT systems'
    },
    {
      icon: <FaGlobe className="text-indigo-400" />,
      title: 'Global Clients',
      description: 'Worked with clients from 15+ countries worldwide'
    },
    {
      icon: <FaTools className="text-purple-400" />,
      title: '5+ Years Experience',
      description: 'Deep expertise in embedded systems and IoT development'
    }
  ];

  const certifications = [
    'AWS Certified IoT Core Developer',
    'Google Cloud IoT Specialist',
    'Microsoft Azure IoT Developer',
    'Certified Arduino Professional'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section 
      id="about"
      ref={ref} 
      className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
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
            About{' '}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Passionate IoT developer with expertise in creating innovative solutions that bridge the physical and digital worlds
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Story & Achievements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Personal Story */}
            <motion.div variants={itemVariants} className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4 font-poppins">My Journey</h3>
              <div className="space-y-4 text-slate-300 font-inter">
                <p>
                  Started my journey in embedded systems over 5 years ago, driven by a passion for creating 
                  smart, connected devices that solve real-world problems. Specialized in ESP32 development 
                  and IoT architecture design.
                </p>
                <p>
                  From small sensor networks to large-scale industrial IoT deployments, I've helped businesses 
                  harness the power of connected technologies to improve efficiency, reduce costs, and drive innovation.
                </p>
              </div>
            </motion.div>

            {/* Achievements Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 p-6 rounded-xl text-center hover:border-teal-500/50 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-3xl mb-3">{achievement.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-2 font-poppins">{achievement.title}</h4>
                  <p className="text-sm text-slate-400 font-inter">{achievement.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants} className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <FaCertificate className="text-teal-400 text-2xl mr-3" />
                <h3 className="text-xl font-bold text-white font-poppins">Certifications</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-slate-700/50 px-4 py-2 rounded-lg text-sm text-slate-300 border border-slate-600/50 font-inter"
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Skills Section */}
            <motion.div variants={itemVariants} className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <FaUsers className="text-indigo-400 text-2xl mr-3" />
                <h3 className="text-2xl font-bold text-white font-poppins">Technical Skills</h3>
              </div>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 font-medium font-inter">{skill.name}</span>
                      <span className="text-teal-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-teal-500 to-indigo-500"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Technology Stack */}
            <motion.div variants={itemVariants} className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4 font-poppins">Technology Stack</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {['ESP32', 'Arduino', 'React', 'Node.js', 'Python', 'AWS IoT', 'MQTT', 'MongoDB', 'Docker'].map((tech, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-r from-teal-500/10 to-indigo-500/10 border border-teal-500/30 px-3 py-2 rounded-lg text-center text-sm text-white font-medium font-inter"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
