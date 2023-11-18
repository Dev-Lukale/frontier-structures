"use client";

import React from "react";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { MdMailOutline, MdOutlineCall } from "react-icons/md";
import { navItems } from "@/config/navConfig";
import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "./Logo";
import CallLinks from "./CallLinks";
type Props = {};

const menuItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

const Navbar = (props: Props) => {
  {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
      <nav className=" w-full sticky top-1 z-40 backdrop-filter backdrop-blur-xl px-6">
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
          <div className="lg:hidden">
            <Menu
              onClick={toggleMenu}
              className="h-6 w-6 cursor-pointer text-primary"
            />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0  origin-top-right transform p-2 transition lg:hidden ">
              <div className="divide-y-2 divide-gray-500 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-background ">
                <div className="px-5 pb-6 pt-5 ">
                  <div className="flex items-center justify-between">
                    <Logo />
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X
                          className="h-6 w-6 text-primary "
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6 ">
                    <nav className="grid gap-y-4">
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold "
                        >
                          <span className="ml-3 text-base font-medium text-primary ">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <CallLinks isMobile={true} />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  }
};

export default Navbar;




