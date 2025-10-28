"use client"
import { motion } from 'framer-motion'
import { Mail, Linkedin, Instagram } from 'lucide-react'

export default function Contact() {
  return (
    <section className="relative py-32 px-4 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6"
        >
          Let’s collaborate
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mb-10"
        >
          If you have a project, idea, or just want to chat — click the button below to reach us.
        </motion.p>
         <a href="/Links"><motion.button
          
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Connect with CreateMotion"
          className="inline-flex items-center gap-4 px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 rounded-2xl text-white font-semibold shadow-lg"
        >
          
          Connect
        </motion.button></a> 

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="https://www.instagram.com/createmotions/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-white"
          >
            <Instagram className="w-5 h-5" />
            @createmotions
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-white"
          >
            <Linkedin className="w-5 h-5" />
            CreateMotion Agency
          </a>
        </div>
      </div>
    </section>
  )
}
