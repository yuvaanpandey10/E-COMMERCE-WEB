import BannerImg from "../../assets/women/women2.jpg";
import { FaShieldHalved, FaTruckFast, FaCreditCard, FaGift } from "react-icons/fa6";

const Features = [
  { icon: FaShieldHalved, text: "Quality Products", color: "bg-violet-100 dark:bg-violet-400" },
  { icon: FaTruckFast, text: "Fast Delivery", color: "bg-orange-100 dark:bg-orange-400" },
  { icon: FaCreditCard, text: "Easy Payment Method", color: "bg-green-100 dark:bg-green-400" },
  { icon: FaGift, text: "Get Offers", color: "bg-yellow-100 dark:bg-yellow-400" },
];

const Banner = () => (
  <section className="flex min-h-137.5 items-center justify-center py-12 sm:py-0">
    <div className="container">
      <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div data-aos="zoom-in">
          <img
            src={BannerImg}
            alt="Winter sale collection"
            loading="lazy"
            className="mx-auto h-87.5 w-full max-w-100 rounded-md object-cover shadow-2xl"
          />
        </div>
        <div className="flex flex-col justify-center gap-5">
          <h2 data-aos="fade-up" className="text-3xl font-bold sm:text-4xl">
            Winter Sale up to 50% off
          </h2>
          <p data-aos="fade-up" className="text-sm leading-relaxed tracking-wide text-gray-500 sm:text-base">
            Don't miss out on our biggest discounts of the season. Shop your
            favorite winter essentials before they are gone!
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {Features.map(({ icon: Icon, text, color }) => (
              <div key={text} data-aos="fade-up" className="flex items-center gap-3">
                <Icon className={`h-12 w-12 shrink-0 rounded-full p-3.5 shadow-sm ${color}`} />
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;