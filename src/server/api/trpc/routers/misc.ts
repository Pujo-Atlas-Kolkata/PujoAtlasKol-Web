import { baseProcedure, createTRPCRouter } from "@/server/api/trpc/init";
import { checkServerHealth } from "@/server/api/functions";

export const miscRouter = createTRPCRouter({
  healthCheckPing: baseProcedure.query(() => {
    return checkServerHealth();
  }),
});
