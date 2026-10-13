import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "../DarkMode";

const Menu = [
  { name: "Home", id: 1, link: "/#" },
  { name: "Top Rated", id: 2, link: "/services" },
  { name: "Kids Wear", id: 3, link: "/#" },
  { name: "Mens Wear", id: 4, link: "/#" },
  { name: "Electronics", id: 5, link: "/#" },
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-secondary/40 py-2">
        <div className="container flex justify-between items-center sm:px-4! md:px-12!">
          <div className="shrink-0">
            <a href="#" className="font-bold text-2xl sm:text:3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              Shopsy
            </a>
          </div>
          {/* Search bar*/}
          <div className="mr-2 flex shrink-0 items-center gap-4 sm:mr-4">
            <div className="relative group hidden shrink-0 sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-50 sm:w-50 group-hover:w-75 transition-all duration-300 rounded-full border border-gray-300 bg-white px-2 py-1 text-sm font-medium text-gray-900 focus:outline-none focus:border focus:border-secondary placeholder:text-gray-400"
              ></input>
              <IoMdSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
            {/*  order button */}
            <div className="group relative h-8 w-10 shrink-0 transition-all duration-300 hover:w-28">
              <button
                onClick={() =>
                  alert("This feature is currently not available yet")
                }
                className="bg-linear-to-r from-secondary to-secondary absolute right-0 top-0 flex h-8 w-full items-center justify-center gap-0 rounded-2xl bg-amber-400 text-white transition-all duration-300 group-hover:gap-2"
              >
                <span className="inline-block max-w-0 overflow-hidden whitespace-nowrap text-white font-medium opacity-0 transition-all duration-300 group-hover:max-w-12 group-hover:opacity-100">
                  Order
                </span>
                <FaCartShopping className="shrink-0 text-xl text-white drop-shadow-sm" />
              </button>
            </div>
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div className="flex justify-center gap-4">
        <ul className="sm:flex hidden items-center">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-secondary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li>
            <a
              href=""
              className="inline-block px-4 hover:text-secondary duration-200"
            >
              Trending
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
