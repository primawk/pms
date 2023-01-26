import { Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

// components
import Header from 'components/Header';
import { LoadingModal } from 'components/Modal';
import InfoCard from 'components/Card/InfoCard';
import { MiningToolListGrouped } from '.';

//service
import MiningToolService from 'services/MiningToolService';

export default function MiningToolGrouped() {
  const { companyName } = useParams();

  const { data, isFetching } = useQuery(
    ['mining-tool', 'summary', companyName],
    () =>
      MiningToolService.getSummary({
        company_name: companyName
      }),
    { keepPreviousData: true }
  );

  const summaryData = data?.data?.data;

  return (
    <>
      {isFetching && <LoadingModal />}
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
                  <InfoCard
                    value={summaryData?.tool_total}
                    name="Jumlah Peralatan"
                    sx={{ background: 'white' }}
                  />
                </Grid>
                <Grid item md={4}>
                  <InfoCard
                    value={`${summaryData?.productivity || 0} Ton / Jam`}
                    name="Produktifitas"
                    sx={{ background: 'white' }}
                  />
                </Grid>
                <Grid item md={4}>
                  <InfoCard
                    value={`${summaryData?.fuel_ratio || 0} Ltr / Jam`}
                    name="Rasio Bahan Bakar"
                    sx={{ background: 'white' }}
                  />
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
