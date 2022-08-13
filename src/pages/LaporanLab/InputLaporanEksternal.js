import React, { useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Navbar from '../../components/Navbar';
import { dateToStringPPOBFormatterv2 } from '../../utils/helper';
import LoadingButton from '@mui/lab/LoadingButton';
import { toast } from 'react-toastify';
import EditedModal from '../../components/Modal/EditedModal/EditedModal';

// custom hooks
import useModal from '../../hooks/useModal';

// services
import LabService from 'services/LabService';

const InputLaporanEksternal = () => {
  const [loading, setLoading] = useState(false);
  const [attachment, setAttachment] = useState(null);
  const [fileName, setFileName] = useState('');
  const [filePreview, setFilePreview] = useState(null);
  const [addFormData, setAddFormData] = useState({
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
    setLoading(true);
    event.preventDefault();
    const number = '0';
    const dataContact = number.concat(addFormData.submitter_contact);
    const data = {
      date: dateToStringPPOBFormatterv2(value),
      company_name: addFormData.company_name,
      sample_submitter: addFormData.sample_submitter,
      preparation: addFormData.preparation,
      submitter_contact: dataContact,
      report_type: 'external',
      analysis: addFormData.analysis
    };
    // formData.append('image', images);

    try {
      await LabService.inputReportExternal(data, attachment);
      setLoading(false);
      toggle();
    } catch (error) {
      toast.error(error.response.data.detail_message);
      setLoading(false);
    }
  };

  const onBtnAddFile = (e) => {
    setAttachment(e.target.files[0]);
    setFileName(e.target.files[0].name);
    setFilePreview(URL.createObjectURL(e.target.files[0]));
  };

  const onButtonPreview = () => {
    window.open(filePreview, '_blank');
  };

  const [value, setValue] = useState(new Date());

  const navigate = useNavigate();

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const { isShowing, toggle } = useModal();

  // console.log(fileInput.current.files[0].name);

  return (
    <>
      <EditedModal isShowing={isShowing} toggle={toggle} width={'29.563'} />
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
        <form onSubmit={handleAddFormSubmit}>
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
            <Grid item sx={{ height: '6%', borderBottom: 1, borderBottomColor: '#E0E0E0' }}>
              <Grid container>
                <Box>
                  <h2 style={{ margin: '1rem 0.5rem 0.3rem 2rem' }}>Input Laporan Eksternal Lab</h2>
                </Box>
              </Grid>
            </Grid>
            <Grid item sx={{ height: '27%', borderBottom: 1, borderBottomColor: '#E0E0E0' }}>
              <h4 style={{ margin: '1.5rem 0.5rem 0 2rem' }}>Informasi Sample</h4>
              <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0.5rem 2rem',
                    width: '22.5rem'
                  }}
                >
                  <Box sx={{ marginBottom: '1rem' }}>Tanggal</Box>
                  <Grid item sx={{ width: '22.5rem' }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns} fullWidth>
                      <DesktopDatePicker
                        required
                        inputFormat="dd/MM/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} size="small" />}
                      />
                    </LocalizationProvider>
                  </Grid>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0.5rem 2rem',
                    width: '22.5rem'
                  }}
                >
                  <Box sx={{ marginBottom: '1rem' }}>Nama Pengaju Sample</Box>
                  {/* <Grid item sx={{ width: '22.5rem' }}> */}
                  <TextField
                    required
                    id="outlined-basic"
                    label="Nama Pengaju Sample"
                    variant="outlined"
                    name="sample_submitter"
                    onChange={handleAddFormChange}
                    size="small"
                  />
                  {/* </Grid> */}
                </Grid>
              </Grid>
              <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0.5rem 2rem',
                    width: '22.5rem'
                  }}
                >
                  <Box sx={{ marginBottom: '1rem' }}>Nama Perusahaan</Box>
                  <TextField
                    required
                    id="outlined-basic"
                    label="Nama Perusahaan"
                    variant="outlined"
                    name="company_name"
                    onChange={handleAddFormChange}
                    size="small"
                  />
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0.5rem 2rem'
                  }}
                >
                  <Box sx={{ marginBottom: '1rem' }}>Nomor Kontak Pengaju Sample</Box>
                  <Grid item sx={{ width: '22.5rem' }}>
                    <FormControl size="small" variant="outlined" fullWidth>
                      <OutlinedInput
                        number
                        required
                        id="outlined-adornment-password"
                        name="submitter_contact"
                        onChange={handleAddFormChange}
                        startAdornment={
                          <InputAdornment position="start" backgroundColor="gray">
                            +62
                          </InputAdornment>
                        }
                        placeholder="Nomor Kontak Pengaju Sample"
                        fullWidth
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ height: '55%', borderBottom: 1, borderBottomColor: '#E0E0E0' }}>
              <h2 style={{ margin: '1.5rem 0.5rem 0 2rem' }}>Preparasi dan Analisa </h2>
              <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0.5rem 2rem'
                  }}
                >
                  <Box sx={{ marginBottom: '1rem' }}>Preparasi</Box>
                  <TextField
                    required
                    id="outlined-basic"
                    label="Preparasi"
                    name="preparation"
                    onChange={handleAddFormChange}
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0.5rem 2rem'
                  }}
                >
                  <Box sx={{ marginBottom: '1rem' }}>Analisa</Box>
                  <TextField
                    required
                    id="outlined-basic"
                    label="Analisa"
                    name="analysis"
                    onChange={handleAddFormChange}
                    variant="outlined"
                    size="small"
                  />
                </Grid>
              </Grid>
              <Grid item sx={{ margin: '1.5rem 0.5rem 0 2rem' }}>
                <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Grid sx={{ display: 'flex', flexDirection: 'column', marginRight: '2rem' }}>
                    <Box sx={{ marginBottom: '1rem' }}>
                      <h3>Upload Laporan</h3>
                    </Box>
                    <Grid
                      item
                      sx={{
                        backgroundColor: '#E5E5FE',
                        width: '27.25rem',
                        height: '14.563rem',
                        border: '1px dashed #3F48C0',
                        borderRadius: '8px'
                      }}
                    >
                      <Grid
                        container // container to make the justify content works
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignContent: 'center',
                          marginTop: '1.5rem'
                        }}
                      >
                        <Grid item sx={{ margin: 'auto' }}>
                          <Icon icon="bi:cloud-upload" color="#3f48c0" fontSize={70} />
                        </Grid>
                        <Grid item sx={{ margin: 'auto' }} fontSize={'0.875rem'}>
                          Upload file .pdf untuk laporan
                        </Grid>
                        <Grid item sx={{ margin: 'auto' }} fontSize={'0.875rem'}>
                          eksternal disini. Ukuran max
                        </Grid>
                        <Grid
                          item
                          sx={{ margin: 'auto', marginBottom: '1rem' }}
                          fontSize={'0.875rem'}
                        >
                          laporan 1mb.
                        </Grid>
                        <Grid item sx={{ margin: 'auto' }} fontSize={'0.875rem'}>
                          <Button
                            variant="contained"
                            component="label"
                            onChange={onBtnAddFile}
                            sx={{ boxShadow: 'none' }}
                          >
                            <input
                              required
                              type="file"
                              style={{ marginLeft: '4rem', cursor: 'pointer' }}
                            />
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  {/* PDF */}
                  {attachment ? (
                    <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ marginBottom: '1rem' }}>
                        <h3>File Laporan</h3>
                      </Box>
                      <Grid
                        item
                        sx={{
                          backgroundColor: 'white',
                          width: '7.438rem',
                          height: '9.063rem',
                          border: '1px solid #3F48C0',
                          borderRadius: '4px',
                          cursor: 'pointer'
                        }}
                        onClick={onButtonPreview}
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
                          {/* <Grid item sx={{ marginLeft: '5rem' }}>
                        <Icon icon="ion:close-circle-sharp" color="#e0e0e0" fontSize={24} />
                      </Grid> */}

                          <Grid item sx={{ margin: '1rem auto 0 auto' }} fontSize={80}>
                            <Icon icon="ph:file-pdf-duotone" color="#3f48c0" />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Box fontSize={'0.875rem'}>{fileName}</Box>
                    </Grid>
                  ) : null}
                </Grid>
              </Grid>
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
