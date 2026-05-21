interface LoadingProps {
    label?: string;
    size?: "sm" | "md" | "lg";
    className?: string;
}

export default function Loading({ label = "Cargando...", size = "md", className = "" }: LoadingProps) {
    const spinnerSize = size === "sm" ? "h-4 w-4 border-2" : size === "lg" ? "h-8 w-8 border-4" : "h-6 w-6 border-3";

    return (
        <div className={`flex items-center justify-center gap-2 text-sm font-semibold ${className}`} role="status" aria-live="polite">
            <span
                className={`inline-block rounded-full border-neutral-300 border-t-neutral-900 animate-spin ${spinnerSize}`}
                aria-hidden="true"
            />
            <span>{label}</span>
        </div>
    );
}