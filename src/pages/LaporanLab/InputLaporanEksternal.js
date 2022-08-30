import React, { useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Navbar from '../../components/Navbar';
import LoadingButton from '@mui/lab/LoadingButton';
import { toast } from 'react-toastify';
import EditedModal from '../../components/Modal/EditedModal/EditedModal';
import add from 'assets/Images/ant-design_plus-circle-outlined.png';
import InputEksternal from './components/inputEksternal';

// custom hooks
import useModal from '../../hooks/useModal';

// services
import LabService from 'services/LabService';

const InputLaporanEksternal = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [attachment, setAttachment] = useState([]);
  const [fileName, setFileName] = useState('');
  const [filePreview, setFilePreview] = useState(null);

  const [addFormData, setAddFormData] = useState([
    {
      date: '',
      analysis: '',
      preparation: '',
      company_name: '',
      sample_submitter: '',
      submitter_contact: '',
      report_type: 'external'
    }
  ]);

  const [allEvents, setAllEvents] = useState(addFormData);
  const [newEvent, setNewEvent] = useState({
    date: '',
    analysis: '',
    preparation: '',
    company_name: '',
    sample_submitter: '',
    submitter_contact: '',
    report_type: 'external'
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = async (event) => {
    // setLoading(true);
    event.preventDefault();
    const number = '0';
    const dataContact = number.concat(addFormData.submitter_contact);
    const data = [
      {
        date: '2022-08-25',
        company_name: 'test',
        sample_submitter: 'test',
        preparation: '11',
        submitter_contact: '11',
        report_type: 'external',
        analysis: '11',
        attachment: attachment[0]
      },
      {
        date: '2022-08-25',
        company_name: 'test2',
        sample_submitter: 'test2',
        preparation: '12',
        submitter_contact: '12',
        report_type: 'external',
        analysis: '12',
        attachment: attachment[1]
      }
    ];
    // formData.append('image', images);

    try {
      await LabService.inputReportExternalMany(data);
    
      // setLoading(false);
      // navigate(-1);
      // toggle();
    } catch (error) {
      toast.error(error.response.data.detail_message);
      setLoading(false);
    }
  };

  const onBtnAddFile = (e) => {
    setAttachment([...attachment, e.target.files[0]]);
    setFileName(e.target.files[0].name);
    setFilePreview(URL.createObjectURL(e.target.files[0]));
  };

  const onButtonPreview = () => {
    window.open(filePreview, '_blank');
  };

  // const [value, setValue] = useState(new Date());

  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };

  const { isShowing, toggle } = useModal();

  const [inputList, setInputList] = useState([
    <InputEksternal
      handleAddFormChange={handleAddFormChange}
      onBtnAddFile={onBtnAddFile}
      attachment={attachment}
      onButtonPreview={onButtonPreview}
      fileName={fileName}
      // setAddFormData={setAddFormData}
      // addFormData={addFormData}
    />
  ]);

  const onAddBtnClick = (event) => {
    setInputList(
      inputList.concat(
        <InputEksternal
          key={inputList.length}
          handleAddFormChange={handleAddFormChange}
          onBtnAddFile={onBtnAddFile}
          onButtonPreview={onButtonPreview}
          fileName={fileName}
          attachment={attachment}
          // setAddFormData={setAddFormData}
          // addFormData={addFormData}
        />
      )
    );
    setAllEvents([...allEvents, newEvent]);
  };

  console.log(allEvents);

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
                      12/02/2021
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
