"use client";

import { useEffect, useState } from "react";

// Keep content mounted until its 220 ms exit animation finishes.
export default function useAnimatedPresence(isOpen: boolean) {
    const [isPresent, setIsPresent] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setIsPresent(true);
            return;
        }

        const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 220;
        const timeout = window.setTimeout(() => setIsPresent(false), duration);
        return () => window.clearTimeout(timeout);
    }, [isOpen]);

    return { isMounted: isOpen || isPresent, isClosing: !isOpen };
}
