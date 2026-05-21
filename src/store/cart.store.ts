import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types/product.types';

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  itemCount: number;
  addItem: (product: Product | CartItem) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      itemCount: 0,
      addItem: (product) =>
        set((state) => {
          const exists = state.items.some((item) => item.id === product.id);
          if (exists) return state;
          const quantity = 'quantity' in product ? product.quantity : 1;
          const items = [...state.items, { ...product, quantity }];
          return { items, itemCount: items.length };
        }),
      removeItem: (productId) =>
        set((state) => {
          const items = state.items.filter((item) => item.id !== productId);
          return { items, itemCount: items.length };
        }),
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
          ),
        })),
      clearCart: () => set({ items: [], itemCount: 0 }),
    }),
    { name: 'cart-storage' }
  )
);
