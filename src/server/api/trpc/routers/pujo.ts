import { baseProcedure, protectedProcedure, createTRPCRouter } from "@/server/api/trpc/init";
import { db } from "@/server/db/client";
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";
import { pujos } from "@/server/db/schema";
import { create } from "domain";
import z from "zod";
import { eq, asc } from "drizzle-orm";

type PujoRecord = {
  id: string;
  name: string;
  zone: string;
  address: string;
  city: string;
  latitude: string;
  longitude: string;
  created_at?: string;
  updated_at?: string;
};

export const pujoRouter = {
  getById: baseProcedure.input(z.string()).query(async ({ input }) => {
    const pujo = await db.query.pujos.findFirst({
      where: (pujos, { eq }) => eq(pujos.id, input),
    });
    return pujo;
  }),

  getByPage: protectedProcedure
    .input(z.object({ page: z.number(), limit: z.number() }))
    .query(async ({ input }) => {
      const pujos = await db.query.pujos.findMany({
        orderBy: (pujos, { asc }) => asc(pujos.name),
        limit: input.limit,
        offset: (input.page - 1) * input.limit,
      });
      return pujos;
    }),

  update: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        zone: z.string(),
        address: z.string(),
        city: z.string(),
        latitude: z.string(),
        longitude: z.string(),
        id: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const { id, ...data } = input;
      const updated = await db.update(pujos).set(data).where(eq(pujos.id, id)).returning();
      return updated;
    }),

  delete: protectedProcedure.input(z.string()).mutation(async ({ input }) => {
    const deleted = await db.delete(pujos).where(eq(pujos.id, input)).returning();
    return deleted;
  }),

  populate: protectedProcedure.mutation(async () => {
    const csvFilePath = path.resolve(process.cwd(), "data/pujo.csv");
    const fileContent = fs.readFileSync(csvFilePath, "utf-8");

    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });

    for (const record of records) {
      const typedRecord = record as PujoRecord;
      const dbRecord = {
        ...typedRecord,
        created_at: typedRecord.created_at ? new Date(typedRecord.created_at) : undefined,
        updated_at: typedRecord.updated_at ? new Date(typedRecord.updated_at) : undefined,
      };
      await db
        .insert(pujos)
        .values(dbRecord)
        .onConflictDoUpdate({
          target: [pujos.id],
          set: dbRecord,
        });
    }

    return { success: true, count: records.length };
  }),
};
