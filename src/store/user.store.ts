import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface StoredProductReview {
  productId: number;
  username: string;
  email: string;
  stars: number;
  reviewText: string;
}

interface UserState {
  id: number | null;
  name: string | null;
  mail: string | null;
  discountSent: boolean;
  sentReviews: StoredProductReview[];
  setUser: (id: number, name: string, mail: string | null) => void;
  setDiscountSent: (sent: boolean) => void;
  saveSentReview: (review: StoredProductReview) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
        id: null,
        name: null,
        mail: null,
        discountSent: false,
        sentReviews: [],
        setUser: (id, name, mail) => set({ id, name, mail }),
        setDiscountSent: (sent) => set({ discountSent: sent }),
        saveSentReview: (review) =>
            set((state) => ({
            sentReviews: [
              ...state.sentReviews.filter((item) => item.productId !== review.productId),
              review,
            ],
            })),
        clearUser: () => set({ id: null, name: null, mail: null, discountSent: false, sentReviews: [] }),
    }),
    { name: 'user-storage' }
  )
);
