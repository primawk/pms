import { Typography, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import dayjs from 'dayjs';

// components
import { LoadingModal } from 'components/Modal';

// services
import MiningActivityService from 'services/MiningActivityService';

export default function ReportDetailCard() {
  const { activityType, id } = useParams();

  const { data, isFetching } = useQuery(
    ['mining-activity', 'detail-activity', id],
    () => MiningActivityService.getActivityById({ id }),
    { keepPreviousData: true, enabled: !!id }
  );

  const detailActivity = data?.data?.data;

  return (
    <div
      style={{
        borderTopRightRadius: '5px',
        borderTopLeftRadius: '5px',
        padding: '20px'
      }}
      className="bg-white"
    >
      {isFetching && <LoadingModal />}
      {data && (
        <>
          <Typography variant="h4" sx={{ mb: 3 }}>
            {detailActivity?.hill_name}
          </Typography>
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
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Jadwal Kegiatan
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity && dayjs(detailActivity?.date).format('DD MMMM YYYY')}, ${
                      detailActivity && detailActivity?.time
                    }`}
                  </Typography>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Jenis Produk
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {detailActivity?.product_type}
                  </Typography>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Jenis Pengukuran
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {detailActivity?.measurement_type}
                  </Typography>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Blok
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {detailActivity?.block}
                  </Typography>
                </Grid>
                {activityType === 'ore-hauling-to-eto' && (
                  <Grid item container lg={6} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Nama Mitra
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {detailActivity?.partner}
                    </Typography>
                  </Grid>
                )}
              </Grid>
              {activityType !== 'ore-getting' && (
                <>
                  <Typography variant="h5" sx={{ mb: 3 }}>
                    Bukit Asal
                  </Typography>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    columnSpacing={10}
                  >
                    <Grid item container lg={6} xs={6} direction="column">
                      <Typography variant="h6" sx={{ mb: 3 }}>
                        Bukit Asal
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 3 }}>
                        Bukit X
                      </Typography>
                    </Grid>
                    <Grid item container lg={6} xs={6} direction="column">
                      <Typography variant="h6" sx={{ mb: 3 }}>
                        Dome Asal
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 3 }}>
                        Dome XI
                      </Typography>
                    </Grid>
                  </Grid>
                </>
              )}
              <Typography variant="h5" sx={{ mb: 3 }}>
                Bukit Tujuan
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                columnSpacing={10}
              >
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Bukit Tujuan
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Bukit X
                  </Typography>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Dome Tujuan
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Dome XI
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={6} xs={12}>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Jumlah Produksi
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={10}
              >
                {detailActivity?.activity_type === 'ore-hauling-to-eto' ? (
                  <Grid item container lg={5} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Jumlah Retase
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {`${detailActivity?.ritase_total || ''} Lot`}
                    </Typography>
                  </Grid>
                ) : (
                  <Grid item container lg={5} xs={6} direction="column">
                    <Typography variant="h6" sx={{ mb: 3 }}>
                      Jumlah Sublot
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {`${detailActivity?.sublot_total || ''} Lot`}
                    </Typography>
                  </Grid>
                )}

                <Grid item container lg={5} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Jumlah Tonase
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.tonnage_total || ''} Ton`}
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Kadar Ni
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={10}
              >
                <Grid item container lg={5} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nilai Kadar
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.ni_level || ''} %`}
                  </Typography>
                </Grid>
                <Grid item container lg={5} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Ekuivalen Logam
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.ni_metal_equivalent || ''} Ton`}
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Kadar Fe
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={10}
              >
                <Grid item container lg={5} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nilai Kadar
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.fe_level || ''} %`}
                  </Typography>
                </Grid>
                <Grid item container lg={5} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Ekuivalen Logam
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.fe_metal_equivalent || ''} Ton`}
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Kadar CO
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={10}
              >
                <Grid item container lg={5} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nilai Kadar
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.co_level || ''} %`}
                  </Typography>
                </Grid>
                <Grid item container lg={5} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Ekuivalen Logam
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.co_metal_equivalent || ''} Ton`}
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Kadar SiMgO
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={10}
              >
                <Grid item container lg={5} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nilai Kadar
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.simgo_level || ''} %`}
                  </Typography>
                </Grid>
                <Grid item container lg={5} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Ekuivalen Logam
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.simgo_metal_equivalent || ''} Ton`}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
}
