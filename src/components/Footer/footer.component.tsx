"use client";

import { Constants } from "@/lib";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import posthog from "posthog-js";
import { PostHogEvents } from "@/providers";
import { Button } from "@/components";

export const Footer = () => {
  return (
    <footer className="flex-w mx-auto my-3 flex w-[calc(100%-1rem)] flex-col items-center rounded-lg border-2 border-black bg-amber-300/30 p-2 backdrop-blur-sm lg:my-10 lg:w-[calc(100%-5rem)] lg:p-12">
      {/* Footer for large screens */}
      <div className="block w-full">
        <div className="lg:items:center flex w-full flex-col items-start justify-between gap-3 lg:flex-row">
          <div className="text-normal flex flex-row flex-wrap items-center gap-2 text-center font-normal lg:text-lg">
            <div>
              Cooked with ❤️ by&nbsp;
              <span className="font-medium">Pujo Atlas Kolkata</span>.
            </div>
            <div className="flex flex-row items-center justify-center">
              Checkout&nbsp;
              <span className="font-medium">Atlas v1 Wrapped</span>
              &nbsp;2024&nbsp;
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
          </div>

          <div className="flex flex-row flex-wrap items-center justify-start gap-3 lg:flex-nowrap">
            <Link
              href={Constants.socials.discord}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                posthog?.capture(PostHogEvents.FOOTER_CLICK, {
                  link: "discord",
                })
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
              onClick={() => posthog?.capture(PostHogEvents.FOOTER_CLICK, { link: "github" })}
            >
              <Button variant={"neutral"} className="cursor-pointer">
                Contribute
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-5 mb-4 h-0.5 w-full bg-black lg:my-10" />

        <div className="flex w-full flex-col flex-wrap items-start justify-between gap-3 lg:flex-row lg:flex-nowrap lg:items-center">
          <div className="text-normal flex flex-wrap gap-2 font-normal lg:text-lg">
            <div>Copyright © 2025 Pujo Atlas Kolkata.</div>
            <Link
              href={Constants.misc.license}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
              onClick={() =>
                posthog?.capture(PostHogEvents.FOOTER_CLICK, {
                  link: "license",
                })
              }
            >
              <div className="flex flex-row items-center justify-center">
                MIT&nbsp;
                <span className="underline">License</span>
                <ArrowUpRight className="size-4 animate-pulse" />
              </div>
            </Link>
          </div>

          <div className="flex flex-row flex-wrap items-center justify-start gap-3 md:flex-nowrap">
            {Object.entries(Constants.socials)
              .filter(([platform]) => platform !== "sponsor")
              .map(([platform, url]) => (
                <Link
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    posthog?.capture(PostHogEvents.FOOTER_CLICK, {
                      link: platform,
                    })
                  }
                >
                  <Button className="cursor-pointer" variant={"neutral"}>
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </Button>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Footer for mobile screens */}
      <div className="hidden w-full text-center">
        <div className="flex flex-col items-start justify-start text-sm font-normal">
          <div>
            Cooked with ❤️ by&nbsp;
            <span className="font-medium">Pujo Atlas Kolkata</span>.
          </div>

          <div className="flex">
            Checkout&nbsp;
            <span className="font-medium">Atlas v1 Wrapped</span>
            &nbsp;2024&nbsp;
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
                <ArrowUpRight className="mb-0.5 size-3 animate-pulse" />
              </div>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 pt-2 text-xs font-medium">
          <Link
            href={Constants.socials.discord}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              posthog?.capture(PostHogEvents.FOOTER_CLICK, {
                link: "discord",
              })
            }
            className="rounded-sm bg-black/45 px-3 pt-2.5 pb-2 font-medium text-white"
          >
            Bug?
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
            className="rounded-sm bg-black/45 px-3 pt-2.5 pb-2 font-medium text-white"
          >
            Feedback
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
            className="rounded-sm bg-black/45 px-3 pt-2.5 pb-2 font-medium text-white"
          >
            Status
          </Link>

          <Link
            href={Constants.socials.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => posthog?.capture(PostHogEvents.FOOTER_CLICK, { link: "github" })}
            className="rounded-sm bg-black/45 px-3 pt-2.5 pb-2 font-medium text-white"
          >
            Contribute
          </Link>

          <Link
            href={Constants.routes.sponsorUs}
            onClick={() =>
              posthog?.capture(PostHogEvents.FOOTER_CLICK, {
                link: "sponsor-us",
              })
            }
            className="rounded-sm bg-black/45 px-3 pt-2.5 pb-2 font-medium text-white"
          >
            Sponsor Us
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-3 pt-3.5 text-xs font-medium">
          <p className="col-span-3 -mb-2 text-left text-sm font-medium">Find us on</p>

          {Object.entries(Constants.socials)
            .filter(([platform]) => platform !== "sponsor")
            .map(([platform, url]) => (
              <Link
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  posthog?.capture(PostHogEvents.FOOTER_CLICK, {
                    link: platform,
                  })
                }
                className="rounded-sm bg-black/45 px-3 pt-2.5 pb-2 font-medium text-white"
              >
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </Link>
            ))}
        </div>

        <div className="flex flex-row items-center justify-center pt-6 text-xs">
          <div>Copyright © 2025 Pujo Atlas Kolkata.&nbsp;</div>

          <Link
            href={Constants.misc.license}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
            onClick={() =>
              posthog?.capture(PostHogEvents.FOOTER_CLICK, {
                link: "license",
              })
            }
          >
            MIT Licensed.
          </Link>
        </div>
      </div>
    </footer>
  );
};
