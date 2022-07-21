import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import { useQuery } from 'react-query';

// custom hooks
import usePagination from 'hooks/usePagination';

//components
import ReportList from 'components/List/ReportList';
import { LoadingModal } from 'components/Modal';
import CustomPagination from 'components/Pagination';

// services
import MiningActivityService from 'services/MiningActivityService';

export default function ReportSection() {
  const { inventoryType } = useParams();

  const activityType =
    inventoryType === 'inventory-sm'
      ? // inventory-sm
        'ore-getting'
      : inventoryType === 'inventory-eto'
      ? 'ore-hauling-to-eto'
      : inventoryType === 'inventory-efo'
      ? 'eto-to-efo'
      : undefined;

  const [pagination, setPagination] = useState({});

  const { page, totalPage, handleChangePage } = usePagination(pagination || { total_data: 0 });

  const { data, isLoading, isFetching } = useQuery(
    ['mining', activityType, page],
    () =>
      MiningActivityService.getActivity({
        page: page,
        row: 10,
        activity_type: activityType === 'all-activity' ? '' : activityType
      }),
    { keepPreviousData: true }
  );

  useEffect(() => {
    setPagination(data?.data?.pagination);
  }, [data]);

  return (
    <div className="app-content">
      {isFetching && <LoadingModal />}
      {!isLoading && data && (
        <>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            className="bg-white"
            sx={{ p: 3, mb: 0 }}
          >
            <Stack direction="row" spacing={3} alignItems="center">
              {activityType !== 'all-activity' && (
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={3}
                  sx={{ p: 2, border: '1px solid #F2F2F2' }}
                >
                  <Typography variant="h4">{data?.data?.pagination?.total_data}</Typography>
                  <Stack>
                    <Typography variant="h5">Kegiatan</Typography>
                    <Typography variant="body1">Hari Ini</Typography>
                  </Stack>
                </Stack>
              )}
              <Typography variant="h5">Laporan Kegiatan Tambang</Typography>
            </Stack>
          </Stack>
          {data?.data?.data.length > 0 ? (
            <>
              {data?.data?.data.map((_list) => (
                <Link
                  to={`/mining-activity/${activityType}/detail/${_list.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  key={_list.id}
                >
                  <ReportList
                    activity_type={activityType === 'ore-getting' ? 'ore-getting' : 'eto-to-efo'}
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

          <CustomPagination count={totalPage} page={page} handleChangePage={handleChangePage} />
        </>
      )}
    </div>
  );
}
