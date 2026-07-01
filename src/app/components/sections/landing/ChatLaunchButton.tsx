"use client";

import { useRouter } from "next/navigation";
import Button from "@/app/components/ui/Button";
import { getChatSocket } from "@/services/socket.service";

export default function ChatLaunchButton() {
  const router = useRouter();

  const handleStartChat = () => {
    const socket = getChatSocket();

    socket.emit("chat:message", {
      message: "Hola, quiero iniciar el chat.",
    });

    router.push("/chat");
  };

  return (
    <Button
      type="text"
      content="Ir al chat"
      width="w-full md:w-3/5 2xl:w-2/5 text-center"
      paddingY="py-3"
      heigth="h-full"
      variant="secondary"
      onClick={handleStartChat}
    />
  );
}
