"use client";

import Image from "next/image";
import { type FC } from "react";
import { EvervaultCard } from "./ui/evervault-card";
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
  };

  return (
    <EvervaultCard
      className={cn(
        "flex h-auto w-64 items-center justify-center rounded-2xl border-2 border-black p-0 shadow-[3px_3px_0_3px] hover:bg-transparent",
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
          <Link className="size-4" />
        </div>

        <Image
          priority={true}
          src={avatar}
          alt={name}
          className="mb-2 h-20 w-20 rounded-full bg-gray-400/40 object-cover"
          width={80}
          height={80}
        />

        <div className="mt-2 text-xl font-bold break-words">{name}</div>

        <div className="mb-6">{department}</div>

        <div className="flex flex-row items-center justify-center gap-4">
          {socials.website && (
            <a
              title="Website"
              href={socials.website}
              target="_blank"
              rel="noreferrer"
            >
              <RiGlobalLine
                size={30}
                className="grid place-items-center rounded-full bg-black/10 p-1 text-2xl hover:bg-white/70"
              />
            </a>
          )}

          {socials.discord && (
            <a
              title="Discord"
              href={socials.discord}
              target="_blank"
              rel="noreferrer"
            >
              <RiDiscordFill
                size={30}
                className="rounded-full bg-black/10 p-1 hover:bg-white/70"
              />
            </a>
          )}

          {socials.github && (
            <a
              title="Github"
              href={socials.github}
              target="_blank"
              rel="noreferrer"
            >
              <RiGithubFill
                size={30}
                className="rounded-full bg-black/10 p-1 hover:bg-white/70"
              />
            </a>
          )}

          {socials.twitter && (
            <a
              title="Twitter"
              href={socials.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <RiTwitterXLine
                size={30}
                className="rounded-full bg-black/10 p-1 text-2xl hover:bg-white/70"
              />
            </a>
          )}

          {socials.linkedin && (
            <a
              title="LinkedIn"
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <RiLinkedinFill
                size={30}
                className="grid place-items-center rounded-full bg-black/10 p-1 text-2xl hover:bg-white/70"
              />
            </a>
          )}
        </div>
      </div>
    </EvervaultCard>
  );
};

export default TeamCard;
