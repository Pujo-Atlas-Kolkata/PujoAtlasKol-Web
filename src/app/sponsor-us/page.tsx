"use client";

import { Constants } from "@/lib";
import Link from "next/link";
import Image from "next/image";
import { EvervaultCard } from "@/components";
import posthog from "posthog-js";
import { PostHogEvents } from "@/Providers";

export default function SponsorUsPage() {
  return (
    <main className="mt-24 mr-2 ml-2 flex flex-col backdrop-blur-xs sm:mt-36 sm:mr-0 sm:ml-10">
      <div className="w-full rounded-2xl border-gray-500">
        <div className="flex flex-col gap-y-2 px-2 lg:px-0">
          <p className="text-3xl font-bold sm:text-5xl">Sponsor Pujo Atlas</p>

          <p className="w-full pt-2 text-base leading-tight font-normal sm:w-[60dvw] sm:text-lg">
            <span className="font-semibold">Pujo Atlas</span> is an{" "}
            <span className="font-semibold">open source</span> project that is
            free to use and ad-free. We rely on the support of our users to keep
            the project running and to make it better. If you like what we do
            and want to support us, you can do so by{" "}
            <span className="font-semibold">sponsoring</span> our project.
          </p>

          <p className="w-full pt-2 text-base leading-tight font-normal sm:w-[60dvw] sm:text-lg">
            We are currently looking for sponsors to help us keep the project
            running and to make it better. If you are interested in sponsoring
            our project, please&nbsp; contact us at{" "}
            <a
              href={`mailto:${Constants.socials.sponsor}`}
              className="inline-flex items-center gap-x-0 font-semibold underline"
            >
              {Constants.socials.sponsor}
            </a>
          </p>

          <p className="w-full pt-4 text-base leading-tight font-normal sm:w-[60dvw] sm:text-lg">
            We really love all of our amazing sponsors who help make sure{" "}
            <span className="font-semibold">Pujo Atlas</span> is here to stay.
          </p>

          <div className="mt-1 flex max-w-full flex-row flex-wrap items-center justify-start gap-2 sm:max-w-[75dvw] sm:flex-nowrap sm:gap-x-2">
            {Constants.sponsorsMarquee.map((sponsor) => (
              <EvervaultCard
                className="bg-main/15 flex h-[12rem] w-full max-w-full flex-col justify-between rounded-3xl border-1 border-black/30 sm:h-[15rem] sm:max-w-[15rem] lg:border-none"
                key={sponsor.alt}
              >
                <div className="flex h-full flex-col items-center justify-between">
                  <div className="mb-2 flex h-[7rem] w-full items-center justify-center sm:h-[10rem]">
                    <Link
                      href={sponsor.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        posthog?.capture(PostHogEvents.SPONSOR_LINK_CLICK, {
                          sponsor: sponsor.alt,
                          link: sponsor.link,
                        })
                      }
                    >
                      <Image
                        src={sponsor.src}
                        alt={sponsor.alt}
                        width={150}
                        height={150}
                        className="rounded-lg object-contain sm:h-[150px] sm:w-[150px]"
                      />
                    </Link>
                  </div>
                  <p className="flex w-full items-center justify-center rounded-lg bg-white/35 p-3 text-center text-xs font-semibold lg:rounded-2xl lg:p-2">
                    {sponsor.description}
                  </p>
                </div>
              </EvervaultCard>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
