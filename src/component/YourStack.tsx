// import React from 'react';
import type { Dispatch, SetStateAction } from "react";
import type { Technology } from "../type";

interface IisSelectedProps {
  isSelected: Technology[];
  setIsSelected: Dispatch<SetStateAction<Technology[]>>;
}

const YourStack = ({ isSelected, setIsSelected }: IisSelectedProps) => {
  return (
    <div>
      <h2>Your Stack</h2>
      {isSelected.map((item) => {
        return (
          <div key={item.id} className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img src={item.icon} alt={item.name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.name}</h2>
              {/* <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p> */}
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default YourStack;
