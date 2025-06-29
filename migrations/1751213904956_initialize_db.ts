import type { Kysely } from 'kysely'
import { Database } from '@/backend/infrastructure/db/schema';

export async function up(db: Kysely<Database>): Promise<void> {
  await db.schema.createTable('book_reviews')
    .addColumn('book_review_id', 'integer', col => col.primaryKey().autoIncrement())
    .addColumn('language_code', 'text', col => col.notNull())
    .addColumn('book_title', 'text', col => col.notNull())
    .addColumn('review_body', 'text', col => col.notNull())
    .addColumn('image_href', 'text', col => col.notNull())
    .addUniqueConstraint('book_review_unique_constraint', ['language_code', 'book_title'])
    .execute();

  await db.schema.createTable('users')
    .addColumn('user_id', 'integer', col => col.primaryKey().autoIncrement())
    .addColumn('username', 'text', col => col.notNull())
    .addColumn('role', 'text', col => col.notNull())
    .addColumn('salt', 'text', col => col.notNull())
    .addColumn('password_hash', 'text', col => col.notNull())
    .addColumn('access_token_version', 'integer', col => col)
    .addColumn('refresh_token', 'text', col => col)
    .addUniqueConstraint('username_pk', ['username'])
    .execute();
}

export async function down(db: Kysely<Database>): Promise<void> {
  await db.schema.dropTable('book_reviews');
  await db.schema.dropTable('users');
}
