"use client";
import React from "react";
import { Image } from "@nextui-org/react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
type Props = {};
const masonryOptions = {
  fitWidth: false,
  columnWidth: 300,
  gutter: 30,
  itemSelector: ".photo-item",
};
const items = [
  {
    id: 1,
    img: " https://images.unsplash.com/photo-1530863506128-dc9eb5c3e0fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    img: " https://images.unsplash.com/photo-1509453721491-c3af5961df76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    img: " https://images.unsplash.com/photo-1616179283726-e96f7aa16a56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxjb25zdHJ1Y3Rpb24lMjBzaXRlfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    img: " https://images.unsplash.com/photo-1518709414768-a88981a4515d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNvbnN0cnVjdGlvbiUyMHNpdGUlMjBrZW55YXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    img: " https://images.unsplash.com/photo-1530863506128-dc9eb5c3e0fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    img: " https://images.unsplash.com/photo-1530863506128-dc9eb5c3e0fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    img: " https://images.unsplash.com/photo-1530863506128-dc9eb5c3e0fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 8,
    img: " https://images.unsplash.com/photo-1530863506128-dc9eb5c3e0fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 9,
    img: " https://images.unsplash.com/photo-1518709414768-a88981a4515d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNvbnN0cnVjdGlvbiUyMHNpdGUlMjBrZW55YXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const Images = (props: Props) => {
  return (
 
    <div className="grid-cols-1 lg:grid-cols-10   top-14 sticky overflow-y-auto">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 3 }}>
        <Masonry gutter="10px">
          {/* Children */}
          {items.map((item) => (
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
