import AdvertisementTickets from "@/components/home/AdvertisementTickets";
import HeroSlider from "@/components/home/HeroSlider";
import LatestTickets from "@/components/home/LatestTickets";
import SearchBox from "@/components/home/SearchBox";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <SearchBox />
      <AdvertisementTickets />
      <LatestTickets />
    </>
  );
}