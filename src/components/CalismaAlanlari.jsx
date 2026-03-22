import React, { useState } from 'react';
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

function CalismaAlanlari() {
  const [activeSection, setActiveSection] = useState('depresyon');

  return (
    <div id="calisma-alanlari" className="calisma-alanlari">
      <div className="calisma-alanlari__content">
        {activeSection === 'depresyon' && <Depresyon />}
        {activeSection === 'travma' && <Travma />}
        {activeSection === 'kaygi' && <Kaygi />}
        {activeSection === 'okb' && <OKB />}
        {activeSection === 'dehb' && <DEHB />}
        {activeSection === 'cinsel' && <CinselIslev />}
      </div>
      <aside className="calisma-alanlari__sidebar">
        <span className="calisma-alanlari__sidebar-title">Çalışma Alanları</span>
        {SECTIONS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={`calisma-alanlari__btn ${activeSection === id ? 'calisma-alanlari__btn--active' : ''}`}
            onClick={() => setActiveSection(id)}
          >
            {label}
          </button>
        ))}
      </aside>
    </div>
  );
}

export default CalismaAlanlari;
