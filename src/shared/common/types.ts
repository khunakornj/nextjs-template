import { Dispatch, SetStateAction } from 'react';
import { TupleOf, UnionToTuple } from 'type-fest';

export type SortDirection = 'asc' | 'desc' | null;

export type SetStateFn<T> = Dispatch<SetStateAction<T>>;
export type State<T> = [T, SetStateFn<T>];

export type UnionArray<T extends string> = Readonly<
  TupleOf<UnionToTuple<T>['length'] & number, T>
>;
