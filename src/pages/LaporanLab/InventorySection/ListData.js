import { Grid, Typography } from '@mui/material';
import DashboardList from 'components/List/DashboardList';

const ListData = ({ subtitle }) => {
  return (
    <>
      <Typography variant="h5" mb={2}>
        {subtitle}
      </Typography>

      <Grid container direction="column" alignItems="flex-start" justifyContent="space-between">
        <DashboardList />
        <DashboardList />
        <DashboardList />
      </Grid>
    </>
  );
};

export default ListData;
