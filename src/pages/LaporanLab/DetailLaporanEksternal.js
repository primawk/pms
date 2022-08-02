import React, { useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import { Icon } from '@iconify/react';
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';
import DeleteData from '../../components/Modal/DeleteModal/index';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';

// components
import { LoadingModal } from 'components/Modal';

// custom hooks
import useModal from '../../hooks/useModal';

// services
import LabService from 'services/LabService';

const DetailEksternal = () => {
  const navigate = useNavigate();
  const { isShowing: isShowingDelete, toggle: toggleDelete } = useModal();

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

  console.log(dataReport);

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
              Laporan Eksternal Lab
            </Box>
            <h2 style={{ margin: '0 0.5rem 1em 2rem' }}>{dataReport?.company_name}</h2>
            <Box
              style={{
                margin: '0 0.5rem 1rem 2rem',
                color: '#3F48C0',
                fontSize: '0.875rem',
                width: '50rem'
              }}
            >
              Terakhir diedit oleh {dataReport?.account_name}, pada 12 Juni 2022, 12:21 WITA
              {dataReport?.updated_at}
            </Box>
            <Box>
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
                onClick={() => navigate(`/edit/eksternal/${id}`, { state: dataReport })}
              >
                Edit Laporan
              </Button>
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
            </Box>
          </Grid>

          {/* PDF */}
          <Grid sx={{ display: 'flex', flexDirection: 'column', margin: '1rem 0 0 2rem' }}>
            <h3>Informasi Sample</h3>
            <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
              <Grid item>
                <Box
                  style={{
                    margin: '0 0 0.5rem 0',
                    fontSize: '0.875rem',
                    width: '5.5rem'
                  }}
                >
                  Tanggal
                </Box>
                <Box style={{ fontSize: '0.875rem' }}>
                  {dayjs(dataReport?.date).format('DD/MM/YYYY')}
                </Box>
              </Grid>
              <Grid item>
                <Box style={{ margin: '0 0.5rem 0.5rem 2rem', fontSize: '0.875rem' }}>
                  Nama Pengaju Sample
                </Box>
                <Box style={{ margin: '0 0.5rem 0.5rem 2rem', fontSize: '0.875rem' }}>
                  {dataReport?.sample_submitter}
                </Box>
              </Grid>
            </Grid>
            <Grid container sx={{ display: 'flex', flexDirection: 'row', marginTop: '1.5rem' }}>
              <Grid item>
                <Box
                  style={{
                    fontSize: '0.875rem'
                  }}
                >
                  Nomor Kontak Pengaju Sample
                </Box>
                <Box style={{ margin: '0 0.5rem 0.5rem 0', fontSize: '0.875rem' }}>
                  {dataReport?.submitter_contact}
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ marginBottom: '1rem', fontSize: '20px' }}>
              <h3>File Laporan</h3>
            </Box>
            <Grid
              item
              sx={{
                backgroundColor: 'white',
                width: '7.438rem',
                height: '9.063rem',
                border: '1px solid #3F48C0',
                borderRadius: '4px'
              }}
            >
              <Grid
                container // container to make the justify content works
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignContent: 'center',
                  marginTop: '0.5rem'
                }}
              >
                <Grid item sx={{ marginLeft: '5rem' }}>
                  <Icon icon="ion:close-circle-sharp" color="#e0e0e0" fontSize={24} />
                </Grid>
                <Grid item sx={{ margin: 'auto' }} fontSize={80}>
                  <Icon icon="ph:file-pdf-duotone" color="#3f48c0" />
                </Grid>
              </Grid>
            </Grid>
            <Box fontSize={'0.875rem'}>{dataReport?.attachment}</Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default DetailEksternal;
