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
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import EditedModal from '../../components/Modal/EditedModal/EditedModal';
import { dateToStringPPOBFormatterv2 } from '../../utils/helper';
import LoadingButton from '@mui/lab/LoadingButton';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';

// custom hooks
import useModal from '../../hooks/useModal';

//  components
import Navbar from '../../components/Navbar';
import { LoadingModal } from 'components/Modal';
// import HasilAnalisa from './components/HasilAnalisa';

// services
import LabService from 'services/LabService';
import InventoryService from 'services/InventoryService';

const InputLaporanInternal = () => {
  const [sampleType, setSampleType] = useState(null);
  const {
    data: dataBukit,
    isLoading,
    isFetching
  } = useQuery(['bukitId', sampleType], () =>
    InventoryService.getHill({
      inventory_type: sampleType
    })
  );

  const {
    data: dataDome,
    isLoading: isLoadingDome,
    isFetching: isFetchingDome
  } = useQuery(['domeId'], () =>
    InventoryService.getDome({
      inventory_type: 'inventory-efo'
    })
  );

  const {
    data: dataDomeEto,
    isLoading: isLoadingEto,
    isFetching: isFetchingEto
  } = useQuery(['domeEto'], () =>
    InventoryService.getDome({
      inventory_type: 'inventory-eto'
    })
  );

  const dome = dataDome?.data?.data.map((item) => item.name);
  const domeEto = dataDomeEto?.data?.data.map((item) => item.dome_list);
  const bukitId = dataBukit?.data?.data.map((item) => item.name);
  const domeEtov2 = domeEto ? [].concat.apply([], domeEto) : null;
  const domeEtov3 = domeEtov2 ? Object.values(domeEtov2).map((item) => item.dome_name) : null;

  const [loading, setLoading] = useState(false);
  const [addFormData, setAddFormData] = useState({
    date: '',
    hill_id: '',
    sample_type: '',
    dome_id: '',
    sample_code: '',
    preparation: '',
    ni_level: '',
    mgo_level: '',
    simgo_level: '',
    fe_level: '',
    sio2_level: '',
    inc: '',
    co_level: '',
    cao_level: '',
    tonnage: '',
    report_type: 'internal'
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    if (newFormData.sample_type === 'Sample Selective Mining') {
      setSampleType('inventory-sm');
    }
    if (newFormData.sample_type === 'Sample ETO') {
      setSampleType('inventory-eto');
    }
    if (newFormData.sample_type === 'Sample EFO') {
      setSampleType('inventory-efo');
    }

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const data = {
      date: dateToStringPPOBFormatterv2(value),
      hill_id: addFormData.hill_id,
      sample_type: addFormData.sample_type,
      dome_id: addFormData.dome_id,
      sample_code: addFormData.sample_code,
      preparation: addFormData.preparation,
      ni_level: addFormData.ni_level,
      mgo_level: addFormData.mgo_level,
      simgo_level: addFormData.simgo_level,
      fe_level: addFormData.fe_level,
      sio2_level: addFormData.sio2_level,
      inc: addFormData.inc,
      co_level: addFormData.co_level,
      cao_level: addFormData.cao_level,
      tonnage: addFormData.tonnage,
      report_type: 'internal',
      analysis: 1
    };
    // formData.append('image', images);

    try {
      await LabService.inputReport(data);
      setLoading(false);
      toggle();
    } catch (error) {
      toast.error(error.response.data.detail_message);
      setLoading(false);
    }
  };

  const [value, setValue] = React.useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const { isShowing, toggle } = useModal();

  const navigate = useNavigate();

  return (
    <>
      {isFetching &&
        isLoading &&
        isFetchingDome &&
        isLoadingDome &&
        isLoadingEto &&
        isFetchingEto && <LoadingModal />}
      <EditedModal isShowing={isShowing} toggle={toggle} width={'29.563'} />
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
        <form onSubmit={handleAddFormSubmit}>
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
                  <h2 style={{ margin: '1rem 0.5rem 0.3rem 2rem' }}>Input Laporan Internal Lab</h2>
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
                    margin: '1.5rem 0.5rem 0.5rem 2rem'
                  }}
                  xs={2}
                >
                  <Box sx={{ marginBottom: '1rem' }}>Tanggal</Box>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
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
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0.5rem 2rem'
                  }}
                  xs={2}
                >
                  <Box sx={{ marginBottom: '1rem' }}>Bukit</Box>
                  <FormControl fullWidth>
                    <InputLabel id="Bukit" size="small">
                      Pilih Bukit
                    </InputLabel>
                    <Select
                      disabled={
                        !addFormData.sample_type ||
                        addFormData.sample_type === 'Sample test PIT' ||
                        addFormData.sample_type === 'Sample Spesial Check' ||
                        addFormData.sample_type === 'Sample Barging' ||
                        addFormData.sample_type === 'Sample Spesial Check' ||
                        addFormData.sample_type === 'Sample EFO'
                      }
                      required
                      name="hill_id"
                      label="Pilih Bukit"
                      onChange={handleAddFormChange}
                      size="small"
                    >
                      {bukitId?.map((value) => (
                        <MenuItem key={value} value={value}>
                          {value}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0.5rem 2rem'
                  }}
                  xs={2}
                >
                  <Box sx={{ marginBottom: '1rem' }}>Jenis Sample</Box>
                  <FormControl fullWidth>
                    <InputLabel id="Jenis Sample" size="small">
                      Pilih Jenis Sample
                    </InputLabel>
                    <Select
                      required
                      name="sample_type"
                      labelId="Jenis Sample"
                      id="Jenis Sample"
                      label="Pilih Jenis Sample"
                      onChange={handleAddFormChange}
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
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0.5rem 2rem'
                  }}
                  xs={2}
                >
                  <Box sx={{ marginBottom: '1rem' }}>Tumpukan/Dome</Box>
                  <FormControl fullWidth>
                    <InputLabel id="tumpukan" size="small">
                      Pilih Tumpukan/Dome
                    </InputLabel>
                    <Select
                      disabled={
                        !addFormData.sample_type ||
                        addFormData.sample_type === 'Sample test PIT' ||
                        addFormData.sample_type === 'Sample Spesial Check' ||
                        addFormData.sample_type === 'Sample Barging' ||
                        addFormData.sample_type === 'Sample Selective Mining'
                      }
                      required
                      name="dome_id"
                      labelId="tumpukan"
                      id="tumpukan"
                      label="Pilih Tumpukan/Dome"
                      onChange={handleAddFormChange}
                      size="small"
                    >
                      {addFormData.sample_type === 'Sample ETO'
                        ? domeEtov3?.map((value) => (
                            <MenuItem key={value} value={value}>
                              {value}
                            </MenuItem>
                          ))
                        : dome?.map((value) => (
                            <MenuItem key={value} value={value}>
                              {value}
                            </MenuItem>
                          ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sx={{
                height: '55%',
                borderBottom: 1,
                borderBottomColor: '#E0E0E0',
                paddingBottom: '1.5rem'
              }}
            >
              <h2 style={{ margin: '1.5rem 0.5rem 0 2rem' }}>Hasil Analisa </h2>
              <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0.5rem 2rem'
                  }}
                >
                  <Box sx={{ marginBottom: '1rem' }}>Kode Sample</Box>
                  <TextField
                    required
                    name="sample_code"
                    id="outlined-basic"
                    label="Kode Sample"
                    variant="outlined"
                    onChange={handleAddFormChange}
                  />
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0.5rem 2rem'
                  }}
                >
                  <Box sx={{ marginBottom: '1rem' }}>Inputan Preparasi</Box>
                  <TextField
                    required
                    name="preparation"
                    id="outlined-basic"
                    label="Inputan Preparasi"
                    variant="outlined"
                    size="small"
                    onChange={handleAddFormChange}
                  />
                </Grid>
              </Grid>
              <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0 2rem'
                  }}
                  xs={2}
                >
                  <Box sx={{ marginBottom: '1rem' }}>
                    <h4>Kadar Ni</h4>
                  </Box>
                  <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Nilai Kadar</Box>
                  <FormControl size="small" variant="outlined">
                    <InputLabel htmlFor="Kadar Ni">Nilai Kadar</InputLabel>
                    <OutlinedInput
                      required
                      name="ni_level"
                      id="Kadar Ni"
                      onChange={handleAddFormChange}
                      // error={touched.ni_level && Boolean(errors.ni_level)}
                      // helperText={touched.ni_level && errors.ni_level}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          %
                        </InputAdornment>
                      }
                      label="Nilai Kadar"
                    />
                  </FormControl>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0 2rem'
                  }}
                  xs={2}
                >
                  <Box sx={{ marginBottom: '1rem' }}>
                    <h4>Kadar MgO</h4>
                  </Box>
                  <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Nilai Kadar</Box>
                  <FormControl size="small" variant="outlined">
                    <InputLabel htmlFor="Kadar MgO">Nilai Kadar</InputLabel>
                    <OutlinedInput
                      required
                      // type="number"
                      name="mgo_level"
                      id="Kadar MgO"
                      onChange={handleAddFormChange}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          %
                        </InputAdornment>
                      }
                      label="Kadar MgO"
                    />
                  </FormControl>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0 2rem'
                  }}
                  xs={2}
                >
                  <Box sx={{ marginBottom: '1rem' }}>
                    <h4>Kadar SImgO</h4>
                  </Box>
                  <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Nilai Kadar</Box>
                  <FormControl size="small" variant="outlined">
                    <InputLabel htmlFor="Kadar SImgO">Nilai Kadar</InputLabel>
                    <OutlinedInput
                      required
                      // type="number"
                      name="simgo_level"
                      id="Kadar SImgO"
                      onChange={handleAddFormChange}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          %
                        </InputAdornment>
                      }
                      label="Kadar SImgO"
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0 2rem'
                  }}
                  xs={2}
                >
                  <Box sx={{ marginBottom: '1rem' }}>
                    <h4>Kadar Fe</h4>
                  </Box>
                  <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Nilai Kadar</Box>
                  <FormControl size="small" variant="outlined">
                    <InputLabel htmlFor="Kadar Fe">Nilai Kadar</InputLabel>
                    <OutlinedInput
                      required
                      // type="number"
                      name="fe_level"
                      id="Kadar Fe"
                      onChange={handleAddFormChange}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          %
                        </InputAdornment>
                      }
                      label="Kadar Fe"
                    />
                  </FormControl>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0 2rem'
                  }}
                  xs={2}
                >
                  <Box sx={{ marginBottom: '1rem' }}>
                    <h4>Kadar SIO2</h4>
                  </Box>
                  <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Nilai Kadar</Box>
                  <FormControl size="small" variant="outlined">
                    <InputLabel htmlFor="Kadar SIO2">Nilai Kadar</InputLabel>
                    <OutlinedInput
                      required
                      // type="number"
                      name="sio2_level"
                      id="Kadar SIO2"
                      onChange={handleAddFormChange}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          %
                        </InputAdornment>
                      }
                      label="Kadar SIO2"
                    />
                  </FormControl>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0.5rem 2rem'
                  }}
                  xs={2}
                >
                  <Box sx={{ marginBottom: '1rem' }}>
                    <h4>Inc</h4>
                  </Box>
                  <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Inc</Box>
                  <FormControl size="small" variant="outlined">
                    <InputLabel htmlFor="Inc">Nilai Inc</InputLabel>
                    <OutlinedInput
                      required
                      // type="number"
                      name="inc"
                      id="Inc"
                      onChange={handleAddFormChange}
                      label="Nilai Inc"
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0 2rem'
                  }}
                  xs={2}
                >
                  <Box sx={{ marginBottom: '1rem' }}>
                    <h4>Kadar CO</h4>
                  </Box>
                  <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Nilai Kadar</Box>
                  <FormControl size="small" variant="outlined">
                    <InputLabel htmlFor="Kadar CO">Nilai Kadar</InputLabel>
                    <OutlinedInput
                      // type="number"
                      required
                      name="co_level"
                      id="Kadar CO"
                      onChange={handleAddFormChange}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          %
                        </InputAdornment>
                      }
                      label="Kadar CO"
                    />
                  </FormControl>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0 2rem'
                  }}
                  xs={2}
                >
                  <Box sx={{ marginBottom: '1rem' }}>
                    <h4>Kadar CaO</h4>
                  </Box>
                  <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Nilai Kadar</Box>
                  <FormControl size="small" variant="outlined">
                    <InputLabel htmlFor="Kadar CaO">Nilai Kadar</InputLabel>
                    <OutlinedInput
                      required
                      // type="number"
                      name="cao_level"
                      id="Kadar CaO"
                      onChange={handleAddFormChange}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          %
                        </InputAdornment>
                      }
                      label="Kadar CaO"
                    />
                  </FormControl>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1.5rem 0.5rem 0 2rem'
                  }}
                  xs={2}
                >
                  <Box sx={{ marginBottom: '1rem' }}>
                    <h4>Tonase</h4>
                  </Box>
                  <Box sx={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Tonase</Box>
                  <FormControl size="small" variant="outlined">
                    <InputLabel htmlFor="Tonase">Tonase</InputLabel>
                    <OutlinedInput
                      required
                      // type="number"
                      name="tonnage"
                      id="Tonase"
                      onChange={handleAddFormChange}
                      endAdornment={
                        <InputAdornment position="end" backgroundColor="gray">
                          Ton
                        </InputAdornment>
                      }
                      label="Tonase"
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
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
              marginRight: '5rem',
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
                  type="submit"
                  variant="contained"
                  // onClick={console.log(formik.date)}
                  // loading={loading}
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

export default InputLaporanInternal;
