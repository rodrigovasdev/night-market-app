
import Start from "@/components/home/Start";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import TopSellingProducts from "@/components/home/TopSellingProducts";
import Jumbotron from "@/components/home/Jumbotron";
import DiscountPopup from "@/components/home/DiscountPopup";
import NightBotPresentation from "@/components/home/NightBotPresentation";
export default function Home() {
  return (
    <>
      <Start/>
      <TopSellingProducts/>
      <NightBotPresentation />
      <FeaturedProducts/>
      <DiscountPopup/>
      <Jumbotron/>
    </>
  );
}
