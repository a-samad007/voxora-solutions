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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Terms & Conditions</h1>
            <h2 className="text-xl text-gray-200 font-medium mb-4">Voxora Solution Centre</h2>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-sm text-gray-500">
                <span>Registered in Australia | Delivery Centres in Pakistan</span>
                <span className="hidden md:inline">•</span>
                <span>Effective Date: 12 December 2025</span>
            </div>
        </div>

        <div className="space-y-12 text-gray-300 leading-relaxed font-light">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              Voxora Solution Centre provides inbound customer support (voice, email, live chat, tech support, appointment setting & complaint management) from Pakistan at up to 40% lower cost than in-house teams in USA, UK, Canada & Australia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Services Offered</h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-purple-500">
              <li>Inbound voice support & complaint handling</li>
              <li>Email & ticket support</li>
              <li>Live chat & omnichannel messaging</li>
              <li>Technical support (L1 & L2)</li>
              <li>Appointment setting & reminders</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Minimum Contract Term</h2>
            <div className="bg-neutral-900/50 p-6 rounded-lg border-l-4 border-purple-600">
                <p className="mb-4">
                  <strong className="text-white">All engagements have a strict minimum term of three (3) calendar months from the service go-live date.</strong>
                </p>
                <p>
                  Early termination before completion of the initial 3-month period will require payment of the full remaining fees for the entire 3-month term as liquidated damages.
                </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Pricing & Cost Savings</h2>
            <p>
              Voxora guarantees savings of up to 40% versus average fully-loaded in-house agent costs in the United States, United Kingdom, Canada, and Australia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Pricing Models & Payment</h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-purple-500">
              <li>Per agent per month / per minute / per ticket (as agreed in specific Statement of Work)</li>
              <li>Invoiced monthly in advance</li>
              <li>Payment due Net 15 days</li>
              <li>Late payment: 1.5% monthly interest applied to outstanding balances</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Service Level Agreement (SLA)</h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-purple-500">
              <li><strong className="text-white">99.5%+</strong> uptime guarantee</li>
              <li>Average speed of answer <strong className="text-white">≤ 20 seconds</strong></li>
              <li>CSAT <strong className="text-white">≥ 90%</strong></li>
              <li>Detailed KPIs defined in Statement of Work (SOW)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Client Obligations</h2>
            <p>
              Clients are required to provide necessary training material, scripts, system access, and at least 48-hour notice for significant operational changes to ensure optimal service delivery.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Confidentiality & Data Security</h2>
            <p className="mb-4">
               We adhere to strict global security standards:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-purple-500">
                <li>ISO 27001:2022 Certified</li>
                <li>PCI-DSS Compliant</li>
                <li>GDPR Compliant</li>
                <li>All agents sign lifelong Non-Disclosure Agreements (NDAs)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Termination</h2>
            <div className="space-y-4">
                <p>
                    <strong className="text-white">9.1</strong> After the initial 3-month minimum term, either party may terminate with 30 days written notice (or 60–90 days if specified in MSA).
                </p>
                <p>
                    <strong className="text-white">9.2</strong> Early termination during the first 3 months triggers payment of 100% of remaining fees for the full 3-month period.
                </p>
                <p>
                    <strong className="text-white">9.3</strong> Immediate termination rights reserved for non-payment (outstanding &gt;30 days) or material breach of contract.
                </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Limitation of Liability</h2>
            <p>
              Maximum liability is strictly capped at the total fees paid by the client in the preceding three (3) months.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of New South Wales, Australia. Any disputes shall be subject to arbitration in Sydney.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Force Majeure</h2>
            <p>
              Neither party shall be liable for failure to perform due to causes beyond its reasonable control including acts of God, war, pandemic, internet failure, or government restrictions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Indemnification</h2>
            <p>
              Each party shall indemnify the other against claims arising from its willful misconduct or gross negligence.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. Insurance</h2>
            <p>
              Voxora maintains Professional Indemnity and Cyber Liability insurance of at least AUD 5 million.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">15. Entire Agreement & Severability</h2>
            <p>
              These Terms constitute the entire agreement. If any provision is held invalid, the remainder shall continue in full force.
            </p>
          </section>
          
          <section className="pt-8 border-t border-neutral-800 mt-12">
            <p className="font-bold text-white mb-2">Contact Us</p>
             <p>
                If you have any questions about these Terms, please contact us at <a href="mailto:Hello@voxorasolution.com" className="text-purple-500 hover:text-purple-400 font-medium">Hello@Voxorasolution.com</a>.
             </p>
          </section>
        </div>
      </div>
    </div>
  );
};