import React, { useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Navbar from '../../components/Navbar';
import LoadingButton from '@mui/lab/LoadingButton';
import { toast } from 'react-toastify';
import EditedModal from '../../components/Modal/EditedModal/EditedModal';
import add from 'assets/Images/ant-design_plus-circle-outlined.png';
import InputEksternal from './components/inputEksternal';
import dayjs from 'dayjs';

// custom hooks
import useModal from '../../hooks/useModal';

// services
import LabService from 'services/LabService';

const InputLaporanEksternal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let date = dayjs(location.state).format('DD/MM/YYYY');
  const [loading, setLoading] = useState(false);
  const [attachment, setAttachment] = useState([]);

  const [allEvent, setAllEvent] = useState([]);

  const handleAddFormSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();

    // const data = {
    //   date: '',
    //   analysis: addFormData.analysis,
    //   preparation: addFormData.preparation,
    //   company_name: addFormData.company_name,
    //   sample_submitter: addFormData.sample_submitter,
    //   submitter_contact: addFormData.submitter_contact,
    //   report_type: 'external'
    // };

    // const datav2 = [
    //   {
    //     lastModified: 1655090498030,
    //     name: 'Sertifikat_Basket_Dzaki_Makkili_Kuntoro_v2.pdf',
    //     size: 1595079,
    //     type: 'application/pdf',
    //     webkitRelativePath: ''
    //   }
    // ];

    // const data = allEvent.map((obj, index) => Object.assign({}, obj, attachment[index]));

    // console.log(attachment);

    // console.log(attachment);
    // const data = allEvent.concat(attachment);
    // let merged = [{ ...allEvent, ...datav2 }];
    // console.log(data);

    try {
      await LabService.inputReportExternalMany(allEvent, attachment);
      setLoading(false);
      navigate(-1);
      toggle();
    } catch (error) {
      toast.error(error.response.data.detail_message);
      setLoading(false);
    }
  };

  const { isShowing, toggle } = useModal();

  const [inputList, setInputList] = useState([
    <InputEksternal
      date={date}
      // onBtnAddFile={onBtnAddFile}
      attachment={attachment}
      // onButtonPreview={onButtonPreview}
      // fileName={fileName}
      allEvent={allEvent}
      setAllEvent={setAllEvent}
      setAttachment={setAttachment}
      // setFileName={setFileName}
      // setFilePreview={setFilePreview}
    />
  ]);

  const onAddBtnClick = () => {
    setInputList(
      inputList.concat(
        <InputEksternal
          date={date}
          key={inputList.length}
          // onBtnAddFile={onBtnAddFile}
          // onButtonPreview={onButtonPreview}
          // fileName={fileName}
          attachment={attachment}
          allEvent={allEvent}
          setAllEvent={setAllEvent}
          setAttachment={setAttachment}
        />
      )
    );
  };

  return (
    <>
      <EditedModal isShowing={isShowing} toggle={toggle} width={'29.563'} />
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
            <Grid item sx={{ padding: '1rem', borderBottom: 1, borderBottomColor: '#E0E0E0' }}>
              <Grid
                container
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box>
                  <h2 style={{ paddingLeft: '1rem' }}>Input Laporan Eksternal Lab</h2>
                </Box>
                <Box>
                  <Grid
                    container
                    sx={{
                      gap: '1rem',
                      paddingRight: '57.5px',
                      cursor: 'pointer'
                    }}
                    onClick={() => navigate(-1)}
                  >
                    <Grid item>
                      <Icon icon="akar-icons:arrow-left" color="#3f48c0" />
                    </Grid>
                    <Grid item>
                      <h2
                        style={{
                          // margin: '1rem 0.5rem 0.3rem 0',
                          fontWeight: '500',
                          fontSize: '14px'
                        }}
                      >
                        Back
                      </h2>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
            <Grid item sx={{ padding: '1rem', borderBottom: 1, borderBottomColor: '#3F48C0' }}>
              <Grid
                container
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Grid item>
                  <Box>
                    <h2
                      style={{
                        paddingLeft: '1rem',
                        paddingBottom: '1.3rem',
                        fontWeight: '400',
                        fontSize: '0.875rem'
                      }}
                    >
                      Tanggal
                    </h2>
                  </Box>
                  <Box>
                    <h2 style={{ paddingLeft: '1rem', fontWeight: '400', fontSize: '0.875rem' }}>
                      {date}
                    </h2>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            {/* input laporan */}
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
                <Button variant="contained" sx={{ boxShadow: '0' }} onClick={onAddBtnClick}>
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
              <Grid item sx={{ marginRight: '4rem' }} onClick={() => navigate(-1)}>
                <Button>Back</Button>
              </Grid>
              <Grid item>
                <LoadingButton
                  loading={loading}
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

export default InputLaporanEksternal;
