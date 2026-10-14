import Banner from "../../assets/website/orange-pattern.jpg";

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
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl text-center! sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              data-aos="fade-up"
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-md border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-secondary"
            />
            <button
              data-aos="fade-up"
              type="button"
              className="rounded-md bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-gray-100 cursor-pointer"
            >
              Notify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
