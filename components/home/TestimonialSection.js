"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';
import testimonials from '../../Entities/Testimonials';
export default function TestimonialSection() {
    const isLoading = false;
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
          <span className="inline-block text-[#D4AF37] font-semibold text-sm tracking-wider uppercase mb-2">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Read what our clients have to say about their experience with Arora Caterers
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="bg-[#FAF9F6] rounded-2xl p-8">
                <Skeleton className="h-6 w-24 mb-4" />
                <Skeleton className="h-20 w-full mb-4" />
                <Skeleton className="h-4 w-32" />
              </div>
            ))
          ) : testimonials.length > 0 ? (
            testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#FAF9F6] rounded-2xl p-8 relative hover:shadow-lg transition-shadow"
              >
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-[#D4AF37] opacity-20 absolute top-6 right-6" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating || 5).fill(0).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.review_text}"
                </p>

                {/* Client Info */}
                <div className="border-t border-gray-300 pt-4">
                  <h4 className="font-bold text-[#2C1810]">{testimonial.client_name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.event_type}
                    {testimonial.guests_count && ` • ${testimonial.guests_count} Guests`}
                  </p>
                  {testimonial.location && (
                    <p className="text-xs text-gray-500 mt-1">{testimonial.location}</p>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-500">No testimonials available yet.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}