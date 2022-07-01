import React from 'react';
import { Pagination, PaginationItem } from '@mui/material';

export default function CustomPagination() {
  return (
    <Pagination
      count={10}
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
