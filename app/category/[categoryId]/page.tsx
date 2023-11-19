

import Images from "../../../components/Images";
import { sectionLinks } from "@/config/sectionConfig";
import Link from "next/link";

type Props = {
  categoryId: string;
};

const Page = ({
  params: { categoryId },
}: {
  params: { categoryId: string };
}) => {
  const Item = sectionLinks.find((item) => item.id === categoryId);
  return (
    <main className="min-h-screen  p-6   bg-background  mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-center   lg:items-start space-y-16">
          <div>
            <p className="text-2xl font-medium tracking-widest text-primary sm:text-4xl text-center lg:text-start">
              {Item?.name}
            </p>
            <p className="mt-4 text-base lg:text-lg xl:text-xl tracking-wider text-secondary text-center lg:text-start">
              {Item?.content}
            </p>
          </div>
          <nav className="flex flex-col gap-y-8">
            {sectionLinks.map((link) => {
              if (link.id !== Item?.id) {
                return (
                  <Link
                    className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden
                     rounded-full border text-primary border-gray-200 bg-background px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50 "
                    href={`/category${link.href}`} key={link.id}
                  >
                    {link.name}
                  </Link>
                );
              }
            })}
          </nav>
        </div>

        <Images />
      </div>
    </main>
  );
};

export default Page;
