import React, { useState, useEffect } from 'react';
import { Category, Subcategory, Product } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const subcategories: Subcategory[] = ['necklaces', 'bracelets', 'earrings', 'rings'];

const products: Product[] = [
  {
    id: '1',
    name: 'Diamond Eternity Ring',
    price: 1299,
    category: 'female',
    subcategory: 'rings',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80',
    description: 'Elegant diamond eternity ring featuring brilliant-cut diamonds set in 18k white gold.',
  },
  {
    id: '2',
    name: 'Pearl Necklace',
    price: 899,
    category: 'female',
    subcategory: 'necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80',
    description: 'Classic freshwater pearl necklace with 18k gold clasp.',
  },
  {
    id: '3',
    name: 'Gold Chain',
    price: 799,
    category: 'male',
    subcategory: 'necklaces',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80',
    description: 'Solid 18k gold Cuban link chain.',
  },
  {
    id: '4',
    name: 'Baby Bracelet',
    price: 199,
    category: 'babies',
    subcategory: 'bracelets',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80',
    description: 'Delicate sterling silver baby bracelet with safety clasp.',
  },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<Subcategory | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const handleCategorySelect = (event: CustomEvent<Category>) => {
      setSelectedCategory(event.detail);
    };

    window.addEventListener('selectCategory', handleCategorySelect as EventListener);
    return () => {
      window.removeEventListener('selectCategory', handleCategorySelect as EventListener);
    };
  }, []);

  const filteredProducts = products.filter(product => 
    (!selectedCategory || product.category === selectedCategory) &&
    (!selectedSubcategory || product.subcategory === selectedSubcategory)
  );

  return (
    <section id="shop" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12">{t('shop.title')}</h2>
        
        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-4 justify-center">
          <div className="space-x-2">
            {['male', 'female', 'babies'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category as Category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {t(`categories.${category}`)}
              </button>
            ))}
          </div>
          <div className="space-x-2">
            {subcategories.map((subcategory) => (
              <button
                key={subcategory}
                onClick={() => setSelectedSubcategory(subcategory)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedSubcategory === subcategory
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-gray-600">${product.price.toLocaleString()}</p>
            </div>
          ))}
        </div>

        {/* Product Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-2xl w-full mx-4">
              <div className="flex gap-8">
                <div className="w-1/2">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="w-1/2 space-y-4">
                  <h3 className="text-2xl font-medium">{selectedProduct.name}</h3>
                  <p className="text-xl text-gray-900">${selectedProduct.price.toLocaleString()}</p>
                  <p className="text-gray-600">{selectedProduct.description}</p>
                  <div className="space-y-2">
                    <button className="w-full px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800">
                      {t('shop.addToCart')}
                    </button>
                    <button className="w-full px-6 py-3 border border-gray-900 rounded-full hover:bg-gray-50">
                      {t('shop.buyNow')}
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}