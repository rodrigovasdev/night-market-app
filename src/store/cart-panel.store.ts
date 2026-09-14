import { create } from "zustand";

interface CartPanelState {
    isOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
}

export const useCartPanelStore = create<CartPanelState>((set) => ({
    isOpen: false,
    openCart: () => set({ isOpen: true }),
    closeCart: () => set({ isOpen: false }),
}));
