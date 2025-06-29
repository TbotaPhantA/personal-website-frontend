export const UserRoleEnum = {
  ADMIN: 'ADMIN',
  VISITOR: 'VISITOR',
} as const;
export type UserRoleEnum = keyof typeof UserRoleEnum;
