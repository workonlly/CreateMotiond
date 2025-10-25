'use client'

import React, { useState } from "react"
import Link from "next/link"

interface NavbarProps {
  // No props needed since animations are removed
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Service", href: "#service" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="max-w-7xl mx-auto bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200/50">
        <div className="flex items-center justify-between h-16 md:h-18 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center group">
              <img
                src="https://res.cloudinary.com/dmhabztbf/image/upload/v1760706623/Screenshot_2025-10-17_183923_faoffi.png"
                alt="CreateMotion Logo"
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                width={40}
                height={40}
              />
              <span className="ml-2 text-xl font-bold text-black sedan-sc-regular sm:inline">
                CreateMotions
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="relative px-4 py-2 text-gray-700 text-sm font-medium rounded-xl hover:text-white hover:bg-black transition-all duration-300 group"
                >
                  <span className="relative z-10">{link.name}</span>
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="/Links">
              <button className="relative bg-black hover:bg-white hover:text-black text-white px-8 py-3 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 group border-2 border-black">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 text-gray-700 transition-transform duration-300 ${
                isOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-80" : "max-h-0"
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2 border-t border-gray-200/50">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-2.5 text-gray-700 text-sm font-medium rounded-xl hover:bg-white hover:text-black transition-colors duration-200 hover:shadow-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a href="/Links">
            <button className="w-full relative bg-black hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 mt-4 group overflow-hidden border-2 border-black shadow-lg">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              {/* Shimmer effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent"></span>
            </button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
