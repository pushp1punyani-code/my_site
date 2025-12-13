// "use client"

// export default function Home() {
  //   return (
    //     <div>
         
    //     </div>
    //   );
    // }
    "use client"
    import React from 'react';
    import { useState } from 'react';
    import { useRouter } from 'next/navigation';
    import HeroSection from '../components/home/HeroSection';
    import ServicePreview from '../components/home/ServicePreview';
    import MenuHighlight from '../components/home/MenuHighlight';
    import WhyChooseUs from '../components/home/WhyChooseUs';
    import TestimonialSection from '../components/home/TestimonialSection';
    import Navbar from '../components/Navbar';
    import Footer from '../components/footer';
        import { Phone, Mail, MapPin, Facebook, Instagram, Award } from 'lucide-react';
export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] =useState(false);
  const router=useRouter();
  const navLinks = [
    { name: 'Home', path: '' },
    { name: 'About Us', path: 'About' },
    { name: 'Services', path: 'Serve' },
    { name: 'Menu', path: 'Menu' },
    { name: 'Gallery', path: 'Gallery' },
    { name: 'Contact', path: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <style>{`
        :root {
          --maroon: #8B1538;
          --gold: #D4AF37;
          --cream: #FAF9F6;
          --deep-green: #2D5016;
          --dark-text: #2C1810;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Playfair Display', Georgia, serif;
        }
      `}</style>

      {/* Top Bar */}
      <div className="bg-[#8B1538] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919422113223" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+91 9422113223</span>
            </a>
            <a href="mailto:abc.arora1@gmail.com" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden md:inline">abc.arora1@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-semibold">Serving Nagpur Since 1978</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}

      {/* Main Content */}
            <HeroSection />
          <ServicePreview />
          <MenuHighlight />
          <WhyChooseUs />
          <TestimonialSection />

      {/* Footer */}
      
    </div>
  );
}