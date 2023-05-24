import { createDomain, createStore } from 'effector';
import { User } from '@/shared/types/user';

export const authDomain = createDomain();
export const $user = createStore<User | undefined>(undefined);
