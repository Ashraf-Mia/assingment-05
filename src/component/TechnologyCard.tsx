// import React from 'react';
import { MdOutlineStar } from "react-icons/md";
import type { Technology } from "../type";

interface tecItemCardProps {
  tecItem: Technology;
  handleAddToStack: (tecItem: Technology) => void;
  isAdded: boolean;
}

const badgeColor = {
  Popular: " bg-[#F0F9FF] border-[#E0F2FE] text-[#0EA5E9]",
  Versatile: " bg-[#ECFDF5] border-[#D1FAE5] text-[#059669]",
  Fast: " bg-[#FFF7ED] border-[#FFEDD5] text-[#EA580C]",
  Standard: " bg-[#ECFDF5] border-[#D1FAE5] text-[#059669]",
  "Top SQL": " bg-[#EFF6FF] border-[#DBEAFE] text-[#2563EB]",
  Cache: " bg-[#FEF2F2] border-[#FEE2E2] text-[#DC2626]",
  Ubiquitous: " bg-[#FFFBEB] border-[#FEF3C7] text-[#D97706]",
  Essential: " bg-[#F0F9FF] border-[#E0F2FE] text-[#0284C7]",
  Robust: " bg-[#F0F9FF] border-[#E0F2FE] text-[#0284C7]",
  Modern: " bg-[#ECFEFF] border-[#CFFAFE] text-[#0891B2]",
  Containers: " bg-[#F0F9FF] border-[#E0F2FE] text-[#0284C7]",
};

const TechnologyCard = ({
  tecItem,
  handleAddToStack,
  isAdded,
}: tecItemCardProps) => {
  return (
    <div className="card bg-base-100 shadow-sm ">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <img className="w-10 h-10" src={tecItem.icon} alt="" />
          <span
            className={`badge badge-xs ${badgeColor[tecItem.badge]} px-2.5 py-1`}
          >
            {tecItem.badge}
          </span>
        </div>
        <h2 className="text-2xl font-bold">{tecItem.name}</h2>
        <p className="font-jakarta text-[12px] text-[#64748B]">
          {" "}
          {tecItem.description}
        </p>
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
            onClick={() => handleAddToStack(tecItem)}
            disabled={isAdded === true ? true : false}
            className="btn bg-black text-white btn-block "
          >
            {isAdded === true ? "✔ Added to Stack" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
