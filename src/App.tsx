import About from "./components/About";
import Chefs from "./components/Chefs";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import Special from "./components/Special";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";

export default function App() {
  return (
    <>
      <Home />
      <About />
      <WhyUs />
      <Menu />
      <Special />
      <Events />
      <Reservation />
      <Testimonials />
      <Gallery />
      <Chefs />
      <Contact />
      <Footer />
    </>
  );
}
