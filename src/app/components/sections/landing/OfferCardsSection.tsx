"use client";

import { useState } from "react";
import OfferCard from "@/app/components/ui/card/OfferCard";
import Container from "@/app/components/ui/Container";
import DemoVersionForm from "@/app/components/ui/DemoVersionForm";
import NewsletterForm from "@/app/components/ui/NewsletterForm";
import PopUpContainer from "@/app/components/ui/PopUpContainer";
import { useUserStore } from "@/store/user.store";

export default function OfferCardsSection() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false);
    const discountSent = useUserStore((state) => state.discountSent);
    const demoContactSent = useUserStore((state) => state.demoContactSent);

    return (
        <Container>
                <div className="mx-auto flex flex-col px-4 md:px-0 md:flex-row gap-10 rounded-xl py-5 ">
                    <OfferCard
                        href=""
                        onClick={() => setIsPopupOpen(true)}
                        title="🔥 Oferta relámpago"
                        description="Obtén 20% de descuento solo este fin de semana."
                        bgColor="bg-coral cursor-pointer"
                    />
                    <OfferCard
                        onClick={() => setIsDemoPopupOpen(true)}
                        title="🌟 Versión demo"
                        description="Demo funcional para portafolio. Haz clic para solicitar más información."
                        bgColor="bg-golden cursor-pointer"
                    />
                </div> 

                {isPopupOpen && (
                    <PopUpContainer onClose={() => setIsPopupOpen(false)}>
                        <div className="w-full md:w-[36rem]">
                            <h2 className="text-center text-2xl font-bold">
                                {discountSent ? "Descuento enviado" : "Recibe tu descuento"}
                            </h2>
                            {discountSent ? (
                                <p className="text-center text-gray-600 pt-3 pb-2">
                                    Ya enviaste este formulario. Revisa tu correo para ver la oferta.
                                </p>
                            ) : (
                                <>
                                    <p className="text-center text-gray-600 pt-2">Completa el formulario y te enviamos la oferta a tu correo.</p>
                                    <NewsletterForm layout="popup" />
                                </>
                            )}
                        </div>
                    </PopUpContainer>
                )}

                {isDemoPopupOpen && (
                    <PopUpContainer onClose={() => setIsDemoPopupOpen(false)}>
                        <div className="w-full md:w-[36rem]">
                            <h2 className="text-center text-2xl font-bold">
                                {demoContactSent ? "Solicitud enviada" : "Solicitar versión demo"}
                            </h2>
                            {demoContactSent ? (
                                <p className="text-center text-gray-600 pt-3 pb-2">
                                    Correo de contacto ya enviado
                                </p>
                            ) : (
                                <>
                                    <p className="text-center text-gray-600 pt-2">
                                        Completa el formulario y te contactamos para ayudarte con un proyecto similar.
                                    </p>
                                    <DemoVersionForm />
                                </>
                            )}
                        </div>
                    </PopUpContainer>
                )}
        </Container>

    );
}