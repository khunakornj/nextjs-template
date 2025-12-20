import { SortDirection } from '@/shared/common/types';
import { useState } from 'react';
import { match } from 'ts-pattern';

function getNextSort(dir: SortDirection): SortDirection {
  return match<SortDirection, SortDirection>(dir)
    .with('asc', () => 'desc')
    .with('desc', () => null)
    .with(null, () => 'asc')
    .exhaustive();
}

export function useSort<T extends string>(cols: T[]) {
  const [sortState, setSortState] = useState<Record<T, SortDirection>>(() =>
    cols.reduce(
      (acc, key) => ({ ...acc, [key]: null }),
      {} as Record<T, SortDirection>,
    ),
  );

  const onClick = (col: T) => {
    setSortState((prev) => ({
      ...prev,
      [col]: getNextSort(prev[col]),
    }));
  };

  return { sortState, onClick };
}
