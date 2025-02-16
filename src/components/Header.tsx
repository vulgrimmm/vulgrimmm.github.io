import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { NavItem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const navItems: NavItem[] = [
  { label: 'nav.home', href: '#home' },
  { label: 'nav.shop', href: '#shop' },
  { label: 'nav.about', href: '#about' },
  { label: 'nav.contact', href: '#contact' },
];

const languages = ['EN', 'FR'] as const;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="max-w-[2000px] mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-3xl font-['Cinzel'] font-bold text-gray-900 hover:text-gray-700 transition-colors">
            {t('brand.name')}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
              >
                {t(item.label)}
              </a>
            ))}
            
            <div className="flex items-center space-x-2 border-l pl-8">
              <Globe className="w-4 h-4" />
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    language === lang
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t">
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.label)}
                </a>
              ))}
              <div className="flex items-center space-x-2 pt-4 border-t">
                <Globe className="w-4 h-4" />
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      language === lang
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}