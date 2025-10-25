
"use client"

import { useEffect } from 'react';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import Shortform from './editsshowcasesection/shortform';
import Thumbnail from './editsshowcasesection/thumbnail';
import Longform from './editsshowcasesection/longform';
import Video from './hero/video';
import Pricing from './price/pricing';
import About from './aboutus/aboutus';
import Workflow from './aboutus/pathline';
import Testimonials from './aboutus/clientreview';
import FAQ from './aboutus/frequent';
import Contact from './aboutus/email';

export default function Home() {
  useEffect(() => {
    // Add service-specific structured data
    const serviceStructuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Motion Graphics and Video Editing Services",
      "description": "Professional motion graphics, shortform content creation, and video editing services for businesses and content creators.",
      "provider": {
        "@type": "Organization",
        "name": "CreateMotion"
      },
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Video Production Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Motion Graphics"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Shortform Video Creation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Video Editing"
            }
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(serviceStructuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Fixed Hero Background */}
      <div className='h-screen sticky'>
        <Navbar/>
        
        <div className="fixed inset-0 z-0">
          <main role="main">
            <Hero></Hero>
          </main>
        </div>
        
        {/* Scrollable Content Over Hero */}
        <div className="relative z-10">
          {/* Spacer to push content down initially */}
          <div className="h-screen"></div>
          
          {/* Content sections that will scroll over the hero */}
          <section className='bg-black rounded-sm' aria-label="Our Services">
            <Video></Video>
            <Shortform></Shortform>
            <Thumbnail></Thumbnail>
            <Longform></Longform>
          </section>
          
          <section aria-label="Pricing Plans">
            <Pricing></Pricing>
          </section>
          
          <section aria-label="About Us and Contact">
            <About></About>
            <Workflow></Workflow>
            <Testimonials></Testimonials>
            <FAQ></FAQ>
            <Contact></Contact>
          </section>
        </div>
      </div>
    </>
  );
}
