import React, { useRef, useState, useCallback, useEffect, useLayoutEffect } from 'react';
import Depresyon from '../sections/Depresyon';
import Travma from '../sections/Travma';
import Kaygi from '../sections/Kaygi';
import OKB from '../sections/OKB';
import DEHB from '../sections/DEHB';
import CinselIslev from '../sections/CinselIslev';

const SECTIONS = [
  { id: 'depresyon', label: 'Depresyon' },
  { id: 'travma', label: 'Travma' },
  { id: 'kaygi', label: 'Kaygı' },
  { id: 'okb', label: 'OKB' },
  { id: 'dehb', label: 'DEHB' },
  { id: 'cinsel', label: 'Cinsel işlev bozuklukları' },
];

const SLIDE_COMPONENTS = [Depresyon, Travma, Kaygi, OKB, DEHB, CinselIslev];

function CalismaAlanlari() {
  const sliderRef = useRef(null);
  const [activeSection, setActiveSection] = useState('depresyon');
  const scrollRaf = useRef(null);

  /** Yalnızca görünen panelin yüksekliği kadar yer kaplasın — İletişim yukarı taşınır, boşluk kalkar */
  const updateSliderHeight = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const w = slider.clientWidth;
    if (w <= 0) return;
    const slides = slider.querySelectorAll('.calisma-alanlari__slide');
    if (!slides.length) return;
    const idx = Math.min(
      slides.length - 1,
      Math.max(0, Math.round(slider.scrollLeft / w))
    );
    const activeSlide = slides[idx];
    const h = activeSlide?.offsetHeight ?? 0;
    if (h > 0) slider.style.height = `${h}px`;
  }, []);

  const syncActiveFromScroll = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const w = slider.clientWidth;
    if (w <= 0) return;
    const idx = Math.min(
      SECTIONS.length - 1,
      Math.max(0, Math.round(slider.scrollLeft / w))
    );
    const id = SECTIONS[idx]?.id;
    if (id) setActiveSection(id);
    updateSliderHeight();
  }, [updateSliderHeight]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const onScroll = () => {
      if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current);
      scrollRaf.current = requestAnimationFrame(syncActiveFromScroll);
    };

    slider.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      slider.removeEventListener('scroll', onScroll);
      if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current);
    };
  }, [syncActiveFromScroll]);

  useLayoutEffect(() => {
    updateSliderHeight();
  }, [updateSliderHeight]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const slides = slider.querySelectorAll('.calisma-alanlari__slide');
    const ro = new ResizeObserver(() => {
      requestAnimationFrame(updateSliderHeight);
    });
    slides.forEach((el) => ro.observe(el));
    const onWinResize = () => requestAnimationFrame(updateSliderHeight);
    window.addEventListener('resize', onWinResize);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', onWinResize);
    };
  }, [updateSliderHeight]);

  const goToSection = (id) => {
    const i = SECTIONS.findIndex((s) => s.id === id);
    const slider = sliderRef.current;
    if (!slider || i < 0) return;
    const slides = slider.querySelectorAll('.calisma-alanlari__slide');
    const target = slides[i];
    if (target) {
      const h = target.offsetHeight;
      if (h > 0) slider.style.height = `${h}px`;
    }
    const w = slider.clientWidth;
    slider.scrollTo({ left: i * w, behavior: 'smooth' });
    setActiveSection(id);
    requestAnimationFrame(() => {
      requestAnimationFrame(updateSliderHeight);
    });
  };

  return (
    <div id="calisma-alanlari" className="calisma-alanlari">
      <header className="calisma-alanlari__header">
        <div className="calisma-alanlari__tabs" role="tablist" aria-label="Çalışma alanları sekmeleri">
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="tab"
              id={`calisma-tab-${id}`}
              aria-selected={activeSection === id}
              aria-controls={`calisma-panel-${id}`}
              className={`calisma-alanlari__btn ${activeSection === id ? 'calisma-alanlari__btn--active' : ''}`}
              onClick={() => goToSection(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </header>

      <div
        ref={sliderRef}
        className="calisma-alanlari__slider"
        tabIndex={0}
        aria-label="Çalışma alanları içerikleri — yatay kaydırın"
      >
        {SECTIONS.map(({ id }, i) => {
          const Comp = SLIDE_COMPONENTS[i];
          return (
            <div
              key={id}
              id={`calisma-panel-${id}`}
              role="tabpanel"
              aria-labelledby={`calisma-tab-${id}`}
              className="calisma-alanlari__slide"
              data-section-id={id}
            >
              <Comp />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CalismaAlanlari;
