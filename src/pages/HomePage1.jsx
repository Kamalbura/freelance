import React from 'react';
import SimpleHeroSection from '../components/SimpleHeroSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsGallery from '../components/ProjectsGallery';
import AboutMeSection from '../components/AboutMeSection';
import TestimonialsSlider from '../components/TestimonialsSlider';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
  try {
    return (
      <div className="min-h-screen">
        <SimpleHeroSection />
        <ServicesSection />
        <ProjectsGallery />
        <AboutMeSection />
        <TestimonialsSlider />
        <ContactForm />
      </div>
    );
  } catch (error) {
    console.error('Error in HomePage:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Portfolio</h1>
          <p className="text-gray-600 mb-4">Error: {error.message}</p>
          <p className="text-sm text-gray-500">Check the console for more details.</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }
};

export default HomePage;