import { useState } from 'react';
import PropTypes from 'prop-types';

export default function usePagination({ total_data }) {
  const [page, setPage] = useState(1);

  const totalPage = Math.ceil(total_data / 10);

  const handleChangePage = (e, _page) => {
    setPage(_page);
  };

  const resetPage = () => setPage(1);

  return {
    page,
    totalPage,
    handleChangePage,
    resetPage
  };
}

usePagination.propTypes = {
  pagination: PropTypes.number
};
