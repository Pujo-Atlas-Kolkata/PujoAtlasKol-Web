"use client";

import { cn, Constants } from "@/lib";
import { ArrowUpRight, Menu, UsersRound, HandCoins, Github } from "lucide-react";
import { IoHomeOutline } from "react-icons/io5";
import { useRouter, usePathname } from "next/navigation";
import posthog from "posthog-js";
import { PostHogEvents } from "@/providers";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetFooter,
  SheetTrigger,
  SheetClose,
  Button,
} from "@/components";
import { useState } from "react";

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-xl rounded-b-md border-gray-500 bg-white/40 py-3 shadow backdrop-blur-xs lg:mt-5 lg:w-[calc(100%-5rem)] lg:rounded-full lg:border-2 lg:bg-white/80 lg:py-4">
      {/* Large Screen Navbar */}
      <div className="hidden h-10 w-full flex-row items-center justify-between px-8 lg:flex">
        <p
          className="cursor-pointer text-xl font-bold"
          onClick={() => {
            posthog?.capture(PostHogEvents.NAVBAR_CLICK, { link: "home" });
            router.push(Constants.routes.home);
          }}
        >
          Pujo Atlas
        </p>

        <div className="flex flex-row items-center gap-4 text-lg font-semibold">
          <p
            className={cn(
              "hover:bg-main cursor-pointer rounded-full border-2 border-transparent px-5 py-2 hover:border-2 hover:border-black",
              {
                "border-2 border-black bg-gradient-to-r from-amber-300/30 to-orange-300/30 hover:bg-transparent":
                  pathname === Constants.routes.aboutUs,
              },
            )}
            onClick={() => {
              posthog?.capture(PostHogEvents.NAVBAR_CLICK, { link: "aboutUs" });
              router.push(Constants.routes.aboutUs);
            }}
          >
            About Us
          </p>

          <p
            className={cn(
              "hover:bg-main cursor-pointer rounded-full border-2 border-transparent px-5 py-2 hover:border-2 hover:border-black",
              {
                "border-2 border-black bg-gradient-to-r from-amber-300/30 to-orange-300/30 hover:bg-transparent":
                  pathname === Constants.routes.sponsorUs,
              },
            )}
            onClick={() => {
              posthog?.capture(PostHogEvents.NAVBAR_CLICK, {
                link: "sponsorUs",
              });
              router.push(Constants.routes.sponsorUs);
            }}
          >
            Sponsor Us
          </p>

          <div className="hover:bg-main flex cursor-pointer flex-row items-center rounded-full border-2 border-transparent px-5 py-2 hover:border-black">
            <a
              href={Constants.socials.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => posthog?.capture(PostHogEvents.NAVBAR_CLICK, { link: "github" })}
            >
              <p>GitHub</p>
            </a>
            <div className="ml-1">
              <ArrowUpRight className="size-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex h-10 w-full flex-row items-center justify-between px-8 lg:hidden">
        <p
          className="cursor-pointer text-xl font-bold"
          onClick={() => {
            posthog?.capture(PostHogEvents.NAVBAR_CLICK, { link: "home" });
            router.push(Constants.routes.home);
          }}
        >
          Pujo Atlas
        </p>

        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Menu className="size-6" />
          </SheetTrigger>

          <SheetContent side="top" className="h-screen">
            <SheetHeader>
              <SheetDescription className="mx-auto flex h-[calc(100dvh-10rem)] flex-col items-start justify-center gap-y-5">
                <p
                  className={cn("flex items-center gap-3 text-3xl", {
                    hidden: pathname === Constants.routes.home,
                  })}
                  onClick={() => {
                    posthog?.capture(PostHogEvents.NAVBAR_CLICK, {
                      link: "home",
                    });
                    router.push(Constants.routes.home);
                    setIsSheetOpen(false);
                  }}
                >
                  <IoHomeOutline className="mb-1 size-7" /> Home
                </p>

                <p
                  className={cn("flex items-center gap-3 text-3xl", {
                    "bg-main/25 rounded-full p-3 px-12": pathname === Constants.routes.aboutUs,
                  })}
                  onClick={() => {
                    posthog?.capture(PostHogEvents.NAVBAR_CLICK, {
                      link: "aboutUs",
                    });
                    router.push(Constants.routes.aboutUs);
                    setIsSheetOpen(false);
                  }}
                >
                  <UsersRound className="size-7" /> About Us
                </p>

                <p
                  className={cn("flex items-center gap-3 text-3xl", {
                    "bg-main/25 rounded-full p-3 px-12": pathname === Constants.routes.sponsorUs,
                  })}
                  onClick={() => {
                    posthog?.capture(PostHogEvents.NAVBAR_CLICK, {
                      link: "sponsorUs",
                    });
                    router.push(Constants.routes.sponsorUs);
                    setIsSheetOpen(false);
                  }}
                >
                  <HandCoins className="size-7" /> Sponsor Us
                </p>

                <div className="flex flex-row items-center text-3xl">
                  <a
                    href={Constants.socials.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                    onClick={() => {
                      posthog?.capture(PostHogEvents.NAVBAR_CLICK, {
                        link: "github",
                      });
                      setIsSheetOpen(false);
                    }}
                  >
                    <Github className="size-7" /> <span>GitHub</span>
                  </a>
                  <div className="ml-1">
                    <ArrowUpRight className="size-6" />
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>

            <SheetFooter>
              <SheetClose asChild>
                <Button variant="neutral" className="w-full">
                  Close
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
