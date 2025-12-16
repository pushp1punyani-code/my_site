"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Owners from '../../components/Owners'
import { Award, Heart, ShieldCheck, Users, Sparkles, TrendingUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
export default function About() {
    const router = useRouter();

  return (

    <>
    
    <div className="bg-[#FAF9F6]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[#D4AF37] font-semibold text-sm tracking-wider uppercase mb-4">
              Our Story
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#2C1810] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              47 Years of Culinary Excellence
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Since 1978, Arora Caterers has been Nagpur's most trusted name in pure vegetarian catering, 
              serving generations of families with dedication, authenticity, and unwavering quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legacy Story */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070"
                alt="Traditional Indian Cooking"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#2C1810] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                The Heritage Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 1978 by Shyamsunder R Punyani, our journey began with a simple yet powerful vision: 
                  to serve authentic, pure vegetarian cuisine that celebrates India's rich culinary heritage.
                </p>
                <p>
                  What started as a small family catering service has grown into Nagpur's most respected name 
                  in event catering. Over the decades, we've had the privilege of being part of thousands of 
                  celebrations—from intimate family gatherings to grand weddings and prestigious corporate events.
                </p>
                <p>
                  Our commitment has remained unchanged: using only the freshest, highest-quality ingredients, 
                  maintaining impeccable hygiene standards, and treating every event with the care and attention 
                  it deserves.
                </p>
                <p className="text-[#8B1538] font-semibold">
                  Today, we're proud to serve the third generation of families who continue to trust us with 
                  their most important celebrations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Owners Section */}
      <Owners />

      {/* Values Section */}
      <section className="py-16 px-4 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#2C1810] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              Principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Passion for Food',
                description: 'Every dish is prepared with love, care, and decades of culinary expertise passed down through generations.'
              },
              {
                icon: ShieldCheck,
                title: 'Quality First',
                description: 'We never compromise on ingredient quality or hygiene. Your trust is our most valuable asset.'
              },
              {
                icon: Users,
                title: 'Customer Satisfaction',
                description: 'Your happiness is our success. We go above and beyond to exceed expectations at every event.'
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8B1538] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2C1810] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#2C1810] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Hygiene & Quality Assurance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards of cleanliness and food safety at every step
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: 'Fresh Ingredients Daily',
                description: 'We source fresh vegetables, dairy, and ingredients daily from trusted local suppliers.'
              },
              {
                icon: Sparkles,
                title: 'Certified Kitchen',
                description: 'Our state-of-the-art kitchen meets all food safety and hygiene certifications.'
              },
              {
                icon: Users,
                title: 'Trained Staff',
                description: 'Our chefs and service staff undergo regular training in food safety protocols.'
              },
              {
                icon: Award,
                title: 'Quality Checks',
                description: 'Multiple quality checkpoints ensure every dish meets our exacting standards.'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#FAF9F6] rounded-xl p-6 flex gap-4 hover:shadow-lg transition-all"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#8B1538] rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2C1810] mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#8B1538] to-[#D4AF37]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { icon: TrendingUp, number: '47+', label: 'Years of Excellence' },
              { icon: Users, number: '20000+', label: 'Events Catered' },
              { icon: Heart, number: '100000+', label: 'Happy Clients' },
              { icon: Award, number: '100%', label: 'Pure Vegetarian' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}