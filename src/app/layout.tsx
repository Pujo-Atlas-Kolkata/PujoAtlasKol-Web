import "@/styles/globals.css";

import { type Metadata } from "next";
import { gilroy, geist } from "@/styles/fonts";
import { AnimatedGridPattern, Footer, Navbar } from "@/components";
import { Toaster } from "sonner";
import { PostHogProvider } from "@/components/PostHogProvider";

export const metadata: Metadata = {
  title: "Pujo Atlas",
  description: "You create the memories, We show you the way!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${gilroy.variable} ${geist.variable}`}>
      <body>
        <PostHogProvider>
          <AnimatedGridPattern className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
          <Navbar />
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
      </body>
    </html>
  );
}
