import jwt, { type JwtPayload } from "jsonwebtoken";
import { TRPCError } from "@trpc/server";
import type { TRPCContext, TRPCInstance } from "@/server/api/trpc/init";
import type { AnyMiddlewareFunction } from "@trpc/server";

// public routes
const publicRoutes = process.env.PUBLIC_URLS?.split(",") ?? [];

function parseJWT(token: string): { user_id: string } | null {
  console.log(process.env.JWT_SECRET);
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!);
    // TODO: update this when adding AuthKit & jwt signing process
    // console.log("payload", payload);
    if (typeof payload === "object" && "user_id" in payload) {
      return {
        user_id: (payload as unknown as JwtPayload).user_id as string,
      };
    }
    return null;
  } catch {
    return null;
  }
}

// Middleware to extract & validate token
export const createAuthMiddleware = (t: TRPCInstance) =>
  t.middleware(async ({ ctx, path, next }) => {
    if (publicRoutes.includes(`/${path}`)) {
      return next({ ctx });
    }

    const authHeader = ctx.req.headers.get("authorization");
    const token = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;

    if (!token) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "No token provided",
      });
    }

    const decoded = parseJWT(token);
    if (!decoded?.user_id) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "Invalid token",
      });
    }

    return next({ ctx: { ...ctx, userId: decoded.user_id } });
  });
