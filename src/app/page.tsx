import { NumberTicker } from "@/components";
import Star9 from "@/components/stars/s9";
import Marquee from "@/components/ui/marquee";
import { Constants } from "@/lib";
import { CircleChevronDown } from "lucide-react";

export default function HomePage() {
  return (
    <main className="mt-24 flex h-screen flex-col items-center justify-center">
      <div className="w-fit rounded-2xl border-gray-500 backdrop-blur-xs">
        <div className="flex flex-col gap-y-4 text-center">
          <p className="text-9xl font-extrabold">
            Pujo{" "}
            <span className="bg-main/50 border-border/40 dark:border-border/70 relative mr-0 rounded-lg border-2 px-5 sm:mr-2 sm:[&_svg]:size-7 md:[&_svg]:size-[45px]">
              Atlas
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

          <p className="pt-10 pb-5 text-2xl">
            You create the memories, We show you the way!
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
                className="text-8xl font-bold tracking-tighter whitespace-pre-wrap"
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
                className="text-8xl font-bold tracking-tighter whitespace-pre-wrap"
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
                className="text-8xl font-bold tracking-tighter whitespace-pre-wrap"
              />

              <div className="text-sm">days till Durga Puja 2025</div>
            </div>
          </div>
        </div>

        <CircleChevronDown className="mx-auto mt-12 mb-5 size-10 animate-bounce fill-amber-300/75 text-black" />

        <div className="flex w-full flex-col items-center justify-center text-center">
          <p className="text-4xl font-bold">
            Powered by{" "}
            <span className="rounded-lg bg-amber-300/30 px-2 py-1">
              Amazing Sponsors
            </span>
          </p>

          <p className="pt-4 leading-none">
            We&apos;re grateful to these incredible companies for supporting{" "}
            <br />
            Pujo Atlas and making this project possible
          </p>

          <div className="mx-auto mt-5 w-[98dvw]">
            <Marquee items={Constants.sponsorsMarquee} />
          </div>
        </div>
      </div>
    </main>
  );
}
