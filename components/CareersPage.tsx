import React, { useEffect } from 'react';
import { ArrowLeft, MapPin, Clock, Briefcase, Mail } from 'lucide-react';

interface CareersPageProps {
  onBack: () => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-400 hover:text-purple-500 transition-colors mb-12"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        <div className="mb-16">
            <span className="text-purple-500 font-bold tracking-widest uppercase text-sm mb-4 block">Careers</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Join the Voxora Team</h1>
            <p className="text-xl text-gray-400 max-w-2xl">
                We're always looking for talented individuals to help us redefine customer support.
            </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
            {/* Job Card */}
            <div className="border border-neutral-800 bg-neutral-900/30 rounded-2xl p-8 md:p-10 hover:border-purple-500/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-2">Customer Support Agent</h2>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1"><MapPin size={16} /> Remote / Hybrid</span>
                            <span className="flex items-center gap-1"><Clock size={16} /> Full-time (Rotating Shifts)</span>
                            <span className="flex items-center gap-1"><Briefcase size={16} /> Operations</span>
                        </div>
                    </div>
                    <a 
                        href="mailto:hello@voxorasolution.com?subject=Application for Customer Support Agent"
                        className="bg-white text-black hover:bg-purple-600 hover:text-white px-6 py-3 rounded-full font-bold transition-all text-center"
                    >
                        Apply Now
                    </a>
                </div>

                <div className="space-y-6 text-gray-300">
                    <p>
                        We are seeking dedicated Customer Support Agents to join our growing team. In this role, you will be the first point of contact for our clients' customers, providing exceptional support via live chat, email, and phone.
                    </p>
                    
                    <div>
                        <h3 className="text-white font-bold mb-3">Key Responsibilities:</h3>
                        <ul className="list-disc pl-5 space-y-2 marker:text-purple-500">
                            <li>Respond to customer inquiries promptly and professionally.</li>
                            <li>Troubleshoot technical issues and provide accurate solutions.</li>
                            <li>Maintain a high level of customer satisfaction (CSAT).</li>
                            <li>Collaborate with team members to improve support processes.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-3">Requirements:</h3>
                        <ul className="list-disc pl-5 space-y-2 marker:text-purple-500">
                            <li>Excellent written and verbal communication skills in English.</li>
                            <li>Previous experience in customer support or a similar role is preferred.</li>
                            <li>Ability to work flexible hours, including weekends and holidays.</li>
                            <li>Strong problem-solving skills and attention to detail.</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-neutral-800 flex items-center gap-3 text-purple-400 bg-purple-900/10 p-4 rounded-lg">
                    <Mail size={20} />
                    <span className="font-medium">Interested? Send your CV to <a href="mailto:hello@voxorasolution.com" className="underline hover:text-white">hello@voxorasolution.com</a></span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};