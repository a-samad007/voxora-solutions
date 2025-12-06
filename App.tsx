import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-purple-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;