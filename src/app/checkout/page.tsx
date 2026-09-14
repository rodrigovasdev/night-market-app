"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCartPanelStore } from "@/store/cart-panel.store";

export default function Checkout() {
    const router = useRouter();
    const openCart = useCartPanelStore((state) => state.openCart);

    useEffect(() => {
        openCart();
        router.replace("/");
    }, [openCart, router]);

    return null;
}
