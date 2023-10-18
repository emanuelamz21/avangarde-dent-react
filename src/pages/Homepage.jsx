import HeroSection from "../components/HeroSection";
import HeritageMainSection from "../components/HeritageMainSection";
import TreatmentsSection from "../components/TreatmentsSection";
import Footer from "../components/Footer";
import HistorySection from "../components/HistorySection";

function Homepage() {
  return (
    <>
      <HeroSection />
      <TreatmentsSection />
      <HeritageMainSection />

      <div className="flex flex-col">
        <HistorySection />
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
