import React, { useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useNavigate, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Navbar from '../../components/Navbar';
import EditedModal from '../../components/Modal/EditedModal/EditedModal';
import { dateToStringPPOBFormatterv2 } from '../../utils/helper';
import { toast } from 'react-toastify';

// custom hooks
import useModal from '../../hooks/useModal';

// services
import LabService from 'services/LabService';

const EditLaporanEksternal = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // const [filePreview, setFilePreview] = useState(null);
  const [fileName, setFileName] = useState('');
  const location = useLocation();

  const dataEdit = location.state;
  const dataEditContact = dataEdit ? dataEdit?.submitter_contact.substring(1) : null;
  const attachmentFile = dataEdit?.attachment;

  async function handlePdf() {
    try {
      const response = await LabService.getPdf(attachmentFile);
      const file = new Blob([response.data], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    } catch (error) {
      console.log(error);
    }
  }

  const [attachment, setAttachment] = useState(null);
  const [addFormData, setAddFormData] = useState({
    date: dataEdit?.date,
    analysis: dataEdit?.analysis,
    preparation: dataEdit?.preparation,
    company_name: dataEdit?.company_name,
    sample_submitter: dataEdit?.sample_submitter,
    submitter_contact: dataEditContact,
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

  const handleEditFormSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const number = '0';
    const dataContact = number.concat(addFormData.submitter_contact);
    var formData = new FormData();
    const data = {
      date: dateToStringPPOBFormatterv2(value),
      company_name: addFormData.company_name,
      sample_submitter: addFormData.sample_submitter,
      preparation: addFormData.preparation,
      submitter_contact: dataContact,
      report_type: 'external',
      analysis: addFormData.analysis
    };

    for (var key in data) {
      formData.append(key, data[key]);
    }

    if (attachment) {
      formData.append('attachment', attachment);
    }

    try {
      const id = dataEdit?.id;
      await LabService.editReportExternal(formData, id);
      setLoading(false);
      navigate(-2);
      toggle();
    } catch (error) {
      toast.error(error.response.data.detail_message);
      setLoading(false);
    }
  };

  const onBtnAddFile = (e) => {
    setAttachment(e.target.files[0]);
    setFileName(e.target.files[0].name);
    // setFilePreview(URL.createObjectURL(e.target.files[0]));
  };

  const [value, setValue] = useState(new Date(dataEdit?.date));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const { isShowing, toggle } = useModal();

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
        <form onSubmit={handleEditFormSubmit}>
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
                  <h2 style={{ margin: '1rem 0.5rem 0.3rem 2rem' }}>Edit Laporan Eksternal Lab</h2>
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
                    defaultValue={dataEdit.sample_submitter}
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
                    defaultValue={dataEdit.company_name}
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
                        required
                        id="outlined-adornment-password"
                        name="submitter_contact"
                        defaultValue={dataEditContact}
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
                    defaultValue={dataEdit.preparation}
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
                    defaultValue={dataEdit.analysis}
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
                      <h3>Upload Laporan Baru</h3>
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
                            <input type="file" style={{ marginLeft: '4rem', cursor: 'pointer' }} />
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  {/* PDF */}
                  {!attachment ? (
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
                        onClick={handlePdf}
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
                          <Grid item sx={{ margin: '1rem auto 0 auto' }} fontSize={80}>
                            <Icon icon="ph:file-pdf-duotone" color="#3f48c0" />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Box fontSize={'0.875rem'}>{dataEdit?.attachment}</Box>
                    </Grid>
                  ) : (
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
                  )}
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
                  Edit Laporan
                </LoadingButton>
              </Grid>
            </Grid>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditLaporanEksternal;
