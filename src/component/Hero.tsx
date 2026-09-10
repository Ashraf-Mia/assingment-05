// import React from "react";
import HeroImg from "../assets/banner-stack.png";
const Hero = () => {
  return (
    <div className=" flex justify-between items-center container m-auto mt-30">
      <div>
        <h2 className="font-inter text-[60px] font-extrabold  tracking-[-1.5px] leading-15">
          Build Your Ideal
          <br />{" "}
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h2>
        <p className=" font-jakarta text-[18px] font-normal fotn-[#475569] pb-10 pt-6">
          Explore frontend, backend, database, and tooling options,
          <br />
          compare them side by side, and put together the stack that fits your
          next project.
        </p>
        <button className="btn btn-secondary font-inter font-semibold text-[16px] mr-3 bg-linear-to-r from-[#FF5722]  to-[#EC4899] ">
          Explore Technologies
        </button>
        <button className="btn bg-white font-inter font-normal text-[16px]">
          Learn More
        </button>
      </div>
      <div>
        <img src={HeroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
