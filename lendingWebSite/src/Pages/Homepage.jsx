import HeroSection from "../components/HeroSection";

import FutureProducts from "../components/FutureProducts";
import TrustSection from "../components/TrustSection";
import SubscribeSection from "../components/SubscribeSection";
// import Footer from "../components/Footer";

export default function Homepage() {
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
