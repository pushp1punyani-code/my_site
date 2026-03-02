"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight, Award, Users, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
    const router=useRouter();
  return (
    <div className="relative h-[98vh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          {/* Heritage Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#2C1810] px-6 py-2 rounded-full mb-6 font-semibold"
          >
            <Award className="w-5 h-5" />
            <span>47+ Years of Excellence Since 1978</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nagpur's Heritage in
            <span className="text-[#D4AF37]"> Pure Veg</span> Catering
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            Creating unforgettable culinary experiences with authentic flavors, 
            impeccable service, and unwavering commitment to quality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => router.push('/Menu')}
              className="cursor-pointer bg-white/10 backdrop-blur-md hover:bg-white hover:text-[#2C1810] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all border-2 border-white/30"
            >
              Explore Our Menu
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/30"
          >
            <div>
              <div className="flex items-center gap-2 text-[#D4AF37] mb-1">
                <Calendar className="w-5 h-5" />
                <span className="text-3xl font-bold">47+</span>
              </div>
              <p className="text-sm text-gray-300">Years of Trust</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-[#D4AF37] mb-1">
                <Users className="w-5 h-5" />
                <span className="text-3xl font-bold">5000+</span>
              </div>
              <p className="text-sm text-gray-300">Events Catered</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-[#D4AF37] mb-1">
                <Award className="w-5 h-5" />
                <span className="text-3xl font-bold">100%</span>
              </div>
              <p className="text-sm text-gray-300">Pure Vegetarian</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF9F6] to-transparent"></div>
    </div>
  );
}