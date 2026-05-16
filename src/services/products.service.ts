import { Product } from '@/types/product.types';
export type { Product };

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`http://localhost:3000/api/products`);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  return response.json();
}
