import React from 'react'

function Links() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      {/* Beautiful Mesh Grid Background */}
      <div className='absolute -z-10 inset-0'>
        {/* Main Grid */}
        <div className='h-full w-full grid grid-cols-[repeat(16,1fr)] grid-rows-[repeat(15,1fr)]'>
          {Array.from({ length: 300 }).map((_, i) => (
            <div 
              key={i} 
              className='border border-gray-500/30'
            />
          ))}
        </div>
      </div>

    
        {/* Main Content */}
        <div className='relative z-10 w-full min-h-screen flex items-center justify-center p-4'>
          <div className='w-full max-w-md mx-auto'>
            {/* Header */}
            <div className='text-center mb-6'>
              <h1 className='text-2xl md:text-3xl font-bold text-gray-900 mb-2'>Connect With Us</h1>
              <p className='text-gray-600 text-sm'>Choose your preferred platform</p>
            </div>

            {/* Links Container */}
            <div className='bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200 p-4 space-y-3'>
              {/* WhatsApp */}
              <a href="#" className='flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-green-300 hover:bg-green-50 hover:shadow-md transition-all duration-300 group'>
                <div className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform border border-green-200'>
                  <img src="/comp/whatsapp-svgrepo-com.svg" alt="WhatsApp" className='w-5 h-5' />
                </div>
                <div className='flex-1'>
                  <span className='text-base font-semibold text-gray-900'>WhatsApp</span>
                  <p className='text-xs text-gray-500'>Send us a message</p>
                </div>
                <div className='w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors'>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>

              {/* LinkedIn */}
              <a href="#" className='flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md transition-all duration-300 group'>
                <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform border border-blue-200'>
                  <img src="/comp/linkedin-svgrepo-com.svg" alt="LinkedIn" className='w-5 h-5' />
                </div>
                <div className='flex-1'>
                  <span className='text-base font-semibold text-gray-900'>LinkedIn</span>
                  <p className='text-xs text-gray-500'>Professional network</p>
                </div>
                <div className='w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors'>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>

              {/* Instagram */}
              <a href="#" className='flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-pink-300 hover:bg-pink-50 hover:shadow-md transition-all duration-300 group'>
                <div className='w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform border border-pink-200'>
                  <img src="/comp/instagram-1-svgrepo-com.svg" alt="Instagram" className='w-5 h-5' />
                </div>
                <div className='flex-1'>
                  <span className='text-base font-semibold text-gray-900'>Instagram</span>
                  <p className='text-xs text-gray-500'>Follow our work</p>
                </div>
                <div className='w-4 h-4 text-gray-400 group-hover:text-pink-600 transition-colors'>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>

              {/* Discord */}
              <a href="#" className='flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-md transition-all duration-300 group'>
                <div className='w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform border border-indigo-200'>
                  <img src="/comp/discord-v2-svgrepo-com.svg" alt="Discord" className='w-5 h-5' />
                </div>
                <div className='flex-1'>
                  <span className='text-base font-semibold text-gray-900'>Discord</span>
                  <p className='text-xs text-gray-500'>Join our community</p>
                </div>
                <div className='w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors'>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>

              {/* X (Twitter) */}
              <a href="#" className='flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md transition-all duration-300 group'>
                <div className='w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform border border-gray-200'>
                  <img src="/comp/icons8-x-logo.svg" alt="X" className='w-5 h-5' />
                </div>
                <div className='flex-1'>
                  <span className='text-base font-semibold text-gray-900'>X</span>
                  <p className='text-xs text-gray-500'>Latest updates</p>
                </div>
                <div className='w-4 h-4 text-gray-400 group-hover:text-gray-700 transition-colors'>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </div>

            {/* Footer */}
            <div className='text-center mt-4'>
              <p className='text-xs text-gray-500'>© 2025 CreateMotion. All rights reserved.</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Links
