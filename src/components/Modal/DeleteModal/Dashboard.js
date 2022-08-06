import PropTypes from 'prop-types';
import { Button, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// components
import { CustomModal } from '..';

export default function DeleteModal({ isShowing, toggle, title, action, loading, id }) {
  return (
    <CustomModal isShowing={isShowing} toggle={toggle} width="30%">
      <center>
        <h3>{`Delete ${title}`}</h3>
        <p>Apakah anda yakin ingin menghapus data?</p>
        <Stack direction="row" justifyContent="space-around" sx={{ mt: 3, mb: 0 }} spacing={3}>
          <Button variant="outlined" fullWidth onClick={toggle}>
            Cancel
          </Button>
          <LoadingButton variant="contained" fullWidth onClick={() => action(id)} loading={loading}>
            Yes
          </LoadingButton>
        </Stack>
      </center>
    </CustomModal>
  );
}

DeleteModal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  title: PropTypes.string,
  action: PropTypes.func,
  loading: PropTypes.bool
};
