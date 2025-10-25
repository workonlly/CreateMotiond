import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {/* Beautiful Mesh Grid Background */}
      <motion.div 
        className='absolute -z-10 inset-0 bg-white'
        initial={{ scale: 1.02, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "tween"
        }}
      >
        {/* Main Grid */}
        <div className='h-full w-full grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(15,1fr)]'>
          {Array.from({ length: 300 }).map((_, i) => (
            <motion.div 
              key={i} 
              className='border border-black/10'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.15, 
                delay: 0.4 + (i % 20) * 0.001 + Math.floor(i / 20) * 0.004,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.5, 
          delay: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        {/* Main Heading */}
        <motion.h1 
          className="relative flex items-center justify-center gap-6 md:gap-8 flex-wrap mb-8 mt-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        > 
          <motion.span 
            className="text-5xl md:text-7xl lg:text-8xl font-black text-black cinzel-ss tracking-tight"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.9,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            Create
          </motion.span>
          <motion.span 
            className="relative inline-block"
            initial={{ x: 50, opacity: 0, rotate: -10 }}
            animate={{ x: 0, opacity: 1, rotate: -1 }}
            transition={{ 
              duration: 0.5, 
              delay: 1.0,
              ease: [0.34, 1.56, 0.64, 1],
              type: "spring",
              stiffness: 120,
              damping: 12
            }}
          >
            <span className="text-5xl md:text-7xl lg:text-8xl font-black bg-black text-white px-6 py-2 cinzel-ss tracking-tight shadow-2xl transform -rotate-1 inline-block border-4 border-black">
              Motions
            </span>
            {/* Decorative lines */}
            <motion.div 
              className="absolute -top-2 -left-2 w-full h-full border-2 border-gray-400 -z-10 transform rotate-2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: 1.2,
                ease: [0.34, 1.56, 0.64, 1],
                type: "spring"
              }}
            ></motion.div>
          </motion.span>
        </motion.h1>

        {/* Tagline */}
        <motion.h2 
          className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-light mb-6 tracking-wide"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.3, 
            delay: 1.3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          Where Vision Moves
        </motion.h2>

        {/* Description */}
        <motion.p 
          className="max-w-3xl mx-auto text-base md:text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed px-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.3, 
            delay: 1.4,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          We craft cinematic motion graphics, short-form edits, and visual stories that captivate.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 30, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.4, 
            delay: 1.5,
            ease: [0.34, 1.56, 0.64, 1],
            type: "spring",
            stiffness: 150,
            damping: 15
          }}
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
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.4, 
            delay: 1.7,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {['Motion Graphics', 'Short Edits', 'Visual FX'].map((service, index) => (
            <React.Fragment key={service}>
              <motion.span 
                className="px-4 py-1.5 bg-white text-black text-sm md:text-base font-semibold rounded-sm border border-black/20 shadow-sm"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.25, 
                  delay: 1.8 + (index * 0.05),
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  transition: { duration: 0.2 }
                }}
              >
                {service}
              </motion.span>
              {index < 2 && (
                <motion.span 
                  className="text-gray-400 text-xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.2, 
                    delay: 2.7 + (index * 0.1),
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
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
