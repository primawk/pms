import { useState } from 'react';
import PropTypes from 'prop-types';

export default function usePagination({ total_data }) {
  const [page, setPage] = useState(1);

  const totalPage = Math.round(total_data / 10);

  const handleChangePage = (e, _page) => {
    setPage(_page);
  };

  return {
    page,
    totalPage,
    handleChangePage
  };
}

usePagination.propTypes = {
  pagination: PropTypes.number
};
