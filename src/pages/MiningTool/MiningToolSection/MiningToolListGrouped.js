import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Grid, Button, Typography, TextField, InputAdornment } from '@mui/material';
import { Icon } from '@iconify/react';
import { useQuery } from 'react-query';
import backIcon from '@iconify-icons/eva/arrow-back-outline';

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
  const navigate = useNavigate();

  const { page, handleChangePage } = usePagination();

  const [search, setSearch] = useState('');

  const handleChangeSearch = (e) => setSearch(e.target.value);

  const { data, isLoading, isFetching, refetch } = useQuery(
    ['mining-tool', page, companyName],
    () =>
      MiningToolService.getMiningTool({
        page: page,
        limit: 10,
        company_name: companyName,
        search: search
      }),
    { keepPreviousData: true, enabled: !!companyName }
  );

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
            <Grid
              item
              container
              direction="row"
              justifyContent="space-between"
              md={12}
              sx={{ mb: 2, p: 2, border: '1px #E0E0E0 solid' }}
            >
              <Grid item md={6}>
                <Typography variant="h4">List Jenis Alat Tambang</Typography>
              </Grid>
              <Grid
                item
                container
                direction="row"
                alignItems="flex-end"
                justifyContent="flex-end"
                md={6}
                sm={5}
              >
                <Button
                  sx={{ mr: 2 }}
                  variant="text"
                  startIcon={<Icon width={25} height={25} icon={backIcon} />}
                  onClick={() => navigate(-1)}
                >
                  Back
                </Button>
                <Button
                  variant="text"
                  sx={{ background: '#E5E5FE' }}
                  startIcon={
                    <Icon width={25} height={25} icon="heroicons-outline:folder-download" />
                  }
                >
                  Download Laporan
                </Button>
              </Grid>
            </Grid>
            <Grid item md={6} sx={{ p: 2 }}>
              <TextField
                placeholder="Cari"
                size="small"
                fullWidth
                name="search"
                value={search}
                onChange={handleChangeSearch}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    refetch();
                  }
                }}
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
                <Button fullWidth variant="contained" onClick={refetch}>
                  Search
                </Button>
              </Grid>
              <Grid item md={4}>
                <Button
                  fullWidth
                  variant="text"
                  onClick={() => {
                    setSearch('');
                    refetch();
                  }}
                >
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
