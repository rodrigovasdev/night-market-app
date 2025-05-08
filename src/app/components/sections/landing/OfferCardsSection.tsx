import OfferCard from "@/app/components/ui/card/OfferCard";
import Container from "../../ui/Container";
export default function OfferCardsSection() {
    return (
        <Container bgClass="bg-gray-200 border-0">
            <div className="w-full mx-auto flex flex-col md:flex-row gap-10 rounded-xl py-10 ">
                <OfferCard href="" title="🔥 Flash Sale" description="Get 20% off this weekend only!" bgColor="bg-coral"/>
                <OfferCard href="" title="🌟 Member Deal" description="Exclusive offer for registered users" bgColor="bg-golden"/>
            </div>
        </Container>

    );
}