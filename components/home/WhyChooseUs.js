"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Leaf, Users, Clock, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: '47+ Years Legacy',
    description: 'Nearly five decades of trust, excellence, and unmatched expertise in catering'
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description: 'Stringent hygiene standards and only the finest, freshest ingredients'
  },
  {
    icon: Leaf,
    title: '100% Pure Vegetarian',
    description: 'Authentic vegetarian cuisine with Jain and Satvik options available'
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Skilled chefs and professional staff dedicated to your event success'
  },
  {
    icon: Clock,
    title: 'Timely Service',
    description: 'Punctual setup and flawless execution ensuring stress-free events'
  },
  {
    icon: HeartHandshake,
    title: 'Personal Touch',
    description: 'Customized menus and attentive service tailored to your needs'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#FAF9F6]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#D4AF37] font-semibold text-sm tracking-wider uppercase mb-2">
            Our Commitment
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why Choose Arora Caterers?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Decades of dedication to culinary perfection and customer satisfaction
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8B1538] to-[#D4AF37] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2C1810] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#8B1538] to-[#D4AF37] rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Create Magic Together?
          </h3>
          <p className="text-xl mb-8 text-gray-100">
            Let's discuss your event and craft a memorable culinary experience
          </p>
          <a
            href="tel:+919422113223"
            className="inline-block bg-white text-[#8B1538] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FAF9F6] transition-all shadow-xl"
          >
            Call Us: +91 9422113223
          </a>
        </motion.div>
      </div>
    </section>
  );
}