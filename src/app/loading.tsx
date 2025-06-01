import { Ripple } from "@/components/magicui/ripple";

export default function Loading() {
  return (
    <main className="bg-background relative mt-5 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden lg:mt-20">
      <Ripple />
    </main>
  );
}
