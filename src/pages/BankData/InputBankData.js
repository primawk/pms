import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { Grid, Box, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import add from 'assets/Images/ant-design_plus-circle-outlined.png';
import LoadingButton from '@mui/lab/LoadingButton';
import BankDataReport from '../../components/BankData/BankDataReport';
import alert from '../../assets/Images/clock-history.png';
import { toast } from 'react-toastify';
import Lists from '../../components/BankData/Lists';
// import dayjs from 'dayjs';

// import { LoadingModal } from 'components/Modal';

const InputBankData = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [attachment, setAttachment] = useState([]);
  const [date, setDate] = useState([]);
  const [allEvent, setAllEvent] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [protection, setProtection] = useState(true);

  const [inputList, setInputList] = useState([
    <BankDataReport
      date={date}
      setDate={setDate}
      jenisLaporan={location.state.jenisLaporan}
      keteranganLaporan={location.state.keteranganLaporan}
      attachment={attachment}
      allEvent={allEvent}
      setAllEvent={setAllEvent}
      setAttachment={setAttachment}
      setDisabled={setDisabled}
      // protection={protection}
    />
  ]);

  const onAddBtnClick = () => {
    setInputList(
      inputList.concat(
        <BankDataReport
          key={inputList.length}
          date={date}
          setDate={setDate}
          // onBtnAddFile={onBtnAddFile}
          // onButtonPreview={onButtonPreview}
          // fileName={fileName}
          attachment={attachment}
          allEvent={allEvent}
          setAllEvent={setAllEvent}
          setAttachment={setAttachment}
          setDisabled={setDisabled}
          // inputLength={inputList.length}
          inputKeys={Object.keys(inputList)}
          protection={protection}
          setProtection={setProtection}
        />
      )
    );
  };

  const handleAddFormSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();

    // TRANFORM ARRAY OF DATES INTO OBJECT
    const data = date.map((item, i) => Object.assign({}, { date: date[i] }));

    // MERGE BETWEEN TWO OBJECTS
    const merged = allEvent.map((item, i) => Object.assign({}, item, data[i]));

    try {
      // await LabService.inputReportExternalMany(allEvent, attachment, date);
      // setLoading(false);
      // navigate(-1);
      // toggle();
      console.log(merged);
      console.log(attachment);
    } catch (error) {
      toast.error(error.response.data.detail_message);
      setLoading(false);
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: '#F5F5F5',
          overflow: 'auto', // it makes this container follow the height of its content
          position: 'relative'
        }}
      >
        <Navbar />
        <form onSubmit={handleAddFormSubmit}>
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
            {/* <Lists searchResults={location.state} /> */}
            {inputList}

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
                  disabled={disabled}
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
                  // loading={loading}
                  disabled={disabled}
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
