import { UserRoleEnum } from '@/shared/enums/userRole.enum';

export interface User {
  readonly userId: string;
  readonly username: string;
  readonly role: UserRoleEnum;
}
