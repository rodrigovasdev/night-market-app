import CardContainer from "@/components/ui/CardContainer";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useCartStore, CartItem } from "@/store/cart.store";
import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";
import ConfirmDeletePopUp from "@/components/ui/ConfirmDeletePopUp";
import { formatPriceCLP } from "@/utils/formatPrice";

interface CheckoutCardProps {
    product: CartItem;
    subtotal?: number;
    onNavigate?: () => void;
}

export default function CheckoutCard({ product, subtotal, onNavigate }: CheckoutCardProps) {
    const mainImage = product.images.find((img) => img.isMain)?.url ?? product.images[0]?.url ?? '/assets/ecommerce.jpg';
    const removeItem = useCartStore((state) => state.removeItem);
    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const [showConfirm, setShowConfirm] = useState(false);

    function handleConfirmDelete() {
        removeItem(product.id);
        toast.info(`"${product.name}" eliminado del carrito`);
        setShowConfirm(false);
    }

    return(
        <>
        {showConfirm && (
            <ConfirmDeletePopUp
                productName={product.name}
                onConfirm={handleConfirmDelete}
                onCancel={() => setShowConfirm(false)}
            />
        )}
        <CardContainer width="w-full" rounded="md:rounded-xl" padding="p-0" bgClass="hover:cursor-pointer hover:shadow-lg hover:border-1 hover:border-gray-900 transition duration-200 ease-in-out bg-white border-b-1 md:border-1 border-gray-300">
                    <div className="flex justify-between">
                        <Link href={'/products/'+product.id} onClick={onNavigate} className="min-w-0 flex-1 flex flex-col sm:flex-row gap-3 p-2.5 cursor-pointer">
                            <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-lg">
                                <Image
                                    className="object-cover"
                                    src={mainImage}
                                    alt={product.name}
                                    fill
                                    sizes="80px"
                                />
                            </div>
                            <div className="flex min-w-0 flex-col gap-2 my-auto break-words">
                                <h1 className="text-base font-bold text-left">{product.name}</h1>
                                <span className="text-gray-500 text-sm">{product.shortDescription}</span>
                            </div>
                        </Link>
                       
                        <div className="flex w-28 shrink-0 flex-col justify-between py-2">
                            <div className="order-2 my-auto mx-auto">
                                <input
                                    aria-label={`Cantidad de ${product.name}`}
                                    type="number"
                                    min={1}
                                    value={product.quantity}
                                    onChange={(e) => updateQuantity(product.id, Number(e.target.value))}
                                    className="w-15 py-2 text-center bg-white border-1 border-gray-300 rounded-xl"
                                />
                            </div>

                            <span className="order-3 font-semibold my-auto mx-auto">
                                {formatPriceCLP(subtotal !== undefined ? subtotal : product.price * product.quantity)}
                            </span>

                            <div className="order-1 my-auto flex justify-end">
                                <div className="flex flex-col gap-1 px-1">
                                    <Button type="icon" width="w-10" paddingX="px-2.5" border="border-none" onClick={() => setShowConfirm(true)}>
                                        <XMarkIcon className={`w-5 h-5 text-neutral-950`} />
                                    </Button>
                                    {/* <Button type="icon" width="w-10" paddingX="px-2.5" border="border-none">
                                        <HeartIcon className={`w-5 h-5 text-neutral-950`} />
                                    </Button> */}
                                </div>
                            </div>

                        </div>

                    </div>
                </CardContainer>
        </>
    )
}