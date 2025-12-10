import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsPageProps {
  onBack: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-6">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-400 hover:text-purple-500 transition-colors mb-12"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        <div className="mb-12 border-b border-neutral-800 pb-8">
            <span className="text-purple-500 font-bold tracking-widest uppercase text-sm mb-4 block">Legal</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-gray-400">Last Updated: October 2023</p>
        </div>

        <div className="space-y-12 text-gray-300 leading-relaxed font-light">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the website of Voxora Solution Center ("Company", "we", "us", or "our"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
            <p>
              Voxora Solution Center provides Business Process Outsourcing (BPO) services, including but not limited to customer support, technical support, email management, and appointment setting ("Services"). We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Obligations</h2>
            <p className="mb-4">
              As a user of our website or client of our services, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-purple-500">
              <li>Provide accurate and complete information when requesting quotes or contacting us.</li>
              <li>Not use the website or services for any unlawful purpose.</li>
              <li>Not attempt to interfere with the proper working of the website or compromise its security.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
            <p>
              The Site and its original content, features, and functionality are owned by Voxora Solution Center and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
            <p>
              In no event shall Voxora Solution Center, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of South Australia, Australia, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>
          
          <section className="pt-8 border-t border-neutral-800">
            <p className="font-bold text-white mb-2">Contact Us</p>
             <p>
                If you have any questions about these Terms, please contact us at <a href="mailto:Hello@voxorasolution.com" className="text-purple-500 hover:text-purple-400">Hello@voxorasolution.com</a>.
             </p>
          </section>
        </div>
      </div>
    </div>
  );
};