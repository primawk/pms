import PropTypes from 'prop-types';
import { Button, Stack } from '@mui/material';

// components
import { CustomModal } from '..';

export default function DeleteModal({ isShowing, toggle, title, action }) {
  return (
    <CustomModal isShowing={isShowing} toggle={toggle} width="30%">
      <center>
        <h3>{`Delete ${title}`}</h3>
        <p>Apakah anda yakin ingin menghapus data?</p>
        <Stack direction="row" justifyContent="space-around" sx={{ mt: 3, mb: 0 }} spacing={3}>
          <Button variant="outlined" fullWidth onClick={toggle}>
            Cancel
          </Button>
          <Button variant="contained" fullWidth onClick={action}>
            Yes
          </Button>
        </Stack>
      </center>
    </CustomModal>
  );
}

DeleteModal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  title: PropTypes.string,
  action: PropTypes.func
};
