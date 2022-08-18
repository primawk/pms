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

export default function index({ data, innerRef }) {
  return (
    <div ref={innerRef} className="app-content" style={{ background: 'white' }}>
      {/* Header */}
      <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ pb: 3 }}>
        <Grid item>
          <img
            src="/PMSLogo.png"
            alt="PMS LOGO"
            style={{ margin: 'auto', width: '70px', height: '70px' }}
          />
        </Grid>
        <Grid
          item
          sx={{ textAlign: 'center', borderBottom: '1px solid #E0E0E0', pb: 5, maxWidth: '60%' }}
        >
          <h3>PT MEKONGA SEJAHTERA</h3>
          <h3>LABORATORIUM PENGUJIAN LAB</h3>
          <h5 style={{ fontWeight: 'normal' }}>
            JALAN PROTOKOL NO.21 DAWI-DAWI POMALAA KABUPATEN KOLAKA PROVINSI SULAWESI TENGGARA
          </h5>
        </Grid>
        <Grid item>
          <img
            src="/plusLogo.png"
            alt="Plus Logo"
            style={{ margin: 'auto', width: '70px', height: '70px' }}
          />
        </Grid>
      </Grid>
      {/* DETAIL */}
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontWeight: 'normal', textDecoration: 'underline' }}>
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
            <h5>Tanggal</h5>
          </Grid>
          <Grid item xs={6} sx={{ maxWidth: '80%' }}>
            <h5 style={{ fontWeight: 'normal' }}>
              <span>:&nbsp;</span>
              {data?.date || '-'}
            </h5>
          </Grid>
        </Grid>
        <Grid item container direction="row" justifyContent="center" alignItems="flex-start" xs={5}>
          <Grid item xs={6} sx={{ maxWidth: '80%' }}>
            <h5>Bukit</h5>
          </Grid>
          <Grid item xs={6} sx={{ maxWidth: '80%' }}>
            <h5 style={{ fontWeight: 'normal' }}>
              <span>:&nbsp;</span>
              {data?.hill_name || '-'}
            </h5>
          </Grid>
        </Grid>
        <Grid item container direction="row" justifyContent="center" alignItems="flex-start" xs={5}>
          <Grid item xs={6} sx={{ maxWidth: '80%' }}>
            <h5>Jenis Sample</h5>
          </Grid>
          <Grid item xs={6} sx={{ maxWidth: '80%' }}>
            <h5 style={{ fontWeight: 'normal' }}>
              <span>:&nbsp;</span>
              {data?.sample_type || '-'}
            </h5>
          </Grid>
        </Grid>
        <Grid item container direction="row" justifyContent="center" alignItems="flex-start" xs={5}>
          <Grid item xs={6} sx={{ maxWidth: '80%' }}>
            <h5>Tumpukan / Dome</h5>
          </Grid>
          <Grid item xs={6} sx={{ maxWidth: '80%' }}>
            <h5 style={{ fontWeight: 'normal' }}>
              <span>:&nbsp;</span>
              {data?.dome_name || '-'}
            </h5>
          </Grid>
        </Grid>
        <Grid item container direction="row" justifyContent="center" alignItems="flex-start" xs={5}>
          <Grid item xs={6} sx={{ maxWidth: '80%' }}>
            <h5>Penerbit</h5>
          </Grid>
          <Grid item xs={6} sx={{ maxWidth: '80%' }}>
            <h5 style={{ fontWeight: 'normal' }}>
              <span>:&nbsp;</span>PT. Mekonga Sejahtera
            </h5>
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
                {`${parseFloat(data?.simgo_level || 0).toFixed(2) || '0'} %`}
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
        <h3>PT MEKONGA SEJAHTERA</h3>
      </Stack>
    </div>
  );
}
