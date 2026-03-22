import React, { useState, useEffect, useCallback } from 'react';
import {
  galeri1Url,
  galeri2Url,
  galeri3Url,
  galeri4Url,
  galeri5Url,
  galeri6Url,
} from '../assets/galleryData';

const SLIDES = [
  { src: galeri1Url, alt: 'Klinik galeri 1' },
  { src: galeri2Url, alt: 'Klinik galeri 2' },
  { src: galeri3Url, alt: 'Klinik galeri 3' },
  { src: galeri4Url, alt: 'Klinik galeri 4' },
  { src: galeri5Url, alt: 'Klinik galeri 5' },
  { src: galeri6Url, alt: 'Klinik galeri 6' },
];

const AUTO_MS = 4500;

function GallerySlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((dir) => {
    setIndex((i) => {
      const n = SLIDES.length;
      if (dir === 'next') return (i + 1) % n;
      if (dir === 'prev') return (i - 1 + n) % n;
      return i;
    });
  }, []);

  const goTo = (i) => setIndex(i);

  useEffect(() => {
    if (paused) return undefined;
    const t = setInterval(() => go('next'), AUTO_MS);
    return () => clearInterval(t);
  }, [paused, go]);

  return (
    <div
      id="galeri"
      className="gallery-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="gallery-slider__viewport">
        <div
          className="gallery-slider__track"
          style={{
            transform: `translateX(-${(index * 100) / SLIDES.length}%)`,
          }}
        >
          {SLIDES.map((slide) => (
            <div key={slide.alt} className="gallery-slider__slide">
              <img src={slide.src} alt={slide.alt} className="gallery-slider__img" />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="gallery-slider__btn gallery-slider__btn--prev"
          aria-label="Önceki görsel"
          onClick={() => go('prev')}
        >
          ‹
        </button>
        <button
          type="button"
          className="gallery-slider__btn gallery-slider__btn--next"
          aria-label="Sonraki görsel"
          onClick={() => go('next')}
        >
          ›
        </button>
      </div>
      <div className="gallery-slider__dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`gallery-slider__dot ${i === index ? 'gallery-slider__dot--active' : ''}`}
            aria-label={`Slayt ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default GallerySlider;
