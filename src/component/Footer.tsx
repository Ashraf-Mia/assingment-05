// import React from 'react';
import footerImg from "../assets/logo-text.png";
const Footer = () => {
  return (
    <div>
      <div className=" flex justify-between container m-auto mb-14">
        <div>
          <img className="w-25" src={footerImg} alt="footer img" />
          <p className=" text-[#64748B] font-jakarta text-[12px] font-normal mt-3 ">
            Curated tools, technologies, and resources for developers building{" "}
            <br />
            modern software.
          </p>

          <ul className=" flex justify-start m-auto gap-3 mt-5 text-[#475569] font-jakarta text-[12px] font-semibold ">
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-jakarta text-[12px] font-bold text-[#0F172A] mb-4">
            PRODUCT
          </h2>
          <ul className=" list-none text-[#475569] font-jakarta text-[12px] font-normal space-y-2.5">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Techcnologies</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-jakarta text-[12px] font-bold text-[#0F172A] mb-4">
            COMPANY
          </h2>
          <ul className=" list-none text-[#475569] font-jakarta text-[12px] font-normal space-y-2.5">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        <div className="pr-6">
          <h2 className="font-jakarta text-[12px] font-bold text-[#0F172A] mb-4">
            LEGAL
          </h2>
          <ul className=" list-none text-[#475569] font-jakarta text-[12px] font-normal space-y-2.5">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex justify-between container m-auto pt-8 border-t-2 border-[#F1F5F9]">
        <p className=" text-[#94A3B8] font-jakarta text-[12px] font-normal">
          © 2026 Dev Stack. All rights reserved.
        </p>
        <ul className=" flex gap-5 list-none pb-5 text-[#94A3B8] font-jakarta text-[12px] font-normal">
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
