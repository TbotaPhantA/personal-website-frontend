import { createDomain, createStore } from 'effector';
import { User } from '@/shared/types/user';

export const authDomain = createDomain();
export const $userStore = createStore<User | undefined>(undefined);
