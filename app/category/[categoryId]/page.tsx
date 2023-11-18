import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Images from "./Images";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="min-h-screen">
      <div className="relative items-center w-full py-14 mx-auto   max-w-7xl  ">
        <div className="grid items-start grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col items-start justify-around h-full" >
            <p className="text-2xl font-medium tracking-tight text-primary sm:text-4xl">
              I am a short heading
            </p>
            <p className="max-w-xl mt-4 text-base tracking-tight text-secondary">
              Use this paragraph to share information about your company or
              products. Make it engaging and interesting, and showcase your
              brand's personality. Thanks for visiting our website!
            </p>
          </div>

          <Images />
        </div>
      </div>
    </main>
  );
};

export default page;
