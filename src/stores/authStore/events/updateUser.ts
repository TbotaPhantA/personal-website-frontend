import { $user, authDomain } from '@/stores/authStore/authStore';
import { User } from '@/shared/types/user';

export const updateUser = authDomain.createEvent<User | undefined>();
$user.on(updateUser, (_, payload) => payload);
