import React from 'react'
import { Metadata } from 'next'

// Social media links data with actual URLs (replace with your real links)
const socialLinks = [
  {
    name: 'WhatsApp',
    url: 'https://wa.me/918219276410?text=Hello%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20video%20editing%20and%20motion%20graphics%20services.%20Could%20you%20please%20provide%20me%20with%20more%20information%3F',
    description: 'Send us a message',
    icon: '/comp/whatsapp-svgrepo-com.svg',
    color: 'green',
    hoverColors: 'hover:border-green-300 hover:bg-green-50',
    iconBg: 'bg-green-100 border-green-200',
    hoverText: 'group-hover:text-green-600'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/createmotionss/',
    description: 'Professional network',
    icon: '/comp/linkedin-svgrepo-com.svg',
    color: 'blue',
    hoverColors: 'hover:border-blue-300 hover:bg-blue-50',
    iconBg: 'bg-blue-100 border-blue-200',
    hoverText: 'group-hover:text-blue-600'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/createmotions?igsh=MWR1czc5dW1tbHpkNA==',
    description: 'Follow our work',
    icon: '/comp/instagram-1-svgrepo-com.svg',
    color: 'pink',
    hoverColors: 'hover:border-pink-300 hover:bg-pink-50',
    iconBg: 'bg-pink-100 border-pink-200',
    hoverText: 'group-hover:text-pink-600'
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/your-discord-server',
    description: 'Join our community',
    icon: '/comp/discord-v2-svgrepo-com.svg',
    color: 'indigo',
    hoverColors: 'hover:border-indigo-300 hover:bg-indigo-50',
    iconBg: 'bg-indigo-100 border-indigo-200',
    hoverText: 'group-hover:text-indigo-600'
  },
  {
    name: 'X',
    url: 'https://x.com/createmotions3',
    description: 'Latest updates',
    icon: '/comp/icons8-x-logo.svg',
    color: 'gray',
    hoverColors: 'hover:border-gray-400 hover:bg-gray-50',
    iconBg: 'bg-gray-100 border-gray-200',
    hoverText: 'group-hover:text-gray-700'
  }
];

function Links() {
  // Structured data for social media links
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "CreateMotion Contact & Social Media Links",
    "description": "Connect with CreateMotion on all major social platforms",
    "url": "https://createmotion.com/Links",
    "mainEntity": {
      "@type": "Organization",
      "name": "CreateMotion",
      "sameAs": socialLinks.map(link => link.url),
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": "English"
      }
    }
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Beautiful Mesh Grid Background */}
        <div className='absolute -z-10 inset-0' role="presentation" aria-hidden="true">
          {/* Main Grid */}
          <div className='h-full w-full grid grid-cols-[repeat(16,1fr)] grid-rows-[repeat(15,1fr)]'>
            {Array.from({ length: 300 }).map((_, i) => (
              <div 
                key={i} 
                className='border border-gray-500/30'
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <section className='relative z-10 w-full min-h-screen flex items-center justify-center p-4'>
          <article className='w-full max-w-md mx-auto'>
            {/* Header */}
            <header className='text-center mb-6'>
              <h1 className='text-2xl md:text-3xl font-bold text-gray-900 mb-2'>
                Connect With CreateMotion
              </h1>
              <p className='text-gray-600 text-sm'>
                Choose your preferred platform to connect with us
              </p>
            </header>

            {/* Links Container */}
            <nav 
              className='bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200 p-4 space-y-3'
              aria-label="Social media links"
            >
              {socialLinks.map((platform, index) => (
                <a 
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-3 rounded-xl border border-gray-200 ${platform.hoverColors} hover:shadow-md transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-${platform.color}-500 focus:ring-opacity-50`}
                  aria-label={`Connect with CreateMotion on ${platform.name} - ${platform.description}`}
                >
                  <div className={`w-10 h-10 ${platform.iconBg} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform border`}>
                    <img 
                      src={platform.icon} 
                      alt={`${platform.name} icon`} 
                      className='w-5 h-5'
                      loading="lazy"
                      width="20"
                      height="20"
                    />
                  </div>
                  <div className='flex-1'>
                    <span className='text-base font-semibold text-gray-900'>
                      {platform.name}
                    </span>
                    <p className='text-xs text-gray-500'>
                      {platform.description}
                    </p>
                  </div>
                  <div className={`w-4 h-4 text-gray-400 ${platform.hoverText} transition-colors`}>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ))}
            </nav>

            {/* Footer */}
            <footer className='text-center mt-4'>
              <p className='text-xs text-gray-500'>
                © 2025 CreateMotion. All rights reserved.
              </p>
            </footer>
          </article>
        </section>
      </main>
    </>
  )
}

export default Links
