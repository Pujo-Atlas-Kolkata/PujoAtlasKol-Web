"use client";

import Image from "next/image";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

export const SponsorWall = ({
  items,
}: {
  items: {
    src: string;
    alt: string;
    link: string;
    description: string;
    onClick?: () => void;
  }[];
}) => {
  return (
    <TooltipProvider>
      <div className="mx-auto mt-4 grid grid-cols-3 gap-4 lg:my-10 lg:w-[calc(100%-5rem)] lg:grid-cols-6">
        {items.map((item, index) => (
          <span key={index} className="mx-2 inline-flex items-center sm:mx-4 md:mx-6">
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={item.onClick}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    className="h-8 w-24 object-contain sm:h-12 sm:w-36"
                    priority={true}
                    draggable="false"
                    width={100}
                    height={100}
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>{item.description}</TooltipContent>
            </Tooltip>
          </span>
        ))}
      </div>
    </TooltipProvider>
  );
};
