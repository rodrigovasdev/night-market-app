"use client";
import { useEffect, useState } from "react";
import Button from "@/app/components/ui/Button";
import FormField from "@/app/components/ui/FormField";
import Loading from "@/app/components/ui/Loading";
import { sendDiscountMail } from "@/services/mail.service";
import { useUserStore } from "@/store/user.store";

interface NewsletterFormProps {
    onSubmit?: (data: { name?: string; email: string }) => void;
    layout?: "default" | "popup";
}

export default function NewsletterForm({ onSubmit, layout = "default" }: NewsletterFormProps) {
    const storedName = useUserStore((state) => state.name);
    const setDiscountSent = useUserStore((state) => state.setDiscountSent);
    const isLoggedIn = storedName !== null;
    const storedMail = useUserStore((state) => state.mail);
    const [email, setEmail] = useState(storedMail ?? "");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const isPopupLayout = layout === "popup";

    const formWidthClass = isPopupLayout ? "w-full md:w-11/12" : "w-4/5 md:w-3/5";
    const fieldWidthClass = isPopupLayout ? "w-full" : "w-1/2";
    const buttonWidth = isPopupLayout ? "w-full" : "w-1/2";

    useEffect(() => {
        if (storedMail) {
            setEmail(storedMail);
        }
    }, [storedMail]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (isSubmitting) return;

        const form = e.currentTarget;
        const nameInput = form.elements.namedItem("name") as HTMLInputElement | null;
        const username = (nameInput?.value ?? storedName ?? "").trim();

        setIsSubmitting(true);
        try {
            await sendDiscountMail({ username, email });
            setDiscountSent(true);
            onSubmit?.({ name: username, email });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className={`${formWidthClass} mx-auto`}>
            <div className="flex flex-col gap-1 py-5 items-center">
                {!isLoggedIn && (
                    <FormField
                        label="Nombre"
                        id="name"
                        name="name"
                        required
                        disabled={isSubmitting}
                        placeholder="Max Gonzalez"
                        className={fieldWidthClass}
                    />
                )}
                <FormField
                    label="Correo"
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={isSubmitting}
                    placeholder="max@correo.cl"
                    className={`${fieldWidthClass} mb-4`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                    content={isSubmitting ? "Enviando..." : "Enviar"}
                    width={buttonWidth}
                    paddingY="py-3"
                    heigth="h-full"
                    variant="primary"
                    disabled={isSubmitting}
                />
                {isSubmitting && <Loading label="Enviando descuento..." className="mt-3" />}
            </div>
        </form>
    );
}
