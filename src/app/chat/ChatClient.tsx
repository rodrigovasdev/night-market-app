"use client";

import { useEffect, useRef, useState } from "react";
import type { Socket } from "socket.io-client";
import { SparklesIcon, PencilIcon, InformationCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/outline";
import Button from "@/app/components/ui/Button";
import ChatProductCard from "@/app/components/ui/card/ChatProductCard";
import { getChatSocket } from "@/services/socket.service";

type ChatProduct = {
  id: number;
  name: string;
  shortDescription: string;
  price: number;
  imageUrl: string | null;
};

type MessageRole = "user" | "bot" | "system" | "error";

type Message = {
  id: string;
  role: MessageRole;
  text: string;
  products?: ChatProduct[];
};

type ChatReadyPayload = {
  message: string;
};

type ChatResponse = {
  reply: string;
  products: ChatProduct[];
  timestamp: string;
};

function isProductResponse(payload: ChatResponse) {
  return payload.products.length > 0;
}

function BotAvatar() {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-950 shadow-sm">
      <SparklesIcon className="h-4 w-4 text-white" />
    </span>
  );
}

function MessageBubble({ message }: { message: Message }) {
  if (message.role === "system") {
    return (
      <div className="flex items-center justify-center gap-2 py-1">
        <InformationCircleIcon className="h-4 w-4 shrink-0 text-neutral-400" />
        <p className="text-xs text-neutral-400">{message.text}</p>
      </div>
    );
  }

  if (message.role === "error") {
    return (
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100">
          <ExclamationCircleIcon className="h-4 w-4 text-red-500" />
        </span>
        <p className="rounded-2xl rounded-tl-sm bg-red-50 px-4 py-2.5 text-sm text-red-700 shadow-sm">
          {message.text}
        </p>
      </div>
    );
  }

  if (message.role === "user") {
    return (
      <div className="flex items-end justify-end gap-3">
        <p className="rounded-2xl rounded-br-sm bg-neutral-950 px-4 py-2.5 text-sm text-white shadow-sm">
          {message.text}
        </p>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm">
          <UserIcon className="h-4 w-4 text-neutral-950" />
        </span>
      </div>
    );
  }

  // bot — con o sin productos
  if (message.products && message.products.length > 0) {
    return (
      <div className="flex items-start gap-3">
        <BotAvatar />
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          {message.text ? (
            <p className="rounded-2xl rounded-tl-sm bg-white px-4 py-2.5 text-sm text-neutral-700 shadow-sm">
              {message.text}
            </p>
          ) : null}
          <div className="grid grid-cols-2 gap-2">
            {message.products.map((product) => (
              <ChatProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                imageUrl={product.imageUrl ?? ""}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-end gap-3">
      <BotAvatar />
      <p className="rounded-2xl rounded-bl-sm bg-white px-4 py-2.5 text-sm text-neutral-700 shadow-sm">
        {message.text}
      </p>
    </div>
  );
}

export default function ChatClient() {
  const socketRef = useRef<Socket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isWaitingResponse, setIsWaitingResponse] = useState(false);

  const addMessage = (role: MessageRole, text: string, products?: ChatProduct[]) => {
    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}-${Math.random()}`, role, text, products },
    ]);
  };

  useEffect(() => {
    const socket = getChatSocket();
    socketRef.current = socket;

    const handleReady = (payload: ChatReadyPayload) => {
      addMessage("system", payload.message);
    };

    const handleResponse = (payload: ChatResponse) => {
      setIsWaitingResponse(false);
      addMessage("bot", payload.reply, isProductResponse(payload) ? payload.products : undefined);
    };

    const handleException = (error: { message?: string }) => {
      setIsWaitingResponse(false);
      addMessage("error", error?.message ?? "Error desconocido");
    };

    socket.on("chat:ready", handleReady);
    socket.on("chat:response", handleResponse);
    socket.on("exception", handleException);

    return () => {
      socket.off("chat:ready", handleReady);
      socket.off("chat:response", handleResponse);
      socket.off("exception", handleException);
    };
  }, []);

  const sendMessage = () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    addMessage("user", trimmedInput);
    setIsWaitingResponse(true);
    socketRef.current?.emit("chat:message", { message: trimmedInput });
    setInput("");
  };

  return (
    <div className="grid gap-6">

        <div className="flex min-h-80 flex-col gap-3 rounded-2xl bg-neutral-50">
          {messages.length === 0 ? (
            <p className="text-sm text-neutral-500">Aún no hay mensajes.</p>
          ) : (
            messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))
          )}

          {isWaitingResponse ? (
            <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-950">
                <span className="pencil-writing" aria-hidden="true">
                  <PencilIcon className="h-4 w-4 text-white" />
                </span>
              </span>
              <span className="flex items-center gap-1" aria-hidden="true">
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
              </span>
              <p className="text-sm text-neutral-500">Night-bot está escribiendo...</p>
            </div>
          ) : null}
        </div>

      <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row">
          <input
            id="chat-message"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                sendMessage();
              }
            }}
            placeholder="Escribe tu mensaje"
            className="h-12 py-3 flex-1 rounded-full border border-neutral-300 px-4 text-sm text-neutral-950 outline-none transition focus:border-neutral-950"
          />
          <Button
            type="text"
            content="Enviar"
            variant="primary"
            width="w-full md:w-auto"
            paddingX="px-6"
            paddingY="py-3"
            heigth="h-auto"
            onClick={sendMessage}
            disabled={isWaitingResponse}
          />
        </div>
      </div>
    </div>
  );
}
