import React from 'react';
import { Category } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const categories: { id: Category; title: string; image: string }[] = [
  {
    id: 'male',
    title: 'categories.male',
    image: 'https://images.unsplash.com/photo-1618151313441-bc79b11e5090?auto=format&fit=crop&q=80',
  },
  {
    id: 'female',
    title: 'categories.female',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80',
  },
  {
    id: 'babies',
    title: 'categories.babies',
    image: 'https://images.unsplash.com/photo-1619119069152-a2b331eb392a?auto=format&fit=crop&q=80',
  },
];

export default function Categories() {
  const { t } = useLanguage();
  
  const handleCategoryClick = (categoryId: Category) => {
    const shopSection = document.getElementById('shop');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
      // Dispatch a custom event that Shop component will listen to
      window.dispatchEvent(new CustomEvent('selectCategory', { detail: categoryId }));
    }
  };
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12">{t('categories.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-[28rem] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={category.image}
                  alt={t(category.title)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
                  <h3 className="text-white text-3xl font-serif mb-4 text-center">{t(category.title)}</h3>
                  <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium transition-colors group-hover:bg-white group-hover:text-gray-900 mb-4">
                    {t('categories.viewCollection')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}