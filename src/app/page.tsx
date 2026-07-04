
import Start from "@/components/home/Start";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import TopSellingProducts from "@/components/home/TopSellingProducts";
import Jumbotron from "@/components/home/Jumbotron";
import OfferCardsSection from "@/components/home/OfferCardsSection";
import NightBotPresentation from "@/components/home/NightBotPresentation";
export default function Home() {
  return (
    <>
      <Start/>
      <TopSellingProducts/>
      <NightBotPresentation />
      <FeaturedProducts/>
      <OfferCardsSection/>
      <Jumbotron/>
    </>
  );
}
