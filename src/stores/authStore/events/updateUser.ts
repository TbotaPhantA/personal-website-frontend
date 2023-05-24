import { $userStore, authDomain } from '@/stores/authStore/authStore';
import { User } from '@/shared/types/user';

export const updateUser = authDomain.createEvent<User | undefined>();
$userStore.on(updateUser, (_, payload) => payload);
