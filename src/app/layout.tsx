import "@/styles/globals.css";

import { type Metadata } from "next";
import { geist, spaceGrotesk } from "@/styles/fonts";
import { AnimatedGridPattern, Footer, Navbar, BetaAlert } from "@/components";
import { Toaster } from "sonner";
import { PostHogProvider } from "@/providers";
import { Constants, isBETA } from "@/lib";
import { TRPCProvider } from "@/server/api";

export const metadata: Metadata = {
  metadataBase:
    process.env.ENVIRONMENT === "production"
      ? new URL(Constants.urls.prod)
      : new URL(Constants.urls.dev),
  title: "Pujo Atlas - Interactive Maps and Real-Time Updates for Durga Puja",
  description:
    "Discover the best Pandals with Pujo Atlas! Real-time updates, interactive maps and emergency helplines, for the ultimate Durga Puja Porikormo experience in Kolkata.",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
  keywords: [
    "Durga Puja, Kolkata Puja, Calcutta Puja, Pujo Map, Calcutta Pujo Map, Kolkata Pujo Map, Puja Map, Calcutta Puja Map, Kolkata Puja Map, Pujo Directions, Calcutta Pujo Directions, Kolkata Pujo Directions, Puja Directions, Calcutta Puja Directions, Kolkata Puja Directions, Pandal map, real-time Puja updates, emergency helplines, Calcutta emergency helplines, Kolkata transit guide, Calcutta transit guide, Durga Puja celebrations, Calcutta Durga Puja celebrations, Kolkata Durga Puja celebrations, explore Puja, explore Calcutta Puja, explore Kolkata Puja, interactive maps, Pandal locations, Puja 2024, Calcutta Puja 2024, Kolkata Puja 2024, Porikormo, Calcutta Porikormo, Kolkata Porikormo, ABP Ananda Pujo, Calcutta ABP Ananda Pujo, Kolkata ABP Ananda Pujo, Shashti, Sasthi, Sashthi, Saptami, Saptomi, Shaptami, Maha Ashtami, Mahashtami, Mahashthami, Ashtami, Nabami, Navami, Dashami, Bijoya Dashami, Calcutta Bijoya Dashami, Kolkata Bijoya Dashami, Bijoya, Dussehra, Navaratri, Calcutta Navaratri, Kolkata Navaratri, Pujo Parikrama, Puja Parikrama, Calcutta Pujo Parikrama, Kolkata Pujo Parikrama, Calcutta Puja Parikrama, Kolkata Puja Parikrama, Durga Ma, Ma Durga, Dhunuchi Naach, Sindoor Khela, Shubho Mahalaya, Calcutta Shubho Mahalaya, Kolkata Shubho Mahalaya, Anjali, Pujo Guide, Pujo Events, Subho Bijaya, Subho Bijoya, Calcutta Subho Bijaya, Kolkata Subho Bijaya, Calcutta Subho Bijoya, Kolkata Subho Bijoya",
  ],
  openGraph: {
    images: [
      {
        url: "/opengraph-image.png",
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${geist.variable}`}>
      <body>
        <TRPCProvider>
          <PostHogProvider>
            <AnimatedGridPattern className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
            <Navbar />
            {isBETA() && <BetaAlert />}
            {children}
            <Footer />
            <Toaster
              toastOptions={{
                style: {
                  backgroundColor: "var(--color-background)",
                  color: "var(--color-main-foreground)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: "var(--font-weight-base)",
                  boxShadow: "var(--shadow-shadow)",
                  borderRadius: "var(--radius-base)",
                  border: "1px solid var(--color-border)",
                },
              }}
            />
          </PostHogProvider>
        </TRPCProvider>
      </body>
    </html>
  );
}
