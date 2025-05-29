import { ArrowUpRight } from "lucide-react";

import { Constants } from "@/lib";
import Link from "next/link";
import Image from "next/image";
import { EvervaultCard } from "@/components";

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
            our project, please&nbsp;
            <Link
              href={Constants.socials.discord}
              className="inline-flex items-center gap-x-0 font-semibold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact us here in our discord server
              <ArrowUpRight className="size-4 animate-pulse" />
            </Link>
          </p>

          <p className="w-[60dvw] pt-4 text-lg leading-tight font-normal">
            We really love all of our amazing sponsors who help make sure{" "}
            <span className="font-semibold">Pujo Atlas</span> is here to stay.
          </p>

          <div className="mt-1 flex max-w-[75dvw] flex-row items-center justify-start gap-x-2">
            {Constants.sponsorsMarquee.map((sponsor) => (
              <EvervaultCard
                key={sponsor.alt}
                className="bg-main/15 rounded-3xl"
              >
                <Link
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={sponsor.src}
                    alt={sponsor.alt}
                    width={150}
                    height={150}
                    className="rounded-lg"
                  />
                </Link>
              </EvervaultCard>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
