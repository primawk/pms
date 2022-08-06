import React, { useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import { Icon } from '@iconify/react';
import Navbar from '../../components/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteData from '../../components/Modal/DeleteModal/index';
import { useQuery } from 'react-query';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';

// components
import { LoadingModal } from 'components/Modal';

// custom hooks
import useModal from '../../hooks/useModal';
import useAuth from 'hooks/useAuth';

// services
import LabService from 'services/LabService';

const DetailInternal = () => {
  const navigate = useNavigate();
  const { isShowing: isShowingDelete, toggle: toggleDelete } = useModal();
  const { isGranted } = useAuth();

  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const handleDelete = () => {
    setLoading(true);
    LabService.deleteReport({ id })
      .then(() => {
        navigate(-1);
        toast.success('Data berhasil dihapus !');
        setLoading(false);
        toggleDelete();
      })
      .catch((err) => {
        toast.error(err.response.data.detail_message);
        setLoading(false);
        toggleDelete();
      });
  };

  const {
    data,
    // isLoading: isLoadingActivity,
    isFetching: isFetchingActivity
  } = useQuery(
    ['report'],
    () =>
      LabService.getReportDetail({
        id: `${id}`
      })
    // { keepPreviousData: true }
  );

  const dataReport = data?.data?.data;
  const d = String(new Date(dataReport?.updated_at));

  return (
    <>
      <DeleteData
        toggle={toggleDelete}
        isShowing={isShowingDelete}
        loading={loading}
        action={handleDelete}
        title="Laporan Lab"
      />
      <div
        style={{
          backgroundColor: '#F5F5F5',
          width: '100%',
          height: '100%',
          overflow: 'auto', // it makes this container follow the height of its content
          position: 'relative'
        }}
      >
        <Navbar />

        {isFetchingActivity && <LoadingModal />}

        <Grid
          container
          sx={{
            display: 'flex',
            //   alignItems: 'flex-start',
            flexDirection: 'column',
            backgroundColor: 'white',
            height: '72.5rem',
            width: '90%',
            marginTop: '6rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 'auto',
            borderRadius: '4px'
          }}
        >
          <Grid item sx={{ height: '6%' }}>
            <Grid
              container
              sx={{ display: 'flex', flexDirection: 'row', margin: '1rem 0.5rem 0.3rem 2rem' }}
            >
              <Button variant="outlined" sx={{ marginRight: '1rem' }} onClick={() => navigate(-1)}>
                <Icon icon="akar-icons:arrow-back" color="#3f48c0" fontSize={16} />
                <div style={{ marginLeft: '1rem', fontWeight: '400' }}>Back</div>
              </Button>
              <Button variant="contained" sx={{ boxShadow: 0, fontWeight: '400' }}>
                Download Laporan
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{ height: '19%', borderBottom: 1, borderBottomColor: '#E0E0E0', width: '30%' }}
          >
            <Box style={{ margin: '1rem 0.5rem 1rem 2rem', fontSize: '1rem' }}>
              Laporan Internal Lab
            </Box>
            <h2 style={{ margin: '0 0.5rem 1em 2rem' }}>{dataReport?.sample_code}</h2>
            <Box
              style={{
                margin: '0 0.5rem 1rem 2rem',
                color: '#3F48C0',
                fontSize: '0.875rem',
                width: '50rem',
                cursor: 'pointer'
              }}
              onClick={() => navigate(`/lab-report/history-edit`, { state: dataReport })}
            >
              Terakhir diedit oleh {dataReport?.account_name}, pada {d}
            </Box>
            {isGranted && (
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: '#E5E5FE',
                  margin: '0 1rem 0.3rem 2rem',
                  color: '#3F48C0',
                  boxShadow: 0,
                  border: '1px solid #3F48C0',
                  width: '40%',
                  fontWeight: '400'
                }}
                onClick={() =>
                  navigate(`/lab-report/edit/${dataReport?.report_type}/${id}`, {
                    state: dataReport
                  })
                }
              >
                Edit Laporan
              </Button>
            )}
            {isGranted && (
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: 'white',
                  margin: '0 0.5rem 0.3rem 0',
                  color: '#3F48C0',
                  boxShadow: 0,
                  border: '1px solid #3F48C0',
                  width: '40%',
                  fontWeight: '400'
                }}
                onClick={toggleDelete}
              >
                Delete Laporan
              </Button>
            )}
          </Grid>
          <Grid item sx={{ }}>
            <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
              <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '2.5rem 0.5rem 1.5rem 2rem' }}>Informasi Sample</h3>
                <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Grid item>
                    <Box
                      style={{
                        margin: '0 0.5rem 0.5rem 2rem',
                        fontSize: '0.875rem',
                        fontWeight: '700',
                        width: '5.5rem'
                      }}
                    >
                      Tanggal
                    </Box>
                    <Box style={{ margin: '0 0.5rem 0.5rem 2rem', fontSize: '0.875rem' }}>
                      {dayjs(dataReport?.date).format('DD/MM/YYYY')}
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box
                      style={{
                        margin: '0 0.5rem 0.5rem 2rem',
                        fontSize: '0.875rem',
                        fontWeight: '700'
                      }}
                    >
                      Jenis Sample
                    </Box>
                    <Box style={{ margin: '0 0.5rem 0.5rem 2rem', fontSize: '0.875rem' }}>
                      {dataReport?.sample_type}
                    </Box>
                  </Grid>
                </Grid>
                <Grid container sx={{ display: 'flex', flexDirection: 'row', marginTop: '1.5rem' }}>
                  <Grid item>
                    <Box
                      style={{
                        margin: '0 0.5rem 0.5rem 2rem',
                        fontSize: '0.875rem',
                        width: '5.5rem',
                        fontWeight: '700'
                      }}
                    >
                      Bukit
                    </Box>
                    <Box style={{ margin: '0 0.5rem 0.5rem 2rem', fontSize: '0.875rem' }}>
                      {dataReport?.hill_name}
                    </Box>
                    <Box
                      style={{
                        margin: '2rem 0.5rem 0.5rem 2rem',
                        fontSize: '0.875rem',
                        width: '5.5rem',
                        fontWeight: '700'
                      }}
                    >
                      Preparasi
                    </Box>
                    <Box style={{ margin: '0 0.5rem 0.5rem 2rem', fontSize: '0.875rem' }}>
                      {dataReport?.preparation}
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box
                      style={{
                        margin: '0 0.5rem 0.5rem 2rem',
                        fontSize: '0.875rem',
                        fontWeight: '700'
                      }}
                    >
                      Tumpukan/Dome
                    </Box>
                    <Box style={{ margin: '0 0.5rem 0.5rem 2rem', fontSize: '0.875rem' }}>
                      {dataReport?.dome_name}
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginLeft: '8rem'
                }}
              >
                <h3 style={{ margin: '2.5rem 0.5rem 1.5rem 0' }}>Hasil Analisa</h3>
                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Grid
                    item
                    sx={{
                      backgroundColor: 'white',
                      border: '1px solid #E0E0E0',
                      borderRadius: '0.25rem',
                      marginLeft: '1rem',
                      width: '14rem',
                      height: '6.4375rem',
                      margin: '0 1rem 1.5rem 0'
                    }}
                  >
                    <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Inc</Box>
                    <Box
                      sx={{
                        margin: '0.75rem 1rem 1rem 1rem',
                        fontSize: '1.5rem',
                        fontWeight: '700'
                      }}
                    >
                      {dataReport?.inc}
                    </Box>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      backgroundColor: 'white',
                      border: '1px solid #E0E0E0',
                      borderRadius: '0.25rem',
                      marginLeft: '1rem',
                      width: '14rem',
                      height: '6.4375rem',
                      margin: '0 1rem 1.5rem 0'
                    }}
                  >
                    <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Tonase</Box>
                    <Box
                      sx={{
                        margin: '0.75rem 1rem 1rem 1rem',
                        fontSize: '1.5rem',
                        fontWeight: '700'
                      }}
                    >
                      {dataReport?.tonnage} Ton
                    </Box>
                  </Grid>
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Grid
                    item
                    sx={{
                      backgroundColor: 'white',
                      border: '1px solid #E0E0E0',
                      borderRadius: '0.25rem',
                      marginLeft: '1rem',
                      width: '14rem',
                      height: '6.4375rem',
                      margin: '0 1rem 1.5rem 0'
                    }}
                  >
                    <Grid
                      container
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Grid item>
                        <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Kadar Ni</Box>
                        <Box
                          sx={{
                            margin: '0.75rem 1rem 1rem 1rem',
                            fontSize: '1.5rem',
                            fontWeight: '700'
                          }}
                        >
                          {dataReport?.ni_level} %
                        </Box>
                      </Grid>
                      <Grid item sx={{ margin: '1rem 1rem 0 0' }}>
                        <img src="/img/ni.png" alt=""></img>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      backgroundColor: 'white',
                      border: '1px solid #E0E0E0',
                      borderRadius: '0.25rem',
                      marginLeft: '1rem',
                      width: '14rem',
                      height: '6.4375rem',
                      margin: '0 1rem 1.5rem 0'
                    }}
                  >
                    <Grid
                      container
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Grid item>
                        <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Kadar SiO</Box>
                        <Box
                          sx={{
                            margin: '0.75rem 1rem 1rem 1rem',
                            fontSize: '1.5rem',
                            fontWeight: '700'
                          }}
                        >
                          {dataReport?.sio2_level} %
                        </Box>
                      </Grid>
                      <Grid item>
                        <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                          <Grid item sx={{ margin: '1rem 0.3rem 0 0', fontSize: '1rem' }}>
                            <img src="/img/si.png" alt=""></img>
                          </Grid>
                          <Grid item sx={{ margin: '1rem 1rem 0 0', fontSize: '1rem' }}>
                            <img src="/img/o.png" alt=""></img>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      backgroundColor: 'white',
                      border: '1px solid #E0E0E0',
                      borderRadius: '0.25rem',
                      marginLeft: '1rem',
                      width: '14rem',
                      height: '6.4375rem',
                      margin: '0 1rem 1.5rem 0'
                    }}
                  >
                    <Grid
                      container
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Grid item>
                        <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Kadar MgO</Box>
                        <Box
                          sx={{
                            margin: '0.75rem 1rem 1rem 1rem',
                            fontSize: '1.5rem',
                            fontWeight: '700'
                          }}
                        >
                          {dataReport?.mgo_level} %
                        </Box>
                      </Grid>
                      <Grid item>
                        <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                          <Grid item sx={{ margin: '1rem 0.3rem 0 0', fontSize: '1rem' }}>
                            <img src="/img/si.png" alt=""></img>
                          </Grid>
                          <Grid item sx={{ margin: '1rem 1rem 0 0', fontSize: '1rem' }}>
                            <img src="/img/o.png" alt=""></img>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Grid
                    item
                    sx={{
                      backgroundColor: 'white',
                      border: '1px solid #E0E0E0',
                      borderRadius: '0.25rem',
                      marginLeft: '1rem',
                      width: '14rem',
                      height: '6.4375rem',
                      margin: '0 1rem 1.5rem 0'
                    }}
                  >
                    <Grid
                      container
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Grid item>
                        <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Kadar Fe</Box>
                        <Box
                          sx={{
                            margin: '0.75rem 1rem 1rem 1rem',
                            fontSize: '1.5rem',
                            fontWeight: '700'
                          }}
                        >
                          {dataReport?.fe_level} %
                        </Box>
                      </Grid>
                      <Grid item>
                        <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                          <Grid item sx={{ margin: '1rem 1rem 0 0', fontSize: '1rem' }}>
                            <img src="/img/fe.png" alt=""></img>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      backgroundColor: 'white',
                      border: '1px solid #E0E0E0',
                      borderRadius: '0.25rem',
                      marginLeft: '1rem',
                      width: '14rem',
                      height: '6.4375rem',
                      margin: '0 1rem 1.5rem 0'
                    }}
                  >
                    <Grid
                      container
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Grid item>
                        <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Kadar CaO</Box>
                        <Box
                          sx={{
                            margin: '0.75rem 1rem 1rem 1rem',
                            fontSize: '1.5rem',
                            fontWeight: '700'
                          }}
                        >
                          {dataReport?.cao_level} %
                        </Box>
                      </Grid>
                      <Grid item>
                        <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                          <Grid item sx={{ margin: '1rem 0.3rem 0 0', fontSize: '1rem' }}>
                            <img src="/img/ca.png" alt=""></img>
                          </Grid>
                          <Grid item sx={{ margin: '1rem 1rem 0 0', fontSize: '1rem' }}>
                            <img src="/img/o.png" alt=""></img>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      backgroundColor: 'white',
                      border: '1px solid #E0E0E0',
                      borderRadius: '0.25rem',
                      marginLeft: '1rem',
                      width: '14rem',
                      height: '6.4375rem',
                      margin: '0 1rem 1.5rem 0'
                    }}
                  >
                    <Grid
                      container
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Grid item>
                        <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Kadar SiMgO</Box>
                        <Box
                          sx={{
                            margin: '0.75rem 1rem 1rem 1rem',
                            fontSize: '1.5rem',
                            fontWeight: '700'
                          }}
                        >
                          {dataReport?.simgo_level} %
                        </Box>
                      </Grid>
                      <Grid item>
                        <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                          <Grid item sx={{ margin: '1rem 0.1rem 0 0', width: '1.5rem' }}>
                            <img src="/img/si.png" alt=""></img>
                          </Grid>
                          <Grid item sx={{ margin: '1rem 0.1rem 0 0', width: '1.5rem' }}>
                            <img src="/img/mg.png" alt=""></img>
                          </Grid>
                          <Grid item sx={{ margin: '1rem 1rem 0 0', width: '1.5rem' }}>
                            <img src="/img/o.png" alt=""></img>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Grid
                    item
                    sx={{
                      backgroundColor: 'white',
                      border: '1px solid #E0E0E0',
                      borderRadius: '0.25rem',
                      marginLeft: '1rem',
                      width: '14rem',
                      height: '6.4375rem',
                      margin: '0 1rem 1.5rem 0'
                    }}
                  >
                    <Grid
                      container
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Grid item>
                        <Box sx={{ margin: '1rem 1rem 0.75rem 1rem' }}>Kadar Co</Box>
                        <Box
                          sx={{
                            margin: '0.75rem 1rem 1rem 1rem',
                            fontSize: '1.5rem',
                            fontWeight: '700'
                          }}
                        >
                          {dataReport?.co_level} %
                        </Box>
                      </Grid>
                      <Grid item sx={{ margin: '1rem 1rem 0 0' }}>
                        <img src="/img/co.png" alt=""></img>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default DetailInternal;
