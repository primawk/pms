import React from 'react';
import {
  Grid,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { Icon } from '@iconify/react';
import dayjs from 'dayjs';

// components
import Header from 'components/Header';

const Detail = ({ setPage, data, index }) => {
  console.log(data[index]);
  const targetTableHead = ['TANGGAL', 'ESTIMASI TO FRONT', 'LOSSING', 'TOTAL LOSSING'];
  return (
    <>
      <Header title="Detail Modul Lossing" background="dashboard.png" />
      <div className="app-content">
        <Grid container sx={{ background: 'white', display: 'flex', flexDirection: 'column' }}>
          <Grid
            item
            container
            sx={{
              background: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Grid
              item
              sx={{
                fontWeight: '700',
                fontSize: '24px',
                marginLeft: '24px'
              }}
              xs={6}
            >
              Tabel Modul Lossing
            </Grid>
            <Grid item sx={{ padding: '24px 0 24px 24px', marginRight: '24px' }}>
              <Grid container sx={{ cursor: 'pointer' }} onClick={() => setPage('summary')}>
                <Grid item>
                  <Icon icon="akar-icons:arrow-left" color="#3f48c0" />
                </Grid>
                <Grid item>
                  <h2
                    style={{
                      marginLeft: '12px',
                      fontWeight: '500',
                      fontSize: '14px'
                    }}
                  >
                    Back
                  </h2>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            sx={{
              background: 'white',
              display: 'flex',
              // justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Grid
              item
              sx={{
                backgroundColor: '#E5E5FE',
                // width: '58px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '0.2rem',
                marginLeft: '24px'
              }}
            >
              Jenis Produk
            </Grid>
            <Grid
              item
              sx={{
                textAlign: 'center',
                padding: '0.2rem'
                // marginLeft: '24px'
              }}
            >
              : {data[index].product_type}
            </Grid>
            <Grid
              item
              sx={{
                backgroundColor: '#E5E5FE',
                // width: '58px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '0.2rem',
                marginLeft: '24px'
              }}
            >
              Blok
            </Grid>
            <Grid
              item
              sx={{
                textAlign: 'center',
                padding: '0.2rem'
                // marginLeft: '24px'
              }}
            >
              : {data[index].block}
            </Grid>
          </Grid>
          <Grid item>
            <TableContainer sx={{ padding: 3, width: '100%' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    {targetTableHead?.map((item) => (
                      <TableCell
                        sx={{ background: '#F2F2F2', border: '1px solid #E0E0E0' }}
                        key={item}
                        align="center"
                      >
                        {item}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{ border: '1px solid #E0E0E0', minWidth: '10vw' }}
                      rowspan={8}
                    >
                      {dayjs(data[index].date).format('DD MMMM YYYY')}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{ border: '1px solid #E0E0E0', minWidth: '10vw' }}
                    >
                      <Grid
                        container
                        sx={{ justifyContent: 'center', alignItems: 'center' }}
                        gap={1}
                      >
                        <Grid
                          item
                          sx={{
                            backgroundColor: '#6FCF97',
                            // width: '58px',
                            borderRadius: '4px',
                            textAlign: 'center',
                            padding: '0.2rem'
                          }}
                        >
                          Estimasi
                        </Grid>
                        <Grid item>= 215 Ton</Grid>
                        <Grid
                          item
                          sx={{
                            backgroundColor: '#E5E5FE',
                            // width: '58px',
                            borderRadius: '4px',
                            textAlign: 'center',
                            padding: '0.2rem'
                          }}
                        >
                          Tongkang
                        </Grid>
                        <Grid item>= 195 Ton</Grid>
                      </Grid>
                    </TableCell>

                    <TableCell
                      align="center"
                      sx={{ border: '1px solid #E0E0E0', minWidth: '10vw' }}
                    >
                      <Grid
                        container
                        sx={{
                          fontSize: '14px',
                          color: '#DA4540',
                          justifyContent: 'center',
                          alignItems: 'center'
                          // width: '76px',
                        }}
                        gap={1}
                      >
                        <Box>
                          <img src="/img/down.png" alt=""></img>
                        </Box>
                        <Box sx={{}}>155 Ton</Box>
                      </Grid>
                    </TableCell>

                    {/* TOTAL LOSSING */}
                    <TableCell
                      align="center"
                      sx={{ border: '1px solid #E0E0E0', minWidth: '10vw' }}
                      rowspan={7}
                    >
                      <Grid
                        container
                        sx={{
                          fontSize: '14px',
                          color: '#DA4540',
                          justifyContent: 'center',
                          alignItems: 'center'
                          // width: '76px',
                        }}
                        gap={1}
                      >
                        <Box>
                          <img src="/img/down.png" alt=""></img>
                        </Box>
                        <Box sx={{}}>{data[index].total} Ton</Box>
                      </Grid>
                    </TableCell>
                  </TableRow>

                  {/* FRONT TO ETO */}
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{
                        border: '1px solid #E0E0E0',
                        minWidth: '10vw',
                        background: '#F2F2F2',
                        fontWeight: '700'
                      }}
                    >
                      FRONT TO ETO
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        border: '1px solid #E0E0E0',
                        minWidth: '10vw',
                        background: '#F2F2F2',
                        fontWeight: '700'
                      }}
                    >
                      LOSSING
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{ border: '1px solid #E0E0E0', minWidth: '10vw' }}
                    >
                      <Grid
                        container
                        sx={{ justifyContent: 'center', alignItems: 'center' }}
                        gap={1}
                      >
                        <Grid
                          item
                          sx={{
                            backgroundColor: '#E5E5FE',
                            // width: '58px',
                            borderRadius: '4px',
                            textAlign: 'center',
                            padding: '0.2rem'
                          }}
                        >
                          Temp C
                        </Grid>
                        <Grid item>= 215 Ton</Grid>
                        <Grid
                          item
                          sx={{
                            backgroundColor: '#E5E5FE',
                            // width: '58px',
                            borderRadius: '4px',
                            textAlign: 'center',
                            padding: '0.2rem'
                          }}
                        >
                          Tongkang
                        </Grid>
                        <Grid item>= 195 Ton</Grid>
                      </Grid>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ border: '1px solid #E0E0E0', minWidth: '10vw' }}
                    >
                      <Grid
                        container
                        sx={{
                          fontSize: '14px',
                          color: '#DA4540',
                          justifyContent: 'center',
                          alignItems: 'center'
                          // width: '76px',
                        }}
                        gap={1}
                      >
                        <Box>
                          <img src="/img/down.png" alt=""></img>
                        </Box>
                        <Box sx={{}}>155 Ton</Box>
                      </Grid>
                    </TableCell>
                  </TableRow>

                  {/* ETO TO EFO */}
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{
                        border: '1px solid #E0E0E0',
                        minWidth: '10vw',
                        background: '#F2F2F2',
                        fontWeight: '700'
                      }}
                    >
                      ETO TO EFO
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        border: '1px solid #E0E0E0',
                        minWidth: '10vw',
                        background: '#F2F2F2',
                        fontWeight: '700'
                      }}
                    >
                      LOSSING
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{ border: '1px solid #E0E0E0', minWidth: '10vw' }}
                    >
                      <Grid
                        container
                        sx={{ justifyContent: 'center', alignItems: 'center' }}
                        gap={1}
                      >
                        <Grid
                          item
                          sx={{
                            backgroundColor: '#E5E5FE',
                            // width: '58px',
                            borderRadius: '4px',
                            textAlign: 'center',
                            padding: '0.2rem'
                          }}
                        >
                          Temp C
                        </Grid>
                        <Grid item>= 215 Ton</Grid>
                        <Grid
                          item
                          sx={{
                            backgroundColor: '#E5E5FE',
                            // width: '58px',
                            borderRadius: '4px',
                            textAlign: 'center',
                            padding: '0.2rem'
                          }}
                        >
                          Tongkang
                        </Grid>
                        <Grid item>= 195 Ton</Grid>
                      </Grid>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ border: '1px solid #E0E0E0', minWidth: '10vw' }}
                    >
                      <Grid
                        container
                        sx={{
                          fontSize: '14px',
                          color: '#DA4540',
                          justifyContent: 'center',
                          alignItems: 'center'
                          // width: '76px',
                        }}
                        gap={1}
                      >
                        <Box>
                          <img src="/img/down.png" alt=""></img>
                        </Box>
                        <Box sx={{}}>155 Ton</Box>
                      </Grid>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{
                        border: '1px solid #E0E0E0',
                        minWidth: '10vw',
                        background: '#F2F2F2',
                        fontWeight: '700'
                      }}
                    >
                      ETO TO BARGING
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        border: '1px solid #E0E0E0',
                        minWidth: '10vw',
                        background: '#F2F2F2',
                        fontWeight: '700'
                      }}
                    >
                      LOSSING
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{ border: '1px solid #E0E0E0', minWidth: '10vw' }}
                    >
                      <Grid
                        container
                        sx={{ justifyContent: 'center', alignItems: 'center' }}
                        gap={1}
                      >
                        <Grid
                          item
                          sx={{
                            backgroundColor: '#E5E5FE',
                            // width: '58px',
                            borderRadius: '4px',
                            textAlign: 'center',
                            padding: '0.2rem'
                          }}
                        >
                          Temp C
                        </Grid>
                        <Grid item>= 215 Ton</Grid>
                        <Grid
                          item
                          sx={{
                            backgroundColor: '#E5E5FE',
                            // width: '58px',
                            borderRadius: '4px',
                            textAlign: 'center',
                            padding: '0.2rem'
                          }}
                        >
                          Tongkang
                        </Grid>
                        <Grid item>= 195 Ton</Grid>
                      </Grid>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ border: '1px solid #E0E0E0', minWidth: '10vw' }}
                    >
                      <Grid
                        container
                        sx={{
                          fontSize: '14px',
                          color: '#DA4540',
                          justifyContent: 'center',
                          alignItems: 'center'
                          // width: '76px',
                        }}
                        gap={1}
                      >
                        <Box>
                          <img src="/img/down.png" alt=""></img>
                        </Box>
                        <Box sx={{}}>155 Ton</Box>
                      </Grid>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Detail;
