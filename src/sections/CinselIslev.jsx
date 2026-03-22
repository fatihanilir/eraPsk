import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { anksiyeteImg } from '../assets/imageData';

function CinselIslev() {
  return (
    <section className="content-section">
      <div className="content-section__inner content-section__inner--stack">
        <AnimatedSection direction="up">
          <h2 className="content-section__title">Cinsel İşlev Bozuklukları</h2>
        </AnimatedSection>
        <AnimatedSection direction="up" delay={50}>
          <h3 className="content-section__subtitle">Cinsel işlev bozuklukları nedir?</h3>
          <p>
            Cinsel işlev bozuklukları; cinsel istek, uyarılma, orgazm veya ağrı süreçlerinde yaşanan ve kişinin cinsel yaşamını olumsuz etkileyen sorunları ifade eder. Hem kadınlarda hem erkeklerde görülebilir ve psikolojik, biyolojik veya ilişki kaynaklı etkenlerle ortaya çıkabilir.
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={100}>
          <h3 className="content-section__subtitle">Kadınlarda cinsel işlev bozuklukları</h3>
          <ul className="content-section__list content-section__list--cards">
            <li><strong>1. Cinsel istek azalması:</strong> Cinsel düşünce ve fantezilerin azalması; cinsel yakınlıktan kaçınma; partnerle cinsel temas isteksizliği.</li>
            <li><strong>2. Uyarılma bozukluğu:</strong> Vajinal ıslanma güçlüğü; uyarılma hissinin zayıf olması; cinsel hazda azalma.</li>
            <li><strong>3. Orgazm bozukluğu:</strong> Orgazma ulaşmada güçlük; orgazmın yoğunluğunun düşük olması; cinsel doyumda azalma.</li>
            <li><strong>4. Cinsel ağrı bozuklukları (vajinismus / disparoni):</strong> İlişki sırasında ağrı veya yanma; vajinal kaslarda istemsiz kasılma; cinsel ilişkiden kaçınma.</li>
          </ul>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={150}>
          <h3 className="content-section__subtitle">Erkeklerde cinsel işlev bozuklukları</h3>
          <ul className="content-section__list content-section__list--cards">
            <li><strong>1. Cinsel istek azalması:</strong> Cinsel düşüncelerde azalma; cinsel aktiviteye isteksizlik; partnerle yakınlıktan kaçınma.</li>
            <li><strong>2. Sertleşme bozukluğu (erektil disfonksiyon):</strong> Sertleşme güçlüğü; sertleşmenin kısa sürmesi; cinsel performans kaygısı.</li>
            <li><strong>3. Erken boşalma:</strong> Boşalma kontrolünde zorluk; cinsel doyumda azalma; performans kaygısı ve kaçınma.</li>
            <li><strong>4. Geç boşalma:</strong> Boşalma için uzun süre uyarılma gereksinimi; cinsel ilişkide yorgunluk ve tatminsizlik; orgazm güçlüğü.</li>
          </ul>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={200}>
          <h3 className="content-section__subtitle">Cinsel işlev bozukluklarının nedenleri</h3>
          <p>Genellikle tek bir nedene bağlı değildir. Psikolojik, biyolojik ve ilişkiyle ilgili etkenlerin birlikte etkisiyle ortaya çıkabilir.</p>
          <p><strong>Psikolojik nedenler:</strong> Performans kaygısı; depresyon ve kaygı bozuklukları; travmatik cinsel deneyimler; beden algısı ve özgüven sorunları; suçluluk, utanç veya katı inançlar.</p>
          <p><strong>Biyolojik nedenler:</strong> Hormonal dengesizlikler; kronik hastalıklar; nörolojik sorunlar; ilaç yan etkileri; yorgunluk ve uyku problemleri.</p>
          <p><strong>İlişki kaynaklı nedenler:</strong> İletişim problemleri; kavga, çatışma ve çözülmemiş öfke; güven sorunları; cinsel beklenti farklılıkları; yakınlık ve bağlanma problemleri.</p>
          <p><strong>Sosyokültürel nedenler:</strong> Cinsellikle ilgili tabular ve yanlış inanışlar; katı aile ve toplum değerleri; yetersiz cinsel bilgi ve eğitim.</p>
          <p className="content-section__note">✅ Önemli not: Cinsel işlev bozuklukları yaygın ve tedavi edilebilir sorunlardır. Psikoeğitim, cinsel terapi ve gerektiğinde tıbbi destek iyileşme sürecini destekler.</p>
        </AnimatedSection>
      </div>
      <div className="content-section__media content-section__media--full">
        <AnimatedSection direction="up">
          <img src={anksiyeteImg} alt="Cinsel işlev" className="content-section__img content-section__img--wide" />
        </AnimatedSection>
      </div>
    </section>
  );
}

export default CinselIslev;
