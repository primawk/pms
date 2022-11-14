import { useParams, Link } from 'react-router-dom';
import { Stack, Button, Typography, TextField, MenuItem, InputAdornment } from '@mui/material';
import { useQuery } from 'react-query';
import { Icon } from '@iconify/react';

// custom hooks
import useModal from 'hooks/useModal';
import usePagination from 'hooks/usePagination';
import useAuth from 'hooks/useAuth';

//components
import ReportList from 'components/List/ReportList';
import { LoadingModal } from 'components/Modal';
import CustomPagination from 'components/Pagination';
import { MiningFormModal } from '.';

// services
import MiningActivityService from 'services/MiningActivityService';

// utils
import { ceilTotalData } from 'utils/helper';

export default function ReportSection({ selectedDate, filterDate }) {
  const { activityType } = useParams();

  const { page, handleChangePage } = usePagination();

  const { isGranted } = useAuth();

  const { isShowing, toggle } = useModal();

  const { data, isLoading, isFetching } = useQuery(
    ['mining', activityType, page, selectedDate],
    () =>
      MiningActivityService.getActivity({
        page: page,
        row: 10,
        activity_type: activityType === 'all-activity' ? '' : activityType,
        start_date: selectedDate?.startDate,
        end_date: selectedDate?.endDate
      }),
    { keepPreviousData: true }
  );

  return (
    <div className="app-content">
      {isFetching && <LoadingModal />}
      {!isLoading && data && (
        <>
          <MiningFormModal isShowing={isShowing} toggle={toggle} />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            className="bg-white"
            sx={{ p: 3, mb: 0 }}
          >
            <Stack direction="row" spacing={3} alignItems="center">
              {activityType !== 'all-activity' && activityType !== 'efo-to-shipment' && (
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={3}
                  sx={{ p: 2, border: '1px solid #F2F2F2' }}
                >
                  <Typography variant="h4">{data?.data?.pagination?.total_data}</Typography>
                  <Stack>
                    <Typography variant="h5">Kegiatan</Typography>
                    <Typography variant="body1">{filterDate}</Typography>
                  </Stack>
                </Stack>
              )}
              <Typography variant="h5">
                Laporan Kegiatan {activityType === 'efo-to-shipment' && 'Pemasaran'} Tambang
              </Typography>
            </Stack>
            {activityType === 'efo-to-shipment' && (
              <Stack direction="row" spacing={3} alignItems="center" sx={{ pr: 5 }}>
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
                ></TextField>
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
              </Stack>
            )}
            {isGranted && (
              <Button variant="contained" onClick={toggle}>
                Input Kegiatan {activityType === 'efo-to-shipment' ? 'Pemasaran' : 'Tambang'}
              </Button>
            )}
          </Stack>
          {data?.data?.data?.length > 0 ? (
            <>
              {data?.data?.data.map((_list) => (
                <Link
                  to={`/mining-activity/${_list?.activity_type}/detail/${_list.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  key={_list.id}
                >
                  <ReportList
                    activity_type={
                      _list?.activity_type === 'ore-getting' ? 'ore-getting' : 'eto-to-efo'
                    }
                    listData={_list}
                  />
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
    </div>
  );
}
