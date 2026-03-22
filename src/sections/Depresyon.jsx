import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { depresyonImg } from '../assets/imageData';

function Depresyon() {
  return (
    <section className="content-section content-section--alt">
      <div className="content-section__inner">
        <div className="content-section__media">
          <AnimatedSection direction="left">
            <img src={depresyonImg} alt="Depresyon" className="content-section__img" />
          </AnimatedSection>
        </div>
        <div className="content-section__body">
          <AnimatedSection direction="up">
            <h2 className="content-section__title">Depresyon</h2>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={50}>
            <h3 className="content-section__subtitle">Depresyon nedir?</h3>
            <p>
              Depresyon, kişinin duygu durumunu, düşüncelerini ve günlük işlevselliğini etkileyen yaygın bir ruh sağlığı bozukluğudur. Sadece geçici bir üzüntü hali değil; uzun süren mutsuzluk, ilgi kaybı ve enerji düşüklüğü ile karakterizedir. Depresyon yaşayan kişiler günlük aktivitelerini sürdürmekte zorlanabilir ve yaşamdan aldıkları keyif belirgin şekilde azalır.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={100}>
            <h3 className="content-section__subtitle">Depresyon belirtileri nelerdir?</h3>
            <p>Depresyon belirtileri kişiden kişiye değişebilir ancak en sık görülenler şunlardır:</p>
            <ul className="content-section__list content-section__list--bullets">
              <li><strong>Duygusal belirtiler</strong> — Sürekli üzgün, boşlukta veya umutsuz hissetme; eskiden keyif alınan şeylere ilgi kaybı; değersizlik veya suçluluk düşünceleri</li>
              <li><strong>Bilişsel belirtiler</strong> — Konsantrasyon güçlüğü; kararsızlık; olumsuz düşünce döngüsü</li>
              <li><strong>Fiziksel belirtiler</strong> — Enerji düşüklüğü ve yorgunluk; uyku problemleri (uykusuzluk veya aşırı uyuma); iştah değişiklikleri</li>
              <li><strong>Davranışsal belirtiler</strong> — Sosyal geri çekilme; günlük sorumlulukları yerine getirmede zorlanma; hareketlerde yavaşlama veya huzursuzluk</li>
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default Depresyon;
