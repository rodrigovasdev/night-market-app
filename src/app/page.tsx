
import Start from "@/app/components/sections/landing/Start";
import FeaturedProducts from "@/app/components/sections/landing/FeaturedProducts";
import TopSellingProducts from "@/app/components/sections/landing/TopSellingProducts";
import Jumbotron from "@/app/components/sections/landing/Jumbotron";
import OfferCardsSection from "@/app/components/sections/landing/OfferCardsSection";
export default function Home() {
  return (
    <>
      <Start/>
      <TopSellingProducts/>
      <FeaturedProducts/>
      <OfferCardsSection/>
      <Jumbotron/>
    </>
  );
}
