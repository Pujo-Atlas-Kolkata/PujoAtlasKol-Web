"use client";

import Image from "next/image";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

export default function Marquee({
  items,
}: {
  items: {
    src: string;
    alt: string;
    link: string;
    description: string;
    onClick?: () => void;
  }[];
}) {
  return (
    <TooltipProvider>
      <div className="border-border text-foreground font-base relative flex w-full overflow-x-hidden border-t-2 border-b-2 bg-white/75">
        <div className="animate-marquee py-12 whitespace-nowrap">
          {items.map((item, index) => (
            <span key={index} className="mx-4 inline-flex items-center sm:mx-8">
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

        <div className="animate-marquee2 absolute top-0 py-12 whitespace-nowrap">
          {items.map((item, index) => (
            <span
              key={index}
              className="mx-4 ml-64 inline-flex items-center sm:mx-8"
            >
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

        {/* must have both of these in order to work */}
      </div>
    </TooltipProvider>
  );
}
