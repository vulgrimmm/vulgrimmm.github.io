import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative text-center text-white space-y-6">
        <h1 className="text-5xl md:text-7xl font-serif">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl font-light">
          {t('hero.subtitle')}
        </p>
        <a
          href="#shop"
          className="inline-block px-8 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
        >
          {t('hero.cta')}
        </a>
      </div>
    </section>
  );
}