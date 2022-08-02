import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';

//components
import Summary from './Summary';
import ListData from './ListData';
import CustomPagination from 'components/Pagination';

const InventorySection = ({
  title,
  subtitle,
  summary,
  listData,
  count,
  handleChangePage,
  page
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const inventoryPath = location.pathname.split('/')[1] !== 'inventory';

  const inventoryType =
    summary?.activity_type === 'ore-getting'
      ? 'inventory-sm'
      : summary?.activity_type === 'ore-hauling-to-eto'
      ? 'inventory-eto'
      : summary?.activity_type === 'eto-to-efo'
      ? 'inventory-efo'
      : 'all-inventory';

  return (
    <div className="app-content">
      <Grid sx={{ background: 'white' }}>
        <Grid sx={{ padding: '1em 1.5em' }}>
          <Grid container direction="row" alignItems="center" justifyContent="flex-start" mb={3}>
            <Typography mr={5} variant="h4">
              {title}
            </Typography>
            {inventoryPath && (
              <Button
                variant="text"
                onClick={() => {
                  navigate(`/inventory/${inventoryType}`);
                }}
              >
                Lihat Selengkapnya
              </Button>
            )}
          </Grid>

          <Summary summary={summary} />

          <ListData subtitle={subtitle} listData={listData} />

          {!inventoryPath && (
            <CustomPagination count={count} page={page} handleChangePage={handleChangePage} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default InventorySection;
