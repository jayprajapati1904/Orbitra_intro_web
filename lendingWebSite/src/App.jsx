import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./Pages/ContactUs";
import Products from "./Pages/Products";
import AboutUs from "./Pages/AboutUs";

export default function App() {
  return (
    <Router>
      {/* 🌟 Global Background Glow */}
      <div className="page-background"></div>

      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Contactus" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}
