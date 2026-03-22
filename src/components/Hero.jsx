import React from 'react';
import AnimatedSection from './AnimatedSection';
import { logoImg } from '../assets/imageData';

function Hero() {
  return (
    <section id="ana-sayfa" className="hero">
      <div className="hero__content">
        <div className="hero__banner">
          <AnimatedSection direction="up" delay={0}>
            <img src={logoImg} alt="Era Psikoloji" className="hero__theme-img" />
          </AnimatedSection>
        </div>
        <div className="hero__text-col">
          <AnimatedSection direction="up" delay={100}>
            <h1 className="hero__title">Your Healing Era Başlıyor</h1>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={200}>
            <p className="hero__text">
              Hayat bazen bir kırılma noktası getirir.<br />
              İnsan o noktada ya aynı döngüde kalır ya da yeni bir çağa — a new era — adım atar.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={300}>
            <p className="hero__text">
              Belki şu an sorguladığınız, yorulduğunuz ya da kendinize dönmek istediğiniz bir dönemdesiniz.<br />
              Bu sadece zor bir süreç değil… belki de <strong>your awareness era</strong> — kendinizi fark ettiğiniz çağın başlangıcı.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={400}>
            <p className="hero__text hero__text--accent">
              Terapi, sorunları konuştuğunuz bir alan olmanın ötesinde;<br />
              <strong>your self era</strong> — kendinizle yeniden tanıştığınız, anlamlandırdığınız ve güçlendiğiniz bir yolculuktur.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default Hero;
