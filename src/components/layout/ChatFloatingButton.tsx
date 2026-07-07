"use client";

import { SparklesIcon, XMarkIcon, DocumentIcon } from "@heroicons/react/24/solid";
import ChatClient from "@/components/chat/ChatClient";
import { useChatStore } from "@/store/chat.store";

export default function ChatFloatingButton() {
  const { isOpen, isConnected, closeChat, toggleChat, messages, clearMessages } = useChatStore();

  return (
    <>
      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 flex w-[min(420px,calc(100vw-2rem))] flex-col  border border-neutral-200 bg-neutral-50 shadow-2xl">
          {/* Panel header */}
          <div className="flex items-center justify-between rounded-t-3xl border-b border-neutral-200 bg-white px-5 py-4">
            <div className="flex items-center gap-2">
              <SparklesIcon className="h-5 w-5 text-neutral-950" />
              <span className="font-semibold text-neutral-950">Night-Bot</span>
              {isConnected && (
                <span className="rounded-full border border-green-500 px-2 py-0.5 text-xs font-medium text-green-600">
                  en línea
                </span>
              )}
            </div>
            <div className="flex items-center gap-1">
              {messages.length > 0 && (
                <button
                  onClick={clearMessages}
                  aria-label="Limpiar chat"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-950"
                >
                  <DocumentIcon className="h-5 w-5" />
                </button>
              )}
              <button
                onClick={closeChat}
                aria-label="Cerrar chat"
                className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-950"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
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
