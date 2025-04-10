import OfferCard from "@/app/components/ui/card/OfferCard";

export default function OfferCardsSection() {
    return (

        <div className="w-full h-full py-10 px-8 md:px-30 lg:px-40 bg-gray-200">
            <div className=" w-7/8 mx-auto flex flex-col md:flex-row gap-10 rounded-xl py-10 ">
                <OfferCard href="" title="🔥 Flash Sale" description="Get 20% off this weekend only!" bgColor="bg-coral"/>
                <OfferCard href="" title="🌟 Member Deal" description="Exclusive offer for registered users" bgColor="bg-golden"/>
            </div>
        </div>
    );
}