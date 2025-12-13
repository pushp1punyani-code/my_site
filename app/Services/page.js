"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Heart, Briefcase, Sparkles, Cake, Users, CheckCircle, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Weddings & Receptions',
    description: 'Your wedding day deserves nothing but perfection. We specialize in creating unforgettable culinary experiences for your big day.',
    features: [
      'Custom wedding menus with 100+ dish options',
      'Pre-wedding tasting sessions',
      'Elegant buffet and live counter setups',
      'Professional service staff in traditional attire',
      'Special Jain and Satvik menu options'
    ],
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070',
    capacity: '50 - 5000 and above guests',
    color: '#8B1538'
  },
  {
    icon: Briefcase,
    title: 'Corporate Events',
    description: 'Impress your clients and colleagues with professional catering that matches your corporate standards.',
    features: [
      'Business lunch and conference catering',
      'Product launch event menus',
      'Executive board meeting refreshments',
      'Multi-cuisine buffet options',
      'Timely setup and service',
      'Professional presentation'
    ],
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069',
    capacity: '50 - 20000 guests',
    color: '#D4AF37'
  },
  {
    icon: Sparkles,
    title: 'Religious Functions',
    description: 'Sacred celebrations prepared with devotion and purity, following traditional dietary guidelines.',
    features: [
      'Pure Satvik meal preparations',
      'Special Jain menu options',
      'Traditional pooja prasad arrangements',
      'Katha and bhajan sandhya catering',
      'Temple event catering',
      'Festival celebration menus'
    ],
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070',
    capacity: '50 - 20000 guests',
    color: '#2D5016'
  },
  {
    icon: Cake,
    title: 'Birthday & Anniversary Parties',
    description: 'Celebrate life\'s special moments with delicious food that brings everyone together.',
    features: [
      'Themed party menus',
      'Kids-friendly food options',
      'Live cooking stations',
      'Customized cake arrangements',
      'Return gift hampers (optional)',
      'Indoor and outdoor setup'
    ],
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070',
    capacity: '50 - 500 guests',
    color: '#8B1538'
  }
];

const additionalServices = [
  'Table & seating arrangements',
  'Crockery and cutlery service',
  'Professional waiters & kitchen staff',
  'Buffet setup & decoration',
  'Live cooking stations',
  'Pre-event tasting sessions'
];

export default function Services() {
    const router=useRouter();
  return (
    <div className="bg-[#FAF9F6]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-[#8B1538] to-[#D4AF37] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Catering Services
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, we bring culinary excellence and impeccable service to every occasion
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
              >
                {/* Image */}
                <div className={`${!isEven ? 'lg:col-start-2' : ''} relative group overflow-hidden rounded-2xl shadow-2xl`}>
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      <span className="font-semibold">{service.capacity}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: service.color }} />
                  </div>
                  
                  <h2 className="text-4xl font-bold text-[#2C1810] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#2C1810] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Complete Event Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Beyond great food, we provide everything you need for a successful event
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#FAF9F6] rounded-xl p-6 flex items-center gap-4 hover:shadow-lg transition-all"
              >
                <CheckCircle className="w-6 h-6 text-[#8B1538] flex-shrink-0" />
                <span className="text-gray-700 font-medium">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#8B1538] to-[#D4AF37]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Plan Your Event?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your requirements and create a memorable culinary experience together
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+91 9422113223"
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all border-2 border-white/30"
              >
                Call: +91 9422113223
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}