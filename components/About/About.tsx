import React from "react";
import Card from "./Card";
import { sectionLinks } from "@/config/sectionConfig";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="flex items-center  bg-background lg:h-screen" id="about" >
      <div className="justify-center flex-1 max-w-7xl py-4 mx-auto px-6">
        <div className="flex flex-wrap items-center ">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div className="lg:max-w-md">
              <span className="text-xl font-semibold text-primary uppercase mt-96 ">
                About Us
              </span>
              <h2 className="mt-4 mb-6 text-2xl font-bold text-secondary">
                We are the large business expert in Europe and Asia
              </h2>
              <p className="mb-10 text-secondary ">
                Lorem ipsum dor amet Lorem ipsum dor amet is a dummy text .Lorem
                ipsum dor amet isopinus ipaino amet Lorem ipsum dor amet is a
                dummy text
              </p>
            </div>
          </div>
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            {sectionLinks.map((item) => {
              return <Card key={item.id} name={item.name} href={item.href} content={item.content} />;
            })}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
