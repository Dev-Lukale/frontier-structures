import React from "react";
import { FeatureCard } from "./FeatureCard";
import { sections } from "@/config/sectionConfig";

type Props = {};

const Feature = (props: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2  max-w-7xl mx-auto lg:py-6 p-6 h-auto">
      {sections.map((item) => (
        <FeatureCard name={item.name} img={item.img} key={item.id} />
      ))}
    </div>
  );
};


export default Feature;
