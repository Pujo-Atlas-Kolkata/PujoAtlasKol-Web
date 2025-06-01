"use client";

import Image from "next/image";
import { type FC } from "react";
import { cn } from "@/lib";
import {
  RiDiscordFill,
  RiGithubFill,
  RiTwitterXLine,
  RiLinkedinFill,
  RiGlobalLine,
} from "react-icons/ri";
import { Link } from "lucide-react";
import { toast } from "sonner";
import posthog from "posthog-js";
import { PostHogEvents } from "@/Providers";
import { EvervaultCard } from "@/components";

export type TeamCardProps = {
  name: string;
  avatar: string;
  department: string;
  socials: {
    discord?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  highlighted?: boolean;
};

export const TeamCard: FC<TeamCardProps> = ({
  name,
  avatar,
  department,
  socials,
  highlighted = false,
}) => {
  const handleCopyLink = async () => {
    const url = `${window.location.origin}${window.location.pathname}#${encodeURIComponent(name)}`;
    await navigator.clipboard.writeText(url);
    toast.success("Profile link copied to clipboard!");
    posthog?.capture(PostHogEvents.TEAMCARD_COPY_LINK, { name });
  };

  return (
    <EvervaultCard
      className={cn(
        "mx-auto flex h-auto w-[90dvw] items-center justify-center rounded-2xl border-2 border-black p-0 shadow-[3px_3px_0_3px] hover:bg-transparent lg:w-64",
        {
          "bg-purple-200/30": department === "Web",
          "bg-fuchsia-200/30": department === "Mobile",
          "bg-green-100/30": department === "Backend",
          "bg-amber-300/30": department === "DevOps",
          "bg-yellow-200/30": department === "Data Science",
          "bg-indigo-200/30": department === "Design",
          "bg-red-200/30": department === "Content",
          "bg-orange-200/30": department === "Coordinator",
          "bg-blue-200/30": department === "Community",
          "animate-pulse bg-gradient-to-r from-orange-200 to-amber-200":
            highlighted,
        },
      )}
    >
      <div className="flex h-full w-full flex-col items-center justify-center px-4">
        <div
          className="fixed top-3 right-3 grid cursor-pointer place-items-center rounded-full bg-black/10 p-1 text-2xl hover:bg-white/70"
          onClick={handleCopyLink}
        >
          <Link className="size-6 lg:size-5" />
        </div>

        <Image
          priority={true}
          src={avatar}
          alt={name}
          className="mb-2 h-32 w-32 rounded-full bg-gray-400/40 object-cover lg:h-20 lg:w-20"
          width={80}
          height={80}
        />

        <div className="mt-2 text-2xl font-bold break-words lg:text-xl">
          {name}
        </div>

        <div className="mt-1 mb-10 text-lg lg:mt-0 lg:mb-6 lg:text-base">
          {department}
        </div>

        <div className="flex flex-row items-center justify-center gap-4">
          {socials.website && (
            <a
              title="Website"
              href={socials.website}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                posthog?.capture(PostHogEvents.TEAMCARD_SOCIAL_CLICK, {
                  name,
                  social: "website",
                  url: socials.website,
                })
              }
            >
              <RiGlobalLine className="grid size-10 place-items-center rounded-full bg-black/10 p-1 text-2xl hover:bg-white/70 lg:size-8" />
            </a>
          )}

          {socials.discord && (
            <a
              title="Discord"
              href={socials.discord}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                posthog?.capture(PostHogEvents.TEAMCARD_SOCIAL_CLICK, {
                  name,
                  social: "discord",
                  url: socials.discord,
                })
              }
            >
              <RiDiscordFill className="size-10 rounded-full bg-black/10 p-1 hover:bg-white/70 lg:size-8" />
            </a>
          )}

          {socials.github && (
            <a
              title="Github"
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                posthog?.capture(PostHogEvents.TEAMCARD_SOCIAL_CLICK, {
                  name,
                  social: "github",
                  url: socials.github,
                })
              }
            >
              <RiGithubFill className="size-10 rounded-full bg-black/10 p-1 hover:bg-white/70 lg:size-8" />
            </a>
          )}

          {socials.twitter && (
            <a
              title="Twitter"
              href={socials.twitter}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                posthog?.capture(PostHogEvents.TEAMCARD_SOCIAL_CLICK, {
                  name,
                  social: "twitter",
                  url: socials.twitter,
                })
              }
            >
              <RiTwitterXLine className="size-10 rounded-full bg-black/10 p-1 text-2xl hover:bg-white/70 lg:size-8" />
            </a>
          )}

          {socials.linkedin && (
            <a
              title="LinkedIn"
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                posthog?.capture(PostHogEvents.TEAMCARD_SOCIAL_CLICK, {
                  name,
                  social: "linkedin",
                  url: socials.linkedin,
                })
              }
            >
              <RiLinkedinFill className="grid size-10 place-items-center rounded-full bg-black/10 p-1 text-2xl hover:bg-white/70 lg:size-8" />
            </a>
          )}
        </div>
      </div>
    </EvervaultCard>
  );
};

export default TeamCard;
