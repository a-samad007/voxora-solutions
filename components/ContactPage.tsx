import React, { useState, useEffect } from 'react';
import { ArrowLeft, Mail, MapPin, Phone, Send } from 'lucide-react';

interface ContactPageProps {
  onBack: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
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
        setFormState({ name: '', email: '', company: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
        ...formState,
        [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-32 pb-16 bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-400 hover:text-purple-500 transition-colors mb-12"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Context & Info */}
          <div>
            <span className="text-purple-500 font-bold tracking-widest uppercase text-sm mb-4 block">Get in touch</span>
            <h1 className="text-5xl font-bold mb-6">Let's scale your support.</h1>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Ready to reduce costs and improve customer satisfaction? 
              Our team is ready to build a custom solution for your business. 
              Fill out the form, and we'll be in touch within 24 hours.
            </p>

            <div className="space-y-8">
                <div className="flex items-start gap-4 p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800 transition-colors hover:border-purple-500/30">
                    <div className="p-3 bg-purple-900/20 rounded-full text-purple-400 shrink-0">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">Headquarters</h3>
                        <p className="text-gray-400">Goddard Drive, Salisbury Park</p>
                        <p className="text-gray-400">Adelaide, SA 5109, Australia</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800 transition-colors hover:border-purple-500/30">
                    <div className="p-3 bg-purple-900/20 rounded-full text-purple-400 shrink-0">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">Email Us</h3>
                        <p className="text-gray-400 mb-2">For general inquiries and proposals:</p>
                        <a href="mailto:Hello@voxorasolution.com" className="text-white hover:text-purple-400 font-medium transition-colors">
                            Hello@voxorasolution.com
                        </a>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800 transition-colors hover:border-purple-500/30">
                    <div className="p-3 bg-purple-900/20 rounded-full text-purple-400 shrink-0">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">Call Us</h3>
                        <p className="text-gray-400 mb-2">Speak directly with our sales team:</p>
                        <a href="tel:+61415788975" className="text-white hover:text-purple-400 font-medium transition-colors">
                            +61 415 788 975
                        </a>
                    </div>
                </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-neutral-900/30 border border-neutral-800 p-8 md:p-10 rounded-3xl">
            <h2 className="text-2xl font-bold mb-8">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Name</label>
                        <input 
                            type="text" 
                            name="name"
                            required
                            value={formState.name}
                            onChange={handleChange}
                            className="w-full bg-black border border-neutral-800 rounded-lg p-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Email</label>
                        <input 
                            type="email" 
                            name="email"
                            required
                            value={formState.email}
                            onChange={handleChange}
                            className="w-full bg-black border border-neutral-800 rounded-lg p-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none"
                            placeholder="john@company.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Company (Optional)</label>
                    <input 
                        type="text" 
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full bg-black border border-neutral-800 rounded-lg p-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none"
                        placeholder="Your Company Ltd."
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Message</label>
                    <textarea 
                        name="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full bg-black border border-neutral-800 rounded-lg p-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none resize-none"
                        placeholder="Tell us about your needs..."
                    ></textarea>
                </div>

                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-900 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2"
                >
                    {isSubmitting ? (
                        <span>Sending...</span>
                    ) : isSubmitted ? (
                        <span className="text-green-300">Message Sent!</span>
                    ) : (
                        <>
                            Send Message <Send size={18} />
                        </>
                    )}
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};