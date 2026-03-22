import React, { useState, useEffect } from 'react';
import { logoImg } from '../assets/imageData';

const NAV_ITEMS = [
  { id: 'ana-sayfa', label: 'Ana Sayfa' },
  { id: 'calisma-alanlari', label: 'Çalışma Alanları & Blog' },
  { id: 'galeri', label: 'Galeri' },
  { id: 'iletisim', label: 'İletişim' },
  { id: 'randevu', label: 'Randevu' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__inner">
        <a href="#ana-sayfa" className="site-header__logo" onClick={(e) => { e.preventDefault(); scrollTo('ana-sayfa'); }}>
          <img src={logoImg} alt="Era Psikoloji" />
        </a>
        <button
          type="button"
          className="site-header__menu-btn"
          aria-label="Menü"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`site-header__nav ${menuOpen ? 'site-header__nav--open' : ''}`}>
          {NAV_ITEMS.map((item) => {
            const linkClass = [
              'site-header__nav-link',
              item.id === 'randevu' && 'site-header__nav-link--cta',
              item.id === 'calisma-alanlari' && 'site-header__nav-link--highlight',
            ]
              .filter(Boolean)
              .join(' ');
            return (
              <button
                key={item.id}
                type="button"
                className={linkClass}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Header;
