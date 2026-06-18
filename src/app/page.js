import AdvertisementTickets from "@/components/home/AdvertisementTickets";
import HeroSlider from "@/components/home/HeroSlider";
import SearchBox from "@/components/home/SearchBox";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <SearchBox />
      <AdvertisementTickets />
    </>
  );
}