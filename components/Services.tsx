import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  label: string;
  image: string;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, label, image, onClick }) => {
  return (
    <div 
        onClick={onClick}
        className="group relative h-[500px] w-full overflow-hidden cursor-pointer border-t border-neutral-800"
    >
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Default State Overlay - Darkens bottom for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-0"></div>
        </div>

        {/* Hover State Overlay - Solid Brand Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-neutral-900/95 via-purple-900/90 to-purple-950/95 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
        
        {/* Content Layer */}
        <div className="relative z-20 h-full p-8 flex flex-col items-start">
            {/* Top Label */}
            <span className="inline-block text-xs font-bold tracking-widest text-gray-300 uppercase mb-4 opacity-90">
                {label}
            </span>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {title}
            </h3>

            {/* Description - Slides up and fades in on hover */}
            <div className="mt-auto transform translate-y-8 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-gray-200 text-lg leading-relaxed mb-8 font-light">
                    {description}
                </p>
                <div className="flex items-center text-white font-bold tracking-wide text-lg gap-2 group-hover:gap-4 transition-all">
                    Expand <ChevronRight size={24} />
                </div>
            </div>
        </div>
    </div>
  );
};

interface ServicesProps {
    onNavigate: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-purple-500 font-bold tracking-widest uppercase text-sm mb-2 block">Our Capabilities</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white max-w-3xl tracking-tight">
                Human-first support. <br/>
                <span className="text-gray-500">Tech-enabled scale.</span>
            </h2>
          </div>
          <button 
            onClick={onNavigate}
            className="hidden md:flex items-center gap-2 text-white font-semibold hover:text-purple-500 transition-colors whitespace-nowrap"
          >
            View all services <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            label="CORE SERVICE"
            title="Live Chat Support"
            description="Real-time engagement that reduces cart abandonment. Our agents use co-browsing and instant sentiment analysis to turn visitors into loyal customers."
            image="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1740&auto=format&fit=crop"
            onClick={onNavigate}
          />
          <ServiceCard
            label="SCALE & GROWTH"
            title="Email Management"
            description="We handle high-volume ticket queues with 98% accuracy. From refunds to complex troubleshooting, we clear the backlog so you can focus on product."
            image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1740&auto=format&fit=crop"
            onClick={onNavigate}
          />
          <ServiceCard
            label="TECHNICAL"
            title="Tech Support"
            description="Tier 1 and Tier 2 specialists who understand your API and infrastructure. We solve bugs, manage incidents, and maintain your knowledge base."
            image="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1740&auto=format&fit=crop"
            onClick={onNavigate}
          />
        </div>

        <div className="mt-12 md:hidden">
            <button 
                onClick={onNavigate}
                className="flex items-center gap-2 text-white font-semibold hover:text-purple-500 transition-colors"
            >
                View all services <ArrowRight size={18} />
            </button>
        </div>
      </div>
    </section>
  );
};