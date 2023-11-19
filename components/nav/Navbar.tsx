"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { navItems } from "@/config/navConfig";
import Link from "next/link";

import Logo from "./Logo";
import CallLinks from "./CallLinks";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
type Props = {};

const Navbar = (props: Props) => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [topOffset, setTop] = useState(0);
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setTop(0); // Show navbar
      } else {
        setTop(-100); // Hide navbar
      }
      setPrevScrollpos(currentScrollPos);
    };
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  return (
    <nav
      className={`w-full sticky z-40 backdrop-filter backdrop-blur-xl px-6 transition-all duration-1000 ease-in-out `}
      style={{ top: `${topOffset}px` }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between py-6  ">
        <Logo />
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-primary  relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer py-2"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Call Links */}
        <CallLinks />

        <div className="absolute inset-x-0 top-0  origin-top-right transform p-2 transition lg:hidden">
          <div className="divide-y-2 divide-gray-500 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-background ">
            <div className="px-5 pb-6 pt-5 ">
              <div className="flex items-center justify-between">
                <Logo />
                <Dialog>
                  <DialogTrigger asChild className="-mr-2">
                    <div className="lg:hidden ">
                      <Menu className="h-6 w-6 cursor-pointer text-primary" />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <nav className="grid gap-y-4">
                      {navItems.map((item) => (
                        <DialogClose key={item.name} asChild>
                          <Link
                            href={item.href}
                            className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold "
                          >
                            <span className="ml-3 text-base font-medium text-primary ">
                              {item.name}
                            </span>
                          </Link>
                        </DialogClose>
                      ))}
                    </nav>
                    <CallLinks isMobile={true} />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
