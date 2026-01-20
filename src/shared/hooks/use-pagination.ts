import { useCallback, useState } from 'react';

export function usePagination() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const nextPage = () => {
    setPage(page + 1);
  };

  const isFinalPage = useCallback(
    (totalPage: number) => page >= totalPage,
    [page],
  );

  return {
    pagination: {
      page,
      perPage,
    },
    nextPage,
    isFinalPage,
    setPerPage,
  };
}
