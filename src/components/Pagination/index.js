import React from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import PropTypes from 'prop-types';

export default function CustomPagination({ count, page, handleChangePage }) {
  return (
    <Pagination
      count={count}
      page={page}
      onChange={handleChangePage}
      shape="rounded"
      color="primary"
      size="large"
      renderItem={(item) => (
        <PaginationItem
          sx={{ margin: 0, border: '1px solid #E0E0E0', borderRadius: 0.2 }}
          {...item}
        />
      )}
    />
  );
}

CustomPagination.propTypes = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired
};
