"use client"
import { motion } from 'framer-motion';
import { Sparkles, Zap, Target, Play, Award, Rocket, TrendingUp, Users, Star, Heart, Globe, User } from 'lucide-react';

export default function About() {
  return (
    <section className="relative min-h-screen py-20 px-4 overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-gray-900 to-black">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/5 w-[400px] h-[400px] bg-cyan-500/10 rounded-full filter blur-[120px]"
          animate={{ 
            x: [0, 80, -50, 0], 
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-[350px] h-[350px] bg-magenta-500/10 rounded-full filter blur-[120px]"
          animate={{ 
            x: [0, -60, 40, 0], 
            y: [0, 30, -20, 0],
            scale: [1, 0.9, 1.05, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-purple-500/8 rounded-full filter blur-[100px] transform -translate-x-1/2 -translate-y-1/2"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
        
          
          {/* Main Title with Enhanced Typography */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-linear-to-br from-white via-cyan-100 to-magenta-100 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            About
            <span className="block text-white ">
              CreateMotion
            </span>
          </motion.h1>
          
          {/* Enhanced Subtitle */}
          <motion.div 
            className="flex justify-center items-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="h-0.5 w-16 bg-linear-to-r from-transparent to-cyan-500"
              animate={{ scaleX: [0, 1] }}
              transition={{ duration: 1, delay: 0.8 }}
            />
            <span className="text-xl text-cyan-300 font-semibold tracking-wide">
              Elevating Brands Through Motion
            </span>
            <motion.span 
              className="h-0.5 w-16 bg-linear-to-r from-magenta-500 to-transparent"
              animate={{ scaleX: [0, 1] }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </motion.div>
        </motion.div>

        {/* Enhanced Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-32"
        >
          <div className="relative p-12 md:p-16 rounded-4xl bg-black/40 backdrop-blur-2xl border border-white/10 overflow-hidden group">
            {/* Multiple Gradient Overlays */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-linear-to-br from-cyan-500/20 to-transparent rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-linear-to-tr from-magenta-500/20 to-transparent rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700" />
            
            {/* Content */}
            <div className="relative z-10">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our Mission
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 text-center max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                At CreateMotion, we believe every brand has a story worth telling. We transform ideas into immersive visual experiences that resonate, engage, and inspire action.
              </motion.p>
              
              <motion.p 
                className="text-base md:text-lg text-gray-300 leading-relaxed mb-12 text-center max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Our creative philosophy is simple: combine cutting-edge motion design with authentic storytelling to create content that doesn't just look beautiful—it performs.
              </motion.p>

              {/* Featured Quote with Enhanced Design */}
              <motion.div 
                className="relative p-8 rounded-2xl bg-linear-to-r from-cyan-900/30 to-magenta-900/30 border-l-4 border-cyan-400 mb-16 max-w-4xl mx-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-4 -left-2">
                  <span className="text-6xl text-cyan-400 opacity-60">"</span>
                </div>
                <p className="text-xl italic text-cyan-100 text-center relative z-10">
                  We don't just make videos. We craft visual stories that drive results and leave lasting impressions.
                </p>
              </motion.div>

              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                {[
                  { icon: Target, number: '500+', label: 'Projects Delivered', color: 'cyan' },
                  { icon: Zap, number: '50M+', label: 'Views Generated', color: 'magenta' },
                  { icon: Users, number: '100+', label: 'Happy Clients', color: 'emerald' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:scale-105">
                      <div className="flex items-center gap-6">
                        <div className={`w-12 h-12 rounded-2xl bg-${stat.color}-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                        </div>
                        <div>
                          <motion.p 
                            className="text-3xl font-black text-white"
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            {stat.number}
                          </motion.p>
                          <p className="text-gray-400 font-medium">{stat.label}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Enhanced Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-white text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Choose CreateMotion
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Award,
                title: "Premium Quality",
                description: "Industry-leading motion design that sets your brand apart from competitors with cutting-edge techniques",
                color: "from-cyan-500 to-blue-600",
                accent: "cyan"
              },
              {
                icon: Rocket,
                title: "Lightning Fast",
                description: "Quick delivery without compromising on quality or attention to detail, meeting your deadlines",
                color: "from-magenta-500 to-purple-600",
                accent: "magenta"
              },
              {
                icon: TrendingUp,
                title: "Results Driven",
                description: "Strategic creative designed to achieve your specific marketing objectives and drive conversions",
                color: "from-emerald-500 to-teal-600",
                accent: "emerald"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative"
              >
                {/* Card Glow Effect */}
                <div className={`absolute -inset-1 bg-linear-to-r ${feature.color} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`} />
                
                <div className="relative h-full p-8 rounded-3xl bg-black/60 border border-white/10 backdrop-blur-xl hover:bg-black/40 transition-all duration-500 overflow-hidden">
                  {/* Floating Accent */}
                  <div className={`absolute -top-12 -right-12 w-24 h-24 bg-${feature.accent}-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`} />
                  
                  <motion.div
                    className={`w-16 h-16 mb-8 rounded-2xl bg-linear-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h4 className="text-xl font-bold text-white mb-6 group-hover:text-cyan-100 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Enhanced Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-24"
        >
          <div className="relative p-12 rounded-4xl bg-linear-to-br from-cyan-900/20 via-purple-900/20 to-magenta-900/20 border border-white/10 backdrop-blur-xl overflow-hidden group">
            {/* Animated Background Elements */}
            <motion.div 
              className="absolute -top-8 -right-8 w-20 h-20 bg-cyan-500/20 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            
            <div className="relative z-10">
             
              
              <motion.p 
                className="text-xl md:text-2xl text-white text-center italic pt-8 px-4 leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                "CreateMotion transformed our product launch video into an experience that captured exactly what makes our brand special. The engagement metrics speak for themselves."
              </motion.p>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-cyan-300 font-bold text-xl mb-2">Raman Saklani</p>
                <p className="text-gray-400">Founder, CreateMotion</p>
                <div className="flex justify-center items-center gap-2 mt-4">
                 
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">Meet Our Team</h3>
            <p className="text-lg text-gray-400">
              A small group of passionate builders and creators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              {
                name: 'Raman Saklani',
                role: 'Founder & CEO',
                color: 'from-cyan-500 to-blue-600',
                image: 'https://res.cloudinary.com/dmhabztbf/image/upload/v1760523461/PHOTO-2025-10-13-19-03-29_e0tvab.jpg',
              },
              {
                name: 'Krishan',
                role: 'Co-Founder & CTO',
                color: 'from-magenta-500 to-purple-600',
                image: 'https://res.cloudinary.com/dmhabztbf/image/upload/v1760523859/IMG_1053_t3vwpw.jpg'
              },
              {
                name: 'Shivam',
                role: 'Co-Founder & CTO',
                color: 'from-emerald-500 to-teal-600',
                image: 'https://res.cloudinary.com/dmhabztbf/image/upload/v1760523461/WhatsApp_Image_2025-10-14_at_16.49.47_d06d6ed3_x6jfnb.jpg'
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                {/* Subtle Shadow Effect */}
                <div className="absolute -inset-1 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Professional Card Container */}
                <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 group-hover:border-white/30 transition-all duration-300 shadow-2xl">
                  
                  {/* Clean Image Container */}
                  {member.image ? (
                    <div className="relative w-full h-80 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        style={{ objectPosition: "center 20%" }}
                      />
                      
                      {/* Simple dark overlay for text readability only at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-black/80 to-transparent" />
                    
                
                    </div>
                  ) : (
                    <div className="w-full h-80 bg-gray-800 flex items-center justify-center">
                      <User className="w-20 h-20 text-gray-400" />
                    </div>
                  )}

                  {/* Professional Text Section */}
                  <div className="p-6 bg-black/60 backdrop-blur-sm">
                    {/* Clean divider line */}
                    <div className="w-12 h-0.5 bg-white/30 mb-4" />
                    
                    {/* Name */}
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                      {member.name}
                    </h3>
                    
                    {/* Role */}
                    <p className="text-gray-300 font-medium text-sm tracking-wide">
                      {member.role}
                    </p>
                    
                    {/* Professional indicator */}
                    <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span className="text-xs text-gray-400 font-medium">Leadership Team</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
   
      </div>
    </section>
  );
}
