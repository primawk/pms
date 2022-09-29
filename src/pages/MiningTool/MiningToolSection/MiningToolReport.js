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
import { Icon } from '@iconify/react';

// custom hooks
import usePagination from 'hooks/usePagination';
import useModal from 'hooks/useModal';
// import useAuth from 'hooks/useAuth';

//components
import MiningToolReportList from 'components/List/MiningToolReportList';
import CustomPagination from 'components/Pagination';
import { MiningFormModal } from '.';

// utils
import { ceilTotalData } from 'utils/helper';

export default function MiningToolReport({ selectedDate, filterDate }) {
  const { page, handleChangePage } = usePagination();

  const { isShowing, toggle } = useModal();

  // const { isGranted } = useAuth();

  return (
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
          {/* {isGranted && <Button variant="contained">Input Kegiatan Penggunaan Alat Tambang</Button>} */}
        </Grid>
      </Grid>

      <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
        <MiningToolReportList listData={[]} />
      </Link>

      <CustomPagination
        count={ceilTotalData(0, 10)}
        page={page}
        handleChangePage={handleChangePage}
      />
    </>
  );
}
