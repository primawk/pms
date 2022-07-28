import React, { useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';

// components
import Navbar from '../../components/Navbar';
import HasilAnalisa from './components/HasilAnalisa';
import { LoadingModal } from 'components/Modal';

// services
import LabService from 'services/LabService';

const EditLaporanInternal = () => {
  const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));
  const [loading, setLoading] = useState(false);
  //   const [analisaList, setAnalisaList] = useState([]);

  //   const AnalisaList = () => {
  //     return <HasilAnalisa />;
  //   };

  //   const onAddBtnClick = () => {
  //     if (analisaList.length < 5)
  //       setAnalisaList(analisaList.concat(<AnalisaList key={analisaList.length} />));
  //   };

  const { id } = useParams();

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

  const navigate = useNavigate();

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const editSchema = Yup.object().shape({
    date: Yup.string().required('Tanggal wajib di isi!'),
    hill_id: Yup.string().required('Bukit wajib di isi!'),
    sample_type: Yup.string().required('Jenis Sample wajib di isi!'),
    dome_id: Yup.string().required('Dome wajib di isi!'),
    sample_code: Yup.string().required('kode sample wajib di isi'),
    preparation: Yup.number().required('Inputan Preparasi wajib di isi!'),
    ni_level: Yup.string().required('Kadar Ni wajib di isi'),
    mgo_level: Yup.string().required('Kadar MgO wajib di isi'),
    simgo_level: Yup.string().required('Kadar SIMgO wajib di isi'),
    fe_level: Yup.string().required('Kadar Fe wajib di isi'),
    sio2_level: Yup.number().required('Kadar SIO2 wajib di isi'),
    inc: Yup.date().required('Nilai Inc wajib di isi'),
    co_level: Yup.string().required('Kadar CO wajib di isi'),
    cao_level: Yup.string().required('Kadar CaO wajib di isi'),
    tonnage: Yup.string().required('Nilai Tonase wajib di isi')
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      date: dataReport ? dataReport.id : '',
      hill_id: dataReport ? dataReport.hill_id : '',
      sample_type: dataReport ? dataReport.sample_type : '',
      dome_id: dataReport ? dataReport.dome_id : '',
      sample_code: dataReport ? dataReport.sample_code : '',
      preparation: dataReport ? dataReport.preparation : '',
      ni_level: dataReport ? dataReport.ni_level : '',
      mgo_level: dataReport ? dataReport.mgo_level : '',
      simgo_level: dataReport ? dataReport.simgo_level : '',
      fe_level: dataReport ? dataReport.fe_level : '',
      sio2_level: dataReport ? dataReport.sio2_level : '',
      inc: dataReport ? dataReport.inc : '',
      co_level: dataReport ? dataReport.co_level : '',
      cao_level: dataReport ? dataReport.cao_level : '',
      tonnage: dataReport ? dataReport.tonnage : ''
    },
    validationSchema: editSchema,
    onSubmit: async (values) => {
      setLoading(true);
      const data = {
        date: values.date,
        hill_id: values.hill_id,
        sample_type: values.sample_type,
        dome_id: values.dome_id,
        sample_code: values.sample_code,
        preparation: values.preparation,
        ni_level: values.ni_level,
        mgo_level: values.mgo_level,
        simgo_level: values.simgo_level,
        fe_level: values.fe_level,
        sio2_level: values.sio2_level,
        inc: values.inc,
        co_level: values.co_level,
        cao_level: values.cao_level,
        tonnage: values.tonnage
      };
      try {
        await LabService.editReport(data, id);
        navigate('/laporan-lab', { replace: true });
      } catch (error) {
        console.log(error);
      }
    }
  });

  return (
    <div
      style={{
        backgroundColor: '#F5F5F5',
        width: '100%',
        height: '100%',
        overflowY: 'auto', // it makes this container follow the height of its content
        position: 'relative'
      }}
    >
      <Navbar />

      {isFetchingActivity && <LoadingModal />}

      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          height: 'auto',
          width: '90%',
          marginTop: '6rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '6rem',
          borderRadius: '4px'
        }}
      >
        <Grid item sx={{ height: '6%', borderBottom: 1, borderBottomColor: '#E0E0E0' }}>
          <Grid container>
            <Box>
              <h2 style={{ margin: '1rem 0.5rem 0.3rem 2rem' }}>Edit Laporan Internal Lab</h2>
            </Box>
          </Grid>
        </Grid>
        <Grid item sx={{ height: '27%', borderBottom: 1, borderBottomColor: '#E0E0E0' }}>
          <h4 style={{ margin: '1.5rem 0.5rem 0 2rem' }}>Informasi Sample</h4>
          <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
              xs={2}
            >
              <Box sx={{ marginBottom: '1rem' }}>Tanggal</Box>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  inputFormat="dd/MM/yyyy"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} size="small" />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
              xs={2}
            >
              <Box sx={{ marginBottom: '1rem' }}>Bukit</Box>
              <FormControl fullWidth>
                <InputLabel id="Bukit" size="small">
                  Pilih Bukit
                </InputLabel>
                <Select
                  labelId="Bukit"
                  id="Bukit"
                  // value={age}
                  label="Pilih Bukit"
                  onChange={handleChange}
                  size="small"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
              xs={2}
            >
              <Box sx={{ marginBottom: '1rem' }}>Jenis Sample</Box>
              <FormControl fullWidth>
                <InputLabel id="Jenis Sample" size="small">
                  Pilih Jenis Sample
                </InputLabel>
                <Select
                  labelId="Jenis Sample"
                  id="Jenis Sample"
                  // value={age}
                  label="Pilih Jenis Sample"
                  onChange={handleChange}
                  size="small"
                >
                  <MenuItem value={'Sample test PIT'}>Sample test PIT</MenuItem>
                  <MenuItem value={'Sample Spesial Check'}>Sample Spesial Check</MenuItem>
                  <MenuItem value={'Sample Selective Mining'}>Sample Selective Mining</MenuItem>
                  <MenuItem value={'Sample ETO'}>Sample ETO</MenuItem>
                  <MenuItem value={'Sample EFO'}>Sample EFO</MenuItem>
                  <MenuItem value={'Sample Barging'}>Sample Barging</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', margin: '1.5rem 0.5rem 0.5rem 2rem' }}
              xs={2}
            >
              <Box sx={{ marginBottom: '1rem' }}>Tumpukan/Dome</Box>
              <FormControl fullWidth>
                <InputLabel id="tumpukan" size="small">
                  Pilih Tumpukan/Dome
                </InputLabel>
                <Select
                  labelId="tumpukan"
                  id="tumpukan"
                  // value={age}
                  label="Pilih Tumpukan/Dome"
                  onChange={handleChange}
                  size="small"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        {/* Hasil Analisa */}
        <Grid item>
          <HasilAnalisa data={dataReport} />
          {/* {analisaList} */}
        </Grid>

        {/* button add data */}
        {/* <Grid item >
          <Grid container sx={{ margin: '1.5rem', justifyContent: 'center' }}>
            <Button variant="contained" sx={{ boxShadow: '0' }} onClick={onAddBtnClick}>
              <Box sx={{ margin: '5px 12px 0 0 ' }}>
                <Icon icon="carbon:add-alt" color="white" fontSize={16} />
              </Box>
              Tambah Data
            </Button>
          </Grid>
        </Grid> */}
      </Grid>

      {/* submit */}
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
            <Button variant="contained" sx={{ width: '130%', boxShadow: '0' }}>
              Submit Laporan
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default EditLaporanInternal;
