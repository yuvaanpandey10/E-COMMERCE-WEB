import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    author: "Red",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img3,
    title: "Printed T-shirt",
    rating: 4.4,
    author: "Yellow",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img1,
    title: "Women Ethnic",
    rating: 5,
    author: "white",
    aosDelay: "400",
    isCutout: true,
  },
  {
    id: 4,
    img: Img4,
    title: "Goggles",
    rating: 4.7,
    author: "Brown",
    aosDelay: "600",
  },
];

const Products2 = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-150 mx-auto">
          <p data-aos="fade-up" className="text-sm text-secondary">
            Top Favorite Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Favorite Ones
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Discover our most favorite products and shop the top-rated items our
            community loves most
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
          {/* card section */}

          {ProductsData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}

              className="w-full max-w-55 space-y-3"
            >
              <div
                className={`aspect-square overflow-hidden rounded-md ${
                  data.isCutout
                    ? "bg-gradient-to-br from-rose-300 via-pink-400 to-fuchsia-500"
                    : ""
                }`}
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className={`h-full w-full ${
                    data.isCutout
                      ? "object-contain scale-125"
                      : "object-cover"
                  }`}
                />
              </div>
              <div className="p-4">
                <h3 className=" font-semibold">{data.title}</h3>
                <p className="text-sm text-gray-600">{data.color}</p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span className="text-gray-600 ml-1">{data.rating}</span>
                </div>
              </div>
            </div>
          ))}
          {/* view all button */}
          <div className="col-span-full flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-secondary text-white py-1 px-5 rounded:md">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products2;
