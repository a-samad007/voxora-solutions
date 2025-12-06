import React from 'react';
import { MessageSquare, Mail, Terminal, ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="group relative bg-neutral-900 border border-neutral-800 p-8 hover:border-purple-600 transition-all duration-500 overflow-hidden">
        {/* Hover Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10">
            <div className="mb-6 text-purple-500 group-hover:text-white transition-colors duration-300">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">{title}</h3>
            <p className="text-gray-400 leading-relaxed mb-8 group-hover:text-gray-200 transition-colors">{description}</p>
            
            <div className="flex items-center gap-2 text-purple-500 font-semibold group-hover:text-white transition-colors cursor-pointer">
                <span>Learn more</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
        </div>
    </div>
  );
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-purple-500 font-bold tracking-widest uppercase text-sm mb-2 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl">
            Comprehensive support tailored for high-growth startups.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            icon={<MessageSquare size={48} strokeWidth={1} />}
            title="Live Chat Support"
            description="Real-time engagement with your customers using our human-first approach. We reduce response times while increasing satisfaction scores."
          />
          <ServiceCard
            icon={<Mail size={48} strokeWidth={1} />}
            title="Email Management"
            description="Thorough, thoughtful email responses that solve complex issues. We handle ticket volumes scaling from hundreds to thousands daily."
          />
          <ServiceCard
            icon={<Terminal size={48} strokeWidth={1} />}
            title="Technical Support"
            description="Tier 1 and Tier 2 technical troubleshooting. Our agents are trained to understand your product's architecture and solve bugs efficiently."
          />
        </div>
      </div>
    </section>
  );
};