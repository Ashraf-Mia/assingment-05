// import React from 'react';
import { use } from "react";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import type { Technology } from "../type";

interface technologyProps {
  technologiesProps: Promise<Technology[]>;
}

const Technologies = ({ technologiesProps }: technologyProps) => {
  const technology = use(technologiesProps);
  console.log(technology, "for check");

  return (
    <div className=" container m-auto">
      <h2 className="font-inter text-4xl font-extrabold">
        Explore the{" "}
        <span className=" bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent ">
          Technologies
        </span>
      </h2>
      <p className=" font-jakarta text-[16px] text-[#64748B] pt-2 pb-10">
        Pick one technology per category to build your ideal stack.
      </p>
      <div className=" flex justify-between m-auto gap-8">
        <div className="grid grid-cols-3 gap-5">
          {/* technologiesCard */}
          {technology.map((tecItem: Technology) => {
            return (
              <div>
                <TechnologyCard key={tecItem.id} tecItem={tecItem} />
              </div>
            );
          })}
        </div>
        <div>
          {/* your stack */}
          <YourStack />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
