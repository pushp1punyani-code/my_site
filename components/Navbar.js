"use client"
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar({ navLinks }) {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPageName = pathname.split('/')[1] || 'Home';
  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <button onClick={() => router.push('/')} className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-[#8B1538] to-[#D4AF37] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">A</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#8B1538]">Arora Caterers</h1>
                <p className="text-xs text-gray-600">Pure Vegetarian Excellence</p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => router.push(`/${link.path}`)}
                  className={`cursor-pointer text-[#2C1810] hover:text-[#8B1538] transition-colors font-medium ${currentPageName === link.name.replace(/\s+/g, '') ? 'border-b-2 border-[#8B1538] text-[#8B1538]' : ''}`}
                >
                  {link.name}
                </button>
              ))}
             
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#8B1538]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => {
                    router.push(`/${link.path}`);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-3 px-4 text-[#2C1810] hover:bg-[#FAF9F6] transition-colors"
                >
                  {link.name}
                </button>
              ))}
             
            </div>
          )}
        </div>
      </nav>
    </>
  );
}