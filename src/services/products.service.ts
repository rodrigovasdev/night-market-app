import { Product } from '@/types/product.types';
export type { Product };

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`http://localhost:3000/api/products`);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  return response.json();
}

export async function getLatestProducts(): Promise<Product[]> {
  const response = await fetch(`http://localhost:3000/api/products/latest`);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  return response.json();
}


export async function getProduct(id: number): Promise<Product> {
  const response = await fetch(`http://localhost:3000/api/products/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  return response.json();
}

