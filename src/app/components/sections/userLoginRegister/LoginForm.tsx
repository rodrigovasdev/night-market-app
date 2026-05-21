"use client";
import React, { useState } from "react";
import Button from "@/app/components/ui/Button";
import FormField from "@/app/components/ui/FormField";
import { createUser } from "@/services/user.service";
import { useUserStore } from "@/store/user.store";
import { toast } from "sonner";

interface LoginFormProps {
    onSuccess: () => void;
}

export default function LoginForm({ onSuccess }: LoginFormProps) {
    const storedName = useUserStore((state) => state.name);
    const storedMail = useUserStore((state) => state.mail);
    const setUser = useUserStore((state) => state.setUser);

    const [name, setName] = useState(storedName || "");
    const [mail, setMail] = useState(storedMail || "");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const user = await createUser(name, mail);
        if (user) {
            toast.success(`¡Bienvenido, ${user.name.split(' ')[0]}!`);
            setUser(user.id, user.name, user.email ?? null);
            onSuccess();
        } else {
            toast.error("Error al crear el usuario");
            onSuccess();
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col h-full max-h-xl mx-auto text-center md:px-20">
            <div className="relative mb-4 flex flex-col gap-3">
                <FormField
                    label="Nombre"
                    id="name"
                    name="name"
                    placeholder="Max Gonzalez"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <FormField
                    label="Correo (opcional)"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="max@correo.cl"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                />
            </div>
            <Button content='Únete' width="w-full" paddingY="py-3" heigth="h-full" variant="primary" />
        </form>
    );
}
