"use client";
import Container from "@/app/components/ui/Container"
import CardContainer from "@/app/components/ui/CardContainer"
import EnvelopeIcon from "@heroicons/react/24/outline/EnvelopeIcon"
import { useUserStore } from '@/store/user.store'
import NewsletterForm from "@/app/components/ui/NewsletterForm"

export default function Jumbotron() {
    const rawName = useUserStore((state) => state.name) || 'Invitado';
    const discountSent = useUserStore((state) => state.discountSent);
    const name = rawName.split(' ')[0].toUpperCase();
    return (
        <Container>
            <CardContainer>
                <EnvelopeIcon className="w-10 h-10 mx-auto"/>
                <h1 className="font-bold text-3xl md:text-4xl text-center w-4/5 md:w-3/5 mx-auto py-5 ">
                    {discountSent ? "Descuento enviado" : `${name}, MANTENTE AL DÍA`}
                </h1>
                {!discountSent && (
                    <>
                        <p className="font-medium text-lg md:text-lg text-center w-4/5 md:w-3/5 mx-auto py-5" >¡Dinos tu correo para recibir las mejores ofertas!</p>
                        <NewsletterForm />
                    </>
                )}
            </CardContainer>
        </Container>
    )
}