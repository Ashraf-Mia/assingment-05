// import React from 'react';
import { MdOutlineStar } from "react-icons/md";
import type { Technology } from "../type";
import { type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";
// import { useState } from "react";

interface tecItemCardProps {
  tecItem: Technology;
  isSelected: Technology[];
  setIsSelected: Dispatch<SetStateAction<Technology[]>>;
}

const TechnologyCard = ({
  tecItem,
  isSelected,
  setIsSelected,
}: tecItemCardProps) => {
  //   const [onAdd, setOnAdd] = useState(false);
  const handleSetIsSelected = () => {
    setIsSelected([...isSelected, tecItem]);
  };
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
          <button
            onClick={handleSetIsSelected}
            className="btn bg-black text-white btn-block "
          >
            {/* {onAdd === true ? "selected" : "Add to Stack"} */}
            Add to Stack
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
