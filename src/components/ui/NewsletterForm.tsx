"use client";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import FormField from "@/components/ui/FormField";
import Loading from "@/components/ui/Loading";
import { sendDiscountMail } from "@/services/mail.service";
import { useUserStore } from "@/store/user.store";
import { NAME_FIELD, EMAIL_FIELD } from "@/utils/formFields.constants";

interface NewsletterFormProps {
    onSubmit?: (data: { name?: string; email: string }) => void;
    layout?: "default" | "popup";
}

export default function NewsletterForm({ onSubmit, layout = "default" }: NewsletterFormProps) {
    const storedName = useUserStore((state) => state.name);
    const storedMail = useUserStore((state) => state.mail);
    const setDiscountSent = useUserStore((state) => state.setDiscountSent);

    const hasName = !!storedName;
    const hasMail = !!storedMail;

    const [name, setName] = useState(storedName ?? "");
    const [email, setEmail] = useState(storedMail ?? "");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const isPopupLayout = layout === "popup";

    const formWidthClass = isPopupLayout ? "w-full md:w-11/12" : "w-4/5 md:w-3/5";
    const fieldWidthClass = isPopupLayout ? "w-full" : "w-full md:w-1/2";
    const buttonWidth = isPopupLayout ? "w-full" : "w-full md:w-1/2";

    useEffect(() => {
        if (storedName) setName(storedName);
        if (storedMail) setEmail(storedMail);
    }, [storedName, storedMail]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (isSubmitting) return;

        const username = (storedName ?? name).trim();
        const userEmail = (storedMail ?? email).trim();

        setIsSubmitting(true);
        try {
            await sendDiscountMail({ username, email: userEmail });
            setDiscountSent(true);
            onSubmit?.({ name: username, email: userEmail });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className={`${formWidthClass} mx-auto`}>
            <div className="flex flex-col gap-1 py-5 items-center">
                {hasName && hasMail ? null : hasName ? (
                    <>
                        <div className={`${fieldWidthClass} rounded-xl bg-neutral-100 px-5 py-3`}>
                            <p className="text-base font-semibold">{storedName}</p>
                        </div>
                        <FormField
                            {...EMAIL_FIELD}
                            id="email"
                            required
                            disabled={isSubmitting}
                            className={`${fieldWidthClass} mb-4`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </>
                ) : (
                    <>
                        <FormField
                            {...NAME_FIELD}
                            id="name"
                            required
                            disabled={isSubmitting}
                            className={fieldWidthClass}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <FormField
                            {...EMAIL_FIELD}
                            id="email"
                            required
                            disabled={isSubmitting}
                            className={`${fieldWidthClass} mb-4`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </>
                )}
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
