import React, { useState, useEffect } from 'react';
import { Grid, Box, Button } from '@mui/material';
import { Icon } from '@iconify/react';
import Navbar from '../../components/Navbar';
import { useNavigate, useLocation } from 'react-router-dom';
import DeleteData from '../../components/Modal/DeleteModal/index';
import { useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import ListEdit from '../../components/BankData/ListEdit';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';

// components
import { LoadingModal } from 'components/Modal';

// custom hooks
import useModal from '../../hooks/useModal';
import useAuth from 'hooks/useAuth';

// services
import BankDataService from '../../services/BankDataServices';

const DetailBankData = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  const [banner, setBanner] = useState(false);
  const { isShowing: isShowingDelete, toggle: toggleDelete } = useModal();
  const { isGranted } = useAuth();

  const { id } = useParams();

  const { data, isLoading, isFetching } = useQuery(
    ['data', id],
    async () =>
      await BankDataService.getBankData({
        page: 1,
        id: `${id}`
      })
  );

  const dataReport = data?.data?.data;

  // const attachment = dataReport.attachment;

  // checking expiration date
  useEffect(() => {
    let expDate = new Date(data?.data?.data[0].date); // convert string to date format
    let dateNow = new Date();
    if (expDate - dateNow <= 1000 * 3600 * 24 * 7 * 3) {
      // console.log('Expires in less than 3 weeks.');
      setBanner(true);
    } else {
      setBanner(false);
    }
  }, [data]);

  const d = String(new Date(dataReport?.updated_at));

  return (
    <>
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

        {/* {isLoadingActivity && isFetchingActivity && <LoadingModal />} */}

        <Grid
          container
          sx={{
            display: 'flex',
            //   alignItems: 'flex-start',
            flexDirection: 'column',
            backgroundColor: 'white',
            width: '90%',
            marginTop: '6rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '10rem',
            borderRadius: '4px'
          }}
        >
          <Grid
            item
            container
            sx={{
              padding: '1rem',
              borderBottom: 1,
              borderBottomColor: '#E0E0E0'
            }}
          >
            <Grid
              container
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Grid item xs={4}>
                <h2 style={{ paddingLeft: '1rem' }}>Bank Data</h2>
              </Grid>
              {banner ? (
                <Grid item xs={6} sm={6} md={6} lg={5.7}>
                  <Grid item container sx={{}}>
                    <Grid
                      item
                      sx={{
                        backgroundColor: 'red',
                        borderRadius: '4px 0 0 4px'
                      }}
                      xs={0.2}
                    ></Grid>
                    <Grid
                      item
                      container
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        padding: '0.5rem',
                        fontSize: '14px',
                        backgroundColor: '#FCEFEF',
                        alignItems: 'center',
                        borderRadius: '0 4px 4px 0'
                      }}
                      gap={1}
                      xs={11.8}
                    >
                      <Grid item sx={{}}>
                        <img src={alert} alt=""></img>
                      </Grid>
                      <Grid item sx={{}}>
                        Mohon segera perbaharui dan upload dokumen yang sudah diperpanjang
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              ) : null}
            </Grid>
          </Grid>
          {/*  */}
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Grid item>
              <h2 style={{ padding: '2rem', fontSize: '16px', fontWeight: '700' }}>
                Dokumen Bank Data
              </h2>
            </Grid>
            <Grid item sx={{ padding: '0 2rem 2rem 2rem' }}>
              <Button
                // loading={loading}
                // disabled={disabled}
                type="submit"
                variant="contained"
                sx={{ boxShadow: '0' }}
              >
                Upload File Terbaru
              </Button>
            </Grid>
            {/* list */}
            {dataReport?.map((data) => (
              <ListEdit data={data} />
            ))}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default DetailBankData;
