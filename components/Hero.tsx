import React from 'react';
import { ThreeBackground } from './ThreeBackground';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center">
      {/* 3D Canvas Background */}
      <ThreeBackground />

      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none"></div>
      
      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Headline */}
          <div className="lg:col-span-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none text-white mb-6">
              VOXORA
              <span className="text-purple-600 mx-2">{'>'}</span>
              <br />
              SOLUTIONS
            </h1>
          </div>

          {/* Subtext and CTA - positioned similarly to reference */}
          <div className="lg:col-span-4 flex flex-col items-start lg:pl-8 lg:border-l border-purple-600/30">
            <div className="w-12 h-1 bg-purple-600 mb-6"></div>
            <h2 className="text-2xl font-bold mb-4">Shaping customer support, today</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-md">
              We empower power startups with human-first CX. Live chat, email, and tech support designed to rewrite the rules of growth and resilience.
            </p>
            <button 
              onClick={onNavigate} 
              className="group flex items-center gap-3 text-white font-bold text-lg hover:text-purple-400 transition-colors"
            >
              See what we do
              <div className="bg-purple-600 p-2 group-hover:bg-purple-500 transition-colors">
                <ArrowRight size={20} />
              </div>
            </button>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-white/50">
        <span className="text-sm tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
};