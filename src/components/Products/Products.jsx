import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5,
    author: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    author: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    author: "Brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-shirt",
    rating: 4.4,
    author: "Yellow",
    aosDelay: "800",
  },
  {
    id: 5,
    img: Img5,
    title: "Fashion T-shirt",
    rating: 4.6,
    author: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-150 mx-auto">
          <p className="text-sm text-secondary">Top Selling Products for you</p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-xs text-gray-400">
            Discover our most popular products
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 place-items-center">
          {/* card section */}

          {ProductsData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}

              className="space-y-3"
            >
              <img
                src={data.img}
                alt={data.title}
                className="h-40 w-55 object-cover rounded-md"
              />
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
        </div>
      </div>
    </div>
  );
};

export default Products;
