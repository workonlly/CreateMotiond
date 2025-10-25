import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Beautiful Mesh Grid Background */}
      <motion.div 
        className='absolute -z-10 inset-0 bg-white'
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
      >
        {/* Main Grid */}
        <div className='h-full w-full grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(15,1fr)]'>
          {Array.from({ length: 300 }).map((_, i) => (
            <motion.div 
              key={i} 
              className='border border-black/10'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: 2.0 + (i % 20) * 0.005 + Math.floor(i / 20) * 0.02,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.2 }}
      >
        {/* Main Heading */}
        <motion.h1 
          className="relative flex items-center justify-center gap-6 md:gap-8 flex-wrap mb-8 mt-8"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
        > 
          <motion.span 
            className="text-5xl md:text-7xl lg:text-8xl font-black text-black cinzel-ss tracking-tight"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.7, ease: "easeOut" }}
          >
            Create
          </motion.span>
          <motion.span 
            className="relative inline-block"
            initial={{ x: 100, opacity: 0, rotate: -20 }}
            animate={{ x: 0, opacity: 1, rotate: -1 }}
            transition={{ duration: 1, delay: 2.9, ease: "easeOut" }}
          >
            <span className="text-5xl md:text-7xl lg:text-8xl font-black bg-black text-white px-6 py-2 cinzel-ss tracking-tight shadow-2xl transform -rotate-1 inline-block border-4 border-black">
              Motions
            </span>
            {/* Decorative lines */}
            <motion.div 
              className="absolute -top-2 -left-2 w-full h-full border-2 border-gray-400 -z-10 transform rotate-2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 3.2 }}
            ></motion.div>
          </motion.span>
        </motion.h1>

        {/* Tagline */}
        <motion.h2 
          className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-light mb-6 tracking-wide"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 3.4 }}
        >
          Where Vision Moves
        </motion.h2>

        {/* Description */}
        <motion.p 
          className="max-w-3xl mx-auto text-base md:text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed px-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 3.6 }}
        >
          We craft cinematic motion graphics, short-form edits, and visual stories that captivate.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 3.8, ease: "easeOut" }}
        >
          <a href="/Links">
            <motion.button 
              className="group relative px-10 py-4 bg-black text-white text-base md:text-lg font-semibold rounded-md mb-10 border-2 border-black overflow-hidden transition-all duration-500 ease-out hover:scale-105 shadow-xl hover:shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 transition-colors duration-500 ease-out group-hover:text-black">
                Let's Create Magic
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>
            </motion.button>
          </a>
        </motion.div>

        {/* Services Tags - New Design */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-2 max-w-2xl md:ml-15"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 4.0 }}
        >
          {['Motion Graphics', 'Short Edits', 'Visual FX'].map((service, index) => (
            <React.Fragment key={service}>
              <motion.span 
                className="px-4 py-1.5 bg-white text-black text-sm md:text-base font-semibold rounded-sm border border-black/20 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 4.2 + (index * 0.2) }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {service}
              </motion.span>
              {index < 2 && (
                <motion.span 
                  className="text-gray-400 text-xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 4.4 + (index * 0.2) }}
                >
                  /
                </motion.span>
              )}
            </React.Fragment>
          ))}
        </motion.div>

      </motion.div>
    </motion.section>
  )
}

export default Hero
