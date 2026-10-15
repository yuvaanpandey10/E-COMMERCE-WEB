import Banner from "../../assets/website/orange-pattern.jpg";

// This is your original BannerImg styling, kept exactly as requested
const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <section data-aos="zoom-in" className="mb-20 bg-gray-100 text-white dark:bg-gray-800" style={BannerImg}>
      <div className="container py-10 backdrop-blur-sm">
        <div className="mx-auto max-w-xl space-y-6">
          <h2 className="text-center text-2xl font-semibold sm:text-4xl">
            Newsletter Signup Coming Soon
          </h2>
          <p className="text-center text-sm" role="status">
            Newsletter signups are not connected in this demo. No email is sent or stored.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;