import React from 'react'
import { motion } from 'framer-motion'

export default function Owners(){
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-[#2C1810] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Know Our Owners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the family whose passion, tradition and care have shaped every recipe and celebration.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 bg-[#FAF9F6] rounded-2xl p-6 shadow-md"
          >
            <div className="flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000"
                alt="Owner 1"
                className="w-40 h-40 md:w-44 md:h-44 rounded-full object-cover shadow-lg border-4 border-white"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-[#2C1810]">Shyamsunder R Punyani</h3>
              <p className="text-sm text-[#8B1538] font-medium">Founder & Head Chef</p>
              <p className="mt-3 text-gray-700 leading-relaxed">
                A culinary visionary who started our family business in 1978, Shyamsunder built every
                recipe with care, tradition and a deep respect for pure vegetarian cooking. His
                dedication to authentic flavours still inspires our kitchen today.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 bg-white rounded-2xl p-6 shadow-md"
          >
            <div className="flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1000"
                alt="Owner 2"
                className="w-40 h-40 md:w-44 md:h-44 rounded-full object-cover shadow-lg border-4 border-white"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-[#2C1810]">Amrish Punyani</h3>
              <p className="text-sm text-[#8B1538] font-medium">Co-owner & Operations</p>
              <p className="mt-3 text-gray-700 leading-relaxed">
                With an eye for detail and warm hospitality, Sangeeta ensures every event runs
                smoothly — from menu curation to service. Her focus on families and tradition keeps
                our service personal and timeless.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
