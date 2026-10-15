import { Link } from "react-router";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  { id: 1, img: Img2, title: "Women Western", rating: 4.5, author: "Red", aosDelay: "0", categories: ["trending", "best-selling"] },
  { id: 2, img: Img3, title: "Printed T-shirt", rating: 4.4, author: "Yellow", aosDelay: "200", categories: ["mens-wear", "trending"] },
  { id: 3, img: Img1, title: "Women Ethnic", rating: 5, author: "White", aosDelay: "400", isCutout: true, categories: ["trending", "best-selling"] },
  { id: 4, img: Img4, title: "Goggles", rating: 4.7, author: "Brown", aosDelay: "600", categories: ["electronics", "best-selling"] },
];

const Products2 = ({ category, query = "" }) => {
  const normalizedQuery = query.trim().toLowerCase();
  const products = ProductsData.filter((product) => {
    const matchesCategory =
      !category || category === "all" || product.categories.includes(category);
    const matchesQuery =
      !normalizedQuery ||
      `${product.title} ${product.author}`.toLowerCase().includes(normalizedQuery);
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-150 mx-auto">
          <p data-aos="fade-up" className="text-sm text-secondary">
            Featured Products
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Product Examples
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Sample products and ratings for this storefront demo.
          </p>
        </div>
        {/* Body section */}
        {products.length === 0 ? (
          <p className="py-10 text-center text-gray-500 dark:text-gray-300" role="status">
            No products match this selection.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
              {products.map((data) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={data.id}
                  className="w-full max-w-55 space-y-3"
                >
                  <div
                    className={`aspect-square overflow-hidden rounded-md ${
                      data.isCutout
                        ? "bg-linear-to-br from-rose-300 via-pink-400 to-fuchsia-500"
                        : ""
                    }`}
                  >
                    <img
                      src={data.img}
                      alt={data.title}
                      loading="lazy"
                      className={`h-full w-full ${
                        data.isCutout ? "object-contain scale-125" : "object-cover"
                      }`}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-600">{data.author}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span className="text-gray-600 ml-1">{data.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            {!category && !query && (
              <div className="col-span-full flex justify-center">
                <Link
                  to="/category/all"
                  className="mt-10 rounded-md bg-secondary px-5 py-1 text-center text-white duration-200 hover:scale-105"
                >
                  View All Products
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products2;