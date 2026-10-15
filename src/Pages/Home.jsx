import { useEffect } from "react";
import { useOutletContext } from "react-router";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import TopProducts from "../components/TopProducts/TopProducts";
import Banner from "../components/Banner/Banner";
import Subscribe from "../components/Subscribe/Subscribe";
import Products2 from "../components/Products/Products2";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  const { handleOrderPopup } = useOutletContext();

  useEffect(() => {
    document.title = "Shopsy | Fashion & Lifestyle";
  }, []);

  return (
    <>
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Products2 />
      <Testimonials />
    </>
  );
};

export default Home;