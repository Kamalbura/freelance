import React, { createContext, useContext, useState, useEffect } from 'react';

const RegionalContext = createContext();

export const useRegional = () => {
  const context = useContext(RegionalContext);
  if (!context) {
    throw new Error('useRegional must be used within RegionalProvider');
  }
  return context;
};

export const RegionalProvider = ({ children }) => {
  const [region, setRegion] = useState('IN'); // Default to India
  const [currency, setCurrency] = useState('INR');
  const [isLoading, setIsLoading] = useState(true);

  // Contact information
  const contactInfo = {
    email: 'burakamal13@gmail.com',
    phone: '+91 9491862415',
    website: 'freelance.burakamal.site',
    name: 'Burak Amal',
    location: 'India'
  };

  // Pricing tiers for different regions
  const pricingData = {
    US: {
      currency: 'USD',
      symbol: '$',
      basic: {
        price: 299,
        title: 'Basic IoT Solution',
        features: [
          'ESP32 Development',
          'Basic Sensor Integration',
          'Mobile App (Android)',
          'Cloud Dashboard',
          '30 Days Support'
        ]
      },
      standard: {
        price: 599,
        title: 'Standard IoT System',
        features: [
          'Advanced ESP32 Programming',
          'Multiple Sensor Types',
          'Cross-Platform App',
          'Real-time Analytics',
          'Database Integration',
          '60 Days Support'
        ]
      },
      premium: {
        price: 999,
        title: 'Enterprise IoT Solution',
        features: [
          'Complete IoT Ecosystem',
          'Custom Hardware Design',
          'Advanced Analytics',
          'Security Implementation',
          'API Development',
          '90 Days Support + Maintenance'
        ]
      }
    },
    IN: {
      currency: 'INR',
      symbol: '₹',
      basic: {
        price: 24999,
        title: 'Basic IoT Solution',
        features: [
          'ESP32 Development',
          'Basic Sensor Integration',
          'Mobile App (Android)',
          'Cloud Dashboard',
          '30 Days Support'
        ]
      },
      standard: {
        price: 49999,
        title: 'Standard IoT System',
        features: [
          'Advanced ESP32 Programming',
          'Multiple Sensor Types',
          'Cross-Platform App',
          'Real-time Analytics',
          'Database Integration',
          '60 Days Support'
        ]
      },
      premium: {
        price: 82999,
        title: 'Enterprise IoT Solution',
        features: [
          'Complete IoT Ecosystem',
          'Custom Hardware Design',
          'Advanced Analytics',
          'Security Implementation',
          'API Development',
          '90 Days Support + Maintenance'
        ]
      }
    }
  };

  // Detect user location (simplified - in production, use a proper geolocation service)
  useEffect(() => {
    const detectRegion = async () => {
      try {
        // Try to detect timezone first
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timezone.includes('Asia/Kolkata') || timezone.includes('Asia/Calcutta')) {
          setRegion('IN');
          setCurrency('INR');
        } else {
          // For demo, keeping IN as default since you're targeting India primarily
          setRegion('IN');
          setCurrency('INR');
        }
      } catch (error) {
        console.log('Region detection failed, using default (India)');
        setRegion('IN');
        setCurrency('INR');
      } finally {
        setIsLoading(false);
      }
    };

    detectRegion();
  }, []);

  const toggleRegion = () => {
    const newRegion = region === 'IN' ? 'US' : 'IN';
    setRegion(newRegion);
    setCurrency(newRegion === 'IN' ? 'INR' : 'USD');
  };

  const formatPrice = (price) => {
    const currentPricing = pricingData[region];
    if (region === 'IN') {
      return `${currentPricing.symbol}${price.toLocaleString('en-IN')}`;
    } else {
      return `${currentPricing.symbol}${price.toLocaleString('en-US')}`;
    }
  };

  const value = {
    region,
    currency,
    contactInfo,
    pricing: pricingData[region],
    isLoading,
    toggleRegion,
    formatPrice
  };

  return (
    <RegionalContext.Provider value={value}>
      {children}
    </RegionalContext.Provider>
  );
};

export default RegionalProvider;
