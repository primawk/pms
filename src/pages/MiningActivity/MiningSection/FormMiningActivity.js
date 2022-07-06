import { Grid, Stack, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import PlusIcon from '@iconify/icons-ant-design/plus-circle-outlined';

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
        <div className="bg-white">
          <center style={{ padding: '30px', paddingBottom: '60px' }}>
            <Button variant="contained" startIcon={<Icon width={25} height={25} icon={PlusIcon} />}>
              Tambah
            </Button>
          </center>
        </div>
      </div>
      <Footer handleBack={() => navigate(-1)} handleSave={() => navigate(-1)} />
    </>
  );
}
