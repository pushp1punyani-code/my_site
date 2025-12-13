"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { X, ZoomIn } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import images from '../../Entities/GalleryImages.json';
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const isLoading=false;

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#8B1538] to-[#D4AF37] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Work Gallery
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              A visual journey through memorable events and culinary masterpieces we've created over the years
            </p>
          </motion.div>
        </div>
      </section>

     

      {/* Gallery Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(9).fill(0).map((_, i) => (
                <Skeleton key={i} className="h-80 w-full rounded-2xl" />
              ))}
            </div>
          ) : images.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {images.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative h-80">
                    <img 
                      src={image.image_url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {image.title}
                      </h3>
                      {image.event_type && (
                        <p className="text-sm text-gray-200">{image.event_type}</p>
                      )}
                      {image.guests_count && (
                        <p className="text-sm text-gray-300 mt-1">{image.guests_count} Guests</p>
                      )}
                      <div className="absolute top-4 right-4">
                        <ZoomIn className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No images available in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full"
            >
              <img 
                src={selectedImage.image_url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {selectedImage.title}
                </h3>
                {selectedImage.event_type && (
                  <p className="text-gray-200">{selectedImage.event_type}</p>
                )}
                {selectedImage.guests_count && (
                  <p className="text-gray-300 text-sm mt-1">{selectedImage.guests_count} Guests</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#2C1810] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Want Your Event Featured Here?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let us create a stunning culinary experience for your next celebration
            </p>
            <a
              href={`tel:+917122123456`}
              className="inline-block bg-[#8B1538] hover:bg-[#D4AF37] text-white hover:text-[#2C1810] px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg"
            >
              Call Us: +91 9422113223
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}