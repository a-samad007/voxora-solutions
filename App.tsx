import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Savings } from './components/Savings';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsPage } from './components/TermsPage';
import { CareersPage } from './components/CareersPage';

export type PageView = 'home' | 'services' | 'about' | 'contact' | 'privacy' | 'terms' | 'careers';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  const navigateTo = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-purple-600 selection:text-white">
      <Navbar onNavigate={navigateTo} currentPage={currentPage} />
      <main>
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={() => navigateTo('services')} />
            <Services onNavigate={() => navigateTo('services')} />
            <Savings onNavigate={() => navigateTo('contact')} />
            <About />
          </>
        )}
        {currentPage === 'services' && (
          <ServicesPage onBack={() => navigateTo('home')} onContact={() => navigateTo('contact')} />
        )}
        {currentPage === 'about' && (
          <AboutPage onBack={() => navigateTo('home')} />
        )}
        {currentPage === 'contact' && (
          <ContactPage onBack={() => navigateTo('home')} />
        )}
        {currentPage === 'privacy' && (
          <PrivacyPolicyPage onBack={() => navigateTo('home')} />
        )}
        {currentPage === 'terms' && (
          <TermsPage onBack={() => navigateTo('home')} />
        )}
        {currentPage === 'careers' && (
          <CareersPage onBack={() => navigateTo('home')} />
        )}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;