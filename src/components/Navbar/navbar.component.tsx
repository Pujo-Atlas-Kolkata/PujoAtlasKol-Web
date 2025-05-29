import { Constants } from "@/lib";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-[calc(100%-5rem)] rounded-full border-2 border-gray-500 bg-white/80 py-4 shadow backdrop-blur-xs md:top-6">
      <div className="flex h-10 w-full flex-row items-center justify-between px-8">
        <Link href={Constants.routes.home}>
          <p className="cursor-pointer text-xl font-bold">Pujo Atlas</p>
        </Link>

        <div className="flex flex-row items-center gap-4 text-lg font-medium">
          <Link href={Constants.routes.aboutUs}>
            <p className="hover:bg-main cursor-pointer rounded-lg border-2 border-transparent px-3 pt-2 pb-1 hover:border-black">
              About Us
            </p>
          </Link>

          <Link href={Constants.routes.sponsorUs}>
            <p className="hover:bg-main cursor-pointer rounded-lg border-2 border-transparent px-3 pt-2 pb-1 hover:border-black">
              Sponsor Us
            </p>
          </Link>

          <div className="hover:bg-main flex cursor-pointer flex-row items-center rounded-lg border-2 border-transparent px-3 pt-2 pb-1 hover:border-black">
            <Link
              href={Constants.socials.gitHub}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>GitHub</p>
            </Link>

            <div className="mb-1 ml-1">
              <ArrowUpRight className="size-4" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
