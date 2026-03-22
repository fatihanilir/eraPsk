import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { travmaImg } from '../assets/imageData';

function Travma() {
  return (
    <section className="content-section">
      <div className="content-section__inner">
        <div className="content-section__body">
          <AnimatedSection direction="up">
            <h2 className="content-section__title">Travma</h2>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={50}>
            <h3 className="content-section__subtitle">Travma nedir?</h3>
            <p>
              Travma, kişinin fiziksel veya duygusal bütünlüğünü tehdit eden, yoğun korku, çaresizlik ya da dehşet duygusu yaratan olayların ardından ortaya çıkan psikolojik etkidir. Kaza, kayıp, istismar, afet veya ani stresli yaşantılar travmatik deneyimler arasında yer alabilir. Travma, olayın kendisinden çok kişinin yaşadığı psikolojik etkilerle tanımlanır.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={100}>
            <h3 className="content-section__subtitle">Travma belirtileri nelerdir?</h3>
            <ul className="content-section__list content-section__list--bullets">
              <li><strong>Duygusal:</strong> Yoğun kaygı ve korku; üzüntü, öfke veya suçluluk; duygusal uyuşukluk ve kopukluk hissi</li>
              <li><strong>Bilişsel:</strong> Olayla ilgili istemsiz hatırlamalar; kabuslar veya zihinde tekrar eden görüntüler; konsantrasyon güçlüğü</li>
              <li><strong>Fiziksel:</strong> Uyku problemleri; çarpıntı, gerginlik ve huzursuzluk; kolay irkilme</li>
              <li><strong>Davranışsal:</strong> Travmayı hatırlatan durumlardan kaçınma; sosyal geri çekilme; aşırı tetikte olma (hipervijilans)</li>
            </ul>
            <p className="content-section__note">✅ Önemli not: Travma belirtileri uzun süre devam ediyor ve yaşam kalitesini etkiliyorsa psikolojik destek iyileşme sürecini kolaylaştırır.</p>
          </AnimatedSection>
        </div>
        <div className="content-section__media">
          <AnimatedSection direction="right">
            <img src={travmaImg} alt="Travma" className="content-section__img" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default Travma;
