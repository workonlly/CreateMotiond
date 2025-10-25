
"use client"

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
  return (
    <>
      {/* Fixed Hero Background */}
        <div className='h-screen sticky'>
          <Navbar/>
          
      <div className="fixed inset-0 z-0">
        
        <Hero></Hero>
      </div>
      
      {/* Scrollable Content Over Hero */}
      <div className="relative z-10">
        {/* Spacer to push content down initially */}
        <div className="h-screen"></div>
        
        {/* Content sections that will scroll over the hero */}
        <div className='bg-black rounded-sm'>
          <Video></Video>
          <Shortform></Shortform>
          <Thumbnail></Thumbnail>
          <Longform></Longform>
        </div>
        <div>
          <Pricing></Pricing>
        </div>
        <div>
          <About></About>
          <Workflow></Workflow>
          <Testimonials></Testimonials>
          <FAQ></FAQ>
          <Contact></Contact>
        </div>
      </div>
      </div>
    </>
  );
}
