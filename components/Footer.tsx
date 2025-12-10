import React from 'react';
import { Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { PageView } from '../App';

interface FooterProps {
    onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent, page: PageView, hash?: string) => {
    e.preventDefault();
    onNavigate(page);
    if (page === 'home' && hash) {
        setTimeout(() => {
            const el = document.querySelector(hash);
            el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
  };

  return (
    <footer className="bg-black text-white py-16 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Socials */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-600 flex items-center justify-center rounded-sm">
                    <span className="font-bold text-lg text-white">V</span>
                </div>
                <span className="text-xl font-bold tracking-tight">VOXORA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering the next generation of unicorns with support that scales. Australian-based excellence, founded in Pakistan.
            </p>
            <div className="flex gap-4">
                <a href="https://www.instagram.com/voxorasolution_center?igsh=MTIyNTlpZHBtdGl6cg%3D%3D" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-900 hover:bg-purple-600 transition-colors rounded-full">
                    <Instagram size={18} />
                </a>
                <a href="#" className="p-2 bg-neutral-900 hover:bg-purple-600 transition-colors rounded-full">
                    <Linkedin size={18} />
                </a>
                <a href="#" className="p-2 bg-neutral-900 hover:bg-purple-600 transition-colors rounded-full">
                    <Twitter size={18} />
                </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6 text-lg text-white">Contact</h4>
            <div className="space-y-6 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-purple-500 shrink-0 mt-0.5" />
                    <div>
                        <p className="text-white font-medium mb-1">Headquarters</p>
                        <p>Goddard Drive, Salisbury Park</p>
                        <p>Adelaide, SA 5109</p>
                        <p>South Australia</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <Phone size={18} className="text-purple-500 shrink-0 mt-0.5" />
                    <div>
                        <p className="text-white font-medium mb-1">Phone</p>
                        <a href="tel:+61415788975" className="hover:text-purple-400 transition-colors">
                            +61 415 788 975
                        </a>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <Mail size={18} className="text-purple-500 shrink-0 mt-0.5" />
                    <div>
                        <p className="text-white font-medium mb-1">Email</p>
                        <a href="mailto:Hello@voxorasolution.com" className="hover:text-purple-400 transition-colors break-all">
                            Hello@voxorasolution.com
                        </a>
                    </div>
                </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6 text-lg text-white">Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
                <li><button onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-purple-500 transition-colors text-left">Live Chat</button></li>
                <li><button onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-purple-500 transition-colors text-left">Email Support</button></li>
                <li><button onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-purple-500 transition-colors text-left">Tech Support</button></li>
                <li><button onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-purple-500 transition-colors text-left">Appointment Setting</button></li>
                <li><button onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-purple-500 transition-colors text-left">Inbound & Outbound</button></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-6 text-lg text-white">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
                <li><button onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-purple-500 transition-colors text-left">About Us</button></li>
                <li><button onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-purple-500 transition-colors text-left">Contact Us</button></li>
                <li><button onClick={(e) => handleLinkClick(e, 'careers')} className="hover:text-purple-500 transition-colors text-left">Careers</button></li>
                <li><button onClick={(e) => handleLinkClick(e, 'privacy')} className="hover:text-purple-500 transition-colors text-left">Privacy Policy</button></li>
                <li><button onClick={(e) => handleLinkClick(e, 'terms')} className="hover:text-purple-500 transition-colors text-left">Terms of Service</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p>&copy; {new Date().getFullYear()} Voxora Solution Center. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex gap-6">
                <span>ABN Registered. Made for Reinvention.</span>
            </div>
        </div>
      </div>
    </footer>
  );
};