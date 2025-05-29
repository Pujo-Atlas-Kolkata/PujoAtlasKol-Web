"use client";

import { Constants } from "@/lib/contants";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import posthog from "posthog-js";
import { PostHogEvents } from "@/components/PostHogProvider";

export const Footer = () => {
  return (
    <footer className="mx-auto my-10 flex w-[calc(100%-10rem)] flex-col items-center rounded-lg border-2 border-black bg-amber-300/30 p-12 backdrop-blur-sm">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-center text-center text-lg font-normal">
          Cooked with ❤️ by&nbsp;
          <span className="font-medium">Pujo Atlas Kolkata</span>.
          Checkout&nbsp;
          <span className="font-medium">Atlas v1 Wrapped</span>&nbsp;2024&nbsp;
          <a
            href={Constants.stats.redditPost}
            className="font-semibold underline"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              posthog?.capture(PostHogEvents.FOOTER_CLICK, {
                link: "redditPost",
              })
            }
          >
            <div className="flex flex-row items-center justify-center">
              here
              <ArrowUpRight className="size-4 animate-pulse" />
            </div>
          </a>
        </div>

        <div className="flex flex-row items-center justify-center gap-x-3">
          <Link
            href={Constants.socials.discord}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              posthog?.capture(PostHogEvents.FOOTER_CLICK, { link: "discord" })
            }
          >
            <Button variant={"neutral"} className="cursor-pointer">
              Bug?
            </Button>
          </Link>

          <Link
            href={Constants.misc.feedbackForm}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              posthog?.capture(PostHogEvents.FOOTER_CLICK, {
                link: "feedbackForm",
              })
            }
          >
            <Button variant={"neutral"} className="cursor-pointer">
              Feedback
            </Button>
          </Link>

          <Link
            href={Constants.misc.statusPage}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              posthog?.capture(PostHogEvents.FOOTER_CLICK, {
                link: "statusPage",
              })
            }
          >
            <Button variant={"neutral"} className="cursor-pointer">
              Status
            </Button>
          </Link>

          <Link
            href={Constants.socials.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              posthog?.capture(PostHogEvents.FOOTER_CLICK, { link: "github" })
            }
          >
            <Button variant={"neutral"} className="cursor-pointer">
              Contribute
            </Button>
          </Link>
        </div>
      </div>

      <div className="my-10 h-0.5 w-full bg-black" />

      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex font-normal">
          Copyright © 2025 Pujo Atlas Kolkata.&nbsp;
          <Link
            href={Constants.misc.license}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold"
            onClick={() =>
              posthog?.capture(PostHogEvents.FOOTER_CLICK, { link: "license" })
            }
          >
            <div className="flex flex-row items-center justify-center">
              MIT&nbsp;
              <span className="underline">License</span>
              <ArrowUpRight className="size-4 animate-pulse" />
            </div>
          </Link>
        </div>

        <div className="flex flex-row items-center justify-end gap-x-3">
          {Object.entries(Constants.socials).map(([platform, url]) => (
            <Link
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                posthog?.capture(PostHogEvents.FOOTER_CLICK, { link: platform })
              }
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
