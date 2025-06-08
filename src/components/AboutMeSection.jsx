
import React from 'react';

const AboutMeSection = () => {
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
      icon: '🏆',
      title: '50+ Projects Completed',
      description: 'Successfully delivered IoT solutions across various industries'
    },
    {
      icon: '⚡',
      title: '99.9% Uptime',
      description: 'Proven track record of reliable and stable IoT systems'
    },
    {
      icon: '🌍',
      title: 'Global Clients',
      description: 'Worked with clients from 15+ countries worldwide'
    },
    {
      icon: '🔧',
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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - About Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="text-lg text-gray-600 space-y-4 mb-8">
              <p>
                I'm a passionate <strong>ESP32 & IoT Developer</strong> with over 5 years of experience 
                building innovative connected solutions. My expertise spans from low-level firmware 
                development to cloud integration and mobile applications.
              </p>
              <p>
                I specialize in creating <strong>scalable, secure, and efficient IoT systems</strong> 
                that bridge the gap between hardware and software. Whether it's a simple sensor 
                network or a complex industrial IoT platform, I deliver solutions that exceed expectations.
              </p>
              <p>
                My approach combines <strong>cutting-edge technology</strong> with practical engineering 
                to create products that are not only functional but also maintainable and future-proof.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">{achievement.icon}</div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{achievement.title}</h4>
                  <p className="text-xs text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Photo */}
          <div>
            {/* Profile Image Placeholder */}
            <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-8 mb-8 text-center">
              <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-white">👨‍💻</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">ESP32 & IoT Expert</h3>
              <p className="text-white/90">Building the future, one connection at a time</p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-8">
              <button className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                Let's Work Together
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Experience Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">2019 - Education</h4>
              <p className="text-gray-600 text-sm">Started with Electronics Engineering and Arduino programming</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">2020-2022 - Growth</h4>
              <p className="text-gray-600 text-sm">Specialized in ESP32 development and IoT cloud platforms</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">2023+ - Expert</h4>
              <p className="text-gray-600 text-sm">Leading complex IoT projects and mentoring developers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
