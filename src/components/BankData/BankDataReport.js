import React, { useState, useEffect } from 'react';
import { Grid, Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Icon } from '@iconify/react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import pdf from '../../assets/Images/pdf.png';
import dayjs from 'dayjs';

const BankDataReport = ({
  // i need to put {} when pass function as a prop to child component
  data,
  keteranganLaporan,
  jenisLaporan,
  date,
  attachment,
  setDate,
  setAllEvent,
  allEvent,
  setAttachment,
  setDisabled,
  inputKeys
}) => {
  const [file, setFile] = useState([]);
  const [fileName, setFileName] = useState([]);
  const [filePreview, setFilePreview] = useState(null);
  const [value, setValue] = useState(new Date());

  const handleChange = (newValue) => {
    setValue(dayjs(newValue).format('YYYY-MM-DD'));
  };

  const [addFormData, setAddFormData] = useState({
    description: keteranganLaporan ? keteranganLaporan : '',
    report_type: jenisLaporan ? jenisLaporan : ''
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  // const handleDelete = (index) => {
  //   const value = Object.values(file[file.length - 1]);
  //   value.splice(index, 1);
  //   setFile([...attachment, [...value]]); // to update the file array
  // };

  const onBtnAddFile = (e) => {
    setFile([...attachment, e.target.files]);
    setFileName([...fileName, e.target.files[0].name]);
    setFilePreview(URL.createObjectURL(e.target.files[0]));
  };

  useEffect(() => {
    setAllEvent([...allEvent, addFormData]);
    setDate([...date, dayjs(value).format('YYYY-MM-DD')]);
    setAttachment(file);
    if (filev2?.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [
    inputKeys,
    addFormData,
    allEvent,
    setAllEvent,
    file,
    setAttachment,
    handleChange,
    value,
    setDate,
    onBtnAddFile
  ]);

  // const onButtonPreview = () => {
  //   window.open(filePreview, '_blank');
  // };

  // attachment preview
  // attachment array i have to map this !!!
  const filev2 =
    file.length > 0 ? Object.values(file[file.length - 1]).map((item, i) => item.name) : null;

  return (
    <>
      <Grid
        container
        sx={{
          borderBottom: 1,
          borderBottomColor: '#E0E0E0',
          display: 'flex',
          flexDirection: 'row',
          paddingBottom: '1rem'
        }}
      >
        {/* colomn 1 */}
        <Grid item sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '' }} xs={4}>
          <h4 style={{ padding: '1.5rem 0.5rem 0 2rem' }}>Informasi Umum Kegiatan</h4>
          <Grid
            item
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: '1.5rem 1.5rem 0.5rem 2rem'
            }}
          >
            <Box sx={{ paddingBottom: '1rem', fontWeight: 600 }}>Jenis Laporan</Box>
            <Box sx={{ paddingBottom: '1rem', fontWeight: 400 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-autowidth-label">Pilih Jenis Laporan</InputLabel>
                <Select
                  required
                  defaultValue={jenisLaporan}
                  name="report_type"
                  onChange={handleAddFormChange}
                  fullWidth
                  label="Pilih Jenis Laporan"
                >
                  <MenuItem value={'Legal'}>Legal</MenuItem>
                  <MenuItem value={'Kontrak'}>Kontrak</MenuItem>
                  <MenuItem value={'Surat Menyurat'}>Surat Menyurat</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: '1.5rem 0 0.5rem 2rem'
            }}
          >
            <Box sx={{ paddingBottom: '1rem', fontWeight: 600 }}>Keterangan</Box>
            <Box sx={{ paddingBottom: '1rem', fontWeight: 400 }}>
              <TextField
                // disabled={keteranganLaporan || protection}
                required
                name="description"
                defaultValue={keteranganLaporan}
                onChange={handleAddFormChange}
                fullWidth
                placeholder="Tuliskan Keterangan Tambahan"
              />
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: '1.5rem 1.5rem 0.5rem 2rem'
            }}
            xs={8}
          >
            <Box sx={{ paddingBottom: '1rem', fontWeight: 700 }}>Masa Berlaku Dokumen</Box>
            <Box sx={{ paddingBottom: '1rem', fontWeight: 400 }}>Tanggal</Box>
            <LocalizationProvider dateAdapter={AdapterDateFns} fullWidth>
              <DesktopDatePicker
                required
                inputFormat="dd/MM/yyyy"
                name="date"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>

        {/* column 2 */}
        <Grid item sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '' }} xs={8}>
          <h4 style={{ padding: '1.5rem 0.5rem 0 2rem' }}>Upload Dokumen</h4>
          <Grid
            item
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: '1.5rem 1.5rem 0.5rem 2rem'
            }}
          >
            <Box sx={{ fontWeight: 500 }}>Dokumen Bank Data</Box>
            <Grid item container sx={{ display: 'flex', flexDirection: 'row' }} gap={2}>
              <Grid item sx={{}}>
                <Grid
                  container // container to make the justify content works
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    backgroundColor: '#FAFAFA',
                    height: '14.563rem',
                    border: '1px dashed #C6C6C6 ',
                    borderRadius: '8px'
                  }}
                >
                  <Grid item sx={{ margin: '2rem auto auto auto' }}>
                    <Icon icon="bi:cloud-upload" color="#C6C6C6" fontSize={50} />
                  </Grid>
                  <Grid item sx={{ margin: 'auto' }} fontSize={'0.875rem'}>
                    Upload file
                  </Grid>
                  <Grid item sx={{ margin: 'auto' }} fontSize={'0.875rem'}>
                    disini. Ukuran max
                  </Grid>
                  <Grid item sx={{ margin: 'auto', marginBottom: '1rem' }} fontSize={'0.875rem'}>
                    file 5Mb.
                  </Grid>
                  <Grid item sx={{ margin: 'auto' }} fontSize={'0.875rem'}>
                    <Button
                      variant="contained"
                      component="label"
                      onChange={onBtnAddFile}
                      sx={{
                        boxShadow: 'none',
                        backgroundColor: 'rgba(63, 72, 192, 0.1)',
                        color: '#3F48C0'
                      }}
                    >
                      <input
                        required
                        multiple
                        type="file"
                        // hidden
                        style={{ marginLeft: '4rem', cursor: 'pointer' }}
                      />
                      {/* Upload File */}
                    </Button>
                  </Grid>
                </Grid>
                <Box sx={{ fontSize: '14px' }}>*Format file: .pdf, .jpg | Ukuran file max 5Mb</Box>
              </Grid>

              {/* attachment */}
              {/* map uses return to iterate */}
              {filev2?.length > 0
                ? filev2.map((item, i) => {
                    return (
                      <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Grid
                          sx={{
                            backgroundColor: 'white',
                            width: '7.438rem',
                            height: '9.063rem',
                            border: '1px solid #3F48C0',
                            borderRadius: '4px',
                            // cursor: 'pointer'
                          }}
                          // onClick={onButtonPreview}
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
                              <Icon
                                icon="ion:close-circle-sharp"
                                color="white"
                                fontSize={24}
                                // onClick={() => handleDelete(i)}
                              />
                            </Grid>
                            <Grid item sx={{ margin: '1rem auto 0 auto' }} fontSize={80}>
                              <img src={pdf} alt=""></img>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Box fontSize={'0.875rem'}>{item}</Box>
                      </Grid>
                    );
                  })
                : null}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default BankDataReport;
