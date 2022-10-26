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
  const [jenisLaporan, setJenisLaporan] = useState('');
  const [keteranganLaporan, setKeteranganLaporan] = useState('');

  const navigate = useNavigate();

  const handleChange = (event) => {
    setJenisLaporan(event.target.value);
  };

  const handleKeterangan = (event) => {
    setKeteranganLaporan(event.target.value);
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
                value={jenisLaporan}
                onChange={handleChange}
                fullWidth
                label="Pilih Jenis Dokumen"
              >
                <MenuItem value={'Legal'}>Legal</MenuItem>
                <MenuItem value={'Kontrak'}>Kontrak</MenuItem>
                <MenuItem value={'Surat Menyurat'}>Surat Menyurat</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sx={{ fontSize: '14px', margin: '0 24px 24px 24px' }}>
            Keterangan
          </Grid>
          <Grid item sx={{ margin: '0 24px 24px 24px' }}>
            <TextField
              value={keteranganLaporan}
              onChange={handleKeterangan}
              multiline
              fullWidth
              rows={7}
              placeholder="Tuliskan Keterangan Tambahan"
            />
          </Grid>
          <Grid item sx={{ margin: '0 24px 24px 24px' }}>
            <Grid item container spacing={2} sx={{ flexDirection: 'row-reverse' }}>
              <Grid item>
                <Button
                  variant="contained"
                  sx={{ boxShadow: 0 }}
                  onClick={() =>
                    navigate(`/bank-data/input`, { state: { jenisLaporan, keteranganLaporan } })
                  }
                >
                  Submit
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" onClick={toggle}>
                  Cancel
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
