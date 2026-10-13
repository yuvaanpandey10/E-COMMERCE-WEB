import React from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-600 dark:text-white">
      {/* Upper Navbar */}
      <div className ="bg-secondary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text:3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              Shopsy
            </a>
          </div>
          {/* Search bar and order button */}
          <div>
            <div className="group">
              <input
                type="text"
                placeholder="search"
                className="w-50 sm:w-50 group-hover:w-75 transition-all duration-300 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 placeholder:text-gray-400 shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              ></input>
            </div>
          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div></div>
    </div>
  );
};

export default Navbar;
