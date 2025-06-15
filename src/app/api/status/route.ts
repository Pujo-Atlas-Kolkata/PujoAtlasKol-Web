import { NextResponse } from "next/server";
import { pool } from "@/server/db/client"; // assumes pool is exported

export async function GET() {
  try {
    const client = await pool.connect();
    await client.query("SELECT 1");
    client.release();

    return NextResponse.json({ db: "connected", ok: true });
  } catch (error) {
    console.error("DB Connection Error:", error);
    return NextResponse.json(
      { db: "disconnected", ok: false, error: (error as Error).message },
      { status: 500 },
    );
  }
}
