"use client";
import { Image } from "@nextui-org/react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { useInView } from "react-intersection-observer";

import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

type Props = {};

const GalleryImages = (props: Props) => {
  const { ref, inView } = useInView();
  //   const fetchImages = async (pageParam: number) => {
  //     const res = await fetch(
  //       "https://jsonplaceholder.typicode.com/photos" + pageParam
  //     );
  //     return res.json();
  //     };
  const fetchTodos = async ({ pageParam }: { pageParam: number }) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_page=${pageParam}`
    );
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
    queryKey: ["todos"],
    queryFn: fetchTodos,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });

  // const content = data?.pages.map((group, i) => (
  //   <React.Fragment key={i}>
  //     {group.map((image: any, index: number) => {
  //       if (image.length == index + 1) {
  //         return <div ref={ref}>{image.title}t</div>;
  //       }
  //       return <div>{image.title}t</div>;
  //     })}
  //   </React.Fragment>
  // ));

  useEffect(() => {
    if (inView && hasNextPage) {
      console.log("Fire!");
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (status === "pending") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error: {error.message}</p>;
  }

  //   return (
  //     <div className="grid-cols-1 lg:grid-cols-10   top-14 sticky overflow-y-auto">
  //       <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 3 }}>
  //         <Masonry gutter="10px">
  //           {/* Children */}
  //           {/* {galleryItems.map((item) => (
  //             <Image
  //               key={item.id}
  //               src={item.img}
  //               alt="masonry list image"
  //               className="block"
  //             />
  //           ))} */}
  //         </Masonry>
  //       </ResponsiveMasonry>
  //     </div>
  //   );
  return (
    <div>
      {data?.pages.map((group, i) => (
        <div key={i}>
          {group.map((image: any, index: number) => {
            if (group.length == index + 1) {
              return (
                <div className="text-white h-[250px]" key={index} ref={ref}>
                  {image.title}
                </div>
              );
            }

            return (
              <div key={index} className="text-white h-[250px]">
                {image.title}
              </div>
            );
          })}
        </div>
      ))}
      {/*  */}
      {isFetchingNextPage && <h3>Loading...</h3>}

      {/* <button
        ref={ref}
        disabled={!hasNextPage || isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More"
          : "Nothing more to load"}
      </button> */}
      <div ref={ref}>...loading more data</div>
    </div>
  );
};

export default GalleryImages;
