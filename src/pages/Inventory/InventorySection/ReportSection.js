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

// utils
import { ceilTotalData } from 'utils/helper';

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

  const { page, handleChangePage } = usePagination();

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
              <Typography variant="h5">Laporan Kegiatan Tambang</Typography>
            </Stack>
          </Stack>
          {data?.data?.data?.length > 0 ? (
            <>
              {data?.data?.data.map((_list) => (
                <Link
                  to={`/mining-activity/${_list?.activity_type}/detail/${_list?.id}`}
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
