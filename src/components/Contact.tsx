import React from 'react';
import { Instagram, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12">{t('contact.title')}</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 bg-white rounded-lg hover:shadow-lg transition-shadow"
          >
            <Instagram className="w-8 h-8 mb-4" />
            <h3 className="text-lg font-medium mb-2">Instagram</h3>
            <p className="text-gray-600 text-center">{t('contact.instagram')}</p>
          </a>
          
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 bg-white rounded-lg hover:shadow-lg transition-shadow"
          >
            <Phone className="w-8 h-8 mb-4" />
            <h3 className="text-lg font-medium mb-2">WhatsApp</h3>
            <p className="text-gray-600 text-center">{t('contact.whatsapp')}</p>
          </a>
          
          <div className="flex flex-col items-center p-8 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <MapPin className="w-8 h-8 mb-4" />
            <h3 className="text-lg font-medium mb-2">{t('contact.visit')}</h3>
            <p className="text-gray-600 text-center">{t('contact.address')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}