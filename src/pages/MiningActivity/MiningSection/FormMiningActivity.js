import { Grid, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// components
import FormMiningCard from 'components/Card/FormMiningCard';
import Footer from 'components/Footer';

export default function FormMiningActiviy() {
  const navigate = useNavigate();
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
                <Typography variant="h4">Ore Getting</Typography>
              </Stack>
            </Grid>
          </Grid>
        </div>
        <hr />
        <FormMiningCard />
      </div>
      <Footer handleBack={() => navigate(-1)} handleSave={() => navigate(-1)} />
    </>
  );
}
