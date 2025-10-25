"use client"
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  const loadingSteps = [
    "Initializing CreateMotion...",
    "Loading motion graphics...",
    "Preparing animations...",
    "Almost ready..."
  ]

  useEffect(() => {
    // GSAP Timeline for loading animations
    const tl = gsap.timeline()

    // Animate entrance
    tl.fromTo(logoRef.current,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 1, ease: "back.out(1.7)" }
    )
    .fromTo(titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(taglineRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
      "-=0.3"
    )
    .fromTo(progressBarRef.current,
      { scale: 0 },
      { scale: 1, duration: 0.5, ease: "power3.out" },
      "-=0.2"
    )
    .fromTo(stepsRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      "-=0.1"
    )

    // Animate grid
    if (gridRef.current) {
      const gridCells = gridRef.current.children
      tl.fromTo(gridCells,
        { opacity: 0 },
        { 
          opacity: 1, 
          duration: 0.3, 
          ease: "power2.out",
          stagger: {
            amount: 1,
            from: "random"
          }
        },
        0
      )
    }

  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          // Exit animation before calling onComplete
          if (containerRef.current) {
            gsap.to(containerRef.current, {
              opacity: 0,
              scale: 1.1,
              filter: "blur(10px)",
              duration: 0.8,
              ease: "power3.out",
              onComplete: () => onComplete()
            })
          } else {
            setTimeout(onComplete, 500)
          }
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
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-white flex items-center justify-center"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          ref={gridRef}
          className='h-full w-full grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(15,1fr)]'
        >
          {Array.from({ length: 300 }).map((_, i) => (
            <div 
              key={i} 
              className='border border-black/20'
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto px-4">
        {/* Logo Animation */}
        <div
          ref={logoRef}
          className="mb-8"
        >
          <div className="w-20 h-20 mx-auto bg-black rounded-2xl flex items-center justify-center mb-4 shadow-2xl">
            <span className="text-white text-2xl font-bold">
              CM
            </span>
          </div>
        </div>

        {/* Company Name */}
        <h1
          ref={titleRef}
          className="text-3xl md:text-4xl font-black text-black mb-2 cinzel-ss"
        >
          CreateMotions
        </h1>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="text-gray-600 mb-8 text-lg"
        >
          Where Vision Moves
        </p>

        {/* Progress Bar */}
        <div
          ref={progressBarRef}
          className="w-full bg-gray-200 rounded-full h-2 mb-4 overflow-hidden"
        >
          <div
            className="h-full bg-black rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <div className="text-sm text-gray-500 mb-6">
          {progress}%
        </div>

        {/* Loading Steps */}
        <div
          ref={stepsRef}
          className="h-8"
        >
          <p className="text-gray-600 text-sm">
            {loadingSteps[currentStep]}
          </p>
        </div>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-black rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  )
}