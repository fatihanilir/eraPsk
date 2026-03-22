import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { obsesifImg } from '../assets/imageData';

function OKB() {
  return (
    <section className="content-section">
      <div className="content-section__inner">
        <div className="content-section__body">
          <AnimatedSection direction="up">
            <h2 className="content-section__title">OKB (Obsesif Kompulsif Bozukluk)</h2>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={50}>
            <h3 className="content-section__subtitle">OKB nedir?</h3>
            <p>
              Obsesif Kompulsif Bozukluk (OKB), kişinin istemsiz ve rahatsız edici düşünceler (obsesyonlar) ile bu düşüncelerin yarattığı kaygıyı azaltmak için tekrarlayıcı davranışlar (kompulsiyonlar) yaşadığı bir ruh sağlığı bozukluğudur. Kişi düşünce ve davranışlarının aşırı olduğunu fark edebilir ancak kontrol etmekte zorlanır. OKB günlük yaşamı, zaman yönetimini ve işlevselliği belirgin şekilde etkileyebilir.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={100}>
            <h3 className="content-section__subtitle">OKB belirtileri nelerdir?</h3>
            <p><strong>Obsesyonlar (takıntılı düşünceler):</strong></p>
            <ul className="content-section__list">
              <li>Kirlenme veya mikrop kapma korkusu</li>
              <li>Başkasına zarar verme düşüncesi</li>
              <li>Düzen, simetri ve kusursuzluk ihtiyacı</li>
              <li>Sürekli şüphe (kapıyı kilitledim mi gibi)</li>
              <li>Dini veya ahlaki içerikli rahatsız edici düşünceler</li>
            </ul>
            <p><strong>Kompulsiyonlar (tekrarlayıcı davranışlar):</strong></p>
            <ul className="content-section__list">
              <li>Sürekli el yıkama veya temizlik yapma</li>
              <li>Kapı, ocak veya eşyaları tekrar tekrar kontrol etme</li>
              <li>Sayma, belirli kelimeleri içten tekrar etme</li>
              <li>Nesneleri belirli bir düzene göre yerleştirme</li>
              <li>Güvence arama ve tekrar tekrar sorma</li>
            </ul>
          </AnimatedSection>
        </div>
        <div className="content-section__media">
          <AnimatedSection direction="right">
            <img src={obsesifImg} alt="OKB" className="content-section__img" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default OKB;
