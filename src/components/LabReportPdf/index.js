import {
  Grid,
  TableContainer,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Stack
} from '@mui/material';
import React from 'react';
import dayjs from 'dayjs';

export default function index({ data, innerRef }) {
  return (
    <div
      ref={innerRef}
      className="app-content"
      style={{
        background: 'white',
        fontFamily: 'Times New Roman',
        margin: '50px'
      }}
    >
      {/* Header */}
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ borderBottom: '1px solid black' }}
      >
        <Grid item sx={{ mr: 2 }}>
          <img
            src="/PMSLogo1.JPEG"
            alt="PMS LOGO"
            style={{ margin: 'auto', width: '90px', height: '90px' }}
          />
        </Grid>
        <Grid item sx={{ textAlign: 'left', pb: 1, maxWidth: '100%' }}>
          <h2 style={{ color: 'red' }}>PT. PUTRA MEKONGGA SEJAHTERA</h2>
          <h3 style={{ fontWeight: 'bold' }}>
            <i>Laboratorium & Mining</i>
          </h3>
          <h5 style={{ fontWeight: 'normal' }}>
            Jl. Protokol No.21 Dawi-dawi Pomalaa <br></br> Kabupaten Kolaka, Sulawesi Tenggara
            <br></br> Telp. 0405 - 2310248 Fax. 0405 - 2310248, e-Mail:
            putramekonggasejahtera@yahoo.com
          </h5>
        </Grid>
      </Grid>
      {/* DETAIL */}
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <h3 style={{ fontWeight: 'bolder', textDecoration: 'underline' }}>
          LAPORAN HASIL UJI LAB INTERNAL
        </h3>
        <h3>{data?.sample_code || '-'}</h3>
      </div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        sx={{ pt: 3, pb: 3 }}
        columnSpacing={3}
      >
        <Grid item container direction="row" justifyContent="center" alignItems="flex-start" xs={5}>
          <Grid item xs={6} sx={{ maxWidth: '80%' }}>
            <h5>
              Tanggal <span style={{ float: 'right' }}>:&nbsp;</span>
            </h5>
          </Grid>
          <Grid item xs={6} sx={{ maxWidth: '80%' }}>
            <h5 style={{ fontWeight: 'normal' }}>{data?.date || '-'}</h5>
          </Grid>
        </Grid>
        <Grid item container direction="row" justifyContent="center" alignItems="flex-start" xs={5}>
          <Grid item xs={6} sx={{ maxWidth: '80%' }}>
            <h5>
              Bukit <span style={{ float: 'right' }}>:&nbsp;</span>
            </h5>
          </Grid>
          <Grid item xs={6} sx={{ maxWidth: '80%' }}>
            <h5 style={{ fontWeight: 'normal' }}>{data?.hill_name || '-'}</h5>
          </Grid>
        </Grid>
        <Grid item container direction="row" justifyContent="center" alignItems="flex-start" xs={5}>
          <Grid item xs={6} sx={{ maxWidth: '80%' }}>
            <h5>
              Jenis Sample <span style={{ float: 'right' }}>:&nbsp;</span>
            </h5>
          </Grid>
          <Grid item xs={6} sx={{ maxWidth: '80%' }}>
            <h5 style={{ fontWeight: 'normal' }}>{data?.sample_type || '-'}</h5>
          </Grid>
        </Grid>
        <Grid item container direction="row" justifyContent="center" alignItems="flex-start" xs={5}>
          <Grid item xs={6} sx={{ maxWidth: '80%' }}>
            <h5>
              Tumpukan / Dome <span style={{ float: 'right' }}>:&nbsp;</span>
            </h5>
          </Grid>
          <Grid item xs={6} sx={{ maxWidth: '80%' }}>
            <h5 style={{ fontWeight: 'normal' }}>{data?.dome_name || '-'}</h5>
          </Grid>
        </Grid>
        <Grid item container direction="row" justifyContent="center" alignItems="flex-start" xs={5}>
          <Grid item xs={6} sx={{ maxWidth: '80%' }}>
            <h5>
              Penerbit <span style={{ float: 'right' }}>:&nbsp;</span>
            </h5>
          </Grid>
          <Grid item xs={6} sx={{ maxWidth: '80%' }}>
            <h5 style={{ fontWeight: 'normal' }}>PT. Mekongga Sejahtera</h5>
          </Grid>
        </Grid>
        <Grid item xs={5} />
      </Grid>
      {/* TABLE */}
      <TableContainer style={{ width: '100%' }}>
        <Table size="small" style={{ margin: 'auto', maxWidth: '85%' }}>
          <TableHead sx={{ background: '#3F48C0' }}>
            <TableRow>
              <TableCell sx={{ border: '1px black solid', color: 'white' }} align="center">
                No.
              </TableCell>
              <TableCell sx={{ border: '1px black solid', color: 'white' }} align="center">
                Parameter Uji
              </TableCell>
              <TableCell sx={{ border: '1px black solid', color: 'white' }} align="center">
                Hasil Uji
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                1
              </TableCell>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                Inc
              </TableCell>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                {data?.inc || '0'}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                2
              </TableCell>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                Tonase
              </TableCell>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                {`${parseFloat(data?.tonnage || 0).toFixed(2) || '0'} Ton`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                3
              </TableCell>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                Nikel (Ni)
              </TableCell>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                {`${parseFloat(data?.ni_level || 0).toFixed(2) || '0'} %`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                4
              </TableCell>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                Silikon (SiO)
              </TableCell>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                {`${parseFloat(data?.sio2_level || 0).toFixed(2) || '0'} %`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                5
              </TableCell>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                Magnesium (MgO)
              </TableCell>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                {`${parseFloat(data?.mgo_level || 0).toFixed(2) || '0'} %`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                6
              </TableCell>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                Zat Besi (Fe)
              </TableCell>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                {`${parseFloat(data?.fe_level || 0).toFixed(2) || '0'} %`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                7
              </TableCell>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                Zat Kapur (CaO)
              </TableCell>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                {`${parseFloat(data?.cao_level || 0).toFixed(2) || '0'} %`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                8
              </TableCell>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                Magnesium Silikat (SiMgO)
              </TableCell>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                {`${parseFloat(data?.simgo_level || 0).toFixed(2) || '0'}`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                9
              </TableCell>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                Kobalt (Co)
              </TableCell>
              <TableCell sx={{ border: '1px black solid', fontWeight: 'bolder' }} align="center">
                {`${parseFloat(data?.co_level || 0).toFixed(2) || '0'} %`}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* SIGNATURE */}
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Grid
          item
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '3rem',
            height: '10rem'
          }}
        >
          <Grid item>Pomalaa, {dayjs(data?.date).format('DD MMMM YYYY')}</Grid>
          <Grid item>
            <p>____________________</p>
            <p>Manajer Laboratorium</p>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '3rem',
            height: '10rem'
          }}
        >
          <Grid item>Pomalaa, {dayjs(data?.date).format('DD MMMM YYYY')}</Grid>
          <Grid item>
            <p>_____________________</p>
            <p>Kepala Teknik Tambang</p>
          </Grid>
        </Grid>
      </Grid>

      {/* FOOTER */}
      <h5 style={{ position: 'fixed', bottom: 0, left: 10, maxWidth: '50%' }}>
        {String(new Date(data?.updated_at))}
      </h5>
      <Stack direction="row" sx={{ position: 'fixed', bottom: 0, right: 10 }} alignItems="center">
        <img
          src="/PMSLogo.png"
          alt="PMS LOGO"
          style={{ width: '30px', height: '30px', maxWidth: '50%' }}
        />
        <h3>PT. PUTRA MEKONGGA SEJAHTERA</h3>
      </Stack>
    </div>
  );
}
