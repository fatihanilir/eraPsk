import React from 'react';
import AnimatedSection from './AnimatedSection';

function Randevu() {
  return (
    <section id="randevu" className="randevu">
      <div className="randevu__inner">
        <AnimatedSection direction="up">
          <h2 className="randevu__title">Randevu</h2>
          <p className="randevu__text">
            Yeni bir döneme adım atmak için randevu alabilirsiniz. İlk görüşmede tanışıp birlikte yol haritanızı oluşturabiliriz.
          </p>
          <a href="https://wa.me/905313934010" className="randevu__cta" target="_blank" rel="noopener noreferrer">
            İletişime Geç / Randevu Al
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Randevu;
