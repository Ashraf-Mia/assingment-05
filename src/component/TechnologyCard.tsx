// import React from 'react';

import { MdOutlineStar } from "react-icons/md";

const TechnologyCard = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="flex justify-between">
          <span className="text-xl">$29/mo</span>
          <span className="badge badge-xs badge-warning">Most Popular</span>
        </div>
        <h2 className="text-3xl font-bold">Premium</h2>
        <p> dummy text</p>
        <div>
          <p>dummy frontent</p>
          <p>dummy begiljkjkj</p>

          <span className=" flex items-center gap-1">
            {" "}
            <MdOutlineStar /> dummy rating
          </span>
        </div>
        <div className="mt-6">
          <button className="btn bg-black text-white btn-block ">
            Add to Stack
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
