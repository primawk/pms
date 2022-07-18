import React from 'react';
import { useParams } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

//components
import ReportList from 'components/List/ReportList';
import CustomPagination from 'components/Pagination';
// import { MiningFormModal } from '.';

export default function ReportSection() {
  const { activityType } = useParams();

  // const { isShowing, toggle } = useModal();

  return (
    <div className="app-content">
      {/* <MiningFormModal isShowing={isShowing} toggle={toggle} /> */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        className="bg-white"
        sx={{ p: 3, mb: 0 }}
      >
        <Stack direction="row" spacing={3} alignItems="center">
          <Typography variant="h5">Kegiatan Terakhir</Typography>
        </Stack>
        {/* <Button variant="contained" onClick={toggle}>
          Input Kegiatan Tambang
        </Button> */}
      </Stack>
      <a
        href={`/mining-activity/${activityType}/detail/1`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <ReportList activity_type={activityType === 'ore-getting' ? 'ore-getting' : 'eto-to-efo'} />
      </a>
      <a
        href={`/mining-activity/${activityType}/detail/1`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <ReportList activity_type={activityType === 'ore-getting' ? 'ore-getting' : 'eto-to-efo'} />
      </a>
      <a
        href={`/mining-activity/${activityType}/detail/1`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <ReportList activity_type={activityType === 'ore-getting' ? 'ore-getting' : 'eto-to-efo'} />
      </a>
      <a
        href={`/mining-activity/${activityType}/detail/1`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <ReportList activity_type={activityType === 'ore-getting' ? 'ore-getting' : 'eto-to-efo'} />
      </a>

      <CustomPagination />
    </div>
  );
}
