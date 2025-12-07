import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { PageView } from '../App';

interface NavbarProps {
  onNavigate: (page: PageView) => void;
  currentPage: PageView;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageView, href?: string) => {
    if (page === 'home' && href && href.startsWith('#')) {
       if (currentPage !== 'home') {
           onNavigate('home');
           // Allow time for render then scroll
           setTimeout(() => {
               const element = document.querySelector(href);
               element?.scrollIntoView({ behavior: 'smooth' });
           }, 100);
       } else {
           const element = document.querySelector(href);
           element?.scrollIntoView({ behavior: 'smooth' });
       }
    } else {
        onNavigate(page);
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => handleNavClick('home')}
        >
          <div className="w-8 h-8 bg-purple-600 rounded-sm flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300">
            <span className="font-bold text-xl text-white">V</span>
          </div>
          <span className="text-xl font-bold tracking-tight">VOXORA</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleNavClick('services')}
            className={`text-sm font-medium hover:text-purple-400 transition-colors ${currentPage === 'services' ? 'text-purple-500' : 'text-white'}`}
          >
            Capabilities
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`text-sm font-medium hover:text-purple-400 transition-colors ${currentPage === 'about' ? 'text-purple-500' : 'text-white'}`}
          >
            About Us
          </button>
           <button
            className="text-sm font-medium text-white hover:text-purple-400 transition-colors"
          >
            Insights
          </button>
           <button
            className="text-sm font-medium text-white hover:text-purple-400 transition-colors"
          >
            Careers
          </button>
          
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 text-sm font-semibold transition-colors flex items-center gap-2">
            Get in touch <ChevronRight size={16} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 md:hidden flex flex-col gap-4">
          <button
            className="text-lg font-medium py-2 border-b border-white/5 text-left"
            onClick={() => handleNavClick('services')}
          >
            Capabilities
          </button>
          <button
            className="text-lg font-medium py-2 border-b border-white/5 text-left"
            onClick={() => handleNavClick('about')}
          >
            About Us
          </button>
          <button className="bg-purple-600 w-full py-3 mt-4 font-bold flex items-center justify-center gap-2">
            Contact Us <ChevronRight size={18} />
          </button>
        </div>
      )}
    </nav>
  );
};