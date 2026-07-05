"use client";
import Button from "@/components/ui/Button";
import { useUserStore } from "@/store/user.store";
import { toast } from "sonner";

interface UserPanelProps {
    onSuccess: () => void;
}

export default function UserPanel({ onSuccess }: UserPanelProps) {
    const name = useUserStore((state) => state.name);
    const mail = useUserStore((state) => state.mail);
    const clearUser = useUserStore((state) => state.clearUser);

    function handleLogout() {
        clearUser();
        toast.success("Sesión cerrada correctamente");
        onSuccess();
    }

    return (
        <div className="flex flex-col items-center gap-6 md:px-20 py-4">
            <div className="flex flex-col items-center gap-1">
                <div className="w-14 h-14 rounded-full bg-neutral-950 text-white flex items-center justify-center text-2xl font-bold">
                    {name?.charAt(0).toUpperCase()}
                </div>
                <p className="text-lg font-semibold mt-2">{name}</p>
                {mail && <p className="text-sm text-gray-500">{mail}</p>}
            </div>
            <Button
                content="Cerrar sesión"
                width="w-full"
                paddingY="py-3"
                heigth="h-full"
                variant="primary"
                onClick={handleLogout}
            />
        </div>
    );
}
