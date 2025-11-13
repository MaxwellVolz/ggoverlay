'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/50">
              <span className="text-white font-bold text-xl">GG</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              GGOverlay
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide"
            >
              Features
            </a>
            <a
              href="#demo"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide"
            >
              Demo
            </a>
            <a
              href="#games"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide"
            >
              Supported Games
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide"
            >
              Pricing
            </a>
          </div>

          {/* Empty space for balance */}
          <div className="w-8"></div>
        </div>
      </div>
    </nav>
  );
}
