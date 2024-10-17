import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const themeAtom = atom<any>('');

export const userStore = atomWithStorage<any>('user', {});

export const tokenStore = atomWithStorage<string>('token', '');