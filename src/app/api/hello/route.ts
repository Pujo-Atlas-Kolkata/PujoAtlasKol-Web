import { NextResponse } from "next/server";
import { appRouter } from "@/server/api/trpc/routers";
import { createTRPCContext } from "@/server/api/trpc/init";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name") ?? undefined;

  const ctx = await createTRPCContext(); // minimal context
  const caller = appRouter.createCaller(ctx);

  const result = await caller.misc.hello({ name });
  return NextResponse.json(result);
}
