import React, { Suspense, lazy } from 'react';
import ConversionOptimizedNavbar from '../components/navbar/ConversionOptimizedNavbar';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ScrollToTop from '../components/ui/ScrollToTop';
import SimpleBackground from '../components/ui/SimpleBackground';

// Lazy load heavy components for better performance
const ConversionOptimizedHero = lazy(() => import('../components/hero/ConversionOptimizedHero'));
const OutcomeDrivenServices = lazy(() => import('../components/services/OutcomeDrivenServices'));
const TrustSignals = lazy(() => import('../components/trust/TrustSignals'));
const ProjectsGallery = lazy(() => import('../components/projects/AnimatedProjectsGallery'));
const AboutSection = lazy(() => import('../components/about/AboutSection'));
const PricingSection = lazy(() => import('../components/pricing/PricingSection'));
const Testimonials = lazy(() => import('../components/testimonials/AnimatedTestimonials'));
const ConversionOptimizedContact = lazy(() => import('../components/contact/ConversionOptimizedContact'));
const Footer = lazy(() => import('../components/footer/Footer'));

const HomePage = () => {
  return (    <div className="min-h-screen relative">
      {/* Simple transparent background - ready for image */}
      <SimpleBackground />
        {/* Main content with proper z-index */}
      <div className="relative z-10">
        <ConversionOptimizedNavbar />
          {/* Hero loads immediately for better FCP */}
        <section id="hero">
          <Suspense fallback={
            <div className="min-h-screen bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95 relative z-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <LoadingSpinner variant="pulse" size="lg" />
                  <p className="text-white/70 mt-4 text-lg font-medium">Loading Experience...</p>
                </div>
              </div>
            </div>
          }>
            <ConversionOptimizedHero />
          </Suspense>
        </section>

        {/* Trust Signals Section */}
        <section id="trust-signals">
          <Suspense fallback={<LoadingSpinner className="min-h-[400px] bg-slate-50/5 backdrop-blur-sm" variant="dots" />}>
            <TrustSignals variant="detailed" />
          </Suspense>
        </section>

        {/* Other sections load with skeleton fallbacks */}
        <section id="services">
          <Suspense fallback={<LoadingSpinner className="min-h-[600px] bg-slate-50/5 backdrop-blur-sm" variant="dots" />}>
            <OutcomeDrivenServices />
          </Suspense>
        </section>
      
      <section id="projects">
        <Suspense fallback={<LoadingSpinner className="min-h-[800px] bg-slate-100/5 backdrop-blur-sm" variant="default" size="xl" />}>
          <ProjectsGallery />
        </Suspense>
      </section>
        <section id="about">
        <Suspense fallback={<LoadingSpinner className="min-h-[600px] bg-slate-50/5 backdrop-blur-sm" variant="pulse" />}>
          <AboutSection />
        </Suspense>
      </section>
      
      <section id="pricing">
        <Suspense fallback={<LoadingSpinner className="min-h-[700px] bg-slate-50/5 backdrop-blur-sm" variant="dots" />}>
          <PricingSection />
        </Suspense>
      </section>
      
      <section id="testimonials">
        <Suspense fallback={<LoadingSpinner className="min-h-[500px] bg-slate-100/5 backdrop-blur-sm" variant="dots" />}>
          <Testimonials />
        </Suspense>
      </section>        <section id="contact">
          <Suspense fallback={<LoadingSpinner className="min-h-[700px] bg-slate-50/5 backdrop-blur-sm" variant="pulse" size="lg" />}>
            <ConversionOptimizedContact />
          </Suspense>
        </section><Suspense fallback={<div className="h-32 bg-slate-900/80 backdrop-blur-sm">
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
