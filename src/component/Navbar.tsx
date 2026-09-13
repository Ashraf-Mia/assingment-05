// import React from "react";
import { useState } from "react";
import navLogo from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div>
      <nav className=" flex justify-between container m-auto items-center p-5">
        <button onClick={handleOpenMenu} className=" lg:hidden">
          <img src={hamburger} alt="" />
        </button>
        <img src={navLogo} alt="navLogo" />
        <ul className=" hidden lg:flex justify-between items-center gap-7.25 text-[14px]">
          <li>
            <a className=" font-semibold text-[#DB2777]" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">Techcnologies</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className=" flex">
          <button className="btn rounded-4xl bg-white border-0">Sign In</button>
          <button className="btn btn-secondary rounded-4xl">Sign Up</button>
        </div>
      </nav>
      {openMenu === true && (
        <ul className=" lg:hidden flex flex-col items-center gap-5 py-5 text-[14px]">
          <li>
            <a className=" font-semibold text-[#DB2777]" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">Techcnologies</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
