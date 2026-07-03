import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ChatProduct = {
  id: number;
  name: string;
  shortDescription: string;
  price: number;
  imageUrl: string | null;
};

export type MessageRole = 'user' | 'bot' | 'system' | 'error';

export type ChatMessage = {
  id: string;
  role: MessageRole;
  text: string;
  products?: ChatProduct[];
};

interface ChatState {
  isOpen: boolean;
  isConnected: boolean;
  messages: ChatMessage[];
  openChat: () => void;
  closeChat: () => void;
  toggleChat: () => void;
  setConnected: (value: boolean) => void;
  addMessage: (role: MessageRole, text: string, products?: ChatProduct[]) => void;
  clearMessages: () => void;
}

export const useChatStore = create<ChatState>()(
  persist(
    (set) => ({
      isOpen: false,
      isConnected: false,
      messages: [],
      openChat: () => set({ isOpen: true }),
      closeChat: () => set({ isOpen: false }),
      toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
      setConnected: (value) => set({ isConnected: value }),
      addMessage: (role, text, products) =>
        set((state) => ({
          messages: [
            ...state.messages,
            { id: `${Date.now()}-${Math.random()}`, role, text, products },
          ],
        })),
      clearMessages: () => set({ messages: [] }),
    }),
    {
      name: 'night-chat-messages',
      partialize: (state) => ({ messages: state.messages }),
    }
  )
);
