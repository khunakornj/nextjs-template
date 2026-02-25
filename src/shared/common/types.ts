import { Dispatch, SetStateAction } from 'react';
import { TupleOf, UnionToTuple } from 'type-fest';

export type SortDirection = 'asc' | 'desc' | null;

export type SetStateFn<T> = Dispatch<SetStateAction<T>>;
export type State<T> = [T, SetStateFn<T>];

export type UnionArray<T extends string> = Readonly<
  TupleOf<UnionToTuple<T>['length'] & number, T>
>;

export type IResponse<T> = {
  attributes: T;
};

export type IResponseRelations<T, R> = {
  attributes: T;
  relations: R;
};

export type StandardApiResponse<T> = {
  success: true;
  key: string;
  data: T;
};

export type StandardApiErrorResponse<K> = {
  success: false;
  key: K;
  error: {
    fields: any;
    context: any;
  };
};

export type PaginationMeta = {
  pagination: {
    totalPages: number;
    page: number;
    nextPage: number;
    previousPage: number;
    perPage: number;
    currentPageItems: number;
    totalItems: number;
  };
};
