import { InteractiveHoverButton, NumberTicker } from "@/components";
import Star9 from "@/components/stars/s9";
import Marquee from "@/components/ui/marquee";
import { Constants } from "@/lib";
import { Route, Search, UsersRound } from "lucide-react";
import { EvervaultCard } from "@/components/ui/evervault-card";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center pt-52 backdrop-blur-xs">
      <div className="w-fit rounded-2xl border-gray-500">
        <div className="flex flex-col gap-y-4 text-center">
          <p className="text-9xl font-extrabold">
            Pujo{" "}
            <span className="bg-main/50 border-border/40 dark:border-border/70 relative mr-0 rounded-lg border-2 px-5 pt-5 pb-1 sm:mr-2 sm:[&_svg]:size-7 md:[&_svg]:size-[45px]">
              Atlas
              <Star9
                className="absolute -right-2.5 -bottom-2.5 hidden animate-pulse sm:block md:-right-5 md:-bottom-4"
                color="var(--main)"
                pathClassName="stroke-5 dark:stroke-3.5 stroke-black dark:stroke-black/70"
              />
              <Star9
                className="absolute -top-2.5 -left-2.5 hidden animate-pulse sm:block md:-top-4 md:-left-5"
                color="var(--main)"
                pathClassName="stroke-5 dark:stroke-3.5 stroke-black dark:stroke-black/70"
              />
            </span>
          </p>

          <p className="pt-10 pb-5 text-2xl leading-none font-normal">
            The most <span className="font-bold">advanced</span> pandal hopping
            experience in the world
            <span className="font-medium">*</span>
          </p>

          <div className="flex flex-row items-center justify-center gap-x-20">
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
                className="text-8xl font-bold tracking-normal whitespace-pre-wrap"
              />

              <div className="text-sm">days till open beta</div>
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
                className="text-8xl font-bold tracking-normal whitespace-pre-wrap"
              />

              <div className="text-sm">days till we launch v2</div>
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
                className="text-8xl font-bold tracking-normal whitespace-pre-wrap"
              />

              <div className="text-sm">days till Durga Puja 2025</div>
            </div>
          </div>

          <InteractiveHoverButton className="mx-auto mt-5 mb-10 w-fit self-center">
            <Link
              href={Constants.socials.discord}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-base font-semibold">Contribute</p>
            </Link>
          </InteractiveHoverButton>
        </div>

        <div className="flex w-full flex-col items-center justify-center text-center">
          <p className="text-4xl font-bold">Backed by Amazing Sponsors</p>

          <p className="pt-4 leading-tight font-normal">
            We&apos;re grateful to these incredible companies for supporting{" "}
            <br />
            <span className="font-semibold">Pujo Atlas</span> and making this
            project possible.
          </p>

          <div className="mx-auto mt-2 w-[98dvw]">
            <Marquee items={Constants.sponsorsMarquee} />
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center backdrop-blur-3xl">
        <p className="text-3xl font-bold">Atlas v1 2024 Durga Pujo Stats</p>
        <p className="pt-2 text-sm font-normal">
          Measured over just 5 days
          <span className="animate-pulse">*</span>
        </p>
      </div>

      <div className="mx-auto mt-6 flex w-[calc(100%-10rem)] flex-row items-center justify-between gap-4">
        <EvervaultCard className="h-48 flex-1 rounded-2xl border-2 border-black bg-amber-300/20 shadow-[3px_3px_0_3px] backdrop-blur-3xl">
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-8">
            <div className="mb-2 flex items-center justify-center rounded-full bg-gray-100/40 p-2.5">
              <Search className="size-8 text-black" />
            </div>
            <span className="text-3xl font-extrabold text-black">
              <NumberTicker
                direction="up"
                value={Constants.v1_stats.searches}
                decimalPlaces={2}
                startValue={0}
                className="text-3xl font-extrabold tracking-normal text-black"
              />
              K
            </span>
            <span className="text-lg font-normal text-black">Searches</span>
          </div>
        </EvervaultCard>

        <EvervaultCard className="h-48 w-full flex-1 rounded-2xl border-2 border-black bg-amber-300/20 shadow-[3px_3px_0_3px]">
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-8">
            <div className="mb-2 flex items-center justify-center rounded-full bg-gray-100/40 p-2.5">
              <Route className="size-8 text-black" />
            </div>
            <span className="text-3xl font-extrabold text-black">
              <NumberTicker
                direction="up"
                value={Constants.v1_stats.journeys}
                decimalPlaces={2}
                startValue={0}
                className="text-3xl font-extrabold tracking-normal text-black"
              />
              K
            </span>
            <span className="text-lg font-normal text-black">Journeys</span>
          </div>
        </EvervaultCard>

        <EvervaultCard className="h-48 flex-1 rounded-2xl border-2 border-black bg-amber-300/20 shadow-[3px_3px_0_3px]">
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-8">
            <div className="mb-2 flex items-center justify-center rounded-full bg-gray-100/40 p-2.5">
              <UsersRound className="size-8 text-black" />
            </div>
            <span className="text-3xl font-extrabold text-black">
              <NumberTicker
                direction="up"
                value={Constants.v1_stats.visitorsPerDay}
                decimalPlaces={1}
                startValue={0}
                className="text-3xl font-extrabold tracking-normal text-black"
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
