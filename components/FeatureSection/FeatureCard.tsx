'use client'
import React from "react";
import { Meteors } from "./Meteor";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
type FeatureCardProps = {
  name: string
  img:string
}
export const FeatureCard = ({ name, img }: FeatureCardProps) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(
      mouseYSpring,
      [-0.5, 0.5],
      ["17.5deg", "-17.5deg"]
    );
    const rotateY = useTransform(
      mouseXSpring,
      [-0.5, 0.5],
      ["-17.5deg", "17.5deg"]
    );

    const handleMouseMove = (e:any) => {
      const rect = e.target.getBoundingClientRect();

      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      x.set(xPct);
      y.set(yPct);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };
  return (
    <motion.div
      onClick={() => {
        console.log("clicked");
      }}
      className="h-[20rem] relative shadow-xl bg-background/90 border border-gray-800  overflow-hidden rounded-2xl flex flex-col justify-end items-start cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
    >
      {/* <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" /> */}
      <Image
        src={img}
        fill
        
        alt={name}
        className="object-cover"
      />
      <h1 className="font-semibold text-xl text-primary absolute bottom-2 left-2 hover:text-primary/70 font-jetbrains">
        {name}
      </h1>

      {/* <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
        Explore
      </button> */}

      {/* Meaty part - Meteor effect */}
      <Meteors number={10} />
    </motion.div>
  );
};
