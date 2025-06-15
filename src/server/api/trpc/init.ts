import { initTRPC } from "@trpc/server";
import { cache } from "react";
import superjson from "superjson";
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { createAuthMiddleware } from "@/server/api/middleware/AuthMiddleware";
import { createLoggerMiddleware } from "@/server/api/middleware/LoggerMiddleware";

// Context wit
export const createTRPCContext = cache(async (_?: FetchCreateContextFnOptions) => {
  return { req: null as unknown as Request };
});

// Initialize tRPC with inferred context
const t = initTRPC.context<Awaited<ReturnType<typeof createTRPCContext>>>().create({
  transformer: superjson,
});

// 4. Export helpers
export const middleware = t.middleware;
export const baseProcedure = t.procedure;
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const isAuthed = createAuthMiddleware(t);
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const loggerMiddleware = createLoggerMiddleware(t);
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
export const protectedProcedure = baseProcedure.use(loggerMiddleware).use(isAuthed);
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export type TRPCInstance = typeof t;
export type TRPCContext = Parameters<typeof t.middleware>;
