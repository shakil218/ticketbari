import AdvertisementTickets from "@/components/home/AdvertisementTickets";
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
      <LatestTickets />
      <PopularRoutes />
      <AdvertisementTickets />
      <WhyChooseUs /> 
      <TicketBariCTA />
    </>
  );
}