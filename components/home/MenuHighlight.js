"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Flame, Coffee, UtensilsCrossed, Dessert, ChefHat, ArrowRight } from 'lucide-react';

const categories = [
  {
    icon: Flame,
    title: 'Starters',
    items: ['Paneer Tikka', 'Hara Bhara Kabab', 'Corn Cheese Balls'],
    color: '#8B1538'
  },
  {
    icon: UtensilsCrossed,
    title: 'Main Course',
    items: ['Shahi Paneer', 'Dal Makhani', 'Veg Biryani'],
    color: '#D4AF37'
  },
  {
    icon: Coffee,
    title: 'South Indian',
    items: ['Masala Dosa', 'Idli Sambar', 'Uttapam'],
    color: '#2D5016'
  },
  {
    icon: Dessert,
    title: 'Desserts',
    items: ['Gulab Jamun', 'Ras Malai', 'Jalebi'],
    color: '#8B1538'
  },
  {
    icon: ChefHat,
    title: 'Live Counters',
    items: ['Pani Puri', 'Pav Bhaji', 'Chaat Station'],
    color: '#D4AF37'
  }
];

export default function MenuHighlight() {
    const router=useRouter();
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#FAF9F6] to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#D4AF37] font-semibold text-sm tracking-wider uppercase mb-2">
            Our Culinary Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            A Taste of Tradition
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Authentic Indian flavors prepared with the finest ingredients and decades of expertise
          </p>
        </motion.div>

        {/* Menu Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <Icon className="w-7 h-7" style={{ color: category.color }} />
                </div>
                <h3 className="text-lg font-bold text-center text-[#2C1810] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600 text-center">
                      • {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Boxes */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#8B1538] text-white rounded-2xl p-8 text-center"
          >
            <h4 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Jain & Satvik Options
            </h4>
            <p className="text-gray-200">
              Special menus respecting religious dietary requirements
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#D4AF37] text-[#2C1810] rounded-2xl p-8 text-center"
          >
            <h4 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Custom Menus
            </h4>
            <p className="text-gray-800">
              Personalized dishes crafted to match your preferences
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#2D5016] text-white rounded-2xl p-8 text-center"
          >
            <h4 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Multi-Cuisine
            </h4>
            <p className="text-gray-200">
              North Indian, South Indian, Chinese & Continental
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
          onClick={()=>router.push('/Menu')}
            className="cursor-pointer inline-flex items-center gap-2 bg-[#8B1538] hover:bg-[#D4AF37] text-white hover:text-[#2C1810] px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg"
          >
            Explore Complete Menu
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}