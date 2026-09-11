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
  console.log(technology, "ashraf");
  return (
    <div className=" container m-auto">
      <h2>Explore the Technologies</h2>
      <p>Pick one technology per category to build your ideal stack.</p>
      <div className=" flex justify-between m-auto">
        <div>
          {/* technologiesCard */}
          <TechnologyCard />
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
