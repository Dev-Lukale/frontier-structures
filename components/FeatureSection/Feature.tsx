import React from "react";
import { FeatureCard } from "./FeatureCard";
import { sectionLinks } from "@/config/sectionConfig";

type Props = {};

const Feature = (props: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6   max-w-7xl mx-auto p-6 pt-16  place-content-center">
      {sectionLinks.map((item) => (
        <FeatureCard name={item.name} img={item.imgs[0]} key={item.id} href={item.href} />
      ))}
    </div>
  );
};


export default Feature;
