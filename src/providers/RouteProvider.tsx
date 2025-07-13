"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { isBETA } from "@/lib/utils";
import { Constants } from "@/lib/constants";
import posthog from "posthog-js";
import { PostHogEvents } from "@/providers/PostHogProvider";

const allowedRoutes = [
  ...Object.values(Constants.routes.landing),
  ...Object.values(Constants.routes.misc),
];

export const RouteProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  console.log("Allowed Routes:", allowedRoutes);
  useEffect(() => {
    if (!isBETA() && !allowedRoutes.includes(pathname)) {
      router.push("/not-found");
      posthog?.capture(PostHogEvents.BETA_REDIRECT_404, {});
    }
  }, [pathname]);

  return children;
};
