
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
    <div className="h-screen  " >
     <Navbar/>
     <Hero></Hero>
    </div>
     <div className='bg-black rounded-sm'>
      <Video></Video>
      <Shortform></Shortform>
      <Thumbnail></Thumbnail>
      <Longform></Longform>
     </div>
     <div>
      <Pricing></Pricing>
     </div>
     <div><About></About>
     <Workflow></Workflow>
     <Testimonials></Testimonials>
     <FAQ></FAQ>
     <Contact></Contact>

     </div>
    </>
  );
}
