import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { kaygiImg } from '../assets/imageData';

function Kaygi() {
  return (
    <section className="content-section content-section--alt">
      <div className="content-section__inner">
        <div className="content-section__media">
          <AnimatedSection direction="left">
            <img src={kaygiImg} alt="Kaygı" className="content-section__img" />
          </AnimatedSection>
        </div>
        <div className="content-section__body">
          <AnimatedSection direction="up">
            <h2 className="content-section__title">Kaygı</h2>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={50}>
            <h3 className="content-section__subtitle">Kaygı nedir?</h3>
            <p>
              Kaygı, kişinin olası bir tehdit veya belirsizlik karşısında hissettiği doğal bir duygu durumudur. Günlük yaşamda belirli düzeyde kaygı koruyucu ve motive edici olabilir. Ancak kaygı yoğun, sürekli ve kontrol edilmesi zor hale geldiğinde kişinin yaşam kalitesini ve işlevselliğini olumsuz etkileyebilir.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={100}>
            <h3 className="content-section__subtitle">Kaygı türleri nelerdir?</h3>
            <ul className="content-section__list content-section__list--cards">
              <li><strong>Yaygın kaygı (Genelleşmiş):</strong> İş, sağlık, aile veya günlük sorumluluklar gibi birçok konuda sürekli ve aşırı endişe. Endişe çoğu zaman kontrol edilemez; kas gerginliği, huzursuzluk, yorgunluk ve konsantrasyon güçlüğü görülebilir.</li>
              <li><strong>Panik kaygı (Panik bozukluk):</strong> Ani ve yoğun korku atakları; çarpıntı, nefes darlığı, baş dönmesi ve kontrol kaybı hissi. Kişi atakların tekrar edeceği korkusuyla kaçınmaya başlayabilir.</li>
              <li><strong>Sosyal kaygı:</strong> Başkaları tarafından değerlendirilme, eleştirilme veya küçük düşme korkusu; topluluk önünde konuşma veya yeni insanlarla tanışma durumlarında yoğun kaygı.</li>
              <li><strong>Fobik kaygı (Özgül fobiler):</strong> Belirli bir nesne veya duruma karşı yoğun ve mantık dışı korku (yükseklik, kapalı alan, uçak, hayvan, iğne vb.).</li>
              <li><strong>Ayrılık kaygısı:</strong> Bağ kurduğu kişilerden uzak kalma düşüncesiyle yoğun endişe; daha çok çocuklukta görülse de yetişkinlikte de ortaya çıkabilir.</li>
            </ul>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={150}>
            <h3 className="content-section__subtitle">Kaygı belirtileri nelerdir?</h3>
            <p><strong>Duygusal:</strong> Sürekli endişe ve huzursuzluk; gerginlik ve sabırsızlık; kontrol kaybı hissi.</p>
            <p><strong>Bilişsel:</strong> Olumsuz senaryolar düşünme; konsantrasyon güçlüğü; kararsızlık.</p>
            <p><strong>Fiziksel:</strong> Çarpıntı ve nefes darlığı; kas gerginliği; terleme, titreme; uyku problemleri.</p>
            <p><strong>Davranışsal:</strong> Kaçınma davranışları; sürekli güvence arama; günlük işlevlerde zorlanma.</p>
            <p className="content-section__note">✅ Önemli not: Kaygı uzun süre devam ediyor ve günlük yaşamı etkiliyorsa profesyonel destek almak faydalı olabilir.</p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default Kaygi;
