"use client";
import React from "react";
import { Image } from "@nextui-org/react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { galleryItems } from "@/config/gallery";
type Props = {};
const masonryOptions = {
  fitWidth: false,
  columnWidth: 300,
  gutter: 30,
  itemSelector: ".photo-item",
};

const Images = (props: Props) => {
  return (
    <div className="grid-cols-1 lg:grid-cols-10   top-14 sticky overflow-y-auto">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 3 }}>
        <Masonry gutter="10px">
          {/* Children */}
          {galleryItems.map((item) => (
            <Image
              key={item.id}
              src={item.img}
              alt="masonry list image"
              className="block"
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Images;
