import { useState } from 'react';

export function useCycle<T>(arr: T[] | Readonly<T[]>) {
  const start = 0;
  const end = arr.length - 1 < 0 ? 0 : arr.length - 1;

  const [index, setIndex] = useState(0);

  const next = () => {
    let nextIndex = index + 1;
    if (nextIndex > end) {
      nextIndex = start;
    }

    setIndex(nextIndex);

    return arr[nextIndex];
  };

  const prev = () => {
    let nextIndex = index - 1;
    if (nextIndex < start) {
      nextIndex = end;
    }

    setIndex(nextIndex);

    return arr[nextIndex];
  };

  const jumpTo = (index: number) => {
    let nextIndex = index;
    if (nextIndex > end) {
      nextIndex = start;
    }

    if (nextIndex < start) {
      nextIndex = end;
    }

    setIndex(nextIndex);

    return arr[nextIndex];
  };

  return [
    arr[index],
    {
      next,
      prev,
      jumpTo,
    },
  ] as const;
}
