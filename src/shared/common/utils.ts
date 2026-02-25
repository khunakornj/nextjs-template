import { AnyFormApi } from '@tanstack/react-form';
import { FormEvent } from 'react';
import { Primitive } from 'type-fest';
import { v7 } from 'uuid';

export function recordNewKey<T extends Record<string, any>>(
  sortObj: T,
  mapper: Record<keyof T, string>,
) {
  return Object.fromEntries(
    Object.entries(sortObj).map(([k, v]) => [mapper[k as keyof T], v]),
  ) as Record<string, T[keyof T]>;
}

export function spreadObjects(...objs: Record<string, Primitive>[]) {
  // guarantees stable order
  return objs.flatMap((o) =>
    Object.keys(o)
      .sort()
      .map((k) => o[k]),
  );
}

export function presentIf(val?: boolean) {
  return val ? '' : undefined;
}

export function handleFormSubmit(form: AnyFormApi) {
  return (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };
}

export async function sleep(ms?: number) {
  return new Promise((resolve) => setTimeout(resolve, ms ?? 2000));
}

export function uuidV7() {
  return v7();
}
