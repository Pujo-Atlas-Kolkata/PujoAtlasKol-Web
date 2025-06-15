import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "@/server/api/trpc/init";
import { checkServerHealth } from "@/server/api/functions";
import { sql } from "drizzle-orm";

export const miscRouter = createTRPCRouter({
  healthCheckPing: baseProcedure.query(() => {
    return checkServerHealth();
  }),
});
