import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { AnimatedGridPattern, Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Pujo Atlas",
  description: "You create the memories, We show you the way!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <AnimatedGridPattern className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
