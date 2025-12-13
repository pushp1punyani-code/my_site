"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Download, Sparkles } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import menuItems from '../../Entities/MenuItems.json';
export default function Menu() {
    const router=useRouter();
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeCuisine, setActiveCuisine] = useState('all');
  const isLoading=false;
  const categories = ['all', 'Starters', 'Main Course', 'Breads', 'Rice & Biryani', 'Dal & Curries', 'South Indian', 'Chinese', 'Continental', 'Desserts', 'Beverages', 'Live Counters'];
  
  const cuisineTypes = ['all', 'North Indian', 'South Indian', 'Maharashtrian', 'Chinese', 'Continental'];

  const filteredItems = menuItems.filter(item => {
    const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
    const cuisineMatch = activeCuisine === 'all' || item.cuisine_type === activeCuisine;
    return categoryMatch && cuisineMatch;
  });

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-[#8B1538] to-[#D4AF37] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Sparkles className="w-12 h-12 mx-auto mb-4" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Signature Menu
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              An exquisite collection of pure vegetarian delicacies crafted with passion and perfection
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dietary Options Banner */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-[#8B1538] text-white px-6 py-2 text-sm">
              100% Pure Vegetarian
            </Badge>
            <Badge className="bg-[#D4AF37] text-[#2C1810] px-6 py-2 text-sm">
              Jain Options Available
            </Badge>
            <Badge className="bg-[#2D5016] text-white px-6 py-2 text-sm">
              Satvik Preparations
            </Badge>
            <Badge className="bg-gray-700 text-white px-6 py-2 text-sm">
              Custom Menus
            </Badge>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-white sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            {/* Cuisine Filter */}
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-2">Cuisine Type:</p>
              <Tabs value={activeCuisine} onValueChange={setActiveCuisine}>
                <TabsList className="bg-[#FAF9F6] flex-wrap h-auto">
                  {cuisineTypes.map(cuisine => (
                    <TabsTrigger key={cuisine} value={cuisine} className="cursor-pointer data-[state=active]:bg-[#8B1538] data-[state=active]:text-white">
                      {cuisine === 'all' ? 'All Cuisines' : cuisine}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Category Filter */}
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-2">Category:</p>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`cursor-pointer px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                      activeCategory === category
                        ? 'bg-[#8B1538] text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {category === 'all' ? 'All Items' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(9).fill(0).map((_, i) => (
                <div key={i} className="bg-white rounded-2xl p-6">
                  <Skeleton className="h-48 w-full mb-4 rounded-xl" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : filteredItems.length > 0 ? (
            <motion.div 
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
                >
                  {item.image_url && (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image_url}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      {item.is_signature && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-[#D4AF37] text-[#2C1810]">
                            <Sparkles className="w-3 h-3 mr-1" />
                            Signature
                          </Badge>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-[#2C1810]" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {item.name}
                      </h3>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {item.description || 'A delicious vegetarian delight prepared with fresh ingredients.'}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs text-[#8B1538] border-[#8B1538]">
                        {item.cuisine_type}
                      </Badge>
                      {item.dietary_tags?.map(tag => (
                        <Badge key={tag} className="bg-green-100 text-green-800 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No menu items found. Please try different filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#2C1810] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Want a Custom Menu?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We can create a personalized menu tailored to your event's theme, dietary requirements, and preferences
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#8B1538] px-8 py-4 rounded-full font-semibold text-lg transition-all border-2 border-[#8B1538]">
                <Download className="w-5 h-5" />
                Download Menu PDF
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}