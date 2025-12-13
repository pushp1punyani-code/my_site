"use client"
import { useRouter } from "next/navigation"
import { Phone, Mail, MapPin, Facebook, Instagram, Award } from 'lucide-react';

export default function Footer({ navLinks }) {
    const router=useRouter();
    return (
        <footer className="bg-[#2C1810] text-white ">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">Arora Caterers</h3>
              <p className="text-gray-300 mb-4">
                With over 47 years of culinary excellence, we are Nagpur's most trusted name in pure vegetarian catering. 
                From intimate gatherings to grand celebrations, we bring passion and perfection to every plate.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="https://www.facebook.com/p/Arora-caterers-100063998322250/" className="w-10 h-10 bg-[#8B1538] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#8B1538] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <button
                      onClick={() => router.push(`/${link.path}`)}
                      className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">Contact Us</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <span>Arora Caterers, Near Telephone Exchange Square, Bagadganj, Nagpur, Maharashtra 440008</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                  <a href="tel:+91 9422113223" className="hover:text-[#D4AF37] transition-colors">
                    +91 9422113223
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                  <a href="mailto:abc.arora1@gmail.com" className="hover:text-[#D4AF37] transition-colors">
                    abc.arora1@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Arora Caterers. All rights reserved. Proudly serving Nagpur since 1978.</p>
          </div>
        </div>
      </footer>
    )}