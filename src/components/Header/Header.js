import React from "react";
import logo from "../../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="">
      <div className="w-2/3 mx-auto">
        <div className="flex gap-12 py-6">
          <img src={logo} />

          {/* searchBar */}
          <div className="flex-auto flex items-center gap-2 rounded-xl bg-gray-100 px-4 py-2 border-2 border-gray-200">
            <FiSearch />
            <input
              type="text"
              className="bg-gray-100 border-none outline-none w-full"
              placeholder="Search For brand, category, coupon"
            />
          </div>

          {/* login/signup button */}
          <button className="text-white px-4 py-2 rounded-xl font-bold bg-red-600">
            Login / Sign Up
          </button>
        </div>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
