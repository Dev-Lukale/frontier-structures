import React from 'react'
import { CiStar } from 'react-icons/ci';

type Props = {}

const Testimonial = (props: Props) => {
  return (
    <div className="text-center  lg:mx-0 lg:text-left  lg:col-span-12  bg-foreground/5 p-4 ">
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
        <p className="text-xl font-medium text-primary font-jetbrains">
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

export default Testimonial