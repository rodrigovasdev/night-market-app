import Button from "@/app/components/ui/Button";
import PopUpContainer from "@/app/components/ui/PopUpContainer";

interface ConfirmDeletePopUpProps {
    productName: string;
    onConfirm: () => void;
    onCancel: () => void;
}

export default function ConfirmDeletePopUp({ productName, onConfirm, onCancel }: ConfirmDeletePopUpProps) {
    return (
        <PopUpContainer onClose={onCancel}>
            <div className="px-4 pb-2">
                <p className="text-base text-gray-700 mb-6">
                    ¿Deseas eliminar <span className="font-semibold">{productName}</span> del carrito?
                </p>
                <div className="flex gap-3 justify-between">
                    <Button
                        content="Cancelar"
                        variant="secondary"
                        width="w-1/2"
                        paddingY="py-3"
                        heigth="h-full"
                        onClick={onCancel}
                    />
                    <Button
                        content="Eliminar"
                        variant="danger"
                        width="w-1/2"
                        paddingY="py-3"
                        heigth="h-full"
                        onClick={onConfirm}
                    />
                </div>
            </div>
        </PopUpContainer>
    );
}
