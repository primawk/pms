import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Grid, Typography, Box } from '@mui/material';
import { Icon } from '@iconify/react';

//components
// import Summary from './Summary';
// import ListData from './ListData';
import List from './List';
import CustomPagination from 'components/Pagination';

const MarketingSection = ({
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
        <Grid sx={{}}>
          <Grid
            container
            sx={{
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1em 1.5em',
              borderBottom: 1,
              borderColor: '#F2F2F2'
            }}
          >
            <Grid item>
              <Typography mr={5} variant="h4">
                {title}
              </Typography>
            </Grid>
            <Grid item sx={{ alignContent: 'center', alignItems: 'center' }}>
              <Button
                variant="contained"
                sx={{ boxShadow: '0' }}
                onClick={() => {
                  navigate(`/inventory/${inventoryType}`);
                }}
              >
                <Box sx={{ marginRight: '0.5rem' }}>Lihat Selengkapnya</Box>
                <Icon icon="akar-icons:arrow-right" color="white" />
              </Button>
            </Grid>

            {/* {inventoryPath && (
              <Button
                variant="text"
                onClick={() => {
                  navigate(`/inventory/${inventoryType}`);
                }}
              >
                Lihat Selengkapnya
              </Button>
            )} */}
          </Grid>

          {/* <ListData subtitle={subtitle} listData={listData} /> */}
          <List />
          <List />

          {!inventoryPath && (
            <CustomPagination count={count} page={page} handleChangePage={handleChangePage} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default MarketingSection;
