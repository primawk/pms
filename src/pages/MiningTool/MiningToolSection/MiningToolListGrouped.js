import { Link } from 'react-router-dom';
import { Grid, Button, Typography, TextField, InputAdornment } from '@mui/material';
import { Icon } from '@iconify/react';

// custom hooks
import usePagination from 'hooks/usePagination';
// import useAuth from 'hooks/useAuth';

//components
import MiningToolGroupedList from 'components/List/MiningToolGroupedList';
import CustomPagination from 'components/Pagination';

// utils
import { ceilTotalData } from 'utils/helper';

export default function MiningToolListGrouped() {
  const { page, handleChangePage } = usePagination();

  // const { isGranted } = useAuth();

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        className="bg-white"
        sx={{ mb: 0, mt: 3 }}
      >
        <Grid item md={12} sx={{ mb: 2, p: 2, border: '1px #E0E0E0 solid' }}>
          <Typography variant="h4">List Jenis Alat Tambang</Typography>
        </Grid>
        <Grid item md={6} sx={{ p: 2 }}>
          <TextField
            placeholder="Cari"
            size="small"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon icon="akar-icons:search" fontSize={20} />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item md={4} container direction="row">
          <Grid item md={8}>
            <Button fullWidth variant="contained">
              Search
            </Button>
          </Grid>
          <Grid item md={4}>
            <Button fullWidth variant="text">
              Clear All
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
        <MiningToolGroupedList listData={[]} />
      </Link>

      <CustomPagination
        count={ceilTotalData(0, 10)}
        page={page}
        handleChangePage={handleChangePage}
      />
    </>
  );
}
