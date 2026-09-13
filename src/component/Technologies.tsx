// import React from 'react';
import { use, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import type { Technology } from "../type";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";

interface technologyProps {
  technologiesProps: Promise<Technology[]>;
}

const Technologies = ({ technologiesProps }: technologyProps) => {
  const technology = use(technologiesProps);

  const [isSelected, setIsSelected] = useState<Technology[]>([]);

  const handleAddToStack = (tecItem: Technology) => {
    const alradyAdded = isSelected.some((item) => item.id === tecItem.id);
    if (alradyAdded === true) {
      return;
    }
    setIsSelected([...isSelected, tecItem]);

    toast.success(`${tecItem.name} added to stack`, {
      position: "bottom-right",
    });
  };

  return (
    <div className=" container m-auto">
      <h2 className=" text-2xl font-bold text-center font-inter lg:text-4xl lg:font-extrabold lg:text-left">
        Explore the{" "}
        <span className=" bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent ">
          Technologies
        </span>
      </h2>
      <p className=" text-center font-jakarta text-[16px] lg:text-left text-[#64748B] pt-2 pb-10">
        Pick one technology per category to build your ideal stack.
      </p>
      <div className=" flex flex-col m-auto lg:flex-row justify-between gap-8">
        <div className=" grid grid-cols-1 m-auto  md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* technologiesCard */}
          {technology.map((tecItem: Technology) => {
            const alradyAdded = isSelected.some(
              (item) => item.id === tecItem.id,
            );
            return (
              <div key={tecItem.id}>
                <TechnologyCard
                  tecItem={tecItem}
                  handleAddToStack={handleAddToStack}
                  isAdded={alradyAdded}
                />
              </div>
            );
          })}
        </div>
        <div>
          {/* your stack */}
          <YourStack isSelected={isSelected} setIsSelected={setIsSelected} />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
