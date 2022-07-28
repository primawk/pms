import { useState } from 'react';

export default function usePagination() {
  const [page, setPage] = useState(1);

  const handleChangePage = (e, _page) => {
    setPage(_page);
  };

  const resetPage = () => setPage(1);

  return {
    page,
    handleChangePage,
    resetPage
  };
}
