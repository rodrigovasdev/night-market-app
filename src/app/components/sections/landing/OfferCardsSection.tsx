import OfferCard from "@/app/components/ui/card/OfferCard";
import Container from "@/app/components/ui/Container";

export default function OfferCardsSection() {
    return (
        <Container>
                <div className="mx-auto flex flex-col px-4 md:px-0 md:flex-row gap-10 rounded-xl py-5 ">
                    <OfferCard href="" title="🔥 Flash Sale" description="Get 20% off this weekend only!" bgColor="bg-coral"/>
                    <OfferCard href="" title="🌟 Member Deal" description="Exclusive offer for registered users" bgColor="bg-golden"/>
                </div> 
        </Container>

    );
}