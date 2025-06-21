import { NextResponse } from "next/server";
import { appRouter } from "@/server/api/trpc/routers";

export async function GET() {
  if (process.env.NODE_ENV !== "development") {
    return new NextResponse("Not Found", { status: 404 });
  }

  const { renderTrpcPanel } = await import("trpc-ui");

  return new NextResponse(
    renderTrpcPanel(appRouter, {
      url: "http://localhost:3000/api/trpc",
      transformer: "superjson",
    }),
    {
      status: 200,
      headers: [["Content-Type", "text/html"] as [string, string]],
    },
  );
}
