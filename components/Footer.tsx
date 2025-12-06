import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-purple-600 flex items-center justify-center">
                    <span className="font-bold text-xs text-white">V</span>
                </div>
                <span className="text-lg font-bold">VOXORA</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Empowering the next generation of unicorns with support that scales. Australian-based excellence, founded in Pakistan.
            </p>
            <div className="flex gap-4">
                <a href="https://www.instagram.com/voxorasolution_center?igsh=MTIyNTlpZHBtdGl6cg%3D%3D" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-900 hover:bg-purple-600 transition-colors rounded-full">
                    <Instagram size={20} />
                </a>
                <a href="#" className="p-2 bg-neutral-900 hover:bg-purple-600 transition-colors rounded-full">
                    <Linkedin size={20} />
                </a>
                <a href="#" className="p-2 bg-neutral-900 hover:bg-purple-600 transition-colors rounded-full">
                    <Twitter size={20} />
                </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-4 text-gray-400">
                <li><a href="#services" className="hover:text-purple-500 transition-colors">Live Chat</a></li>
                <li><a href="#services" className="hover:text-purple-500 transition-colors">Email Support</a></li>
                <li><a href="#services" className="hover:text-purple-500 transition-colors">Tech Support</a></li>
                <li><a href="#services" className="hover:text-purple-500 transition-colors">Onboarding</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-gray-400">
                <li><a href="#about" className="hover:text-purple-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-purple-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-purple-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-purple-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Voxora Solution Center. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex gap-6">
                <span>Made for Reinvention.</span>
            </div>
        </div>
      </div>
    </footer>
  );
};