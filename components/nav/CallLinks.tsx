import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdMailOutline, MdOutlineCall } from "react-icons/md";
import { SITE_MAIL, SITE_PHONE } from "@/config/site";

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
        <Link href={`https://wa.me/${SITE_PHONE}`}>
          <FaWhatsapp size={24} />
        </Link>
      </Button>
      <Button className="" variant="ghost" size="icon" asChild>
        <Link href={`mailto:${SITE_MAIL}`}>
          <MdMailOutline size={24} />
        </Link>
      </Button>
      <Button className="" variant="ghost" size="icon" asChild>
        <Link href="tel:0792200650">
          <MdOutlineCall size={24} />
        </Link>
      </Button>
    </div>
  );
};

export default CallLinks;
