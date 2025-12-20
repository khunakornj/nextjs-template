import { Primitive } from 'type-fest';

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
