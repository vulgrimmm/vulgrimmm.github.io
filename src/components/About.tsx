import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  
  return (
    <section
      id="about"
      className="py-20 relative"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-4xl font-serif mb-8">{t('about.title')}</h2>
          <p className="text-lg leading-relaxed mb-8">
            {t('about.description1')}
          </p>
          <p className="text-lg leading-relaxed">
            {t('about.description2')}
          </p>
        </div>
      </div>
    </section>
  );
}