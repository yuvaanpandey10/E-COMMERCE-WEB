import { useState } from "react";
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
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    // TODO: send `email` to your newsletter service
    setDone(true);
    setEmail("");
  };

  return (
    <section data-aos="zoom-in" className="mb-20 bg-gray-100 text-white dark:bg-gray-800" style={BannerImg}>
      <div className="container py-10 backdrop-blur-sm">
        <div className="mx-auto max-w-xl space-y-6">
          <h2 className="text-center text-2xl font-semibold sm:text-4xl">
            Get Notified About New Products
          </h2>
          {done ? (
            <p className="text-center font-medium" role="status">
              ✅ Thanks! You're on the list.
            </p>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                className="min-w-0 flex-1 rounded-md border border-gray-300 bg-white p-3 text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-secondary"
              />
              <button type="submit" className="cursor-pointer rounded-md bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-gray-100">
                Notify
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Subscribe;