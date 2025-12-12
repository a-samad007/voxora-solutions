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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Privacy Policy</h1>
            <h2 className="text-xl text-gray-200 font-medium mb-4">Voxora Solution Centre (Australia)</h2>
            <div className="flex flex-col gap-2 text-sm text-gray-500">
                <p>ABN XX XXX XXX XXX | Registered Office: Goddard Drive, Salisbury Park, Adelaide, SA 5109</p>
                <p>Last Updated: 12 December 2025</p>
            </div>
        </div>

        <div className="space-y-12 text-gray-300 leading-relaxed font-light">
          <section>
            <p className="text-lg">
              We provide inbound customer support services (calls, emails, live chat, tech support, appointment setting, and complaint management) on behalf of businesses worldwide from our secure delivery centres in Pakistan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Data We Process</h2>
            <p className="mb-4">
              We act only as a <strong>Data Processor</strong>. We process personal data strictly on instructions from our clients (the Data Controllers):
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-purple-500">
              <li>Name, phone, email, address</li>
              <li>Inquiry/complaint details</li>
              <li>Call recordings, chat transcripts, email threads</li>
              <li>Device and IP information (for tech support)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Purpose</h2>
            <p>
              Data is used solely to resolve customer inquiries, schedule appointments, and provide the contracted support services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Legal Basis</h2>
            <p>
              Processing is performed under contract with our clients (Article 28 GDPR, Australian Privacy Principles).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Security Measures</h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-purple-500">
              <li>ISO 27001:2022 certified</li>
              <li>End-to-end encryption</li>
              <li>Restricted clean-desk & clean-screen policy</li>
              <li>Regular security audits and penetration testing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. International Transfers</h2>
            <p>
              Data is transferred to and processed in Pakistan under EU Standard Contractual Clauses (SCCs) and Australian adequacy mechanisms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Retention</h2>
            <p>
              Records retained maximum 12 months unless client requires longer or shorter period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Data Subject Rights</h2>
            <p>
              End-customers should contact the original brand/company. The client will coordinate with Voxora to fulfil access, deletion, or correction requests within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Sub-Processors</h2>
            <p>
              We engage the following categories of sub-processors: cloud infrastructure (AWS, Google Cloud), telephony providers (Twilio, Asterisk), ticketing systems (Zendesk, Freshdesk, etc.). Current list available on request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Data Breach Notification</h2>
            <p>
              In the event of a personal data breach, Voxora will notify the affected Client without undue delay and, where feasible, not later than 48 hours after becoming aware.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Children’s Data</h2>
            <p>
              We do not knowingly process personal data of individuals under the age of 16.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Contact Our Data Protection Officer</h2>
            <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
                <p className="mb-2"><strong className="text-white">Email:</strong> <a href="mailto:dpo@voxorasolution.com.au" className="text-purple-500 hover:text-purple-400 font-medium">dpo@voxorasolution.com.au</a></p>
                <p className="text-sm text-gray-500 mt-4 pt-4 border-t border-neutral-800">
                    Voxora Solution Centre<br/>
                    Adelaide, Australia | 24/7 Delivery: Pakistan
                </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};