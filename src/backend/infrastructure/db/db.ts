import { Database } from '@/backend/infrastructure/db/schema';
import { Kysely, SqliteDialect } from 'kysely';
import SQLite from 'better-sqlite3';

export const dialect = new SqliteDialect({
  database: new SQLite('data.sqlite')
});

export const db = new Kysely<Database>({ dialect });
