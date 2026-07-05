import ChatClient from "@/components/chat/ChatClient";

export default function ChatPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-6 px-6 py-16">
      <span className="w-fit rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-700">
        Chat en tiempo real
      </span>
      <div className="grid gap-2">
        <h1 className="text-4xl font-semibold text-neutral-950">Sala de chat</h1>
        <p className="max-w-2xl text-base text-neutral-600">
          Esta vista escucha <strong>chat:ready</strong> y <strong>chat:response</strong>, envía <strong>chat:message</strong> y permite reiniciar con <strong>chat:reset</strong>.
        </p>
      </div>
      <ChatClient />
    </main>
  );
}
