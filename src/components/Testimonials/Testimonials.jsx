import slider from "react-slick";

const TestimonialsData = [
  {
    id: 1,
    name: "Victor",
    text: "Ordered a printed t-shirt and a pair of goggles. Both arrived in two days and the fabric quality is much better than I expected for the price.",
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    name: "Priya Sharma",
    text: "The ethnic collection is gorgeous. The colours look exactly like the photos, and the fit was perfect on the first try.",
    img: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 3,
    name: "Daniel Carter",
    text: "Easy to browse, simple checkout, and support answered my size question within minutes. I've already placed a second order.",
    img: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: 4,
    name: "Aisha Rahman",
    text: "Bought a western dress for a weekend trip and got compliments all day. Delivery was fast and the packaging was neat.",
    img: "https://i.pravatar.cc/150?img=5",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "Linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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
        <div>
          <slider {...settings}>
            {TestimonialsData.map((data) => (
              <div></div>
            ))}
          </slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
