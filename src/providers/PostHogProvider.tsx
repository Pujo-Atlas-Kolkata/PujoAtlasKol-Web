"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider, usePostHog } from "posthog-js/react";
import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Constants } from "@/lib";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host:
        process.env.ENVIRONMENT === "production"
          ? Constants.urls.prod + "/ingest"
          : Constants.urls.dev + "/ingest",
      ui_host: "https://us.posthog.com",
      capture_pageview: false, // We capture pageviews manually
      capture_pageleave: true, // Enable pageleave capture
      capture_exceptions: true, // This enables capturing exceptions using Error Tracking, set to false if you don't want this
      debug: process.env.NODE_ENV === "development",
    });
  }, []);

  return (
    <PHProvider client={posthog}>
      <SuspendedPostHogPageView />
      {children}
    </PHProvider>
  );
}

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();

  useEffect(() => {
    if (pathname && posthog) {
      let url = window.origin + pathname;
      const search = searchParams.toString();
      if (search) {
        url += "?" + search;
      }
      posthog.capture("$pageview", { $current_url: url });
    }
  }, [pathname, searchParams, posthog]);

  return null;
}

function SuspendedPostHogPageView() {
  return (
    <Suspense fallback={null}>
      <PostHogPageView />
    </Suspense>
  );
}

export const PostHogEvents = {
  NAVBAR_CLICK: "navbar_click",
  FOOTER_CLICK: "footer_click",
  HOMEPAGE_CTA_CLICK: "homepage_cta_click",
  HOMEPAGE_SPONSOR_CLICK: "homepage_sponsor_click",
  ABOUT_DISCORD_CLICK: "about_discord_click",
  SPONSOR_DISCORD_CLICK: "sponsor_discord_click",
  SPONSOR_LINK_CLICK: "sponsor_link_click",
  NOTFOUND_HOME_CLICK: "notfound_home_click",
  TEAMCARD_COPY_LINK: "teamcard_copy_link",
  TEAMCARD_SOCIAL_CLICK: "teamcard_social_click",
  BETA_ALERT_ACCEPT: "beta_alert_accept",
  BETA_ALERT_REJECT: "beta_alert_reject",
};
