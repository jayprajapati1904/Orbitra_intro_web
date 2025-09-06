import HeroSection from "../components/HeroSection";
import FutureProducts from "../components/FutureProducts";
import TrustSection from "../components/TrustSection";
import SubscribeSection from "../components/SubscribeSection";
import { useEffect } from "react";
// import Footer from "../components/Footer";

export default function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <HeroSection />
        <FutureProducts />
        <TrustSection />
        <SubscribeSection />
        {/* <Footer /> */}
      </div>
    </>
  );
}
