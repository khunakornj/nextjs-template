import { Dispatch, SetStateAction } from 'react';

export type SortDirection = 'asc' | 'desc' | null;

export type SetStateFn<T> = Dispatch<SetStateAction<T>>;
export type State<T> = [T, SetStateFn<T>];
