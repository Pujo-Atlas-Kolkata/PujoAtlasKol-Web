import { Constants } from "@/lib";
import { ArrowUpRight } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-[calc(100%-5rem)] rounded-full border-2 border-gray-500 bg-white/80 py-4 shadow backdrop-blur-xs md:top-6">
      <div className="flex h-10 w-full flex-row items-center justify-between px-8">
        <p className="cursor-pointer text-xl font-bold">Pujo Atlas</p>

        <div className="flex flex-row items-center gap-4 text-lg font-medium">
          <p className="hover:bg-main cursor-pointer rounded-lg border-2 border-transparent px-3 py-1.5 hover:border-black">
            Features
          </p>

          <p className="hover:bg-main cursor-pointer rounded-lg border-2 border-transparent px-3 py-1.5 hover:border-black">
            About Us
          </p>

          <p className="hover:bg-main cursor-pointer rounded-lg border-2 border-transparent px-3 py-1.5 hover:border-black">
            Sponsor Us
          </p>

          <div className="hover:bg-main flex cursor-pointer flex-row items-center rounded-lg border-2 border-transparent px-3 py-1.5 hover:border-black">
            <a
              href={Constants.socials.gitHub}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>GitHub</p>
            </a>

            <div className="ml-1">
              <ArrowUpRight className="size-4" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
