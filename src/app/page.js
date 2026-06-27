import AdvertisementTickets from "@/components/home/AdvertisementTickets";
import FAQSection from "@/components/home/FAQSection";
import HeroSlider from "@/components/home/HeroSlider";
import LatestTickets from "@/components/home/LatestTickets";
import PopularRoutes from "@/components/home/PopularRoutes";
import SearchBox from "@/components/home/SearchBox";
import TicketBariCTA from "@/components/home/TicketBariCTA";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <SearchBox />
      <AdvertisementTickets />
      <PopularRoutes />
      <LatestTickets />
      <WhyChooseUs /> 
      <FAQSection />
      <TicketBariCTA />
    </>
  );
}