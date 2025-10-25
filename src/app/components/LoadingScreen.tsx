"use client"
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const loadingSteps = [
    "Initializing CreateMotion...",
    "Loading motion graphics...",
    "Preparing animations...",
    "Almost ready..."
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 500) // Small delay before hiding
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [onComplete])

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % loadingSteps.length)
    }, 800)

    return () => clearInterval(stepTimer)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.1,
        filter: "blur(10px)"
      }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className='h-full w-full grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(15,1fr)]'>
          {Array.from({ length: 300 }).map((_, i) => (
            <motion.div 
              key={i} 
              className='border border-black/20'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: i * 0.001,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto px-4">
        {/* Logo Animation */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            ease: [0.34, 1.56, 0.64, 1],
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-4 shadow-2xl">
            <motion.span 
              className="text-white text-2xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <img src="/create.png" alt="" />
            </motion.span>
          </div>
        </motion.div>

        {/* Company Name */}
        <motion.h1
          className="text-3xl md:text-4xl font-black text-black mb-2 cinzel-ss"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          CreateMotions
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-gray-600 mb-8 text-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          Where Vision Moves
        </motion.p>

        {/* Progress Bar */}
        <motion.div
          className="w-full bg-gray-200 rounded-full h-2 mb-4 overflow-hidden"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <motion.div
            className="h-full bg-black rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ 
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          />
        </motion.div>

        {/* Progress Percentage */}
        <motion.div
          className="text-sm text-gray-500 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {progress}%
        </motion.div>

        {/* Loading Steps */}
        <motion.div
          className="h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={currentStep}
              className="text-gray-600 text-sm"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ 
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              {loadingSteps[currentStep]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Animated Dots */}
        <motion.div
          className="flex justify-center space-x-2 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-black rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}