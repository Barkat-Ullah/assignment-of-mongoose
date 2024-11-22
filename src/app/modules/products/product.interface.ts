export type TProduct = {
  title: string;
  author: string;
  price: number;
  category: 'Fiction' | 'Science' | 'Poetry' | 'Religious';
  description: string;
  quantity: number;
  inStock: boolean;
  createdAt?: Date; 
  updatedAt?: Date;
};

export type TOrder = {
  email: string;
  product: string;
  quantity: number;
  totalPrice: number;
};
