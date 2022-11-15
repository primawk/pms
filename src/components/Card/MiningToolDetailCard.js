import { Typography, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import dayjs from 'dayjs';

// components
import { LoadingModal } from 'components/Modal';

// services

export default function MiningToolDetailCard() {
  const { id } = useParams();

  return (
    <div
      style={{
        borderTopRightRadius: '5px',
        borderTopLeftRadius: '5px',
        padding: '20px'
      }}
      className="bg-white"
    >
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
                  {/* {`${detailActivity && dayjs(detailActivity?.date).format('DD MMMM YYYY')}, ${
                    detailActivity && detailActivity?.time
                  }`} */}
                </Typography>
              </Grid>
              <Grid item container lg={4} xs={4} direction="column">
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Jenis Produk
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {/* {detailActivity?.product_type} */}
                </Typography>
              </Grid>
              <Grid item container lg={4} xs={4} direction="column">
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Blok
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {/* {detailActivity?.block} */}
                </Typography>
              </Grid>
              <Grid item container lg={12} xs={12} direction="column">
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Bukit
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  BukitIV
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Jenis Kegiatan
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Kegiatan K3
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Bukit
                </Typography>
                <pre>
                  <span className="inner-pre">
                    pemasangan rambu, perbaikan cekdam, maintenance jalan, dan lain-lainpemasangan
                    rambu, perbaikan cekdam, maintenance jalan, dan lain-lain
                  </span>
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
                  Pt. Satria Jaya Sutra
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Tipe Peralatan
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Komatsu PC 200
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  PA (Physical Availability)
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  25%
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  AU (UA (Use Of Availability)
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  25%
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Jumlah Peralatan
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  25
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Rasio Bahan Bakar
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  39 Liter/Jam
                </Typography>
              </Grid>
              <Grid item lg={6} md={6} sm={12}>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Jenis Peralatan
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Alat Gali-Muat Batuan Penutup/Waste
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Kapasitas
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  20 m3
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  MA (Mechanical Availability)
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  23%
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  EU (Effective Utilization)
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  23%
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Produktifitas
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  41 Ton/Jam
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
