import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { Grid, Box, Button } from '@mui/material';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import add from 'assets/Images/ant-design_plus-circle-outlined.png';
import LoadingButton from '@mui/lab/LoadingButton';
import alert from '../../assets/Images/clock-history.png';
import { toast } from 'react-toastify';
import EditedModal from '../../components/Modal/EditedModal/EditedModal';
import Lists from '../../components/BankData/Lists';

import { LoadingModal } from 'components/Modal';

// custom hooks
import useModal from '../../hooks/useModal';

// services
import BankDataService from '../../services/BankDataServices';

const InputBankData = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [attachment, setAttachment] = useState([]);
  const [date, setDate] = useState([]);
  const [allEvent, setAllEvent] = useState([
    {
      report_type: location?.state?.jenisLaporan
        ? location?.state?.jenisLaporan
        : location?.state?.report_type
        ? location?.state?.report_type
        : '',
      description: location?.state?.keteranganLaporan
        ? location?.state?.keteranganLaporan
        : location?.state?.description
        ? location?.state?.description
        : '',
      date: ''
    }
  ]);

  const { isShowing, toggle } = useModal();
  const { id } = useParams();

  const handleAttachment = (newValue) => {
    setAttachment(newValue);
  };

  useEffect(() => {
    if (id) {
      setAttachment(location?.state?.attachment);
    } else {
      setAttachment([]);
    }
  }, []);

  const onAddBtnClick = () => {
    setAllEvent(
      allEvent.concat({
        report_type: '',
        description: '',
        date: ''
      })
    );
  };

  const handleAddFormSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();

    // // TRANFORM ARRAY OF DATES INTO OBJECT
    // const data = date.map((item, i) => Object.assign({}, { date: date[i] }));

    // // MERGE BETWEEN TWO OBJECTS
    // const merged = allEvent.map((item, i) => Object.assign({}, item, data[i]));

    try {
      await BankDataService.inputBankData(allEvent, attachment);
      setLoading(false);
      navigate(-1);
      toggle();
    } catch (error) {
      toast.error(error.response.data.detail_message);
      setLoading(false);
    }
  };

  const handleEditFormSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();

    // TRANFORM ARRAY OF DATES INTO OBJECT
    // const data = date.map((item, i) => Object.assign({}, { date: date[i] }));

    // MERGE BETWEEN TWO OBJECTS
    // const merged = allEvent.map((item, i) => Object.assign({}, item, data[i]));
    const existing = [];
    let finalAttachment = [];

    // filtering existing
    for (let i = 0; i < attachment?.length; i++) {
      if (typeof attachment[i] === 'string') {
        existing.push(attachment[i]);
      }
      finalAttachment = [];
    }

    // add new file(s)
    for (let i = 0; i < attachment?.length; i++) {
      if (typeof attachment[i] !== 'string') {
        finalAttachment.push(attachment[i]);
      }
    }

    try {
      await BankDataService.editBankData(allEvent, finalAttachment, existing, id);
      setLoading(false);
      navigate(-1);
      toggle();
    } catch (error) {
      toast.error(error.response.data.detail_message);
      setLoading(false);
    }
  };

  return (
    <>
      <EditedModal isShowing={isShowing} toggle={toggle} width={'29.563'} />
      {loading && <LoadingModal />}

      <div
        style={{
          backgroundColor: '#F5F5F5',
          overflow: 'auto', // it makes this container follow the height of its content
          position: 'relative'
        }}
      >
        <Navbar />
        <form onSubmit={id ? handleEditFormSubmit : handleAddFormSubmit}>
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
              </Grid>
            </Grid>

            {/* input laporan */}
            <Lists
              id={id}
              searchResults={allEvent}
              jenisLaporan={location?.state?.jenisLaporan}
              keteranganLaporan={location?.state?.keteranganLaporan}
              allEvent={allEvent}
              setAllEvent={setAllEvent}
              date={date}
              setDate={setDate}
              attachment={attachment}
              setAttachment={handleAttachment}
            />
            {/* {inputList} */}

            {id ? null : (
              <Grid
                item
                sx={{
                  padding: '1rem',
                  borderBottom: 1,
                  borderBottomColor: '#E0E0E0',
                  alignItems: 'center'
                }}
              >
                <Box container textAlign="center">
                  <Button
                    // disabled={disabled}
                    variant="contained"
                    sx={{ boxShadow: '0' }}
                    onClick={onAddBtnClick}
                  >
                    <Box sx={{ width: '1.5rem', margin: '0 0.5rem 0 0' }}>
                      <img src={add} alt=""></img>
                    </Box>
                    Tambah Data
                  </Button>
                </Box>
              </Grid>
            )}
          </Grid>
          <div
            style={{
              position: 'fixed',
              display: 'flex',
              bottom: '0px',
              backgroundColor: 'white',
              width: '100%',
              height: '4.875rem',
              boxShadow: '4px -10px 24px rgba(0, 0, 0, 0.04)',
              zIndex: '1'
            }}
          >
            <Grid
              container
              sx={{ justifyContent: 'flex-end', alignItems: 'center', marginRight: '5rem' }}
            >
              <Grid item sx={{ marginRight: '4rem' }}>
                <Button onClick={() => navigate(-1)}>Back</Button>
              </Grid>
              <Grid item>
                <LoadingButton
                  loading={loading}
                  disabled={attachment?.length === 0}
                  type="submit"
                  variant="contained"
                  sx={{ width: '130%', boxShadow: '0' }}
                >
                  Submit Laporan
                </LoadingButton>
              </Grid>
            </Grid>
          </div>
        </form>
      </div>
    </>
  );
};

export default InputBankData;
