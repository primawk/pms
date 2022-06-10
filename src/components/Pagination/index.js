import React from 'react';
import { Pagination, PaginationItem } from '@mui/material';

const removeIcon = () => {
  return null;
};

export default function CustomPagination() {
  return (
    <Pagination
      count={10}
      shape="rounded"
      color="primary"
      size="large"
      renderItem={(item) => (
        <PaginationItem
          components={{ previous: removeIcon, next: removeIcon }}
          sx={{ margin: 0, border: '1px solid #E0E0E0', borderRadius: 0.2 }}
          {...item}
        />
      )}
    />
  );
}
