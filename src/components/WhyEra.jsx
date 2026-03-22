import React from 'react';
import AnimatedSection from './AnimatedSection';
import { hakkimdaImg } from '../assets/imageData';
import CalismaAlanlari from './CalismaAlanlari';

function WhyEra() {
  return (
    <section className="why-era">
      <div className="why-era__inner">
        <AnimatedSection direction="up">
          <h2 className="why-era__title">Neden Bu Süreç Sizin New Era'nız Olabilir?</h2>
        </AnimatedSection>

        <div className="why-era__calisma">
          <CalismaAlanlari />
        </div>

        <div className="why-era__about" id="hakkimda">
          <AnimatedSection direction="up" delay={80}>
            <h2 className="why-era__about-title">Hakkımda</h2>
          </AnimatedSection>
          <div className="why-era__about-layout">
            <AnimatedSection direction="up" delay={120} className="why-era__about-text-wrap">
              <div className="why-era__about-text">
                <p className="why-era__about-lead">
                  <strong>Klinik Uzman Psikolog Azad Tahsin ATAŞ.</strong>
                </p>
                <p>
                  Psikoloji lisans eğitimimi Nişantaşı Üniversitesi&apos;nde (%100) burslu olarak tamamladım.
                  Akademik gelişimime aynı üniversitede Klinik Psikoloji yüksek lisans programı ile devam ederek
                  uzmanlık unvanımı aldım.
                </p>
                <p>
                  Eğitim sürecim boyunca ve sonrasında, bilimsel temelli psikoterapi yaklaşımları üzerine yoğunlaştım.
                  Danışanlarımla yürüttüğüm çalışmalarda, teorik bilgiyi pratik uygulamayla bütünleştiren,
                  yapılandırılmış ve hedef odaklı bir süreç izlemekteyim.
                </p>

                <h3 className="why-era__about-subtitle">Çalışma Yaklaşımım</h3>
                <p>
                  Terapi sürecini, <strong>yetişkin – ergen ve çocuk</strong> her danışanın bireysel ihtiyaçları
                  doğrultusunda şekillenen profesyonel bir iş birliği olarak ele alıyorum.
                </p>
                <p>Seanslarımda ağırlıklı olarak:</p>
                <ul className="why-era__about-list">
                  <li>Bilişsel Davranışçı Terapi (BDT)</li>
                  <li>Kabul ve Kararlılık Terapisi (ACT)</li>
                  <li>Şema Terapi</li>
                </ul>
                <p>
                  yaklaşımlarını kullanmaktayım. Gerektiğinde ergen ve çocuklarla çalışmaya yönelik özel terapi
                  tekniklerini sürece entegre ediyorum.
                </p>
                <p>
                  Amaç; yalnızca mevcut sorunların ele alınması değil, aynı zamanda bireyin düşünce ve davranış
                  örüntülerini fark ederek daha işlevsel bir iç denge geliştirmesidir.
                </p>

                <h3 className="why-era__about-subtitle">Eğitim ve Uzmanlık</h3>
                <ul className="why-era__about-list why-era__about-list--plain">
                  <li>Psikoloji Lisans – Nişantaşı Üniversitesi (Burslu)</li>
                  <li>Klinik Psikoloji Yüksek Lisans – Nişantaşı Üniversitesi (Burslu)</li>
                  <li>Klinik Uzman Psikolog</li>
                </ul>

                <h3 className="why-era__about-subtitle">Mesleki eğitimler</h3>
                <ul className="why-era__about-list">
                  <li>Bilişsel Davranışçı Terapi</li>
                  <li>Ergen ve Çocuklarda Bilişsel Davranışçı Terapi</li>
                  <li>Kabul ve Kararlılık Terapisi</li>
                  <li>Şema Terapi</li>
                </ul>

                <h3 className="why-era__about-subtitle">Profesyonel Yaklaşım</h3>
                <p>
                  Çalışmalarımda etik ilkelere bağlı, yapılandırılmış ve güven temelli bir terapi süreci yürütmeyi
                  esas alıyorum. Her danışanın kendine özgü bir deneyimi olduğunun bilinciyle, yargısız bir çerçevede,
                  bilimsel yöntemlere dayalı ve sürdürülebilir bir gelişim süreci hedeflenir.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={160} className="why-era__about-media-wrap">
              <figure className="why-era__about-media">
                <img
                  src={hakkimdaImg}
                  alt="Klinik Uzman Psikolog Azad Tahsin ATAŞ"
                  className="why-era__about-img"
                  width={480}
                  height={640}
                />
              </figure>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyEra;
