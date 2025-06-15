import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema'; // import your schema

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // use .env for security
});

export const db = drizzle(pool, { schema });
