import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Fade, Box, Backdrop } from '@mui/material';

export default function FilterDate({ children, toggle, isShowing, handleClose, width }) {
  const style = {
    position: 'absolute',
    maxHeight: '90vh',
    overflowY: 'auto',
    overflowX: 'auto',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '5px',
    // p: 7,
    // pt: 3,
    maxwidth: width
  };

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

FilterDate.propTypes = {
  children: PropTypes.node.isRequired,
  toggle: PropTypes.func.isRequired,
  isShowing: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
  width: PropTypes.string
};

FilterDate.defaultProps = {
  width: '60%'
};
