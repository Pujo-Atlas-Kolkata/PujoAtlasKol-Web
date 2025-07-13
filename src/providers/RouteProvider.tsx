"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { isBETA } from "@/lib/utils";
import { Constants } from "@/lib/constants";
import posthog from "posthog-js";
import { PostHogEvents } from "@/providers/PostHogProvider";

export const RouteProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const allowedRoutes = [
    ...Object.values(Constants.routes.landing),
    ...Object.values(Constants.routes.misc),
  ];

  useEffect(() => {
    if (!isBETA() && !allowedRoutes.includes(pathname)) {
      router.push("/not-found");
      posthog?.capture(PostHogEvents.BETA_REDIRECT_404, {});
    }
  }, [pathname, router]);

  return children;
};
