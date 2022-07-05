import React from 'react';
import { useParams } from 'react-router-dom';
import { Stack, Button, Typography } from '@mui/material';

// custom hooks
import useModal from 'hooks/useModal';

//components
import ReportList from 'components/List/ReportList';
import CustomPagination from 'components/Pagination';
import { MiningFormModal } from '.';

export default function ReportSection() {
  const { activityType } = useParams();

  const { isShowing, toggle } = useModal();

  return (
    <div className="app-content">
      <MiningFormModal isShowing={isShowing} toggle={toggle} />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ p: 3, background: 'white', mb: 0 }}
      >
        <Stack direction="row" spacing={3} alignItems="center">
          {activityType !== 'all-activity' && (
            <Stack
              direction="row"
              alignItems="center"
              spacing={3}
              sx={{ p: 2, border: '1px solid #F2F2F2' }}
            >
              <Typography variant="h4">32</Typography>
              <Stack>
                <Typography variant="h5">Kegiatan</Typography>
                <Typography variant="body1">Hari Ini</Typography>
              </Stack>
            </Stack>
          )}
          <Typography variant="h5">Laporan Kegiatan Tambang</Typography>
        </Stack>
        <Button variant="contained" onClick={toggle}>
          Input Kegiatan Tambang
        </Button>
      </Stack>
      <a
        href={`/kegiatan-tambang/${activityType}/detail/1`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <ReportList activity_type={activityType === 'ore-getting' ? 'ore-getting' : 'eto-to-efo'} />
      </a>
      <a
        href={`/kegiatan-tambang/${activityType}/detail/1`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <ReportList activity_type={activityType === 'ore-getting' ? 'ore-getting' : 'eto-to-efo'} />
      </a>
      <a
        href={`/kegiatan-tambang/${activityType}/detail/1`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <ReportList activity_type={activityType === 'ore-getting' ? 'ore-getting' : 'eto-to-efo'} />
      </a>
      <a
        href={`/kegiatan-tambang/${activityType}/detail/1`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <ReportList activity_type={activityType === 'ore-getting' ? 'ore-getting' : 'eto-to-efo'} />
      </a>

      <CustomPagination />
    </div>
  );
}
