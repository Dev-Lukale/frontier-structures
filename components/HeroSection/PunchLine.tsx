import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';

type Props = {}

const PunchLine = (props: Props) => {
  return (
    <div className="col-span-12">
      {/* Other content */}
      <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
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
        <div className="flex flex-col items-center justify-center gap-3 mt-10 gap-y-10 lg:flex-row lg:justify-start">
          <Button className="" size="lg">
            Contact
          </Button>
          <Button variant='link'>
            <Link
              href="#"
              className=""
            >
              View Gallery &nbsp; →
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PunchLine