'use client'
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CiStar } from "react-icons/ci";

function Testimonial() {
  return (
    <section className="bg-inherit h-screen">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 py-16 md:py-20 lg:grid-cols-12 lg:gap-y-20 lg:pb-36 lg:py-20 xl:py-32 items-start relative">
        <div className="relative  px-4 sm:px-6 lg:col-span-12 lg:pl-0 lg:pb-14 lg:pr-16 xl:pr-20">
          {/* ... Testimonial content */}
          <TestimonialContent />
        </div>
        <div className="pt-16 lg:col-span-12  lg:pt-0 bg-background shadow-lg ">
          {/* ... Other content */}
          <OtherContent />
        </div>
        <div className="lg:absolute  right-2 top-32  ">
          <ShuffleGrid />
        </div>
      </div>
    </section>
  );
}

function TestimonialContent() {
  return (
    <div className="relative max-w-md mx-auto text-center lg:mx-0 lg:text-left ">
      {/* Testimonial stars */}
      <div className="flex justify-center text-primary lg:justify-start">
        <div className="flex gap-1">
          {/* Rendering stars */}
          {[...Array(5)].map((_, index) => (
            <CiStar
              key={index}
              className="w-5 h-5 fill-current md hydrated"
              name="star"
              role="img"
              aria-label="star"
            ></CiStar>
          ))}
        </div>
      </div>
      {/* Testimonial quote */}
      <blockquote className="mt-2">
        <p className="text-xl font-medium text-primary">
          “Here you can write a nice testimonial for your product!”
        </p>
      </blockquote>
      {/* Testimonial author */}
      <figcaption className="mt-2 text-sm text-primary">
        <strong className="font-semibold text-primary before:content-['—_']">
          Michael Andreuzza
        </strong>
        , Batman
      </figcaption>
    </div>
  );
}

function OtherContent() {
  return (
    <div className="py-6">
      {/* Other content */}
      <div className="max-w-xl text-center lg:text-left">
        <div>
          <p className="text-2xl font-medium tracking-tight text-primary sm:text-4xl">
            I am a short heading
          </p>
          <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
            Use this paragraph to share information about your company or
            products. Make it engaging and interesting, and showcase your
            brand's personality. Thanks for visiting our website!
          </p>
        </div>
        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
          <a
            href="#"
            className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-primary focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
          >
            Button
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center text-sm font-semibold text-primary duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
          >
            Learn more &nbsp; →
          </a>
        </div>
      </div>
    </div>
  );
}



const shuffle = (array:any) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 8,
    src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq:any) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 5000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[700px] w-[400px] gap-1">
      {squares.map((sq :any) => sq)}
    </div>
  );
};

export default Testimonial;




