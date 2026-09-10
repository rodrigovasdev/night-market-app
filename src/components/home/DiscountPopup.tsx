"use client";

import { useEffect, useState } from "react";
import NewsletterForm from "@/components/ui/NewsletterForm";
import PopUpContainer from "@/components/ui/PopUpContainer";
import { useUserStore } from "@/store/user.store";

const POPUP_DELAY_MS = 10_000;

export default function DiscountPopup() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const discountSent = useUserStore((state) => state.discountSent);
    const discountPopupDismissed = useUserStore((state) => state.discountPopupDismissed);
    const dismissDiscountPopup = useUserStore((state) => state.dismissDiscountPopup);

    useEffect(() => {
        if (discountSent || discountPopupDismissed) return;

        const timeout = window.setTimeout(() => {
            const state = useUserStore.getState();
            if (!state.discountSent && !state.discountPopupDismissed) {
                setIsPopupOpen(true);
            }
        }, POPUP_DELAY_MS);

        return () => window.clearTimeout(timeout);
    }, [discountSent, discountPopupDismissed]);

    if (!isPopupOpen || discountSent || discountPopupDismissed) return null;

    return (
        <PopUpContainer onClose={dismissDiscountPopup}>
            <div className="w-full md:w-[36rem]">
                <h2 className="text-center text-2xl font-bold">Recibe tu descuento</h2>
                <p className="text-center text-gray-600 pt-2">
                    Completa el formulario y te enviamos la oferta a tu correo.
                </p>
                <NewsletterForm layout="popup" />
            </div>
        </PopUpContainer>
    );
}
