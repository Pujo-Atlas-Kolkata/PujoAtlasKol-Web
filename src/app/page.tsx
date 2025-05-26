import { AnimatedGridPattern } from "@/components";

export default function HomePage() {
  return (
    <AnimatedGridPattern>
      <main className="mx-40 mt-36 flex min-h-screen flex-col items-center">
        <div className="w-full rounded-2xl border-gray-500 p-12 backdrop-blur-xl">
          <div className="flex flex-col gap-y-4 text-left">
            <h1 className="text-7xl font-extrabold">Pujo Atlas</h1>

            <p className="text-2xl font-medium">
              You create the memories, We show you the way!
            </p>
          </div>
        </div>
      </main>
    </AnimatedGridPattern>
  );
}
