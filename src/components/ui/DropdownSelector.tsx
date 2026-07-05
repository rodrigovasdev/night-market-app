"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export interface DropdownItem {
    id: number;
    name: string;
}

interface DropdownSelectorProps<T extends DropdownItem> {
    items: T[];
    selected: T | null;
    onSelect: (item: T) => void;
    onClear?: () => void;
    textSize?: string;
    placeholder?: string;
    allOptionLabel?: string;
}

export default function DropdownSelector<T extends DropdownItem>({
    items,
    selected,
    onSelect,
    onClear,
    textSize = "text-base",
    placeholder = "Seleccionar",
    allOptionLabel,
}: DropdownSelectorProps<T>) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setOpen(!open)}
                className={`flex items-center gap-2 font-bold ${textSize} hover:opacity-70 transition-opacity cursor-pointer`}
            >
                {selected?.name ?? allOptionLabel ?? placeholder}
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
                <ul className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg min-w-48 z-60 overflow-hidden">
                    {allOptionLabel && selected !== null && (
                        <li>
                            <button
                                className={`w-full cursor-pointer text-left px-5 py-3 font-semibold hover:bg-gray-100 transition-colors`}
                                onClick={() => { onClear?.(); setOpen(false); }}
                            >
                                {allOptionLabel}
                            </button>
                        </li>
                    )}
                    {items
                        .filter((item) => item.id !== selected?.id)
                        .map((item) => (
                            <li key={item.id}>
                                <button
                                    className={`w-full cursor-pointer text-left px-5 py-3 font-semibold hover:bg-gray-100 transition-colors `}
                                    onClick={() => { onSelect(item); setOpen(false); }}
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
}
