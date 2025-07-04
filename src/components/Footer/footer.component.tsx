"use client";

import { Constants } from "@/lib";
import { ArrowUpRight } from "lucide-react";
import { FaDiscord, FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import posthog from "posthog-js";
import { PostHogEvents } from "@/providers";
import { Button } from "@/components";

export const Footer = () => {
  const socialIcons = {
    discord: FaDiscord,
    gitHub: FaGithub,
    facebook: FaFacebook,
    instagram: FaInstagram,
    twitter: FaTwitter,
  };

  return (
    <footer className="w-full max-w-screen-xl mx-auto flex-w mx-auto my-3 flex w-[calc(100%-1rem)] flex-col items-center rounded-lg border-2 border-black bg-amber-300/30 p-2 backdrop-blur-sm lg:my-10 lg:w-[calc(100%-5rem)] lg:p-12">
      {/* Footer for large screens */}
      <div className="hidden w-full lg:block">
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
            <div>Copyright © 2025 Pujo Atlas.</div>
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
      <div className="block w-full lg:hidden">
        <div className="mx-5 mt-5 mb-8 flex flex-row items-center justify-between gap-3 text-sm underline decoration-dotted">
          <Link
            href={Constants.stats.redditPost}
            className="font-semibold"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              posthog?.capture(PostHogEvents.FOOTER_CLICK, {
                link: "redditPost",
              })
            }
          >
            <div className="flex flex-row items-center justify-center">
              v1 Wrapped
              <ArrowUpRight className="size-4 animate-pulse" />
            </div>
          </Link>

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
          >
            Status
          </Link>
        </div>

        <div className="mt-3 flex w-full flex-col gap-3">
          <div className="mx-5 mb-2 flex flex-row items-center justify-between gap-3">
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
                  {socialIcons[platform as keyof typeof socialIcons]
                    ? (() => {
                        const Icon = socialIcons[platform as keyof typeof socialIcons];
                        return <Icon size={28} className="inline-block" />;
                      })()
                    : platform.charAt(0).toUpperCase() + platform.slice(1)}
                </Link>
              ))}
          </div>
        </div>

        <div className="my-5 w-full" />

        <div className="flex w-full flex-col items-center justify-between gap-3">
          <div className="flex gap-2 text-sm font-normal">
            <div>Copyright © 2025 Pujo Atlas.</div>
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
        </div>
      </div>
    </footer>
  );
};
