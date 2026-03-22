/* src/images klasöründeki görseller – URL string olarak dışa aktarılır (Parcel bazen object döndürür, düzeltiyoruz) */

function toUrl(imp) {
  if (typeof imp === 'string') return imp;
  if (imp && typeof imp === 'object' && imp.default) return imp.default;
  return imp || '';
}

import logoRaw from '../images/eraLogoo.png';
import depresyonRaw from '../images/depresyon.jpg';
import kaygiRaw from '../images/kaygi.png';
import anksiyeteRaw from '../images/anksiyete.png';
import obsesifRaw from '../images/obsesif.png';
import panikatakRaw from '../images/panikatak.jpg';
import travmaRaw from '../images/travma.jpg';
import uykuRaw from '../images/uyku.jpg';

export const logoImg = toUrl(logoRaw);
export const depresyonImg = toUrl(depresyonRaw);
export const kaygiImg = toUrl(kaygiRaw);
export const anksiyeteImg = toUrl(anksiyeteRaw);
export const obsesifImg = toUrl(obsesifRaw);
export const panikatakImg = toUrl(panikatakRaw);
export const travmaImg = toUrl(travmaRaw);
export const uykuImg = toUrl(uykuRaw);
