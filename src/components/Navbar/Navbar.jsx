import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping, FaBars, FaXmark } from "react-icons/fa6";
import DarkMode from "../DarkMode";

const Menu = [
  { name: "Home", id: 1, link: "/" },
  { name: "Top Rated", id: 2, link: "/top-rated" },
  { name: "Kids Wear", id: 3, link: "/category/kids-wear" },
  { name: "Mens Wear", id: 4, link: "/category/mens-wear" },
  { name: "Electronics", id: 5, link: "/category/electronics" },
];

const DropdownLinks = [
  { name: "Trending Products", id: 1, link: "/category/trending" },
  { name: "Best Selling", id: 2, link: "/category/best-selling" },
];

const navCls = ({ isActive }) =>
  `inline-block whitespace-nowrap px-1 py-2 duration-200 hover:text-secondary ${
    isActive ? "font-semibold text-secondary" : ""
  }`;

const Navbar = ({ handleOrderPopup, user, onSignupClick, onLogout }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const submitSearch = (event) => {
    event.preventDefault();
    const query = search.trim();
    navigate(`/category/all${query ? `?q=${encodeURIComponent(query)}` : ""}`);
    setOpen(false);
  };

  const authButton = user ? (
    <div className="flex items-center gap-2 text-sm">
      <span className="max-w-24 truncate font-medium">Hi, {user.name.split(" ")[0]}</span>
      <button
        type="button"
        onClick={onLogout}
        className="rounded-full border border-gray-400 px-3 py-1 hover:border-secondary hover:text-secondary"
      >
        Logout
      </button>
    </div>
  ) : (
    <button
      type="button"
      onClick={onSignupClick}
      className="rounded-full bg-secondary px-4 py-1 text-sm font-medium text-white duration-200 hover:scale-105"
    >
      Create Profile
    </button>
  );

  return (
    <header className="relative z-40 bg-white shadow-md duration-200 dark:bg-gray-900 dark:text-white">
      {/* Upper Navbar */}
      <div className="bg-secondary/40 py-2">
        <div className="container flex items-center justify-between">
          <Link to="/" className="flex shrink-0 items-center gap-2 text-2xl font-bold sm:text-3xl">
            <img src={Logo} alt="Shopsy logo" className="w-10" />
            Shopsy
          </Link>

          <div className="flex shrink-0 items-center gap-3 sm:gap-4">
            <form onSubmit={submitSearch} className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                aria-label="Search products"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="w-44 rounded-full border border-gray-300 bg-white px-3 py-1 text-sm text-gray-900 transition-all duration-300 placeholder:text-gray-400 focus:w-64 focus:border-secondary focus:outline-none group-hover:w-64 dark:border-gray-500 dark:bg-gray-800 dark:text-white"
              />
              <button type="submit" aria-label="Search" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                <IoMdSearch />
              </button>
            </form>

            <div className="group relative h-8 w-10 shrink-0 transition-all duration-300 hover:w-28">
              <button
                onClick={handleOrderPopup}
                aria-label="Order"
                className="absolute right-0 top-0 flex h-8 w-full items-center justify-center gap-0 rounded-2xl bg-secondary text-white transition-all duration-300 group-hover:gap-2"
              >
                <span className="inline-block max-w-0 overflow-hidden whitespace-nowrap font-medium opacity-0 transition-all duration-300 group-hover:max-w-12 group-hover:opacity-100">
                  Order
                </span>
                <FaCartShopping className="shrink-0 text-xl" />
              </button>
            </div>

            <DarkMode />

            <div className="hidden sm:block">{authButton}</div>

            <button
              className="text-2xl sm:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop menu */}
      <nav className="hidden justify-center sm:flex" aria-label="Main">
        <ul className="flex w-full flex-nowrap items-center justify-center gap-4 text-xs md:gap-5 md:text-sm lg:text-base xl:gap-7 xl:text-lg">
          {Menu.map((data) => (
            <li key={data.id}>
              <NavLink to={data.link} end={data.link === "/"} className={navCls}>
                {data.name}
              </NavLink>
            </li>
          ))}
          <li className="group relative">
            <button type="button" className="flex items-center gap-0.5 whitespace-nowrap py-2">
              More
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute z-50 hidden w-44 rounded-md bg-white p-2 text-black shadow-md group-focus-within:block group-hover:block">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      className="inline-block w-full whitespace-nowrap rounded-md p-2 hover:bg-secondary/20"
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </nav>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-gray-200 px-4 py-4 dark:border-gray-700 sm:hidden" aria-label="Mobile">
          <form onSubmit={submitSearch} className="relative mb-3">
            <input
              type="text"
              placeholder="Search"
              aria-label="Search products"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full rounded-full border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-secondary focus:outline-none dark:border-gray-500 dark:bg-gray-800 dark:text-white"
            />
            <button type="submit" aria-label="Search" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              <IoMdSearch />
            </button>
          </form>
          <ul className="flex flex-col">
            {[...Menu, ...DropdownLinks].map((d) => (
              <li key={d.link}>
                <NavLink
                  to={d.link}
                  end={d.link === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 hover:text-secondary ${isActive ? "font-semibold text-secondary" : ""}`
                  }
                >
                  {d.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-3">{authButton}</div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;