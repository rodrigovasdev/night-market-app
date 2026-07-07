"use client";

import Container from "@/components/ui/Container";
import CardContainer from "@/components/ui/CardContainer";
import Button from "@/components/ui/Button";
import { useChatStore } from "@/store/chat.store";
import { ChatBubbleLeftRightIcon, SparklesIcon, BoltIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const features = [
    {
        icon: <SparklesIcon className="w-6 h-6" />,
        title: "Recomendaciones personalizadas",
        description: "Te sugiere productos según tus gustos y búsquedas anteriores.",
    },
    {
        icon: <MagnifyingGlassIcon className="w-6 h-6" />,
        title: "Búsqueda inteligente",
        description: "Encuentra lo que necesitas describiendo el producto con tus palabras.",
    },
    {
        icon: <BoltIcon className="w-6 h-6" />,
        title: "Respuestas instantáneas",
        description: "Resuelve tus dudas sobre stock, precios y envíos al instante.",
    },
];

export default function NightBotPresentation() {
    const openChat = useChatStore((s) => s.openChat);

    return (
        <Container>
            <CardContainer>
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Left: text & button */}
                    <div className="flex-1 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                            <ChatBubbleLeftRightIcon className="w-8 h-8" />
                            <span className="font-semibold tracking-widest uppercase text-sm text-neutral-500">
                                Night-Bot
                            </span>
                        </div>
                        <h2 className="font-bold text-3xl md:text-4xl leading-tight mb-5">
                            Tu asistente de compras inteligente
                        </h2>
                        <p className="text-neutral-500 text-base md:text-lg mb-8 max-w-lg mx-auto md:mx-0">
                            Night-Bot está disponible 24/7 para ayudarte a encontrar los mejores productos, resolver tus dudas y hacer tu experiencia de compra más fácil que nunca.
                        </p>
                        <Button
                            type="text"
                            content="Hablar con Night-Bot"
                            variant="primary"
                            width="w-full md:w-auto text-center"
                            paddingY=""
                            paddingX="px-8"
                            onClick={openChat}
                        />
                    </div>

                    {/* Right: feature cards */}
                    <div className="flex-1 flex flex-col gap-4 w-full">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="flex items-start gap-4 border border-gray-200 px-5 py-4"
                            >
                                <div className="shrink-0 mt-0.5">{feature.icon}</div>
                                <div>
                                    <p className="font-semibold text-sm mb-1">{feature.title}</p>
                                    <p className="text-neutral-500 text-sm">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContainer>
        </Container>
    );
}
