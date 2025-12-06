import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="aspect-[4/3] bg-neutral-800 overflow-hidden relative">
               <img 
                 src="https://picsum.photos/800/600" 
                 alt="Team collaborating" 
                 className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-purple-900/20 mix-blend-overlay"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-600 z-10 flex items-center justify-center">
                 <span className="text-white font-bold text-3xl">{'>'}</span>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Technology enables us. <br />
              <span className="text-purple-500">Humanity drives us.</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Australian-based, founded in Pakistan. Voxora bridges the gap between efficient tech and empathetic connection across borders.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We don't just answer tickets; we build relationships. Born from a vision in Pakistan and headquartered in Australia, our diverse team brings a unique global perspective to customer experience. Our agents are culturally aligned, technically proficient, and emotionally intelligent. We act as an extension of your core team, providing the feedback loops necessary to improve your product while delighting your users.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-neutral-800 pt-8">
                <div>
                    <h4 className="text-3xl font-bold text-white mb-2">24/7</h4>
                    <p className="text-sm text-gray-400 uppercase tracking-wider">Global Coverage</p>
                </div>
                <div>
                    <h4 className="text-3xl font-bold text-white mb-2">98%</h4>
                    <p className="text-sm text-gray-400 uppercase tracking-wider">CSAT Score</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};