import React from "react";
import { Meteors } from "./Meteor";

export const FeatureCard = () => {
  return (
    <div className="h-[20rem] relative shadow-xl bg-background/90 border border-gray-800  px-4 py-8 overflow-hidden rounded-2xl flex flex-col justify-end items-start">
      {/* <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" /> */}
      <h1 className="font-bold text-xl text-white mb-4 relative z-50">
        Meteors because they're cool
      </h1>

      <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
        Explore
      </button>

      {/* Meaty part - Meteor effect */}
      <Meteors number={10} />
    </div>
  );
};
