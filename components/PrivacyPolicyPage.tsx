import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onBack: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onBack }) => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-400">Last Updated: October 2023</p>
        </div>

        <div className="space-y-12 text-gray-300 leading-relaxed font-light">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="mb-4">
              Voxora Solution Center ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>
            <p>
              This website is intended for business-to-business (B2B) interactions and is not intended for children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. The Data We Collect</h2>
            <p className="mb-4">
              We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-purple-500">
              <li><strong className="text-white">Identity Data:</strong> includes first name, last name, username or similar identifier, and title.</li>
              <li><strong className="text-white">Contact Data:</strong> includes billing address, delivery address, email address, and telephone numbers.</li>
              <li><strong className="text-white">Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong className="text-white">Usage Data:</strong> includes information about how you use our website, products, and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Personal Data</h2>
            <p className="mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-purple-500">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know. They will only process your personal data on our instructions, and they are subject to a duty of confidentiality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. International Transfers</h2>
            <p>
              As a global business with operations in Australia and Pakistan, we may transfer your personal data outside the European Economic Area (EEA) or your country of residence. Whenever we transfer your personal data, we ensure a similar degree of protection is afforded to it by ensuring at least one of the specific safeguards approved by relevant data protection laws is implemented.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
                <p className="font-bold text-white">Voxora Solution Center</p>
                <p>Email: <a href="mailto:Hello@voxorasolution.com" className="text-purple-500 hover:text-purple-400">Hello@voxorasolution.com</a></p>
                <p>Address: Goddard Drive, Salisbury Park, Adelaide, SA 5109, Australia</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};