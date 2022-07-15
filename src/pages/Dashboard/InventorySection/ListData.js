import { Grid, Typography } from '@mui/material';
import DashboardList from 'components/List/DashboardList';

const ListData = ({ subtitle, listData }) => {
  return (
    <>
      <Typography variant="h5" mb={2}>
        {subtitle}
      </Typography>

      {listData?.length > 0 ? (
        listData?.map((_list, index) => (
          <Grid container direction="column" alignItems="flex-start" justifyContent="space-between">
            <DashboardList listData={{ ..._list, index }} />
          </Grid>
        ))
      ) : (
        <center>
          <h1>Data tidak ditemukan !</h1>
        </center>
      )}
    </>
  );
};

export default ListData;
