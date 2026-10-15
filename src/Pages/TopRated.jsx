import { useEffect } from "react";
import { Link, useOutletContext } from "react-router";
import TopProducts from "../components/TopProducts/TopProducts";
import Subscribe from "../components/Subscribe/Subscribe";

const TopRated = () => {
  const { handleOrderPopup } = useOutletContext();

  useEffect(() => {
    document.title = "Top Rated | Shopsy";
  }, []);

  return (
    <>
      <div className="bg-secondary/20 py-10">
        <div className="container">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500 dark:text-gray-300">
            <Link to="/" className="hover:text-secondary">Home</Link> / <span>Top Rated</span>
          </nav>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Top Rated</h1>
        </div>
      </div>
      <div className="pt-16">
        <TopProducts handleOrderPopup={handleOrderPopup} />
      </div>
      <Subscribe />
    </>
  );
};

export default TopRated;