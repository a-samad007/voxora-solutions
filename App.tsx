import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { ServicesPage } from './components/ServicesPage';

export type PageView = 'home' | 'services';

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
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={() => navigateTo('services')} />
            <Services onNavigate={() => navigateTo('services')} />
            <About />
          </>
        ) : (
          <ServicesPage onBack={() => navigateTo('home')} />
        )}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;