export type Category = 'male' | 'female' | 'babies';
export type Subcategory = 'necklaces' | 'bracelets' | 'earrings' | 'rings';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  subcategory: Subcategory;
  image: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}