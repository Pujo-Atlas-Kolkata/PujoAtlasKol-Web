import { ArrowUpRight } from "lucide-react";
import Star9 from "../stars/s9";

export const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md rounded-full border-2 border-gray-500 bg-white/80 py-4 shadow backdrop-blur-xs md:top-6 lg:max-w-screen-lg">
      <div className="flex h-10 flex-row items-center justify-between px-8">
        <p className="cursor-pointer text-xl font-bold">Pujo Atlas</p>

        <div className="flex flex-row items-center gap-4 text-lg font-medium">
          <p className="hover:bg-main cursor-pointer rounded-lg border-2 border-transparent px-3 py-1.5 hover:border-black">
            Features
          </p>

          <p className="hover:bg-main cursor-pointer rounded-lg border-2 border-transparent px-3 py-1.5 hover:border-black">
            Team
          </p>

          <div className="hover:bg-main flex cursor-pointer flex-row items-center rounded-lg border-2 border-transparent px-3 py-1.5 hover:border-black">
            <p>GitHub</p>

            <div className="ml-1">
              <ArrowUpRight className="size-4" />
            </div>
          </div>

          <p className="hover:bg-main cursor-pointer rounded-lg border-2 border-transparent px-3 py-1.5 hover:border-black">
            Sponsors
          </p>

          <p className="cursor-pointer">
            <span className="hover:bg-main bg-main/50 border-border/40 dark:border-border/70 relative mr-0 rounded-lg border-2 px-5 py-1.5 sm:mr-2 sm:[&_svg]:size-7 md:[&_svg]:size-[45px]">
              Support
              <Star9
                className="absolute -right-2.5 -bottom-2.5 hidden sm:block md:-right-5 md:-bottom-4"
                color="var(--main)"
                pathClassName="stroke-5 dark:stroke-3.5 stroke-black dark:stroke-black/70"
              />
              <Star9
                className="absolute -top-2.5 -left-2.5 hidden sm:block md:-top-4 md:-left-5"
                color="var(--main)"
                pathClassName="stroke-5 dark:stroke-3.5 stroke-black dark:stroke-black/70"
              />
            </span>
          </p>
        </div>
      </div>
    </header>
  );
};
