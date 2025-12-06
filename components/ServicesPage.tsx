import React from 'react';
import { Phone, Mail, MessageSquare, Terminal, CalendarCheck, CheckCircle, ArrowLeft } from 'lucide-react';

interface ServicesPageProps {
  onBack: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onBack }) => {
  const services = [
    {
      title: "Call Support",
      description: "Voice support that resonates. Our agents provide warm, professional inbound and outbound phone support, ensuring your customers feel heard and valued in real-time.",
      icon: <Phone size={32} strokeWidth={1.5} />,
      features: ["Inbound Customer Service", "Outbound Sales & Surveys", "Crisis Management", "Multi-lingual Support"]
    },
    {
      title: "Email Support",
      description: "Precision in every pixel. We handle high-volume ticket queues with detailed, personalized responses that resolve issues thoroughly reducing back-and-forth.",
      icon: <Mail size={32} strokeWidth={1.5} />,
      features: ["Ticket Management", "Complaint Resolution", "24hr Turnaround", "Brand Voice Alignment"]
    },
    {
      title: "Live Chat Support",
      description: "Instant gratification for your users. We reduce cart abandonment and increase engagement through proactive and reactive live chat assistance available 24/7.",
      icon: <MessageSquare size={32} strokeWidth={1.5} />,
      features: ["Real-time Assistance", "Sales Conversion", "Co-browsing Support", "Instant Feedback Collection"]
    },
    {
      title: "Technical Support",
      description: "Expert troubleshooting for complex products. Our Tier 1 and Tier 2 specialists understand your tech stack to solve bugs and walk users through implementations.",
      icon: <Terminal size={32} strokeWidth={1.5} />,
      features: ["Bug Reporting", "SaaS Platform Support", "API Troubleshooting", "Knowledge Base Management"]
    },
    {
      title: "Appointment Setting",
      description: "Fill your sales pipeline. Our dedicated SDRs qualify leads and book meetings, allowing your core sales team to focus on closing deals.",
      icon: <CalendarCheck size={32} strokeWidth={1.5} />,
      features: ["Lead Qualification", "Calendar Management", "Cold Calling", "CRM Updates"]
    }
  ];

  return (
    <div className="pt-32 pb-16 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-400 hover:text-purple-500 transition-colors mb-12"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        <div className="mb-16">
            <span className="text-purple-500 font-bold tracking-widest uppercase text-sm mb-4 block">Our Capabilities</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">End-to-End Solutions</h1>
            <p className="text-xl text-gray-400 max-w-2xl">
                Comprehensive CX solutions designed to scale with your ambition.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
                <div key={index} className="flex flex-col bg-neutral-900/30 border border-neutral-800 p-8 rounded-2xl hover:bg-neutral-900/50 hover:border-purple-500/30 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-purple-900/20 rounded-xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300 border border-purple-500/10">
                        {service.icon}
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
                    
                    <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
                        {service.description}
                    </p>
                    
                    <div className="space-y-3 pt-6 border-t border-neutral-800/50">
                        {service.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-start gap-3 text-sm text-gray-300">
                                <CheckCircle size={16} className="text-purple-500 shrink-0 mt-0.5" />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        
        <div className="mt-20 p-12 bg-gradient-to-r from-purple-900/20 to-neutral-900/20 border border-purple-600/20 rounded-2xl text-center">
             <h3 className="text-3xl font-bold text-white mb-4">Ready to upgrade your support?</h3>
             <p className="text-gray-300 mb-8 max-w-xl mx-auto">Contact us today to discuss a custom package tailored to your startup's needs.</p>
             <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 font-bold rounded-full transition-colors">
                Get a Proposal
             </button>
        </div>
      </div>
    </div>
  );
};