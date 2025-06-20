import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isBETA() {
  return process.env.ENVIRONMENT !== "production";
}

export function getBrowser() {
  if (typeof window === "undefined") return "Server";
  const userAgent = navigator.userAgent;
  if (userAgent.includes("Firefox")) {
    return "Firefox";
  }
  if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) {
    // Edge also has "Chrome" in its user agent
    return "Chrome";
  }
  if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
    // Chrome on iOS has both "Safari" and "Chrome"
    return "Safari";
  }
  if (userAgent.includes("Edg")) {
    return "Edge";
  }
  if (userAgent.includes("MSIE") || userAgent.includes("Trident/")) {
    return "Internet Explorer";
  }
  return "Unknown Browser";
}

export function getOS() {
  if (typeof window === "undefined") return "Server";
  const userAgent = navigator.userAgent;
  if (userAgent.includes("Win")) return "Windows";
  if (userAgent.includes("Mac")) return "MacOS";
  if (userAgent.includes("Linux")) return "Linux";
  if (userAgent.includes("Android")) return "Android";
  if (userAgent.includes("like Mac")) return "iOS";
  return "Unknown OS";
}

export function isFirefox() {
  return getBrowser() === "Firefox";
}

export function isWindowsChrome() {
  return getOS() === "Windows" && getBrowser() === "Chrome";
}
