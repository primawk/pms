import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Fade, Box, Backdrop } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '5px',
  p: 7
};

export default function CustomModal({ children, toggle, isShowing, handleClose }) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isShowing}
      onClose={handleClose || toggle}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={isShowing}>
        <Box sx={style}>{children}</Box>
      </Fade>
    </Modal>
  );
}

CustomModal.propTypes = {
  children: PropTypes.node.isRequired,
  toggle: PropTypes.func.isRequired,
  isShowing: PropTypes.bool.isRequired,
  handleClose: PropTypes.func
};
