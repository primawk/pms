import { Link } from 'react-router-dom';
import {
  Stack,
  Grid,
  Button,
  Typography,
  TextField,
  MenuItem,
  InputAdornment
} from '@mui/material';
import { useQuery } from 'react-query';
import { Icon } from '@iconify/react';

// custom hooks
import usePagination from 'hooks/usePagination';
import useModal from 'hooks/useModal';
// import useAuth from 'hooks/useAuth';

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

  const { isShowing, toggle } = useModal();

  const { data, isLoading, isFetching } = useQuery(
    ['mining-tool', page, selectedDate],
    () =>
      MiningToolService.getGroupedMiningTool({
        // page: page,
        // row: 10,
        start_date: selectedDate?.startDate,
        end_date: selectedDate?.endDate
      }),
    { keepPreviousData: true }
  );

  // const { isGranted } = useAuth();

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
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon icon="akar-icons:search" fontSize={20} />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item md={2.5} sx={{ pr: 2 }}>
              <TextField
                select
                value="newest"
                fullWidth
                size="small"
                InputProps={{
                  startAdornment: <Typography sx={{ minWidth: '40%' }}>Urutan |</Typography>
                }}
              >
                <MenuItem value="newest">
                  <Stack direction="row">
                    <p style={{ fontWeight: 'bolder' }}>Terbaru</p>
                  </Stack>
                </MenuItem>
                <MenuItem value="oldest">
                  <Stack direction="row">
                    <p style={{ fontWeight: 'bolder' }}>Terlama</p>
                  </Stack>
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item md={2.5} sx={{ pr: 2 }}>
              <Button variant="contained" onClick={toggle}>
                Input Penggunaan Alat
              </Button>
            </Grid>
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
            count={ceilTotalData(0, 10)}
            page={page}
            handleChangePage={handleChangePage}
          />
        </>
      )}
    </>
  );
}
