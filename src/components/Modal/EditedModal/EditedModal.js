import React from 'react';
import { Box } from '@mui/material';
import checkedLogo from 'assets/Images/checked.png';

// components
import CustomModal from '../CustomModal/CustomModal';

const EditedModal = ({ isShowing, toggle }) => {
  return (
    <>
      <CustomModal isShowing={isShowing} toggle={toggle} width="30%">
        <center>
          <Box sx={{ width: '9.5rem', margin: '0 0.5rem 0 0' }}>
            <img src={checkedLogo} alt=""></img>
          </Box>
          <Box sx={{ margin: '0 0.5rem 1rem 0' }}>
            <h3>Laporan Berhasil di Simpan!</h3>
          </Box>
        </center>
      </CustomModal>
    </>
  );
};

export default EditedModal;
