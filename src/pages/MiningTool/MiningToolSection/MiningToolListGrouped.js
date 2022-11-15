import { Link, useParams } from 'react-router-dom';
import { Grid, Button, Typography, TextField, InputAdornment } from '@mui/material';
import { Icon } from '@iconify/react';
import { useQuery } from 'react-query';

// custom hooks
import usePagination from 'hooks/usePagination';
// import useAuth from 'hooks/useAuth';

//components
import MiningToolGroupedList from 'components/List/MiningToolGroupedList';
import CustomPagination from 'components/Pagination';
import { LoadingModal } from 'components/Modal';

// service
import MiningToolService from 'services/MiningToolService';

// utils
import { ceilTotalData } from 'utils/helper';

export default function MiningToolListGrouped() {
  const { companyName } = useParams();

  const { page, handleChangePage } = usePagination();

  const { data, isLoading, isFetching } = useQuery(
    ['mining-tool', page, companyName],
    () =>
      MiningToolService.getListPerCompany({
        page: page,
        limit: 10,
        company_name: companyName
      }),
    { keepPreviousData: true, enabled: !!companyName }
  );

  // const { isGranted } = useAuth();

  return (
    <>
      {isFetching && <LoadingModal />}
      {!isLoading && data && (
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

          {data?.data?.data?.length > 0 ? (
            <>
              {data?.data?.data.map((_list, index) => (
                <Link
                  to={`/mining-tool/detail/${_list?.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <MiningToolGroupedList listData={{ ..._list, index }} />
                </Link>
              ))}
            </>
          ) : (
            <center className="bg-white" style={{ padding: '10px' }}>
              <h1>Data tidak ditemukan !</h1>
            </center>
          )}

          <CustomPagination
            count={ceilTotalData(data?.data?.pagination?.total_data || 0, 10)}
            page={page}
            handleChangePage={handleChangePage}
          />
        </>
      )}
    </>
  );
}
