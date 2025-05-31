"use client";

import { InteractiveHoverButton, NumberTicker } from "@/components";
import Star9 from "@/components/stars/s9";
import Marquee from "@/components/ui/marquee";
import { Constants } from "@/lib";
import { Route, Search, UsersRound } from "lucide-react";
import { EvervaultCard } from "@/components/ui/evervault-card";
import posthog from "posthog-js";
import { PostHogEvents } from "@/components/PostHogProvider";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center pt-32 backdrop-blur-xs lg:pt-52">
      <div className="w-full rounded-2xl border-gray-500 lg:w-fit">
        <div className="flex flex-col gap-y-4 text-center">
          <p className="text-7xl font-extrabold lg:text-9xl">
            Pujo{" "}
            <span className="bg-main/50 border-border/40 dark:border-border/70 relative mr-0 -ml-3 rounded-lg border-2 px-3 pt-3 pb-1 lg:mr-2 lg:ml-0 lg:[&_svg]:size-7 xl:[&_svg]:size-[45px]">
              Atlas
              <Star9
                className="absolute -right-2.5 -bottom-2.5 hidden animate-pulse lg:block xl:-right-5 xl:-bottom-4"
                color="var(--main)"
                pathClassName="stroke-5 dark:stroke-3.5 stroke-black dark:stroke-black/70"
              />
              <Star9
                className="absolute -top-2.5 -left-2.5 hidden animate-pulse lg:block xl:-top-4 xl:-left-5"
                color="var(--main)"
                pathClassName="stroke-5 dark:stroke-3.5 stroke-black dark:stroke-black/70"
              />
            </span>
          </p>

          <p className="px-2 pt-6 pb-3 text-lg leading-none font-normal lg:pt-10 lg:pb-5 lg:text-2xl">
            The most <span className="font-bold">advanced</span> pandal hopping
            experience in the world
            <span className="font-medium">*</span>
          </p>

          <div className="flex flex-col items-center justify-center gap-x-0 gap-y-8 lg:flex-row lg:gap-x-20">
            <div className="mt-4 flex flex-col items-center justify-center">
              <NumberTicker
                direction="down"
                value={365}
                startValue={Math.ceil(
                  (new Date(
                    Constants.launchCountdown.daysTillOpenBeta,
                  ).getTime() -
                    new Date().getTime()) /
                    (1000 * 60 * 60 * 24),
                )}
                className="text-7xl font-bold tracking-normal whitespace-pre-wrap lg:text-8xl"
              />
              <div className="text-base lg:text-xs">days till open beta</div>
            </div>
            <div className="mt-4 flex flex-col items-center justify-center">
              <NumberTicker
                direction="down"
                value={365}
                startValue={Math.ceil(
                  (new Date(
                    Constants.launchCountdown.daysTillWeLaunchV2,
                  ).getTime() -
                    new Date().getTime()) /
                    (1000 * 60 * 60 * 24),
                )}
                className="text-7xl font-bold tracking-normal whitespace-pre-wrap lg:text-8xl"
              />
              <div className="text-base lg:text-xs">days till we launch v2</div>
            </div>
            <div className="mt-4 flex flex-col items-center justify-center">
              <NumberTicker
                direction="down"
                value={365}
                startValue={Math.ceil(
                  (new Date(
                    Constants.launchCountdown.daysTillDurgaPuja2025,
                  ).getTime() -
                    new Date().getTime()) /
                    (1000 * 60 * 60 * 24),
                )}
                className="text-7xl font-bold tracking-normal whitespace-pre-wrap lg:text-8xl"
              />
              <div className="text-base lg:text-xs">
                days till Durga Puja 2025
              </div>
            </div>
          </div>

          <InteractiveHoverButton className="mx-auto mt-5 mb-8 hidden w-full self-center lg:block lg:w-fit">
            <a
              href={Constants.socials.discord}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                posthog?.capture(PostHogEvents.HOMEPAGE_CTA_CLICK, {
                  cta: "contribute_discord",
                })
              }
            >
              <p className="text-base font-semibold">Contribute</p>
            </a>
          </InteractiveHoverButton>
        </div>

        <div className="mt-10 flex w-full flex-col items-center justify-center text-center">
          <p className="text-2xl font-bold lg:text-4xl">
            Backed by Amazing Sponsors
          </p>
          <p className="w-[85dvw] pt-2 text-sm leading-tight font-normal lg:w-full lg:pt-4 lg:text-lg">
            We&apos;re grateful to these incredible companies for supporting{" "}
            <br className="hidden lg:block" />
            <span className="font-semibold">Pujo Atlas</span> and making this
            project possible.
          </p>

          <div className="relative mt-5 w-full lg:mx-auto lg:w-[98.75dvw]">
            <div className="absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent lg:w-24" />
            <div className="absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent lg:w-24" />
            <Marquee
              items={Constants.sponsorsMarquee.map((item) => ({
                ...item,
                onClick: () =>
                  posthog?.capture(PostHogEvents.HOMEPAGE_SPONSOR_CLICK, {
                    sponsor: item.alt,
                    link: item.link,
                  }),
              }))}
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center backdrop-blur-3xl lg:mt-10">
        <p className="text-2xl font-bold lg:text-3xl">
          Atlas v1 2024 Durga Pujo Stats
        </p>
        <p className="pt-1 text-base font-normal lg:pt-2 lg:text-sm">
          Measured over just 5 days
          <span className="animate-pulse">*</span>
        </p>
      </div>

      <div className="mx-auto mt-4 flex w-full flex-col items-center justify-between gap-1 px-2 lg:mt-6 lg:w-[calc(100%-5rem)] lg:flex-row lg:gap-4 lg:px-0">
        <EvervaultCard className="mb-4 h-64 w-full rounded-2xl border-2 border-black bg-amber-300/20 backdrop-blur-3xl lg:mb-0 lg:h-48 lg:flex-1 lg:shadow-[3px_3px_0_3px]">
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 lg:px-8">
            <div className="mb-2 flex items-center justify-center rounded-full bg-gray-100/40 p-2.5">
              <Search className="size-10 text-black lg:size-8" />
            </div>
            <span className="text-4xl font-extrabold text-black lg:text-3xl">
              <NumberTicker
                direction="up"
                value={Constants.v1_stats.searches}
                decimalPlaces={2}
                startValue={0}
                className="text-4xl font-extrabold tracking-normal text-black lg:text-3xl"
              />
              K
            </span>
            <span className="text-lg font-normal text-black">Searches</span>
          </div>
        </EvervaultCard>
        <EvervaultCard className="mb-4 h-64 w-full rounded-2xl border-2 border-black bg-amber-300/20 backdrop-blur-3xl lg:mb-0 lg:h-48 lg:flex-1 lg:shadow-[3px_3px_0_3px]">
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 lg:px-8">
            <div className="mb-2 flex items-center justify-center rounded-full bg-gray-100/40 p-2.5">
              <Route className="size-10 text-black lg:size-8" />
            </div>
            <span className="text-4xl font-extrabold text-black lg:text-3xl">
              <NumberTicker
                direction="up"
                value={Constants.v1_stats.journeys}
                decimalPlaces={2}
                startValue={0}
                className="text-4xl font-extrabold tracking-normal text-black lg:text-3xl"
              />
              K
            </span>
            <span className="text-lg font-normal text-black">Journeys</span>
          </div>
        </EvervaultCard>
        <EvervaultCard className="mb-4 h-64 w-full rounded-2xl border-2 border-black bg-amber-300/20 backdrop-blur-3xl lg:mb-0 lg:h-48 lg:flex-1 lg:shadow-[3px_3px_0_3px]">
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 lg:px-8">
            <div className="mb-2 flex items-center justify-center rounded-full bg-gray-100/40 p-2.5">
              <UsersRound className="size-10 text-black lg:size-8" />
            </div>
            <span className="text-4xl font-extrabold text-black lg:text-3xl">
              <NumberTicker
                direction="up"
                value={Constants.v1_stats.visitorsPerDay}
                decimalPlaces={1}
                startValue={0}
                className="text-4xl font-extrabold tracking-normal text-black lg:text-3xl"
              />
              K
            </span>
            <span className="text-lg font-normal text-black">
              Visitors Per Day
            </span>
          </div>
        </EvervaultCard>
      </div>
    </main>
  );
}
