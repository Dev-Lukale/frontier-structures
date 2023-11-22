"use client";
import { Image } from "@nextui-org/react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { useInView } from "react-intersection-observer";

import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { randomUUID } from "crypto";

type Props = {};

const GalleryImages = (props: Props) => {
  const { ref, inView } = useInView();

  const fetchImages = async ({ pageParam }: { pageParam: number }) => {
    const LIMIT = 24;
    const res = await fetch(
      // `https://jsonplaceholder.typicode.com/photos?_page=${pageParam}&_limit=${LIMIT}`
      `https://api.unsplash.com/photos/?client_id=${process.env.ACCESS_KEY}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch images");
    }
    return res.json();
  };

  const {
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["getImages"],
    queryFn: fetchImages,
    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  // if (status === "pending") {
  //   return <p>Loading...</p>;
  // }

  if (status === "error") {
    return <p>Error: {error.message}</p>;
  }
  const images = data?.pages.flatMap((page) => page) ?? [];
  return (
    <div className="mx-auto lg:columns-4 gap-4 columns-2 sm:columns-3" >
      {images.map((image, i) => {
        if (i === images.length) {
          return (
            <div key={i} ref={ref} className="w-full mb-3 break-inside-avoid">
              <Image src={image.urls.regular} alt="masonry list image" />
            </div>
          );
        }
        return (
          <div key={i} className="w-full mb-3 break-inside-avoid">
            <Image
              src={image.urls.regular}
              alt="masonry list image"
              className="block"
            />
          </div>
        );
      })}
      <div ref={ref} className="mx-auto w-1/2 text-center">
        ...loading 
      </div>
     
    </div>
  );
};

export default GalleryImages;
