"use client";

import useAnimatedPresence from "@/hooks/useAnimatedPresence";
import Button from "./Button";
import { XMarkIcon } from "@heroicons/react/24/solid";
interface OffCanvaProps {
    onClick: () => void;
    isOpen: boolean;
    title: string;
    children?: React.ReactNode;
}
export default function OffCanva(props: OffCanvaProps) {
    const { onClick, isOpen, title, children} = props;
    const { isMounted, isClosing } = useAnimatedPresence(isOpen);

    if (!isMounted) return null;

    return (
        <>
            <div
                inert={isClosing}
                className={`fixed inset-0 z-90 bg-black/50 ${isClosing ? "popup-backdrop-exit" : "popup-backdrop-enter"}`}
                onClick={onClick}
            />

            <div
                inert={isClosing}
                className={`fixed top-0 right-0 z-100 w-full md:w-1/4 h-dvh bg-white ${isClosing ? "menu-sidebar-exit" : "menu-sidebar-enter"}`}
            >
                <div className="flex justify-between p-4 border-b border-gray-200">
                    <h1 className="font-bold text-lg my-auto">{title}</h1>
                    <Button type="icon" onClick={onClick} border="border-none" paddingY="py-0" paddingX="px-0" width="w-6" heigth="h-6">
                        <XMarkIcon className="w-7 h-7" />
                    </Button>
                </div>
                {children}
            </div>
        </>
    );
}
