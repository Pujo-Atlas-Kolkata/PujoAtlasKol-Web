// Logger middleware
import type { TRPCInstance } from "@/server/api/trpc/init";

// TODO: Need to modify this as well
export const createLoggerMiddleware = (t: TRPCInstance) =>
  t.middleware(async ({ path, type, ctx, input, next }) => {
    console.log(`➡️  tRPC call: [${type.toUpperCase()}] ${path}`);

    const result = await next();

    if (result.ok) {
      console.log(`✅ Result from [${type.toUpperCase()}] ${path}:`, result.data);
    } else {
      console.error(`❌ Error from [${type.toUpperCase()}] ${path}:`, result.error);
    }

    return result;
  });
