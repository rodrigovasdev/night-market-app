

import { Category } from '@/types/category.types';
import { API_URL } from './api.config';
export type { Category, Subcategory } from '@/types/category.types';

export async function getCategories(): Promise<Category[]> {
    const response = await fetch(`${API_URL}/categories`);
    if (!response.ok) return [];
    return response.json();
}
