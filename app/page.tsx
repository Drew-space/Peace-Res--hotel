import About from "@/components/About";
import ExploreRooms from "@/components/ExploreRooms";
import ExquisiteRoom from "@/components/ExquisiteRoom";
import FAQAndFooter from "@/components/FAQAndFooter";
import Hero from "@/components/Hero";
import LuxuryCarousel from "@/components/LuxuryCarousel";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ExquisiteRoom />
      <ExploreRooms />
      <VideoSection />
      <LuxuryCarousel />
      <FAQAndFooter />
    </>
  );
}
