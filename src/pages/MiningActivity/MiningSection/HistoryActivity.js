import { useNavigate } from 'react-router-dom';
import { Button, Grid, Stack, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import ArrowBack from '@iconify-icons/akar-icons/arrow-back';

// components
import HistoryMiningCard from 'components/Card/HistoryMiningCard';

export default function HistoryActivity() {
  const navigate = useNavigate();

  return (
    <div className="app-content">
      <div
        style={{
          background: 'white',
          borderTopRightRadius: '5px',
          borderTopLeftRadius: '5px',
          padding: '20px'
        }}
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
              <Button
                variant="outlined"
                startIcon={<Icon width={25} height={25} icon={ArrowBack} />}
                onClick={() => navigate(-1)}
              >
                Back
              </Button>
              <Typography variant="h4">Riwayat Edit "Ore Getting - ORGT678"</Typography>
            </Stack>
          </Grid>
        </Grid>
      </div>
      <hr />
      <HistoryMiningCard />
    </div>
  );
}
