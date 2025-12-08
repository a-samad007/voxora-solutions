import React, { useState, useEffect } from 'react';
import { ArrowLeft, Mail, MapPin, Phone, Send, ChevronDown, CheckCircle } from 'lucide-react';

interface ContactPageProps {
  onBack: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    type: 'Sales',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Reset after showing success
        setTimeout(() => setIsSubmitted(false), 5000);
        setFormState({ name: '', email: '', type: 'Sales', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
        ...formState,
        [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-400 hover:text-purple-500 transition-colors mb-12"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Context & Info */}
          <div className="lg:col-span-5">
            <div className="mb-12">
                <span className="text-purple-500 font-bold tracking-widest uppercase text-sm mb-4 block">Contact Us</span>
                <h1 className="text-5xl font-bold mb-6 text-white leading-tight">
                  Partner with Voxora.
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We design customer support solutions for high-growth startups and established enterprises. Tell us about your needs, and we'll build a team that fits.
                </p>
            </div>

            <div className="space-y-6">
                <div className="group flex items-start gap-5 p-6 rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/60 hover:border-purple-500/30 transition-all duration-300">
                    <div className="p-3 bg-purple-900/20 rounded-lg text-purple-400 shrink-0 group-hover:scale-110 transition-transform">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1 text-white">Headquarters</h3>
                        <p className="text-gray-400 leading-relaxed">Goddard Drive, Salisbury Park<br/>Adelaide, SA 5109, Australia</p>
                    </div>
                </div>

                <div className="group flex items-start gap-5 p-6 rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/60 hover:border-purple-500/30 transition-all duration-300">
                    <div className="p-3 bg-purple-900/20 rounded-lg text-purple-400 shrink-0 group-hover:scale-110 transition-transform">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1 text-white">Email</h3>
                        <p className="text-gray-400 mb-2">General inquiries & proposals:</p>
                        <a href="mailto:Hello@voxorasolution.com" className="text-white hover:text-purple-400 font-medium transition-colors border-b border-white/20 hover:border-purple-400 pb-0.5">
                            Hello@voxorasolution.com
                        </a>
                    </div>
                </div>

                <div className="group flex items-start gap-5 p-6 rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/60 hover:border-purple-500/30 transition-all duration-300">
                    <div className="p-3 bg-purple-900/20 rounded-lg text-purple-400 shrink-0 group-hover:scale-110 transition-transform">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1 text-white">Phone</h3>
                        <p className="text-gray-400 mb-2">Speak with Sales:</p>
                        <a href="tel:+61415788975" className="text-white hover:text-purple-400 font-medium transition-colors border-b border-white/20 hover:border-purple-400 pb-0.5">
                            +61 415 788 975
                        </a>
                    </div>
                </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-900 border border-neutral-800 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                {/* Form header */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-2">Send a message</h2>
                    <p className="text-gray-400">We usually respond within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Full Name</label>
                            <input 
                                type="text" 
                                name="name"
                                required
                                value={formState.name}
                                onChange={handleChange}
                                className="w-full bg-black/50 border border-neutral-700 rounded-lg p-4 text-white placeholder-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none"
                                placeholder="Jane Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Work Email</label>
                            <input 
                                type="email" 
                                name="email"
                                required
                                value={formState.email}
                                onChange={handleChange}
                                className="w-full bg-black/50 border border-neutral-700 rounded-lg p-4 text-white placeholder-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none"
                                placeholder="jane@company.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Inquiry Type</label>
                        <div className="relative">
                            <select 
                                name="type"
                                value={formState.type}
                                onChange={handleChange}
                                className="w-full bg-black/50 border border-neutral-700 rounded-lg p-4 text-white appearance-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none cursor-pointer"
                            >
                                <option>Sales & Pricing</option>
                                <option>Partnership Opportunities</option>
                                <option>Careers</option>
                                <option>General Inquiry</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Message</label>
                        <textarea 
                            name="message"
                            required
                            rows={4}
                            value={formState.message}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-neutral-700 rounded-lg p-4 text-white placeholder-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none resize-none"
                            placeholder="Tell us about your team size and support needs..."
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-900 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 group mt-4"
                    >
                        {isSubmitting ? (
                            <span className="animate-pulse">Sending...</span>
                        ) : isSubmitted ? (
                            <span className="flex items-center gap-2 text-white"><CheckCircle size={20} /> Message Sent</span>
                        ) : (
                            <>
                                Send Message 
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};