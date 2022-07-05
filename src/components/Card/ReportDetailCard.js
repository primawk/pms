import { Typography, Grid } from '@mui/material';

export default function ReportDetailCard() {
  return (
    <div
      style={{
        background: 'white',
        borderTopRightRadius: '5px',
        borderTopLeftRadius: '5px',
        padding: '20px'
      }}
    >
      <Typography variant="h4" sx={{ mb: 3 }}>
        Bukit IX
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
            spacing={10}
          >
            <Grid item container lg={5} xs={12} direction="column">
              <Typography variant="h6" sx={{ mb: 3 }}>
                Jadwal Kegiatan
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                11 April 2022, 15:00
              </Typography>
            </Grid>
            <Grid item container lg={5} xs={12} direction="column">
              <Typography variant="h6" sx={{ mb: 3 }}>
                Jenis Produk
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Biji Nikel
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
            <Grid item container lg={5} xs={12} direction="column">
              <Typography variant="h6" sx={{ mb: 3 }}>
                Jenis Pengukuran
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Sumlot SM
              </Typography>
            </Grid>
            <Grid item container lg={5} xs={12} direction="column">
              <Typography variant="h6" sx={{ mb: 3 }}>
                Blok
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Utara
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
            <Grid item container lg={5} xs={12} direction="column">
              <Typography variant="h6" sx={{ mb: 3 }}>
                Jumlah Sublot
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                6 Lot
              </Typography>
            </Grid>
            <Grid item container lg={5} xs={12} direction="column">
              <Typography variant="h6" sx={{ mb: 3 }}>
                Jumlah Tonase
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                56 Ton
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
            <Grid item container lg={5} xs={12} direction="column">
              <Typography variant="h6" sx={{ mb: 3 }}>
                Nilai Kadar
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                1.742%
              </Typography>
            </Grid>
            <Grid item container lg={5} xs={12} direction="column">
              <Typography variant="h6" sx={{ mb: 3 }}>
                Ekuivalen Logam
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                56 Ton
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
            <Grid item container lg={5} xs={12} direction="column">
              <Typography variant="h6" sx={{ mb: 3 }}>
                Nilai Kadar
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                1.742%
              </Typography>
            </Grid>
            <Grid item container lg={5} xs={12} direction="column">
              <Typography variant="h6" sx={{ mb: 3 }}>
                Ekuivalen Logam
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                56 Ton
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
            <Grid item container lg={5} xs={12} direction="column">
              <Typography variant="h6" sx={{ mb: 3 }}>
                Nilai Kadar
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                1.742%
              </Typography>
            </Grid>
            <Grid item container lg={5} xs={12} direction="column">
              <Typography variant="h6" sx={{ mb: 3 }}>
                Ekuivalen Logam
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                56 Ton
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
