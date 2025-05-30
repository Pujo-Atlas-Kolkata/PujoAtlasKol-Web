import localFont from "next/font/local";
import { Geist } from "next/font/google";

// Gilroy: all weights and styles
export const gilroy = localFont({
  src: [
    {
      path: "../../public/fonts/Gilroy-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/Gilroy-UltraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-UltraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/Gilroy-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/Gilroy-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/Gilroy-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/fonts/Gilroy-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../../public/fonts/Gilroy-Heavy.ttf",
      weight: "950",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-HeavyItalic.ttf",
      weight: "950",
      style: "italic",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});
