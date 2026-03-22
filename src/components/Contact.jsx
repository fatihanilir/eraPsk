import React from 'react';
import AnimatedSection from './AnimatedSection';
import GallerySlider from './GallerySlider';

function Contact() {
  return (
    <section id="iletisim" className="contact">
      <GallerySlider />
      <div className="contact__inner">
        <AnimatedSection direction="up">
          <h2 className="contact__title">İletişim</h2>
          <p className="contact__text">
            Sorularınız veya randevu talepleriniz için benimle iletişime geçebilirsiniz.
          </p>
          <div className="contact__info">
            <p><strong>Adres:</strong> Şenlikköy mahallesi Yeşilköy caddesi No:17 (Edition Auto - AKN Auto arasında)</p>
            <p><strong>İletişim numarası:</strong> 0531 393 40 10</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Contact;
