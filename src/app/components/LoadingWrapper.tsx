"use client"
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './LoadingScreen'

interface LoadingWrapperProps {
  children: React.ReactNode;
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoading(false)
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true)
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
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>
      
      {showContent && (
        <div style={{ opacity: showContent ? 1 : 0 }}>
          {children}
        </div>
      )}
    </>
  )
}