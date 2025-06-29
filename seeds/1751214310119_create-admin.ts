import type { Kysely } from 'kysely'
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { Database } from '@/backend/infrastructure/db/schema';
import { UserRoleEnum } from '@/shared/enums/userRole.enum';

const untypedScrypt = promisify(_scrypt);
const scrypt = untypedScrypt as (...args: Parameters<typeof untypedScrypt>) => Promise<Buffer>;

export async function seed(db: Kysely<Database>): Promise<void> {
  const { ADMIN_NAME, ADMIN_PASSWORD, PEPPER } = process.env;

  if (!ADMIN_NAME || !ADMIN_PASSWORD || !PEPPER) {
    throw new Error('Missing one or more required environment variables: ADMIN_NAME, ADMIN_PASSWORD, PEPPER')
  }

  const salt = randomBytes(16).toString('hex');

  const passwordWithPepper = `${ADMIN_PASSWORD}${PEPPER}`;
  const derivedKey = await scrypt(passwordWithPepper, salt, 64);
  const passwordHash = derivedKey.toString('hex');

  await db.insertInto('users')
    .values({
      username: ADMIN_NAME,
      role: UserRoleEnum.ADMIN,
      salt,
      password_hash: passwordHash,
    })
    .execute()
}
