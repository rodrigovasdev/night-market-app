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
        <div className="fixed inset-x-0 top-0 z-100 flex h-dvh w-full flex-col border border-neutral-200 bg-neutral-50 shadow-2xl md:inset-x-auto md:top-auto md:bottom-24 md:right-4 md:h-auto md:w-[min(420px,calc(100vw-2rem))]">
          {/* Panel header */}
          <div className="flex shrink-0 items-center justify-between border-b border-neutral-200 bg-white px-5 py-4 pt-[max(1rem,env(safe-area-inset-top))] md:rounded-t-3xl md:pt-4">
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
          <div className="flex min-h-0 flex-1 flex-col overflow-hidden p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:block md:max-h-[70vh] md:flex-auto md:overflow-y-auto md:p-4">
            <ChatClient />
          </div>
        </div>
      )}

      {/* Floating trigger button */}
      <button
        onClick={toggleChat}
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
        className={`fixed bottom-6 right-4 z-50 ${isOpen ? "hidden md:flex" : "flex"} h-14 w-14 items-center justify-center rounded-full bg-neutral-950 text-white shadow-lg transition hover:bg-neutral-800 active:scale-95`}
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
