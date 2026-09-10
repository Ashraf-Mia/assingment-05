// import React from "react";
import navLogo from "../assets/logo-text.png";
const Navbar = () => {
  return (
    <div>
      <nav className=" flex justify-between container m-auto items-center p-5">
        <img src={navLogo} alt="navLogo" />
        <ul className=" flex justify-between items-center gap-7.25 text-[14px]">
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
        <div>
          <button className="btn rounded-4xl bg-white border-0">Sign In</button>
          <button className="btn btn-secondary rounded-4xl">Sign Up</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
