import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdMailOutline, MdOutlineCall } from "react-icons/md";

type callLinksProps = {
  isMobile?: boolean;
};

const CallLinks = ({ isMobile }: callLinksProps) => {
  return (
    <div
      className={
        !isMobile ? "hidden lg:block " : "mx-auto w-fit space-x-12 mt-4"
      }
    >
      <Button className="" variant="ghost" size="icon" asChild>
        <Link href="#">
          <FaWhatsapp size={24} />
        </Link>
      </Button>
      <Button className="" variant="ghost" size="icon" asChild>
        <Link href="#">
          <MdMailOutline size={24} />
        </Link>
      </Button>
      <Button className="" variant="ghost" size="icon" asChild>
        <Link href="#">
          <MdOutlineCall size={24} />
        </Link>
      </Button>
    </div>
  );
};

export default CallLinks;
