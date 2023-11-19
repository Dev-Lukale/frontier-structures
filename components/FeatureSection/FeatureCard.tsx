import { Meteors } from "./Meteor";
import Link from "next/link";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
type FeatureCardProps = {
  name: string;
  img: string;
  href: string;
};
export const FeatureCard = ({ name, img, href }: FeatureCardProps) => {
  return (
    <Link href={`/category/${href}`}>
      <Card
        shadow="sm"
        isPressable
        isFooterBlurred
        isHoverable
        // onPress={() => console.log("item pressed")}
        className="h-[20rem] w-[18rem] relative bg-background/90   overflow-hidden mx-auto"
      >
        <CardBody className="overflow-visible p-0 w-[18rem]">
          <Image
            // as={NextImage}
            shadow="sm"
            radius="sm"
            // width={288}
            // height={320}
            className="z-0 w-[18rem] h-[20rem] object-cover"
            alt={name}
            src={img}
          />
        </CardBody>
        <CardFooter className="absolute bg-background/50 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 font-jetbrains">
          <b>{name}</b>
        </CardFooter>
        <Meteors number={10} />
      </Card>
      {/* <Image src={img} alt={name} className="object-cover" />
        <h1 className="font-semibold text-xl text-primary absolute bottom-2 left-2 hover:text-primary/70 font-jetbrains">
          {name}
        </h1> */}
    </Link>
  );
};
