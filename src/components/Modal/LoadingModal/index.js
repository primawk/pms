import { Stack, CircularProgress } from '@mui/material';

// components
import { CustomModal } from '..';

export default function LoadingModal() {
  return (
    <CustomModal isShowing={true} toggle={() => false} width="30%">
      <center>
        <Stack spacing={1} direction="column" justifyContent="center" alignItems="center">
          <h2>Harap menunggu, sedang memuat data...</h2>
          <CircularProgress color="primary" thickness={5} size={60} />
        </Stack>
      </center>
    </CustomModal>
  );
}
