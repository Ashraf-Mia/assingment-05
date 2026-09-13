// import React from 'react';
import type { Dispatch, SetStateAction } from "react";
import type { Technology } from "../type";
import { FaXmark } from "react-icons/fa6";
import { toast } from "react-toastify";

interface IisSelectedProps {
  isSelected: Technology[];
  setIsSelected: Dispatch<SetStateAction<Technology[]>>;
}

const YourStack = ({ isSelected, setIsSelected }: IisSelectedProps) => {
  const handleRemoveItem = (item: Technology) => {
    const restItems = isSelected.filter(
      (syngleIsSelected) => syngleIsSelected.id != item.id,
    );
    setIsSelected(restItems);
    toast.info(`${item.name} React removed from Stack.`, {
      position: "bottom-right",
    });
  };

  const handleRemoveAll = () => {
    setIsSelected([]);
    toast.warning(`All technologies removed.`, { position: "bottom-right" });
  };
  return (
    <div className="card bg-base-100   shadow-sm p-5 w-85.25 lg:w-70">
      <h2 className=" font-jakarta text-[16px] font-bold">Your Stack</h2>
      {isSelected.length === 0 ? (
        <p className="font-jakarta text-[12px] text-[#64748B] mb-4 mt-1">
          No technologies selected yet.
        </p>
      ) : (
        <p className="font-jakarta text-[12px] text-[#64748B] mb-4 mt-1">
          {isSelected.length} technologies selected yet.
        </p>
      )}
      {isSelected.length === 0 && (
        <div className=" flex justify-center px-15 py-6 rounded-lg border border-dotted border-[#64748B] ">
          <p className="font-jakarta text-[12px] text-[#64748B] ">
            Your stack is empty.
          </p>
        </div>
      )}
      {isSelected.map((item: Technology) => {
        return (
          <div key={item.id} className=" grid grid-cols-1 mb-2 ">
            <div className="  flex justify-between items-center border border-gray-400 rounded-lg px-1.5 py-3">
              <div className="flex items-center gap-2">
                <img className="w-7 h-7" src={item.icon} alt={item.name} />
                <div>
                  <h2 className=" font-jakarta font-bold text-[12px]">
                    {item.name}
                  </h2>
                  <p className="font-jakarta font-bold text-[8px] text-[#94A3B8]">
                    {item.category}
                  </p>
                </div>
              </div>
              <button onClick={() => handleRemoveItem(item)}>
                <FaXmark className=" cursor-pointer" />
              </button>
            </div>
          </div>
        );
      })}
      {isSelected.length > 0 && (
        <button onClick={handleRemoveAll} className="btn btn-outline btn-error">
          Remove All
        </button>
      )}
    </div>
  );
};

export default YourStack;
