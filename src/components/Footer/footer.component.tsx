import { Constants } from "@/lib/contants";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mx-auto my-10 flex w-[calc(100%-5rem)] flex-col items-center rounded-lg border-2 border-black bg-amber-300/30 p-12 backdrop-blur-sm">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-center text-center text-lg font-medium">
          Cooked with ❤️ by Pujo Atlas Kolkata. Checkout how we did in
          2024&nbsp;
          <Link
            href={Constants.stats.redditPost}
            className="font-bold underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex animate-pulse flex-row items-center justify-center">
              here
              <ArrowUpRight className="size-4" />
            </div>
          </Link>
        </div>

        <div className="flex flex-row items-center justify-center gap-x-3">
          <Link
            href={Constants.socials.discord}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant={"neutral"} className="cursor-pointer">
              Bug?
            </Button>
          </Link>

          <Link
            href={Constants.misc.feedbackForm}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant={"neutral"} className="cursor-pointer">
              Feedback
            </Button>
          </Link>

          <Link
            href={Constants.misc.statusPage}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant={"neutral"} className="cursor-pointer">
              Status
            </Button>
          </Link>

          <Link
            href={Constants.socials.gitHub}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant={"neutral"} className="cursor-pointer">
              Contribute
            </Button>
          </Link>
        </div>
      </div>

      <div className="my-10 h-0.5 w-full bg-black" />

      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex-none font-normal">
          Copyright © 2025 Pujo Atlas Kolkata. All rights reserved.
        </div>

        <div className="flex flex-row items-center justify-end gap-x-3">
          {Object.entries(Constants.socials).map(([platform, url]) => (
            <Link
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="cursor-pointer" variant={"neutral"}>
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
