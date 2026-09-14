"use client";

import { useEffect, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useCartPanelStore } from "@/store/cart-panel.store";
import useAnimatedPresence from "@/hooks/useAnimatedPresence";
import CartContent from "./CartContent";

export default function CartSidebar() {
    const { isOpen, closeCart } = useCartPanelStore();
    const { isMounted, isClosing } = useAnimatedPresence(isOpen);
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!isMounted || !dialog) return;

        const previouslyFocused = document.activeElement;
        const previousOverflow = document.body.style.overflow;
        dialog.showModal();
        document.body.style.overflow = "hidden";

        return () => {
            dialog.close();
            document.body.style.overflow = previousOverflow;
            if (previouslyFocused instanceof HTMLElement && previouslyFocused.isConnected) {
                previouslyFocused.focus();
            }
        };
    }, [isMounted]);

    if (!isMounted) return null;

    return (
        <dialog
            ref={dialogRef}
            aria-labelledby="cart-sidebar-title"
            className={`cart-sidebar fixed inset-y-0 left-auto right-0 m-0 h-dvh max-h-none w-full max-w-xl border-0 bg-white p-0 text-neutral-950 shadow-2xl ${isClosing ? "cart-sidebar-exit" : "cart-sidebar-enter"}`}
            onCancel={(event) => {
                event.preventDefault();
                closeCart();
            }}
            onClick={(event) => {
                if (event.target !== event.currentTarget) return;
                const bounds = event.currentTarget.getBoundingClientRect();
                if (event.clientX < bounds.left || event.clientX > bounds.right) closeCart();
            }}
        >
            <div className="flex h-full flex-col" inert={isClosing}>
                <div className="flex shrink-0 items-center justify-between border-b border-gray-200 px-6 py-4">
                    <h2 id="cart-sidebar-title" className="text-xl font-bold">Carrito de compras</h2>
                    <button
                        type="button"
                        onClick={closeCart}
                        aria-label="Cerrar carrito"
                        className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100"
                    >
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>
                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
                    <CartContent onClose={closeCart} />
                </div>
            </div>
        </dialog>
    );
}
