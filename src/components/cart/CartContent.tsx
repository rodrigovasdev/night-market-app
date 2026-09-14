"use client";
import { useEffect, useState } from "react";
import CheckoutCard from "@/components/ui/card/CheckoutCard";
import { ShoppingCartIcon, ShoppingBagIcon} from "@heroicons/react/24/solid";
import Button from "@/components/ui/Button";
import FormField from "@/components/ui/FormField";
import PopUpLogin from "@/components/auth/PopUpLogin";
import PopUpContainer from "@/components/ui/PopUpContainer";
import Loading from "@/components/ui/Loading";
import { useCartStore } from "@/store/cart.store";
import { syncCart, checkoutCart, CartCalculation } from "@/services/cart.service";
import { useUserStore } from "@/store/user.store";
import { formatPriceCLP } from "@/utils/formatPrice";
import { toast } from "sonner";

export default function CartContent({ onClose }: { onClose: () => void }) {
    const items = useCartStore((state) => state.items);
    const itemCount = useCartStore((state) => state.itemCount);
    const clearCart = useCartStore((state) => state.clearCart);
    const userId = useUserStore((state) => state.id);
    const isLoggedIn = useUserStore((state) => state.name) !== null;
    const [calculation, setCalculation] = useState<CartCalculation | null>(null);
    const [discountCode, setDiscountCode] = useState("");
    const [appliedDiscountCode, setAppliedDiscountCode] = useState<string | undefined>(undefined);
    const [showThanksMessage, setShowThanksMessage] = useState(false);
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [showPurchaseSuccessPopup, setShowPurchaseSuccessPopup] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [checkoutError, setCheckoutError] = useState<string | null>(null);
    const isDiscountApplied = Boolean(calculation?.discountApplied);
    const canApplyDiscount = discountCode.trim().length > 0;

    useEffect(() => {
        let cancelled = false;
        syncCart(items, appliedDiscountCode).then((result) => {
            if (!cancelled) setCalculation(result);
        });
        return () => { cancelled = true; };
    }, [items, appliedDiscountCode]);

    async function handleApplyDiscount() {
        if (isDiscountApplied) {
            setShowThanksMessage((prev) => !prev);
            return;
        }

        const normalizedCode = discountCode.trim() || undefined;
        setShowThanksMessage(false);

        if (!normalizedCode) {
            setAppliedDiscountCode(undefined);
            const nextCalculation = await syncCart(items);
            setCalculation(nextCalculation);
            return;
        }

        const nextCalculation = await syncCart(items, normalizedCode);
        setCalculation(nextCalculation);

        if (nextCalculation?.discountApplied) {
            setAppliedDiscountCode(normalizedCode);
            return;
        }

        setAppliedDiscountCode(undefined);
        toast.error("El codigo de descuento es invalido o ya fue utilizado.");
    }

    const hasItems = itemCount > 0;
    const title = hasItems ? 'TU CARRITO' : 'NO TIENES PRODUCTOS EN EL CARRITO';
    const text = itemCount === 1 ? 'producto' : 'productos';
    const userMail = useUserStore((state) => state.mail); // Obtener correo del usuario

    async function handlePrimaryCheckoutAction() {
        if (!isLoggedIn) {
            setShowLoginPopup(true);
            return;
        }

        if (!userId) {
            return;
        }

        const payload = {
            userId,
            discount: appliedDiscountCode,
            items: items.map((item) => ({
                productId: item.id,
                quantity: item.quantity,
            })),
        };

        setIsLoading(true);
        setCheckoutError(null);
        setShowPurchaseSuccessPopup(true);

        const isCheckoutOk = await checkoutCart(payload);
        if (isCheckoutOk) {
            clearCart();
            setCheckoutError(null);
        } else {
            setCheckoutError("Algo ocurrió durante la compra. Por favor, intenta nuevamente.");
        }
        setIsLoading(false);
    }

    async function handleGuestCheckout() {
        const payload = {
            userId: -1,
            guestName: "Invitado",
            discount: appliedDiscountCode,
            items: items.map((item) => ({
                productId: item.id,
                quantity: item.quantity,
            })),
        };

        setIsLoading(true);
        setCheckoutError(null);
        setShowPurchaseSuccessPopup(true);

        const isCheckoutOk = await checkoutCart(payload);
        if (isCheckoutOk) {
            clearCart();
            setCheckoutError(null);
        } else {
            setCheckoutError("Algo ocurrió durante la compra. Por favor, intenta nuevamente.");
        }
        setIsLoading(false);
    }

    function handleClosePurchaseSuccessPopup() {
        if (isLoading) return;
        setShowPurchaseSuccessPopup(false);
        if (!checkoutError) onClose();
        setCheckoutError(null);
    }

    return (
        <div className="w-full flex flex-col gap-6 p-4 sm:p-6 bg-white">
            {showLoginPopup && <PopUpLogin onClick={() => setShowLoginPopup(false)} />}
            {showPurchaseSuccessPopup && (
                <PopUpContainer onClose={handleClosePurchaseSuccessPopup}>
                    {isLoading ? (
                        <div className="flex items-center justify-center p-8">
                            <Loading />
                        </div>
                    ) : checkoutError ? (
                        <div className="px-4 pb-2 max-w-md">
                            <p className="text-base text-red-600 mb-6 font-semibold">
                                {checkoutError}
                            </p>
                            <Button
                                content="Intentar de nuevo"
                                variant="primary"
                                width="w-full"
                                paddingY="py-3"
                                heigth="h-full"
                                onClick={handleClosePurchaseSuccessPopup}
                            />
                        </div>
                    ) : (
                        <div className="px-4 pb-2 max-w-md">
                            <p className="text-base text-gray-700 mb-6">
                                La compra ha sido exitosa
                                {userMail && ` y se ha enviado un correo con el detalle.`}
                            </p>
                            <Button
                                content="Aceptar"
                                variant="primary"
                                width="w-full"
                                paddingY="py-3"
                                heigth="h-full"
                                onClick={handleClosePurchaseSuccessPopup}
                            />
                        </div>
                    )}
                </PopUpContainer>
            )}
            <div className="min-w-0">
                <div className="flex w-full mx-auto flex-col border-1 border-gray-300">
                    <div className="flex px-4 py-4 items-center justify-between border-b-1 border-gray-300 md:border-0">
                        <div className="flex flex-wrap gap-2 items-center">
                            <h1 className="font-bold text-2xl ">{title}</h1>
                            {hasItems &&
                            <h4 className="text-sm ">{itemCount} {text}</h4>
                            }
                        </div>
                        <ShoppingCartIcon className={`w-8 h-8 text-neutral-950`} />
                    </div>
                    <div className="flex flex-col py-3 gap-3 px-2  pb-10">
                        {items.map((product) => {
                            const subtotal = calculation?.detail.find((d) => d.productId === product.id)?.subtotal;
                            return <CheckoutCard key={product.id} product={product} subtotal={subtotal} onNavigate={onClose} />;
                        })}
                    </div>
                </div>
            </div>
            
            {
                hasItems && (
                    <div className="min-w-0">
                        <div className="flex w-full mx-auto flex-col border-1 border-gray-300">
                            <div className="flex px-4 py-5 items-center justify-between">
                                <h1 className="font-bold text-2xl">RESUMEN DE COMPRA</h1>
                                <ShoppingBagIcon className={`w-8 h-8 text-neutral-950`} />
                            </div>
                            <div className="flex flex-col px-4 pb-5">
                                <div className="flex justify-between">
                                    <span className="">{itemCount} {itemCount === 1 ? 'producto' : 'productos'}</span> 
                                    <span className="">{calculation ? formatPriceCLP(calculation.totalValue) : '—'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="">Envío</span> 
                                    <span className="">Gratis</span>
                                </div>
                            </div>
                            <div className="flex justify-between px-4">
                                <span className="font-semibold">Total</span> 
                                <span className="font-semibold">{calculation ? formatPriceCLP(calculation.totalValue) : '—'}</span>
                            </div>
                            <div className="px-4 pt-6 flex flex-col gap-3">
                                <FormField
                                    label="Codigo de descuento"
                                    id="discountCode"
                                    name="discountCode"
                                    placeholder="SUMMER10"
                                    disabled={isDiscountApplied}
                                    value={discountCode}
                                    onChange={(e) => setDiscountCode(e.target.value)}
                                />
                                <Button
                                    content={
                                        isDiscountApplied
                                            ? (showThanksMessage ? "Gracias por su preferencia" : "Descuento aplicado")
                                            : "Aplicar descuento"
                                    }
                                    width="w-full"
                                    variant={isDiscountApplied ? "success" : "secondary"}
                                    onClick={handleApplyDiscount}
                                    disabled={!isDiscountApplied && !canApplyDiscount}
                                />
                            </div>
                            <div className="px-4 flex flex-col gap-3 py-5">
                                <Button
                                    content={isLoggedIn ? "Comprar" : "Registrarse"}
                                    width="w-full"
                                    variant="primary"
                                    onClick={handlePrimaryCheckoutAction}
                                    disabled={isLoading}
                                />
                                {
                                !isLoggedIn && (
                                    <Button
                                        content="Comprar como invitado"
                                        width="w-full"
                                        variant="secondary"
                                        onClick={handleGuestCheckout}
                                        disabled={isLoading}
                                    />
                                )
                                }
                            </div>
                            
                        </div>
                    </div>
                )
            }
                
        </div>
    );
}