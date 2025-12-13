"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Heart, Briefcase, Sparkles, Cake, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Weddings & Receptions',
    description: 'Make your special day truly memorable with our exquisite wedding catering services.',
    color: '#8B1538',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070'
  },
  {
    icon: Briefcase,
    title: 'Corporate Events',
    description: 'Professional catering solutions for conferences, seminars, and corporate gatherings.',
    color: '#D4AF37',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069'
  },
  {
    icon: Sparkles,
    title: 'Religious Functions',
    description: 'Sacred celebrations with pure Satvik and Jain meal options for all rituals.',
    color: '#2D5016',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070'
  },
  {
    icon: Cake,
    title: 'Private Celebrations',
    description: 'Intimate parties, birthdays, and anniversaries crafted with personal touch.',
    color: '#8B1538',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070'
  }
];

export default function ServicePreview() {
    const router=useRouter();
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Catering for Every Occasion
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From grand celebrations to intimate gatherings, we bring culinary excellence to your doorstep
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative p-6 h-80 flex flex-col justify-end text-white">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: service.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4">
                    {service.description}
                  </p>
                 
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => router.push('/Services')}
            className="cursor-pointer inline-flex items-center gap-2 bg-[#8B1538] hover:bg-[#D4AF37] text-white hover:text-[#2C1810] px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}