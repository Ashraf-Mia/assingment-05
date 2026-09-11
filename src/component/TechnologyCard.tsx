// import React from 'react';
import { MdOutlineStar } from "react-icons/md";
import type { Technology } from "../type";

interface tecItemCardProps {
  tecItem: Technology;
}

const TechnologyCard = ({ tecItem }: tecItemCardProps) => {
  return (
    <div className="card bg-base-100 shadow-sm ">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <img className="w-10 h-10" src={tecItem.icon} alt="" />
          <span className="badge badge-xs badge-warning">{tecItem.badge}</span>
        </div>
        <h2 className="text-2xl font-bold">{tecItem.name}</h2>
        <p> {tecItem.description}</p>
        <div className="flex justify-between">
          <p>{tecItem.category}</p>

          <p>{tecItem.difficulty}</p>

          <span className=" flex items-center gap-1">
            {" "}
            <MdOutlineStar className=" text-[#FBBF24]" /> {tecItem.rating}
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
