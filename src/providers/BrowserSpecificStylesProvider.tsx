"use client";

import { useEffect } from "react";
import { getOS, isFirefox } from "@/lib/utils";

export function BrowserSpecificStylesProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const isWindows = getOS() === "Windows";
    const isFF = isFirefox();

    if (isWindows || isFF) {
      document.documentElement.style.setProperty("--foreground", "red");
    }
  }, []);

  return <>{children}</>;
}
