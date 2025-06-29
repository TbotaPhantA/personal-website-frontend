import type { Kysely } from 'kysely'
import { Database } from '@/backend/infrastructure/db/schema';

export async function up(db: Kysely<Database>): Promise<void> {
  await db.schema.createTable('book_reviews')
    .addColumn('language_code', 'text', col => col.notNull())
    .addColumn('book_title', 'text', col => col.notNull())
    .addColumn('review_body', 'text', col => col.notNull())
    .addColumn('image_href', 'text', col => col.notNull())
    .addPrimaryKeyConstraint('book_review_pk', ['language_code', 'book_title'])
    .execute();

  await db.schema.createTable('users')
    .addColumn('username', 'text', col => col.notNull())
    .addColumn('role', 'text', col => col.notNull())
    .addColumn('password_hash', 'text', col => col.notNull())
    .addPrimaryKeyConstraint('username_pk', ['username'])
    .execute();
}

export async function down(db: Kysely<Database>): Promise<void> {
  await db.schema.dropTable('book_reviews');
  await db.schema.dropTable('users');
}
