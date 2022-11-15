import { Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

// components
import Header from 'components/Header';
import InfoCard from 'components/Card/InfoCard';
import { MiningToolListGrouped } from '.';

export default function MiningToolGrouped() {
  const { companyName } = useParams();

  return (
    <>
      <div className="app-content">
        <Header background="headerPerusahaan.png" sx={{ p: 0 }} isCenter>
          <center>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={3}
              sx={{ maxWidth: '80%' }}
            >
              <Grid item md={4} sx={{ textAlign: 'left' }}>
                <Typography variant="h6">Penggunaan Alat Tambang</Typography>
                <Typography variant="h4">{companyName}</Typography>
              </Grid>
              <Grid item container direction="row" alignItems="center" spacing={2} md={8}>
                <Grid item md={4}>
                  <InfoCard value={0} name="Jumlah Peralatan" sx={{ background: 'white' }} />
                </Grid>
                <Grid item md={4}>
                  <InfoCard value={0} name="Produktifitas" sx={{ background: 'white' }} />
                </Grid>
                <Grid item md={4}>
                  <InfoCard value={0} name="Rasio Bahan Bakar" sx={{ background: 'white' }} />
                </Grid>
              </Grid>
            </Grid>
          </center>
        </Header>
        <MiningToolListGrouped />
      </div>
    </>
  );
}
