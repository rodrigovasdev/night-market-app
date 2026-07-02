"use client";

import { SparklesIcon, XMarkIcon } from "@heroicons/react/24/solid";
import ChatClient from "@/app/chat/ChatClient";
import { useChatStore } from "@/store/chat.store";

export default function ChatFloatingButton() {
  const { isOpen, closeChat, toggleChat } = useChatStore();

  return (
    <>
      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 flex w-[min(420px,calc(100vw-2rem))] flex-col rounded-3xl border border-neutral-200 bg-neutral-50 shadow-2xl">
          {/* Panel header */}
          <div className="flex items-center justify-between rounded-t-3xl border-b border-neutral-200 bg-white px-5 py-4">
            <div className="flex items-center gap-2">
              <SparklesIcon className="h-5 w-5 text-neutral-950" />
              <span className="font-semibold text-neutral-950">Night-Bot</span>
            </div>
            <button
              onClick={closeChat}
              aria-label="Cerrar chat"
              className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-950"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Chat content */}
          <div className="max-h-[70vh] overflow-y-auto p-4">
            <ChatClient />
          </div>
        </div>
      )}

      {/* Floating trigger button */}
      <button
        onClick={toggleChat}
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
        className="fixed bottom-6 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-neutral-950 text-white shadow-lg transition hover:bg-neutral-800 active:scale-95"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <SparklesIcon className="h-6 w-6" />
        )}
      </button>
    </>
  );
}
