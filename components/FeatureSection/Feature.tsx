import React from "react";
import { FeatureCard } from "./FeatureCard";

type Props = {};

const Feature = (props: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2  max-w-7xl mx-auto lg:py-6 p-6 h-auto">
      <FeatureCard/>
      <FeatureCard/>
      <FeatureCard/>
      <FeatureCard/>
    </div>
  );
};


export default Feature;
