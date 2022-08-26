import React from 'react';
import { Grid, Box, Button } from '@mui/material';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Icon } from '@iconify/react';

const InputEksternal = ({
  // i need to pu {} when pass function as a prop to child component
  // value,
  onBtnAddFile,
  attachment,
  onButtonPreview,
  fileName,
  handleAddFormChange
}) => {
  return (
    <>
      <Grid item sx={{ borderBottom: 1, borderBottomColor: '#E0E0E0' }}>
        <h4 style={{ padding: '1.5rem 0.5rem 0 2rem' }}>Informasi Sample</h4>
        <Grid container>
          <Grid
            item
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: '1.5rem 1.5rem 0.5rem 2rem'
            }}
            xs={12}
            sm={6}
            md={4}
          >
            <Box sx={{ paddingBottom: '1rem' }}>Nama Perusahaan</Box>
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
            item
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: '1.5rem 1.5rem 0.5rem 2rem'
            }}
            xs={12}
            sm={6}
            md={4}
          >
            <Box sx={{ paddingBottom: '1rem' }}>Nama Pengaju Sample</Box>
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
          <Grid
            item
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: '1.5rem 1.5rem 1.5rem 2rem'
            }}
            xs={12}
            sm={6}
            md={4}
          >
            <Box sx={{ marginBottom: '1rem' }}>Nomor Kontak Pengaju Sample</Box>
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
      <Grid item sx={{ borderBottom: 1, borderBottomColor: '#3F48C0' }}>
        <h2 style={{ padding: '1.5rem 0.5rem 0 2rem' }}>Preparasi dan Analisa </h2>
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
        <Grid item sx={{ padding: '1.5rem 0.5rem 1rem 2rem' }}>
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
                  <Grid item sx={{ margin: 'auto', marginBottom: '1rem' }} fontSize={'0.875rem'}>
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
    </>
  );
};

export default InputEksternal;
