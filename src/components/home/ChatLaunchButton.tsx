"use client";

import Button from "@/components/ui/Button";
import { useChatStore } from "@/store/chat.store";

export default function ChatLaunchButton() {
  const openChat = useChatStore((s) => s.openChat);

  const handleStartChat = () => {
    openChat();
  };

  return (
    <Button
      type="text"
      content="Abrir Night-Bot"
      width="w-full md:w-3/5 2xl:w-2/5 text-center"
      paddingY="py-3"
      heigth="h-full"
      variant="secondary"
      onClick={handleStartChat}
    />
  );
}
