import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from '@/server/db/schema'; // import your schema
const isProduction = process.env.NODE_ENV === 'production';

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // use .env for security
  ssl: isProduction
    ? { rejectUnauthorized: true } // Enforce cert validation in production
    : { rejectUnauthorized: false }, // Relax cert checks for dev
});
pool.connect()
  .then((client) => {
    console.log('✅ Database connected successfully');
    client.release();
  })
  .catch((err:Error) => {
    console.error('❌ Database connection failed:', err.message);
  });
export const db = drizzle(pool, { schema });
