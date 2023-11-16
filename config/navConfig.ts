import { LinkItem } from "@/types";

export const LinkItems = [
  {
    name: "Architectural Mastery",
    href: "#general",
    disabled: false,
  },
  {
    name: "Elegant Residences",
    href: "#residential",
    disabled: false,
  },
  {
    name: "Commercial Elegance",
    href: "#commercial",
    disabled: false,
  },
  {
    name: "Industrial Prowess",
    href: "#industrial",
    disabled: false,
  },
] as const;

export const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
//   {
//     name: "Contact",
//     href: "/contact",
//   },
] as const;
