"use client";

import { Constants, team } from "@/lib";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import posthog from "posthog-js";
import { PostHogEvents } from "@/Providers";
import { TeamCard } from "@/components";

export default function AboutUsPage() {
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = decodeURIComponent(window.location.hash.slice(1));
      setHighlightedId(id);

      // Remove highlight after 10 seconds
      const timeout = setTimeout(() => setHighlightedId(null), 10000);
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <main className="mt-36 flex flex-col backdrop-blur-xs lg:ml-10">
      <div className="w-full rounded-2xl border-gray-500">
        <div className="ml-5 flex flex-col gap-y-2 lg:ml-0">
          <p className="text-5xl font-bold lg:text-left">Meet the Team</p>

          <p className="pt-1.5 pb-0.5 text-3xl font-semibold">Who are we?</p>

          <p className="w-[90dvw] text-lg leading-tight font-normal lg:w-[60dvw]">
            We are a collective of{" "}
            <span className="font-semibold">Durga Puja</span> enthusiasts
            committed to making Pandal Hopping in{" "}
            <span className="font-semibold">Kolkata</span> more enjoyable and
            accessible for everyone. Our team, which includes{" "}
            <span className="font-semibold">developers</span>,{" "}
            <span className="font-semibold">designers</span>,{" "}
            <span className="font-semibold">researchers</span>, and{" "}
            <span className="font-semibold">content creators</span> from across
            the country, has united in the spirit of open source to build this
            experience. We&apos;re always looking for new members to contribute.
            If you&apos;d like to get involved, please&nbsp;
            <a
              href={Constants.socials.discord}
              className="inline-flex items-center gap-x-0 font-semibold underline"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                posthog?.capture(PostHogEvents.ABOUT_DISCORD_CLICK, {
                  link: "about_discord",
                })
              }
            >
              join our discord server
              <ArrowUpRight className="size-4 animate-pulse" />
            </a>
          </p>
        </div>

        <div className="mt-10">
          {Object.entries(team).map(([group, members]) => (
            <div key={group} className="mb-12">
              <h2 className="mb-4 text-center text-3xl font-bold lg:text-left">
                {group}
              </h2>

              <div className="flex w-full flex-wrap justify-center gap-10 lg:justify-start lg:gap-4">
                {members.map((member) => (
                  <div
                    id={member.name}
                    key={member.id}
                    className="scroll-mt-40"
                  >
                    <TeamCard
                      name={member.name}
                      avatar={member.avatar}
                      department={member.department}
                      socials={member.socials}
                      highlighted={highlightedId === member.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
