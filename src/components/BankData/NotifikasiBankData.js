import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import noti from '../../assets/Images/noti.png';
import { Grid } from '@mui/material';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const NotifikasiBankData = ({ item, anchor, open2, handleClose }) => {
  const navigate = useNavigate();
  return (
    <>
      <MenuItem onClick={handleClose} sx={{ borderTop: 1, borderColor: '#E0E0E0' }}>
        <Grid
          container
          sx={{ flexDirection: 'row' }}
          spacing={2}
          onClick={() => navigate(`/bank-data/detail/${item?.id}`, { state: true })}
        >
          <Grid item container sx={{ flexDirection: 'column' }} xs={10.5}>
            {/* whitespace  */}
            {item?.message === 'expired' ? (
              <Grid item sx={{ fontSize: '16px', fontWeight: '500', whiteSpace: 'break-spaces' }}>
                Dokumen ‘{item?.description}’ pada Bank Data telah expired
              </Grid>
            ) : item?.message === 'six_month' ? (
              <Grid item sx={{ fontSize: '16px', fontWeight: '500', whiteSpace: 'break-spaces' }}>
                Dokumen ‘{item?.description}’ pada Bank Data 6 bulan lagi akan expired
              </Grid>
            ) : item?.message === 'three_month' ? (
              <Grid item sx={{ fontSize: '16px', fontWeight: '500', whiteSpace: 'break-spaces' }}>
                Dokumen ‘{item?.description}’ pada Bank Data 3 bulan lagi akan expired
              </Grid>
            ) : item?.message === 'one_week' ? (
              <Grid item sx={{ fontSize: '16px', fontWeight: '500', whiteSpace: 'break-spaces' }}>
                Dokumen ‘{item?.description}’ pada Bank Data 1 minggu lagi akan expired
              </Grid>
            ) : (
              <Grid item sx={{ fontSize: '16px', fontWeight: '500', whiteSpace: 'break-spaces' }}>
                Dokumen ‘{item?.description}’ pada Bank Data 1 hari lagi akan expired
              </Grid>
            )}
            <Grid item sx={{ fontSize: '14px', color: '#828282' }}>
              {dayjs(item?.date).format('DD MMMM YYYY')}
            </Grid>
          </Grid>
          <Grid item xs={1.5} sx={{}}>
            <img src={noti} alt="bell"></img>
          </Grid>
        </Grid>
      </MenuItem>
    </>
  );
};

export default NotifikasiBankData;
