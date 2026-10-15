import BannerImg from "../../assets/women/women2.jpg";

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
            Featured Collections
          </h2>
          <p data-aos="fade-up" className="text-sm leading-relaxed tracking-wide text-gray-500 sm:text-base">
            Explore sample products and layouts from this storefront demo.
            Product promotions, checkout, delivery, and payments are not active.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;