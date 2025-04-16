'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    google: typeof google.maps;
  }
}

export function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (mapRef.current && typeof window !== 'undefined') {
      // Load Google Maps script
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    }
    
    return () => {
      const script = document.querySelector('script[src*="googleapis.com/maps/api/js"]');
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);
  
  const initializeMap = () => {
    if (mapRef.current && window.google) {
      const location = { lat: 37.7749, lng: -122.4194 }; // San Francisco coordinates
      const map = new window.google.maps.Map(mapRef.current, {
        center: location,
        zoom: 15,
        styles: [
          {
            featureType: 'poi',
            stylers: [{ visibility: 'off' }]
          }
        ]
      });
      
      new window.google.maps.Marker({
        position: location,
        map,
        title: 'ACME Store Headquarters'
      });
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      ref={mapRef}
      className="w-full h-96 rounded-lg shadow-md overflow-hidden"
    />
  );
}