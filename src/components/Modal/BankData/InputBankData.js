import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Button } from '@mui/material';
import CustomModal from 'components/Modal/CustomModal/CustomModal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const InputBankData = ({ isShowing, toggle, targetDate }) => {
  const [age, setAge] = useState('');

  const navigate = useNavigate();

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  return (
    <>
      <CustomModal isShowing={isShowing} toggle={toggle} width="408px">
        <Grid
          container
          sx={{
            height: '550px',
            backgroundColor: 'white',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            padding: 2
          }}
        >
          <Grid
            item
            sx={{ fontWeight: '700', fontSize: '24px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            Input Kegiatan Bank Data
          </Grid>
          <Grid item sx={{ fontSize: '14px', margin: '24px' }}>
            Jenis Laporan
          </Grid>
          <Grid item sx={{ margin: '0 24px 24px 24px' }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-autowidth-label">Pilih Jenis Dokumen</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={age}
                onChange={handleChange}
                fullWidth
                label="Pilih Jenis Dokumen"
              >
                <MenuItem value={10}>Legal</MenuItem>
                <MenuItem value={21}>Kontrak</MenuItem>
                <MenuItem value={22}>Surat Menyurat</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sx={{ fontSize: '14px', margin: '0 24px 24px 24px' }}>
            Keterangan
          </Grid>
          <Grid item sx={{ margin: '0 24px 24px 24px' }}>
            <TextField
              id="outlined-multiline-static"
              // label="Keterangan"
              multiline
              fullWidth
              rows={7}
              placeholder="Tuliskan Keterangan Tambahan"
            />
          </Grid>
          <Grid item sx={{ margin: '0 24px 24px 24px' }}>
            <Grid item container spacing={2} sx={{ flexDirection: 'row-reverse' }}>
              <Grid item>
                <Button variant="outlined" onClick={toggle}>
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  sx={{ boxShadow: 0 }}
                  onClick={() => navigate(`/bank-data/input`)}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CustomModal>
    </>
  );
};

export default InputBankData;
