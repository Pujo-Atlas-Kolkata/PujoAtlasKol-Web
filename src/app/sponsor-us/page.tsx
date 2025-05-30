"use client";

import { Constants } from "@/lib";
import Link from "next/link";
import Image from "next/image";
import { EvervaultCard } from "@/components";
import posthog from "posthog-js";
import { PostHogEvents } from "@/components/PostHogProvider";

export default function SponsorUsPage() {
  return (
    <main className="mt-36 ml-10 flex min-h-screen flex-col backdrop-blur-xs">
      <div className="w-full rounded-2xl border-gray-500">
        <div className="flex flex-col gap-y-2">
          <p className="text-5xl font-bold">Sponsor Pujo Atlas</p>

          <p className="w-[60dvw] pt-2 text-lg leading-tight font-normal">
            <span className="font-semibold">Pujo Atlas</span> is an{" "}
            <span className="font-semibold">open source</span> project that is
            free to use and ad-free. We rely on the support of our users to keep
            the project running and to make it better. If you like what we do
            and want to support us, you can do so by{" "}
            <span className="font-semibold">sponsoring</span> our project.
          </p>

          <p className="w-[60dvw] pt-2 text-lg leading-tight font-normal">
            We are currently looking for sponsors to help us keep the project
            running and to make it better. If you are interested in sponsoring
            our project, please&nbsp; contact us at{" "}
            <a
              href={`mailto:${Constants.socials.sponsorMail}`}
              className="inline-flex items-center gap-x-0 font-semibold underline"
            >
              {Constants.socials.sponsorMail}
            </a>
          </p>

          <p className="w-[60dvw] pt-4 text-lg leading-tight font-normal">
            We really love all of our amazing sponsors who help make sure{" "}
            <span className="font-semibold">Pujo Atlas</span> is here to stay.
          </p>

          <div className="mt-1 flex max-w-[75dvw] flex-row items-center justify-start gap-x-2">
            {Constants.sponsorsMarquee.map((sponsor) => (
              <EvervaultCard
                className="bg-main/15 flex h-[15rem] max-w-[15rem] flex-col justify-between rounded-3xl"
                key={sponsor.alt}
              >
                <div className="flex h-full flex-col items-center justify-between">
                  <div className="mb-2 flex h-[10rem] w-full items-center justify-center">
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
                        className="rounded-lg object-contain"
                      />
                    </Link>
                  </div>
                  <p className="flex w-full items-center justify-center rounded-2xl bg-white/35 p-3 text-center text-sm font-semibold">
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
