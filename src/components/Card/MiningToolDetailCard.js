import { Typography, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import dayjs from 'dayjs';

// components
import { LoadingModal } from 'components/Modal';

// services
import MiningToolService from 'services/MiningToolService';

export default function MiningToolDetailCard() {
  const { id } = useParams();

  const { data, isLoading: isLoadingMiningTool } = useQuery(
    ['mining-tool', id],
    () => MiningToolService.getMiningTool({ id }),
    {
      keepPreviousData: true
    }
  );

  const dataMiningTool = data?.data?.data[0];

  return (
    <div
      style={{
        borderTopRightRadius: '5px',
        borderTopLeftRadius: '5px',
        padding: '20px'
      }}
      className="bg-white"
    >
      {isLoadingMiningTool && <LoadingModal />}

      <>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item lg={5} xs={12}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Informasi Umum Kegiatan
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              columnSpacing={10}
            >
              <Grid item container lg={4} xs={4} direction="column">
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Jadwal Kegiatan
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {`${dataMiningTool && dayjs(dataMiningTool?.date).format('DD MMMM YYYY')}, ${
                    dataMiningTool && dataMiningTool?.time
                  }`}
                </Typography>
              </Grid>
              <Grid item container lg={4} xs={4} direction="column">
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Jenis Produk
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {dataMiningTool?.product_type}
                </Typography>
              </Grid>
              <Grid item container lg={4} xs={4} direction="column">
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Blok
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {dataMiningTool?.block}
                </Typography>
              </Grid>
              <Grid item container lg={12} xs={12} direction="column">
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Bukit
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  belum ada di api
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Jenis Kegiatan
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {dataMiningTool?.activity_type}
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Item Kegiatan
                </Typography>
                <pre>
                  <span className="inner-pre">{dataMiningTool?.activity_item}</span>
                </pre>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Informasi Alat Tambang
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={3}
            >
              <Grid item lg={6} md={6} sm={12}>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Nama Perusahaan
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {dataMiningTool?.company_name}
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Tipe Peralatan
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {dataMiningTool?.tool_type}
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  PA (Physical Availability)
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {dataMiningTool?.physical_availability + '%'}
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  UA (UA (Use Of Availability)
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {dataMiningTool?.use_availability + '%'}
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Jumlah Peralatan
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {dataMiningTool?.tool_total}
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  HM Awal
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {dataMiningTool?.hm_start}
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Total HM
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {dataMiningTool?.hm_result}
                </Typography>
              </Grid>
              <Grid item lg={6} md={6} sm={12}>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Jenis Peralatan
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {dataMiningTool?.tool_kind}
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Kapasitas
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {dataMiningTool?.capacity + 'm3'}
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  MA (Mechanical Availability)
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {dataMiningTool?.mechanical_availability + '%'}
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  EU (Effective Utilization)
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {dataMiningTool?.effective_utilization}
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Rasio Bahan Bakar
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {dataMiningTool?.fuel_ratio + 'Ltr/Jam'}
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  HM Akhir
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {dataMiningTool?.hm_end}
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Produktifitas
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {dataMiningTool?.productivity + 'Ton/Jam'}
                </Typography>
              </Grid>
            </Grid>
            <Grid item lg={12} md={12} sm={12}>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Keterangan Alat Tambang
              </Typography>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Issue Safety
              </Typography>
              <pre>
                <span className="inner-pre">tidak ada</span>
              </pre>
              <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                Kendala-kendala
              </Typography>
              <pre>
                <span className="inner-pre">Terkendala cuaca buruk</span>
              </pre>
              <Typography variant="h6" sx={{ mb: 3, mt: 3 }}>
                Rekomendasi
              </Typography>
              <pre>
                <span className="inner-pre">tidak ada</span>
              </pre>
            </Grid>
          </Grid>
        </Grid>
      </>
    </div>
  );
}
