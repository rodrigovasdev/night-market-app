import { CartItem } from '@/store/cart.store';
import { API_URL } from './api.config';

export interface CartDetailItem {
    productId: number;
    name: string;
    quantity: number;
    unitPrice: number;
    subtotal: number;
}

export interface CartCalculation {
    totalQuantity: number;
    totalValue: number;
    detail: CartDetailItem[];
    discountApplied: boolean;
}

export interface CheckoutItemPayload {
    productId: number;
    quantity: number;
}

export interface CheckoutCartPayload {
    userId: number;
    discount?: string;
    items: CheckoutItemPayload[];
}

export async function syncCart(items: CartItem[], discountCode?: string): Promise<CartCalculation | null> {
    const body = {
        items: items.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
        })),
        discountCode,
    };

    const response = await fetch(`${API_URL}/products/calculate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });
    if (!response.ok) return null;

    const data = await response.json();
    return {
        ...data,
        discountApplied: Boolean(data.discountApplied),
    };
}

export async function checkoutCart(payload: CheckoutCartPayload): Promise<boolean> {
    const response = await fetch(`${API_URL}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    return !!response.ok;
}
