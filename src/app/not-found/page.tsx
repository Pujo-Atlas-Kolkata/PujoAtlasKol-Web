"use client";

import { Button } from "@/components";
import { Constants } from "@/lib";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import posthog from "posthog-js";
import { PostHogEvents } from "@/providers";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex h-screen flex-col items-center justify-center p-3">
      <div className="flex flex-col items-center justify-center backdrop-blur-3xl">
        <p className="text-9xl font-extrabold">404</p>
        <p className="text-lg font-normal">Uh oh! Looks like you lost your way.</p>

        <Button
          variant={"neutral"}
          className="mt-4 cursor-pointer font-medium"
          onClick={() => {
            posthog?.capture(PostHogEvents.NOTFOUND_HOME_CLICK, {
              link: "notfound_home",
            });
            router.push(Constants.routes.landing.home);
          }}
        >
          Go back to the home page <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
