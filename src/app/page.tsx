import { NumberTicker } from "@/components";
import Star9 from "@/components/stars/s9";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="mt-40 flex min-h-screen flex-col items-center">
      <div className="w-fit rounded-2xl border-gray-500 p-32 backdrop-blur-xs">
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
            {/* <div className="mt-2 flex flex-col items-center justify-center gap-y-2">
              <Button
                disabled={true}
                variant={"reverse"}
                className="w-fit cursor-pointer px-16 py-8 text-xl"
              >
                Start Exploring
              </Button>

              <Button
                variant={"reverse"}
                className="w-fit cursor-pointer px-16 text-lg"
              >
                View 2024 Stats
              </Button>
            </div> */}

            <div className="mt-4 flex flex-col items-center justify-center">
              <NumberTicker
                direction="down"
                value={365}
                startValue={Math.ceil(
                  (new Date("2025-08-21").getTime() - new Date().getTime()) /
                    (1000 * 60 * 60 * 24),
                )}
                className="text-8xl font-bold tracking-tighter whitespace-pre-wrap"
              />

              <div className="text-sm">days till closed beta</div>
            </div>

            <div className="mt-4 flex flex-col items-center justify-center">
              <NumberTicker
                direction="down"
                value={365}
                startValue={Math.ceil(
                  (new Date("2025-09-21").getTime() - new Date().getTime()) /
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
                  (new Date("2025-09-27").getTime() - new Date().getTime()) /
                    (1000 * 60 * 60 * 24),
                )}
                className="text-8xl font-bold tracking-tighter whitespace-pre-wrap"
              />

              <div className="text-sm">days till Durga Puja 2025</div>
            </div>
          </div>
        </div>

        <footer className="mt-24 flex flex-row items-center justify-center text-center text-sm">
          Cooked with ❤️ by Pujo Atlas Kolkata. Checkout how we did in
          2024&nbsp;
          <a
            href="https://www.reddit.com/r/kolkata/comments/1g4zf8n/আসছ_বছর_আবর_হব/"
            className="font-bold underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-row items-center justify-center">
              here
              <ArrowUpRight className="size-4 animate-pulse" />
            </div>
          </a>
        </footer>
      </div>
    </main>
  );
}
