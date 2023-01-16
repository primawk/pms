import React, { useState, useEffect, useCallback } from 'react';
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
import { LoadingModal } from 'components/Modal';
import { useQuery } from 'react-query';

// service
import BankDataService from '../../services/BankDataServices';

const BankDataReport = ({
  // i need to put {} when pass function as a prop to child component
  index,
  disabled,
  id,
  dateEdit,
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
  // isLoading,
  // isFetching
}) => {
  const { data, isLoading, isFetching } = useQuery(
    ['data', id],
    async () =>
      await BankDataService.getBankData({
        page: 1,
        id: `${id}`
      })
  );

  const [selectedImages, setSelectedImages] = useState(data?.data?.data[0].attachment);
  const [file, setFile] = useState([]);
  const [tempFile, setTempFile] = useState([]);

  const [value, setValue] = useState(
    data?.data?.data[0] ? new Date(data?.data?.data[0].date) : new Date()
  );

  const handleChange = (newValue) => {
    setValue(dayjs(newValue).format('YYYY-MM-DD'));
  };
  // const handleChangeEdit = (newValue) => {
  //   setValueEdit(dayjs(newValue).format('YYYY-MM-DD'));
  // };

  // const [addFormData, setAddFormData] = useState({
  //   report_type: jenisLaporan
  //     ? jenisLaporan
  //     : data?.data?.data[0].report_type
  //     ? data?.data?.data[0].report_type
  //     : '',
  //   description: keteranganLaporan
  //     ? keteranganLaporan
  //     : data?.data?.data[0].description
  //     ? data?.data?.data[0].description
  //     : '',
  //   date: dateEdit ? dateEdit : ''
  // });

  const handleAddFormChange = (event, value) => {
    event.preventDefault();

    let fieldName = event.target.name;
    let fieldValue = event.target.value;

    // 1. Make a shallow copy of the array
    let newFormData = [...allEvent];

    // 2. Make a shallow copy of the element you want to mutate
    let tempReport = { ...newFormData[index] };

    // 3. Update the property you're interested in
    tempReport[fieldName] = fieldValue;

    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    newFormData[index] = tempReport;

    // 5. Set the state to our new copy
    setAllEvent(newFormData);
  };

  // const handleDelete = (index) => {
  //   const value = Object.values(file[file.length - 1]);
  //   value.splice(index, 1);
  //   setFile([...attachment, [...value]]); // to update the file array
  // };
  // useEffect(() => {
  //   setFile([...attachment, e.target.files]);
  //   setFileName([...fileName, e.target.files[0].name]);
  // }, []);

  useEffect(() => {
    let newFormData = [...allEvent];
    let tempReport = { ...newFormData[index] };
    tempReport.date = dayjs(value).format('YYYY-MM-DD');

    newFormData[index] = tempReport;

    setAllEvent(newFormData);
  }, [value]);

  const handleAttachment = useCallback(
    (e) => {
      e.preventDefault();
      // let newFormData = [...attachment];

      // let tempAttachment = { ...newFormData[index] };

      // tempAttachment = e.target.files;

      // newFormData[index] = tempAttachment;

      // setAttachment(newFormData);

      // setAttachment([...newFormData, e.target.files]);

      // // fe
      const selectedFiles = e.target.files;
      const selectedFilesArray = Array.from(selectedFiles);

      const imagesArray = selectedFilesArray.map((file) => {
        return file.name;
      });
      const attachmentArray = selectedFilesArray.map((file) => {
        return file;
      });

      setFile((previousImages) => previousImages.concat(imagesArray));
      setTempFile((item) => item.concat(attachmentArray));

      // FOR BUG IN CHROME
      e.target.value = '';
    },
    [attachment, index, setAttachment, file, selectedImages, tempFile]
  );

  useEffect(() => {
    let newFormData = [...attachment]; // copy attachment the designated state

    let tempAttachment = { ...newFormData[index] }; // pick a specific report to edit

    tempAttachment = tempFile; // copy paste

    newFormData[index] = tempAttachment; // put the file into copied state

    setAttachment(newFormData); // finalized the file
  }, [tempFile]);

  const handleEditAttachment = useCallback(
    (e) => {
      e.preventDefault();
      let newFormData = [...attachment];
      let tempAttachment = { ...newFormData };

      tempAttachment = e.target.files;
      newFormData[index] = tempAttachment;

      setAttachment((previousImages) => previousImages.concat(tempAttachment));

      // fe
      const selectedFiles = e.target.files;
      const selectedFilesArray = Array.from(selectedFiles);

      const imagesArray = selectedFilesArray.map((file) => {
        return file.name;
      });

      setSelectedImages((previousImages) => previousImages.concat(imagesArray));

      // FOR BUG IN CHROME
      e.target.value = '';
    },
    [attachment, index, setAttachment, file, selectedImages]
  );

  const deleteHandler = (image) => {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
    setAttachment(selectedImages.filter((e) => e !== image));
  };

  const deleteAttachmentHandler = (image, i) => {
    let newFormData = [...attachment];

    let tempAttachment = newFormData[index]; // no object

    delete tempAttachment[i]; // delete inside an object ?

    newFormData[index] = tempAttachment;

    setAttachment(newFormData);

    // be
    setFile(file.filter((e) => e !== image));
  };

  // const filev2 =
  //   file.length > 0 ? Object.values(file[file.length - 1]).map((item, i) => item.name) : null;

  const handlePdf = async (item) => {
    try {
      const response = await BankDataService.getPdf(item);
      const file = new Blob([response.data], { type: response?.data.type });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isLoading && isFetching && <LoadingModal />}
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
                  key={data} // key to solve the real time update on defaultValue
                  defaultValue={
                    jenisLaporan && index === 0
                      ? jenisLaporan
                      : data?.data?.data[0].report_type
                      ? data?.data?.data[0].report_type
                      : ''
                  }
                  name="report_type"
                  onChange={handleAddFormChange}
                  fullWidth
                  label="Pilih Jenis Laporan"
                >
                  <MenuItem value={'Legal'}>Legal</MenuItem>
                  <MenuItem value={'Kontrak'}>Kontrak</MenuItem>
                  <MenuItem value={'Surat Menyurat'}>Surat Menyurat</MenuItem>
                  <MenuItem value={'Inventaris Aset'}>Inventaris Aset</MenuItem>
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
                key={data}
                name="description"
                defaultValue={
                  keteranganLaporan && index === 0
                    ? keteranganLaporan
                    : data?.data?.data[0].description
                    ? data?.data?.data[0].description
                    : ''
                }
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
            <LocalizationProvider key={data} dateAdapter={AdapterDateFns} fullWidth>
              <DesktopDatePicker
                required
                inputFormat="dd/MM/yyyy"
                key={data?.data?.data[0].date}
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
                      onChange={id ? handleEditAttachment : handleAttachment}
                      sx={{
                        boxShadow: 'none',
                        backgroundColor: 'rgba(63, 72, 192, 0.1)',
                        color: '#3F48C0'
                      }}
                    >
                      {id ? (
                        <input
                          multiple
                          type="file"
                          hidden
                          style={{ marginLeft: '4rem', cursor: 'pointer' }}
                        />
                      ) : (
                        <input
                          // required
                          multiple
                          type="file"
                          hidden
                          style={{ marginLeft: '4rem', cursor: 'pointer' }}
                        />
                      )}
                      Upload File
                    </Button>
                  </Grid>
                </Grid>
                <Box sx={{ fontSize: '14px' }}>*Format file: .pdf , .png | Ukuran file max 5Mb</Box>
              </Grid>

              {/* attachment */}
              {/* map uses return to iterate */}
              {file.length > 0
                ? file.map((item, i) => {
                    return (
                      <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Grid
                          sx={{
                            backgroundColor: 'white',
                            width: '7.438rem',
                            height: '9.063rem',
                            border: '1px solid #3F48C0',
                            borderRadius: '4px'
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
                            <Grid item sx={{ marginLeft: '5rem', cursor: 'pointer' }}>
                              <Icon
                                icon="ion:close-circle-sharp"
                                color="black"
                                fontSize={24}
                                onClick={() => deleteAttachmentHandler(item, i)}
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
                : data?.data?.data[0].attachment
                ? selectedImages?.map((item, i) => {
                    return (
                      <Grid item sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Grid
                          sx={{
                            backgroundColor: 'white',
                            width: '7.438rem',
                            height: '9.063rem',
                            border: '1px solid #3F48C0',
                            borderRadius: '4px',
                            cursor: 'pointer'
                          }}
                          onClick={() => handlePdf(item)}
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
                            <Grid item sx={{ marginLeft: '5rem', cursor: 'pointer' }}>
                              <Icon
                                icon="ion:close-circle-sharp"
                                color="black"
                                fontSize={24}
                                onClick={() => deleteHandler(item)}
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
