"use client"
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import LoadingScreen from './LoadingScreen'

interface LoadingWrapperProps {
  children: React.ReactNode;
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const handleLoadingComplete = () => {
    setIsLoading(false)
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true)
      if (contentRef.current) {
        gsap.fromTo(contentRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: "power3.out" }
        )
      }
    }, 100)
  }

  // Preload critical resources
  useEffect(() => {
    // Ensure fonts are loaded
    if (document.fonts) {
      document.fonts.ready.then(() => {
        // Add a minimum loading time for smooth experience
        const minLoadTime = 2000 // 2 seconds minimum
        const startTime = Date.now()
        
        const timer = setTimeout(() => {
          handleLoadingComplete()
        }, Math.max(0, minLoadTime - (Date.now() - startTime)))

        return () => clearTimeout(timer)
      })
    } else {
      // Fallback for older browsers
      setTimeout(handleLoadingComplete, 2500)
    }
  }, [])

  return (
    <>
      {isLoading && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}
      
      {showContent && (
        <div ref={contentRef} style={{ opacity: showContent ? 1 : 0 }}>
          {children}
        </div>
      )}
    </>
  )
}