import SliderModule from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../../assets/testimonials/32.jpg";
import Img2 from "../../assets/testimonials/44.jpg";
import Img3 from "../../assets/testimonials/75.jpg";
import Img4 from "../../assets/testimonials/68.jpg";

const Slider = SliderModule.default || SliderModule;

const TestimonialsData = [
  {
    id: 1,
    name: "Victor Paudel",
    text: "Ordered a printed t-shirt and a pair of goggles. Both arrived in two days and the fabric quality is much better than I expected for the price.",
    img: Img1,
  },
  {
    id: 2,
    name: "Priya Sharma",
    text: "The ethnic collection is gorgeous. The colours look exactly like the photos, and the fit was perfect on the first try.",
    img: Img2,
  },
  {
    id: 3,
    name: "Daniel Carter",
    text: "Easy to browse, simple checkout, and support answered my size question within minutes. I've already placed a second order.",
    img: Img3,
  },
  {
    id: 4,
    name: "Aisha Rahman",
    text: "Bought a western dress for a weekend trip and got compliments all day. Delivery was fast and the packaging was neat.",
    img: Img4,
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3, // 3 cards at once on desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-150 mx-auto">
          <p data-aos="fade-up" className="text-sm text-secondary">
            What our customer are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            We let our quality speak for itself through the voices of those who
            know us best. Explore honest feedback and see how we consistently
            deliver on our promises.
          </p>
        </div>
        {/* Testimonials cards */}
        <div data-aos="zoom-in">
          <Slider {...settings} className="pb-10">
            {TestimonialsData.map((data) => (
              // outer padding keeps the shadow from being clipped
              <div key={data.id} className="px-3 py-4">
                <div className="flex flex-col items-center text-center gap-4 min-h-75 shadow-lg hover:shadow-xl transition-shadow duration-300 py-8 px-6 rounded-xl dark:bg-gray-800 bg-secondary/10 relative overflow-hidden">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="rounded-full w-20 h-20 object-cover ring-4 ring-primary/20"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-300 leading-relaxed flex-1">
                    “{data.text}”
                  </p>
                  <h1 className="text-xl font-bold text-black/80 dark:text-white">
                    {data.name}
                  </h1>
                  {/* decorative quote mark */}
                  <span
                    aria-hidden="true"
                    className="text-black/10 dark:text-white/10 text-9xl font-serif absolute top-0 right-4 leading-none select-none pointer-events-none"
                  >
                    ”
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
