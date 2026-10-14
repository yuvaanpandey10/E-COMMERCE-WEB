import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/sale.png";
import Image3 from "../../assets/hero/shopping.png";
import sliderModule from "react-slick";

const Slider = sliderModule.default;

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "Shop the latest trends in men's fashion and enjoy up to 50% off on a wide range of clothing and accessories.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all women's Wear",
    description:
      "Don't miss out on our flash sale! Get up to 70% off on selected items for a limited time only.",
  },
  {
    id: 3,
    img: Image3,
    title: "50% off on all Products sales",
    description:
      "Enjoy free shipping on all orders over $50. Shop now and save on your next purchase.",
  },
];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative isolate overflow-hidden min-h-137.5 sm:min-h-162.5 bg-gray-100 flex items-center justify-center  dark:bg-gray-950 dark:text-white duration-200">
      {/* Background pattern */}
      <div className="w-175 h-175 bg-secondary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id} className="overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-duration="500"
                    className="text-5xl sm:text-4.4xl font-bold my-4 lg:text-7xl select-none"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-duration="100"
                    className="text-sm select-none"
                  >
                    {data.description}
                  </p>
                  <div data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-duration="300">
                  <button className="w-fit mx-auto sm:mx-0 bg-linear-to-r from-secondary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                    Order Now
                  </button>
                  </div>
                </div>
                {/* Image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="fade-up"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt="Hero"
                      className="relative z-10 w-64 h-64 sm:w-90 sm:h-90 max-w-full object-contain mx-auto"
                      style={
                        data.id === 1 || data.id === 3
                          ? {
                              maskImage:
                                "linear-gradient(to bottom, black 84%, transparent 100%)",
                              WebkitMaskImage:
                                "linear-gradient(to bottom, black 84%, transparent 100%)",
                            }
                          : undefined
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
