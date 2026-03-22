import React from 'react';
import './App.css';
import { logoImg } from './assets/imageData';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyEra from './components/WhyEra';
import Contact from './components/Contact';
import Randevu from './components/Randevu';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <WhyEra />
        <Randevu />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <img src={logoImg} alt="Era Psikoloji" className="site-footer__logo" />
          <p className="site-footer__copy">© Era Psikoloji. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
