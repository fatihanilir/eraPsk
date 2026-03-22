import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { uykuImg } from '../assets/imageData';

function DEHB() {
  return (
    <section className="content-section content-section--alt">
      <div className="content-section__inner">
        <div className="content-section__media">
          <AnimatedSection direction="left">
            <img src={uykuImg} alt="DEHB" className="content-section__img" />
          </AnimatedSection>
        </div>
        <div className="content-section__body">
          <AnimatedSection direction="up">
            <h2 className="content-section__title">DEHB (Dikkat Eksikliği ve Hiperaktivite Bozukluğu)</h2>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={50}>
            <h3 className="content-section__subtitle">DEHB nedir?</h3>
            <p>
              Dikkat Eksikliği ve Hiperaktivite Bozukluğu (DEHB), dikkat sürdürme güçlüğü, dürtüsellik ve aşırı hareketlilik ile karakterize nörogelişimsel bir bozukluktur. Çocuklukta başlasa da belirtiler ergenlik ve yetişkinlikte de devam edebilir. DEHB, akademik, mesleki ve sosyal yaşamda işlevselliği etkileyebilir.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={100}>
            <h3 className="content-section__subtitle">Dikkat eksikliği belirtileri</h3>
            <p>Dikkat eksikliği, odaklanma ve zihinsel süreklilik gerektiren görevlerde zorlanma ile kendini gösterir. Detayları kaçırma, dikkatsiz hatalar, başladığı işi tamamlamada güçlük; unutkanlık, eşyaları kaybetme, dağınıklık ve yönergeleri takip etmekte zorlanma sık görülür.</p>
            <ul className="content-section__list">
              <li>Dikkati sürdürmekte zorlanma</li>
              <li>Detay hataları yapma</li>
              <li>Görevleri tamamlamada güçlük</li>
              <li>Unutkanlık ve dağınıklık</li>
              <li>Dinliyormuş gibi görünüp zihnin başka yerde olması</li>
            </ul>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={150}>
            <h3 className="content-section__subtitle">Hiperaktivite belirtileri</h3>
            <p>Aşırı hareketlilik ve bedensel huzursuzluk; çocuklarda yerinde duramama; yetişkinlerde içsel huzursuzluk ve sürekli meşgul olma ihtiyacı. Uzun süre oturmayı gerektiren ortamlarda zorlanma, kıpırdanma, aşırı konuşma.</p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={200}>
            <h3 className="content-section__subtitle">Dürtüsellik belirtileri</h3>
            <ul className="content-section__list">
              <li>Söz kesme veya sırasını bekleyememe</li>
              <li>Düşünmeden hareket etme</li>
              <li>Sabırsızlık</li>
              <li>Ani kararlar verme</li>
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default DEHB;
