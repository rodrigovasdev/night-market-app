"use client";

import { io, type Socket } from "socket.io-client";

let socketInstance: Socket | null = null;

export function getChatSocket() {
  if (!socketInstance) {
    socketInstance = io(process.env.NEXT_PUBLIC_SOCKET_URL ?? undefined, {
      autoConnect: true,
      transports: ["websocket"],
    });
  }

  return socketInstance;
}

export const getSocket = getChatSocket;
