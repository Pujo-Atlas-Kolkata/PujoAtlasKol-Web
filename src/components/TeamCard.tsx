import Image from "next/image";
import React from "react";
import { EvervaultCard } from "./ui/evervault-card";

export type TeamCardProps = {
  name: string;
  avatar: string;
  department: string;
  socials: {
    discord?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
};

export const TeamCard: React.FC<TeamCardProps> = ({
  name,
  avatar,
  department,
}) => {
  return (
    <EvervaultCard className="flex h-80 w-64 items-center justify-center rounded-2xl border-2 border-black p-0">
      <div className="flex h-full w-full flex-col items-center justify-center px-4 py-6">
        <Image
          src={avatar}
          alt={name}
          className="mb-2 h-20 w-20 rounded-full object-cover"
          width={80}
          height={80}
        />

        <div className="mt-2 text-xl font-bold break-words">{name}</div>

        <div className="mb-2">{department}</div>
      </div>
    </EvervaultCard>
  );
};

export default TeamCard;
