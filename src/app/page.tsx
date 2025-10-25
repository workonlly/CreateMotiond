
"use client"

import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import LoadingScreen from './components/LoadingScreen';
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
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const navbarRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  const handleLoadingComplete = () => {
    setIsLoading(false)
    // Small delay then show content and start animations
    setTimeout(() => {
      setShowContent(true)
      startBlendUpAnimations()
    }, 300)
  }

  const startBlendUpAnimations = () => {
    const tl = gsap.timeline()

    // Set initial states
    gsap.set([navbarRef.current, heroRef.current], {
      y: 50,
      opacity: 0
    })

    // Animate navbar first with blend up effect
    tl.to(navbarRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out"
    })
    // Then animate hero with slight delay
    .to(heroRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.4,
      ease: "power3.out"
    }, "-=0.8") // Start hero animation before navbar completes
  }

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
      {/* Professional Loading Screen */}
      {isLoading && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {/* Main Content */}
      {showContent && (
        <>
          {/* Fixed Hero Background */}
          <div className='h-screen sticky'>
            <div ref={navbarRef}>
              <Navbar />
            </div>
            
            {/* Main content with fade in */}
            <div ref={heroRef} className={`transition-opacity duration-700 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                <Hero />
            </div>
          </div>
          
          {/* Scrollable Content Over Hero */}
          <div className="relative z-10">
    
          
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
        </>
      )}
    </>
  );
}