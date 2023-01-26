import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Stack,
  Grid,
  Button,
  Typography,
  TextField,
  MenuItem,
  InputAdornment,
  IconButton
} from '@mui/material';
import { useQuery } from 'react-query';
import { Icon } from '@iconify/react';

// custom hooks
import usePagination from 'hooks/usePagination';
import useModal from 'hooks/useModal';
import useAuth from 'hooks/useAuth';

//components
import MiningToolReportList from 'components/List/MiningToolReportList';
import CustomPagination from 'components/Pagination';
import { MiningFormModal } from '.';
import { LoadingModal } from 'components/Modal';

// utils
import { ceilTotalData } from 'utils/helper';

// service
import MiningToolService from 'services/MiningToolService';

export default function MiningToolReport({ selectedDate }) {
  const { page, handleChangePage } = usePagination();
  const { isGranted } = useAuth();

  const { isShowing, toggle } = useModal();

  const [search, setSearch] = useState({
    company_name: '',
    sort: 'asc'
  });

  const handleChangeSearch = (e) => setSearch({ ...search, [e.target.name]: e.target.value });

  const { data, isLoading, isFetching, refetch } = useQuery(
    ['mining-tool', page, selectedDate, search?.sort],
    () =>
      MiningToolService.getGroupedMiningTool({
        page: page,
        limit: 10,
        start_date: selectedDate?.startDate,
        end_date: selectedDate?.endDate,
        company_name: search?.company_name,
        order_by: 'date',
        sort: search?.sort
      }),
    { keepPreviousData: true }
  );

  return (
    <>
      {isFetching && <LoadingModal />}
      {!isLoading && data && (
        <>
          <MiningFormModal isShowing={isShowing} toggle={toggle} />
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            className="bg-white"
            sx={{ p: 3, mb: 0 }}
          >
            <Grid item md={4} sx={{ pr: 2 }}>
              <Typography variant="h5">Laporan Kegiatan Penggunaan Alat Tambang</Typography>
            </Grid>
            <Grid item md={3} sx={{ pr: 2 }}>
              <TextField
                placeholder="Cari Laporan"
                size="small"
                fullWidth
                name="company_name"
                value={search?.company_name}
                onChange={handleChangeSearch}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    refetch();
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton onClick={refetch}>
                        <Icon icon="akar-icons:search" fontSize={20} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item md={2.5} sx={{ pr: 2 }}>
              <TextField
                name="sort"
                value={search?.sort}
                onChange={handleChangeSearch}
                select
                fullWidth
                size="small"
                InputProps={{
                  startAdornment: <Typography sx={{ minWidth: '40%' }}>Urutan |</Typography>
                }}
              >
                <MenuItem value="asc">
                  <Stack direction="row">
                    <p style={{ fontWeight: 'bolder' }}>Terbaru</p>
                  </Stack>
                </MenuItem>
                <MenuItem value="desc">
                  <Stack direction="row">
                    <p style={{ fontWeight: 'bolder' }}>Terlama</p>
                  </Stack>
                </MenuItem>
              </TextField>
            </Grid>
            {isGranted && (
              <Grid item md={2.5} sx={{ pr: 2 }}>
                <Button variant="contained" onClick={toggle} fullWidth>
                  Input Penggunaan Alat
                </Button>
              </Grid>
            )}
          </Grid>

          {data?.data?.data?.length > 0 ? (
            <>
              {data?.data?.data.map((_list) => (
                <Link
                  to={`/mining-tool/list/${_list?.company_name}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <MiningToolReportList listData={_list} />
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
