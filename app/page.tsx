import About from "@/components/About";
import AmenitiesPage from "@/components/Amenities";
import Amenities from "@/components/Amenities";
import ApartmentsSection from "@/components/ApartmentsSection";
import ExploreRooms from "@/components/ExploreRooms";
import ExquisiteRoom from "@/components/ExquisiteRoom";
import FAQAndFooter from "@/components/FAQAndFooter";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LuxuryCarousel from "@/components/LuxuryCarousel";
import ReviewsSection from "@/components/ReviewsSection";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ApartmentsSection />
      {/* <ExquisiteRoom />
      <ExploreRooms /> */}
      {/* <VideoSection /> */}
      <LuxuryCarousel />

      <AmenitiesPage />
      <ReviewsSection />
      <FAQAndFooter />
      <Footer />
    </>
  );
}
