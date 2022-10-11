import { Typography, Grid, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Icon } from '@iconify/react';

// components
import { LoadingModal } from 'components/Modal';

// services
import MiningActivityService from 'services/MiningActivityService';

export default function ShipmentDetailCard() {
  const { activityType, id } = useParams();

  const { data, isFetching } = useQuery(
    ['mining-activity', 'detail-activity', id],
    () => MiningActivityService.getActivityById({ id }),
    { keepPreviousData: true, enabled: !!id && activityType === 'shipment' }
  );

  const detailActivity = data?.data?.data;

  const ShowFile = (value) => {
    return (
      <Grid container direction="row" alignItems="stretch" spacing={3}>
        <Grid item md={2} direction="column">
          <a
            // href={URL.createObjectURL(item)}
            href="s"
            style={{ textDecoration: 'none', color: 'inherit' }}
            target="_blank"
            rel="noreferrer"
          >
            <center>
              <Box
                sx={{
                  minHeight: '50px',
                  border: '1px solid #3F48C0',
                  p: 2,
                  borderRadius: '8px',
                  position: 'relative'
                }}
              >
                {/* {item?.type === 'application/pdf' ? ( */}
                <Icon icon="bi:file-earmark-pdf" color="red" fontSize={50} />
                {/* ) : ( */}
                {/* <Icon icon="bi:file-earmark-image" color="red" fontSize={50} /> */}
                {/* )} */}
              </Box>
            </center>
            <p>FileName.pdf</p>
          </a>
        </Grid>
      </Grid>
    );
  };

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
            <Grid item lg={6} xs={12}>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Informasi Umum Kegiatan
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                columnSpacing={10}
                rowSpacing={4}
              >
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Jadwal Kegiatan
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    09 Mei 2023
                    {/* {`${detailActivity && dayjs(detailActivity?.date).format('DD MMMM YYYY')}, ${
                      detailActivity && detailActivity?.time
                    }`} */}
                  </Typography>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Jenis Produk
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Biji Nikel
                    {/* {detailActivity?.product_type} */}
                  </Typography>
                </Grid>
                <Grid item container lg={12} xs={12} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nomor Urut Pengapalan
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    TK 1
                  </Typography>
                </Grid>
                <Grid item container lg={12} xs={12} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Jenis Pemasaran
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Domestik
                  </Typography>
                </Grid>
                <Grid item container lg={12} xs={12} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Jenis Penjualan
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Cost Insurance Freight Barge
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={6} xs={12}>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Informasi Pengiriman
              </Typography>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Nama PBM
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                PT Nama PBM
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={10}
              >
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nama Pembeli
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    PT Nama Pembeli
                  </Typography>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Lokasi Tujuan
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Lokasi Tujuan
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={10}
              >
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Lokasi Titik Serah ( Provinsi )
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Sulawesi Selatan
                  </Typography>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Lokasi Titik Serah ( Kabupaten / Kota )
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Makassar
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={10}
              >
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nama Jenis Pengiriman
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Tongkang
                  </Typography>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nama Alat Pengiriman
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    TB. DAYA BG 0000
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Jumlah Pemasaran
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={10}
              >
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Volume Pengiriman
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.sublot_total || '0'} Lot`}
                  </Typography>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Asal Tumpukan EFO
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    DOME A
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
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nilai Kadar
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.ni_level || '0'} %`}
                  </Typography>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Ekuivalen Logam
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.ni_metal_equivalent || '0'} Ton`}
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
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nilai Kadar
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.fe_level || '0'} %`}
                  </Typography>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Ekuivalen Logam
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.fe_metal_equivalent || '0'} Ton`}
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
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nilai Kadar
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.co_level || '0'} %`}
                  </Typography>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Ekuivalen Logam
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.co_metal_equivalent || '0'} Ton`}
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
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nilai Kadar
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.simgo_level || '0'} %`}
                  </Typography>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Ekuivalen Logam
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.simgo_metal_equivalent || '0'} Ton`}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={12}>
              <hr />
              <Typography variant="h5" sx={{ mb: 3, mt: 3 }}>
                Upload Dokumen
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={10}
              >
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    Shipping Instruction
                  </Typography>
                  <ShowFile />
                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    Siping Instruksi
                  </Typography>
                  <ShowFile />
                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    Draught Survei
                  </Typography>
                  <ShowFile />
                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    Bukti Bayar Royalti
                  </Typography>
                  <ShowFile />
                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    Bill of Loading
                  </Typography>
                  <ShowFile />
                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    Cargo Manifest
                  </Typography>
                  <ShowFile />
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    Packing List
                  </Typography>
                  <ShowFile />
                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    Siping Instruksi
                  </Typography>
                  <ShowFile />
                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    SKAB
                  </Typography>
                  <ShowFile />
                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    LHV
                  </Typography>
                  <ShowFile />
                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    SPB
                  </Typography>
                  <ShowFile />
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={12}>
              <hr />
              <Typography variant="h5" sx={{ mt: 3 }}>
                Informasi Bongkat Muat
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={10}
                sx={{ mb: 3 }}
              >
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    COA MUAT
                  </Typography>
                  <ShowFile />
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 1, mt: 3 }}>
                    COA BONGKAR
                  </Typography>
                  <ShowFile />
                </Grid>
              </Grid>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Jumlah Tonase
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={10}
              >
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Realisasi Tonase
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.ni_level || '0'} %`}
                  </Typography>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Realisasi Tonase
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.ni_metal_equivalent || '0'} Ton`}
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
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nilai Kadar
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.ni_level || '0'} %`}
                  </Typography>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Ekuivalen Logam
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.ni_metal_equivalent || '0'} Ton`}
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
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nilai Kadar
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.fe_level || '0'} %`}
                  </Typography>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Ekuivalen Logam
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.fe_metal_equivalent || '0'} Ton`}
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
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Nilai Kadar
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.co_level || '0'} %`}
                  </Typography>
                </Grid>
                <Grid item container lg={6} xs={6} direction="column">
                  <Typography variant="h6" sx={{ mb: 3 }}>
                    Ekuivalen Logam
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {`${detailActivity?.co_metal_equivalent || '0'} Ton`}
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
