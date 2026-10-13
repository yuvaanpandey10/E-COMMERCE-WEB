import React from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      {/* Upper Navbar */}
      <div>
        <div>
          <div>
            <a href="#">
              <img src={Logo} alt="Logo"  className="w-10"/>
              Shopsy
            </a>
          </div>
          {/* Search bar and order button */}
          <div>
            <div className="group">
              <input
                type="text"
                placeholder="search"
                className="w-50 sm:w-50 group-hover:w-75 transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border focus:border-primary "
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
