import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Effortless style designed for your everyday life. Stay completely comfortable without sacrificing your look.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirt",
    description:
      "Bold patterns made to elevate your daily wardrobe. Bring unique personality and vivid color to your look.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women Shirt",
    description:
      "Chic modern fits designed for seamless transitions. Elegant styles that take you from work to weekends.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-24 max-w-150 mx-auto">
          <p data-aos="fade-up" className="text-sm text-secondary">
            Featured Products
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Product Examples
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Sample product descriptions and ratings for this storefront demo.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div key={data.id}>
              <div
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-secondary hover:text-white relative shadow-xl duration-300 group max-w-75"
              >
                {/* Image section */}
                <div className="h-25">
                  <img
                    src={data.img}
                    alt={data.title}
                    loading="lazy"
                    className="max-w-35 block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                  />
                </div>
                {/* Details section */}
                <div className="p-4 text-center">
                  {/* Star rating: 4 yellow, 1 grey */}
                  <div className="w-full flex items-center justify-center gap-1">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <FaStar
                        key={n}
                        className={n <= 4 ? "text-yellow-500" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <h2 className="text-xl font-bold">{data.title}</h2>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {data.description}
                  </p>
                  <button
                    className="bg-secondary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-secondary"
                    onClick={handleOrderPopup}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;