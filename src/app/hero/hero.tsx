import React from 'react'

function Hero() {
  return (
    <section className="relative  flex items-center justify-center">
      {/* Beautiful Mesh Grid Background */}
      <div className='absolute -z-10 inset-0 bg-white'>
        {/* Main Grid */}
        <div className='h-full w-full grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(15,1fr)]'>
          {Array.from({ length: 300 }).map((_, i) => (
            <div 
              key={i} 
              className='border border-black/10'
            />
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Main Heading */}
        <h1 className="relative flex items-center justify-center gap-6 md:gap-8 flex-wrap mb-8 mt-8"> 
          <span className="text-5xl md:text-7xl lg:text-8xl font-black text-black cinzel-ss tracking-tight">
            Create
          </span>
          <span className="relative inline-block">
            <span className="text-5xl md:text-7xl lg:text-8xl font-black bg-black text-white px-6 py-2 cinzel-ss tracking-tight shadow-2xl transform -rotate-1 inline-block border-4 border-black">
              Motions
            </span>
            {/* Decorative lines */}
            <div className="absolute -top-2 -left-2 w-full h-full border-2 border-gray-400 -z-10 transform rotate-2"></div>
          </span>
        </h1>

        {/* Tagline */}
        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-light mb-6 tracking-wide">
          Where Vision Moves
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-base md:text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed px-4">
          We craft cinematic motion graphics, short-form edits, and visual stories that captivate.
        </p>

        {/* CTA Button */}
        <div>
          <a href="/Links">
            <button className="group relative px-10 py-4 bg-black text-white text-base md:text-lg font-semibold rounded-md mb-10 border-2 border-black overflow-hidden transition-all duration-500 ease-out hover:scale-105 shadow-xl hover:shadow-2xl">
              <span className="relative z-10 transition-colors duration-500 ease-out group-hover:text-black">
                Let's Create Magic
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>
            </button>
          </a>
        </div>

        {/* Services Tags - New Design */}
        <div className="flex flex-wrap justify-center items-center gap-2 max-w-2xl md:ml-15">
          {['Motion Graphics', 'Short Edits', 'Visual FX'].map((service, index) => (
            <React.Fragment key={service}>
              <span className="px-4 py-1.5 bg-white text-black text-sm md:text-base font-semibold rounded-sm border border-black/20 shadow-sm hover:scale-105 hover:-translate-y-0.5 transition-transform duration-200">
                {service}
              </span>
              {index < 2 && (
                <span className="text-gray-400 text-xs">
                  /
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Hero
