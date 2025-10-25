"use client"
import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion';
import { Film, Video as VideoIcon, Smartphone, Image, Palette } from 'lucide-react';

function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const services = [
    {
      icon: Film,
      title: 'Motion Graphics',
      description: 'Stunning animated visuals that bring your brand to life',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: VideoIcon,
      title: 'Video Editing',
      description: 'Professional editing that transforms raw footage into compelling stories',
      color: 'from-magenta-500 to-purple-600',
    },
    {
      icon: Smartphone,
      title: 'Shortform Creation',
      description: 'Viral-worthy content optimized for social media platforms',
      color: 'from-teal-500 to-emerald-600',
    },
    {
      icon: Image,
      title: 'Thumbnail Design',
      description: 'Eye-catching thumbnails that maximize click-through rates',
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: Palette,
      title: 'Brand Visuals',
      description: 'Cohesive visual identities that make your brand unforgettable',
      color: 'from-violet-500 to-fuchsia-600',
    },
  ];
  return (
    <motion.section 
      className="relative min-h-screen bg-linear-to-br from-black via-gray-900 to-black overflow-hidden py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Grid Pattern */}
        <motion.div 
          className='absolute inset-0 opacity-10'
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className='h-full w-full grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(15,1fr)]'>
            {Array.from({ length: 300 }).map((_, i) => (
              <motion.div 
                key={i} 
                className='border border-white/10'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ 
                  duration: 0.1, 
                  delay: (i % 20) * 0.01 + Math.floor(i / 20) * 0.02 
                }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            What We Do Best
          </h2>
          <p className="text-xl text-gray-400">Comprehensive creative services for modern brands</p>
        </motion.div>

        {/* Video Container */}
        <motion.div 
          className="max-w-4xl mx-auto mb-32"
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Video Frame with Glow */}
            <div className="relative">
              {/* Outer Glow */}
              <motion.div 
                className="absolute -inset-8 bg-linear-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.6 }}
                viewport={{ once: true }}
              ></motion.div>
              
              {/* Inner Frame */}
              <div className="relative bg-linear-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="relative overflow-hidden rounded-xl">
                  <video 
                    ref={videoRef}
                    src="/video.mp4"
                    className="w-full h-[280px] md:h-[350px] lg:h-[420px] object-cover cursor-pointer"
                    poster="/video.png"
                    muted={isMuted}
                    onClick={togglePlayPause}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  >
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Video Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Enhanced Custom Controls */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Play Button - Only visible when paused */}
                      <button 
                        onClick={togglePlayPause}
                        className="group/btn relative bg-black/20 hover:bg-gray-800 backdrop-blur-sm rounded-full p-6 transition-all duration-300 hover:scale-110 shadow-2xl"
                      >
                        <svg className="w-8 h-8" fill="white" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                        <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>
                  )}

                  {/* Sound Button - Always visible in bottom left */}
                  <div className="absolute bottom-6 left-6">
                    <button 
                      onClick={toggleMute}
                      className="group/btn relative bg-black hover:bg-gray-800 backdrop-blur-sm rounded-full p-4 transition-all duration-300 hover:scale-110 shadow-lg border-2 border-white"
                    >
                      {isMuted ? (
                        <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                        </svg>
                      )}
                      <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-sky-500 rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>

                <motion.div
                  className="relative glass-panel p-8 rounded-3xl bg-black/80 backdrop-blur-xl border border-white/10 h-full"
                  whileHover={{ rotateY: 5, rotateX: 5 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center mb-6`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>

                  <motion.div
                    className="absolute top-4 right-4 w-24 h-24 rounded-full bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ filter: 'blur(20px)' }}
                  ></motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Video
