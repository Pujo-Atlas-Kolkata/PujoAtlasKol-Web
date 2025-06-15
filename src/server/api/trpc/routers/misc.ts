import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "@/server/api/trpc/init";
import { checkServerHealth } from "@/server/api/functions";

export const miscRouter = createTRPCRouter({
  healthCheckPing: baseProcedure.query(() => {
    return checkServerHealth();
  }),

  hello: baseProcedure
    .input(z.object({ name: z.string().optional() }))
    .query(({ input }) => {
      return { message: `Hello ${input.name ?? "World"}!` };
    }),
});
