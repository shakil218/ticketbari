import AboutHero from '@/components/about/AboutHero';
import OurStory from '@/components/about/OurStory';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import PlatformStatistics from '@/components/about/PlatformStatistics';
import HowItWorks from '@/components/about/HowItWorks';
import FAQSection from "@/components/home/FAQSection";
import TicketBariCTA from "@/components/home/TicketBariCTA";

const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <OurStory />
      <WhyChooseUs />
      <PlatformStatistics />
      <HowItWorks />
      <FAQSection />
      <TicketBariCTA />
    </div>
  );
};

export default AboutPage;