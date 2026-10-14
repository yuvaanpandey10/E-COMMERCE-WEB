import { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      easing: "ease-in-sine",
      delay: 100,
      duration: 800, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
    </div>
  );
};

export default App;
