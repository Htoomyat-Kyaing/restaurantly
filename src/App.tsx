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
      <Chefs />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
