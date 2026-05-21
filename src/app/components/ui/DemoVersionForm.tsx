"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import Button from "@/app/components/ui/Button";
import FormField from "@/app/components/ui/FormField";
import Loading from "@/app/components/ui/Loading";
import { sendDemoVersionMail } from "@/services/mail.service";
import { useUserStore } from "@/store/user.store";
import { NAME_FIELD, EMAIL_FIELD } from "@/utils/formFields.constants";

interface DemoVersionFormProps {
    onSuccess?: () => void;
}

export default function DemoVersionForm({ onSuccess }: DemoVersionFormProps) {
    const storedName = useUserStore((state) => state.name);
    const storedMail = useUserStore((state) => state.mail);
    const setDemoContactSent = useUserStore((state) => state.setDemoContactSent);

    const hasName = !!storedName;
    const hasMail = !!storedMail;

    const [name, setName] = useState(storedName ?? "");
    const [email, setEmail] = useState(storedMail ?? "");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (storedName) setName(storedName);
        if (storedMail) setEmail(storedMail);
    }, [storedName, storedMail]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (isSubmitting) return;

        const username = (storedName ?? name).trim();
        const userEmail = (storedMail ?? email).trim();

        if (!username || !userEmail) {
            toast.error(
                !username
                    ? "Completa nombre y correo para enviar el formulario."
                    : "Ingresa tu correo para continuar."
            );
            return;
        }

        setIsSubmitting(true);
        try {
            await sendDemoVersionMail({ username, email: userEmail });
            setDemoContactSent(true);
            toast.success("Solicitud enviada correctamente.");
            onSuccess?.();
        } catch {
            toast.error("No se pudo enviar la solicitud. Intenta nuevamente.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full md:w-11/12 mx-auto">
            <div className="flex flex-col gap-2 py-4 items-center">
                {hasName && hasMail ? null : hasName ? (
                    <>
                        <div className="w-full rounded-xl bg-neutral-100 p-4">
                            <p className="text-base font-semibold">{storedName}</p>
                        </div>
                        <FormField
                            {...EMAIL_FIELD}
                            id="demo-email"
                            required
                            disabled={isSubmitting}
                            className="w-full mb-1"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </>
                ) : (
                    <>
                        <FormField
                            {...NAME_FIELD}
                            id="demo-name"
                            required
                            disabled={isSubmitting}
                            className="w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <FormField
                            {...EMAIL_FIELD}
                            id="demo-email"
                            required
                            disabled={isSubmitting}
                            className="w-full mb-1"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </>
                )}

                <Button
                    content={isSubmitting ? "Enviando..." : "Enviar"}
                    width="w-full"
                    paddingY="py-3"
                    heigth="h-full"
                    variant="primary"
                    disabled={isSubmitting}
                />
                {isSubmitting && <Loading label="Enviando solicitud..." className="mt-2" />}
            </div>
        </form>
    );
}