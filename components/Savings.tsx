import React, { useEffect, useRef, useState } from 'react';

interface SavingsProps {
  onNavigate: () => void;
}

export const Savings: React.FC<SavingsProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const data = [
    { label: 'US', value: 16000 },
    { label: 'UK', value: 14500 },
    { label: 'Canada', value: 14000 },
    { label: 'Australia', value: 15500 },
  ];

  const maxVal = 16000;

  return (
    <section ref={sectionRef} className="py-24 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Annual Savings</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          Our streamlined operations and offshore efficiency enable significant annual cost reductions for our clients. By leveraging our Pakistan-based team, businesses can save up to <span className="text-purple-500 font-bold">30% per agent</span> compared to hiring in the US, UK, Canada, or Australia without sacrificing quality or performance.
        </p>

        <div className="bg-black border border-neutral-800 rounded-3xl p-8 md:p-16 relative overflow-hidden max-w-4xl mx-auto shadow-2xl shadow-black/50">
          {/* Subtle Background Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none"></div>

          <h3 className="text-2xl font-bold mb-12 relative z-10 text-white">Savings Per Agent</h3>

          {/* Chart Container */}
          <div className="relative h-80 w-full max-w-3xl mx-auto mb-8">
            {/* Y-Axis Grid */}
            <div className="absolute inset-0 flex flex-col justify-between z-0">
              {[16000, 12000, 8000, 4000, 0].map((val) => (
                <div key={val} className="flex items-center w-full group">
                  <span className="text-xs text-gray-600 font-mono w-12 text-right pr-3">${val}</span>
                  <div className="h-px bg-neutral-800 w-full"></div>
                </div>
              ))}
            </div>

            {/* Bars */}
            <div className="absolute inset-0 flex items-end justify-around pl-12 pb-[1px] z-10">
              {data.map((item, index) => {
                const height = (item.value / maxVal) * 100;
                return (
                  <div key={index} className="flex flex-col items-center justify-end h-full w-full max-w-[80px] group cursor-pointer">
                    {/* Tooltip */}
                    <div 
                        className={`mb-2 bg-purple-600 text-white text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0`}
                    >
                        ${item.value.toLocaleString()}
                    </div>
                    
                    {/* Bar */}
                    <div 
                      className="w-8 md:w-16 bg-gradient-to-t from-purple-900 to-purple-600 rounded-t-sm shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all duration-[1500ms] ease-out relative overflow-hidden"
                      style={{ 
                        height: isVisible ? `${height}%` : '0%' 
                      }}
                    >
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    
                    {/* Label */}
                    <div className="mt-4 text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                        {item.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-gray-400 text-sm md:text-base mt-12 tracking-wide">
             Switch teams. Switch cost. <span className="text-purple-400 font-semibold">Save up to $15,000 USD per year.</span>
          </p>
          
          <button 
             onClick={onNavigate}
             className="mt-8 bg-white text-black hover:bg-purple-600 hover:text-white transition-all duration-300 px-8 py-3 rounded-sm font-bold text-sm uppercase tracking-wider"
          >
             Start Saving Today
          </button>
        </div>
      </div>
    </section>
  );
};