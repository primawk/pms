import { Grid, Stack, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

// utils
import { capitalizeFirstLetter } from 'utils/helper';

// custom hook
import useAuth from 'hooks/useAuth';

// components
import FormMiningCard from 'components/Card/FormMiningCard';
import FormShipmentCard from 'components/Card/FormShipmentCard';

export default function FormMiningActiviy() {
  const { activityType } = useParams();
  useAuth();
  return (
    <>
      <div className="app-content">
        <div
          style={{
            borderTopRightRadius: '5px',
            borderTopLeftRadius: '5px',
            padding: '20px'
          }}
          className="bg-white"
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={5}
          >
            <Grid item>
              <Stack direction="row" spacing={2}>
                <Typography variant="h4">
                  {activityType === 'efo-to-shipment'
                    ? 'Pemasaran'
                    : capitalizeFirstLetter(activityType)}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </div>
        <hr />
        {activityType === 'efo-to-shipment' ? <FormShipmentCard /> : <FormMiningCard />}
      </div>
    </>
  );
}
