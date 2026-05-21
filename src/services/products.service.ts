
import { Product } from '@/types/product.types';
import { API_URL } from './api.config';
export type { Product };

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  return response.json();
}

export async function getFilteredProducts(params: {
  categoryId?: number;
  subcategoryId?: number;
} = {}): Promise<Product[]> {
  const query = new URLSearchParams();
  if (params.categoryId !== undefined) query.set('categoryId', String(params.categoryId));
  if (params.subcategoryId !== undefined) query.set('subcategoryId', String(params.subcategoryId));
  const qs = query.toString();
  const response = await fetch(`${API_URL}/products/filter${qs ? `?${qs}` : ''}`);
  if (!response.ok) throw new Error(`Failed to fetch filtered products: ${response.status}`);
  return response.json();
}

export async function getLatestProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/products/latest`);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  return response.json();
}


export async function getProduct(id: number): Promise<Product> {
  const response = await fetch(`${API_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  return response.json();
}

export interface ProductReviewPayload {
  username: string;
  email: string;
  stars: number;
  reviewText: string;
}

export interface ProductReview {
  username: string;
  email: string;
  stars: number;
  reviewText: string;
}

export async function createProductReview(productId: number, payload: ProductReviewPayload): Promise<boolean> {
  const response = await fetch(`${API_URL}/products/${productId}/reviews`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  return response.ok;
}

export async function getProductReviews(productId: number): Promise<ProductReview[]> {
  const response = await fetch(`${API_URL}/products/${productId}/reviews`);

  if (!response.ok) {
    throw new Error(`Failed to fetch product reviews: ${response.status}`);
  }

  return response.json();
}

