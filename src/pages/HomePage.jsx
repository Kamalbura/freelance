import React, { Suspense, lazy } from 'react';
import Navbar from '../components/navbar/Navbar';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ScrollToTop from '../components/ui/ScrollToTop';
import ESP32Background from '../components/ui/ESP32Background';

// Lazy load heavy components for better performance
const HeroSection = lazy(() => import('../components/hero/HeroSection'));
const ServicesSection = lazy(() => import('../components/services/ServicesSection'));
const ProjectsGallery = lazy(() => import('../components/ProjectsGallery'));
const AboutSection = lazy(() => import('../components/about/AboutSection'));
const Testimonials = lazy(() => import('../components/testimonials/Testimonials'));
const ContactForm = lazy(() => import('../components/contact/ContactForm'));
const Footer = lazy(() => import('../components/footer/Footer'));

const HomePage = () => {
  return (
    <div className="min-h-screen relative">
      {/* ESP32 themed background - behind everything */}
      <ESP32Background />
      
      {/* Main content with proper z-index */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero loads immediately for better FCP */}
        <section id="hero">
          <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-teal-500/90 to-indigo-600/90 relative z-10">
            <div className="absolute inset-0 flex items-center justify-center">
              <LoadingSpinner variant="pulse" size="lg" />
            </div>
          </div>}>
            <HeroSection />
          </Suspense>
        </section>
        {/* Other sections load with skeleton fallbacks */}
      <section id="services">
        <Suspense fallback={<LoadingSpinner className="min-h-[600px] bg-slate-900/80 backdrop-blur-sm" variant="dots" />}>
          <ServicesSection />
        </Suspense>
      </section>
      
      <section id="projects">
        <Suspense fallback={<LoadingSpinner className="min-h-[800px] bg-slate-800/80 backdrop-blur-sm" variant="default" size="xl" />}>
          <ProjectsGallery />
        </Suspense>
      </section>
      
      <section id="about">
        <Suspense fallback={<LoadingSpinner className="min-h-[600px] bg-slate-900/80 backdrop-blur-sm" variant="pulse" />}>
          <AboutSection />
        </Suspense>
      </section>
      
      <section id="testimonials">
        <Suspense fallback={<LoadingSpinner className="min-h-[500px] bg-slate-800/80 backdrop-blur-sm" variant="dots" />}>
          <Testimonials />
        </Suspense>
      </section>
      
      <section id="contact">
        <Suspense fallback={<LoadingSpinner className="min-h-[700px] bg-slate-900/80 backdrop-blur-sm" variant="pulse" size="lg" />}>
          <ContactForm />
        </Suspense>
      </section>      <Suspense fallback={<div className="h-32 bg-slate-900/80 backdrop-blur-sm">
        <LoadingSpinner className="h-32" variant="dots" size="sm" />
      </div>}>
        <Footer />
      </Suspense>      
      {/* Floating Action Buttons */}
      <ScrollToTop />
      </div>
    </div>
  );
};

export default HomePage;
