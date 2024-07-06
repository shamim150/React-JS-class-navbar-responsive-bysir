import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import Container from "./layer/Container";
import { FaSearch } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const Searchbar = () => {
  return (
    <section className="bg-[#F5F5F3]">
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <GiHamburgerMenu />
          <p className="text-[14px]">Shop by Category</p>
        </div>

        <div className="relative py-6 ">
          <input
            className="py-[16px] pl-5 pr-[473px] bg-white text-[14px] outline-none"
            type="text"
            name=""
            id=""
            placeholder="Search Products"
          />
          <button className="absolute right-4 top-11">
            <FaSearch />
          </button>
        </div>

        <div className="flex items-center gap-10">
          <div className="flex items-center gap-[11px]">
            <IoIosPerson />
            <IoMdArrowDropdown />
          </div>
          <FaShoppingCart />
        </div>

        <div>
          <div></div>
        </div>
      </Container>
    </section>
  );
};

export default Searchbar;
