import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import avatarLogo from 'assets/Images/avatar.png';
import dayjs from 'dayjs';
import LoadingButton from '@mui/lab/LoadingButton';
import DeleteIcon from '@iconify/icons-ant-design/delete-filled';
import { toast } from 'react-toastify';
import { DeleteModal } from 'components/Modal';
import { useQueryClient } from 'react-query';

// custom hooks
import useModal from '../../hooks/useModal';

// service
import BankDataService from '../../services/BankDataServices';

const ListBankData = ({ data, i, pagination }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { isShowing: isShowingDelete, toggle: toggleDelete } = useModal();
  const queryClient = useQueryClient();

  const handleDeleteClick = async (id) => {
    // there is no state value so i have to pass value id
    setLoading(true);
    try {
      await BankDataService.deleteData({ id });
      setLoading(false);
      toggleDelete();
      queryClient.invalidateQueries(['data']); // to refresh after successfully delete a data
    } catch (err) {
      toast.error(err.response.data.detail_message);
      setLoading(false);
      toggleDelete();
    }
  };

  return (
    <>
      <DeleteModal
        toggle={toggleDelete}
        isShowing={isShowingDelete}
        title="Data"
        action={() => handleDeleteClick(data?.id)}
      />
      <Grid
        container
        sx={{
          display: 'flex',
          flexWrap: 'nowrap', // no wrap so it wont create new row for 1 data
          justifyContent: 'space-between',
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '1rem',
          borderBottom: 1,
          borderBottomColor: '#E0E0E0',
          cursor: 'pointer',
          overflow: 'auto'
        }}
        gap={1} // either spacing or gap
      >
        <Grid item onClick={() => navigate(`/bank-data/detail/${data?.id}`)} xs={0.1}>
          <Grid item>
            <h4> {(pagination?.current_page - 1) * 5 + i + 1}</h4>
            {/* 5 is the limit */}
          </Grid>
          {/* </Grid> */}
        </Grid>
        <Grid item onClick={() => navigate(`/bank-data/detail/${data?.id}`)} xs={2}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '1rem'
            }}
          >
            <Box sx={{ marginBottom: '0.5rem' }}>
              <h5 style={{ color: '#828282' }}>Masa Berlaku Dokumen</h5>
            </Box>
            <Box sx={{}}>{dayjs(data?.date).format('DD/MM/YYYY')}</Box>
          </Grid>
        </Grid>

        {/* Column 2 */}
        <Grid item onClick={() => navigate(`/bank-data/detail/${data?.id}`)} xs={1}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ marginBottom: '0.5rem' }}>
              <h5 style={{ color: '#828282' }}>Jenis Dokumen</h5>
            </Box>
            <Box>
              <Grid container sx={{ alignItems: 'center' }}>
                <Box>
                  <h5>{data?.report_type}</h5>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        {/* Column 3 */}
        <Grid item onClick={() => navigate(`/bank-data/detail/${data?.id}`)} xs={1.5}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ marginBottom: '0.5rem' }}>
              <h5 style={{ color: '#828282' }}>Keterangan Dokumen</h5>
            </Box>
            <Box>
              <Grid container sx={{ alignItems: 'center' }}>
                <Box sx={{}}>
                  <h5>{data?.description}</h5>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        {/* Column 4 */}
        <Grid item onClick={() => navigate(`/bank-data/detail/${data?.id}`)} xs={2}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ marginBottom: '0.5rem' }}>
              <h5 style={{ color: '#828282' }}>Attachment</h5>
            </Box>
            {data?.attachment.map((item) => ( // there is difference mapping using () and {}
              <Grid
                item
                container
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'nowrap'
                }}
              >
                <Grid item xs={1.5}>
                  <Icon icon="ph:file-pdf-duotone" color="#3f48c0" fontSize={24} />
                </Grid>
                <Grid item sx={{ marginLeft: '0.5rem', fontSize: '0.5rem' }} xs={10}>
                  {item}
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Column Account*/}
        <Grid item onClick={() => navigate(`/bank-data/detail/${data?.id}`)} xs={2}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ marginBottom: '0.5rem' }}>
              <h5 style={{ color: '#828282' }}>Dibuat Oleh</h5>
            </Box>
            <Box>
              <Grid container sx={{ alignItems: 'center' }}>
                <Box sx={{ width: '1.5rem', margin: '0 0.5rem 0 0' }}>
                  <img src={avatarLogo} alt=""></img>
                </Box>
                <Box sx={{ margin: '0 0.5rem 0 0.5rem' }}>
                  <h5>{data?.account_name}</h5>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        {/* Column 5 */}
        <Grid item onClick={() => navigate(`/bank-data/detail/${data?.id}`)} xs={1.5}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ marginBottom: '0.5rem' }}>
              <h5 style={{ color: '#828282' }}>Tanggal Laporan Dibuat</h5>
            </Box>
            <Box>
              <Grid container sx={{ alignItems: 'center' }}>
                <Box>{dayjs(data?.created_at).format('DD/MM/YYYY')}</Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        {/* Column 5 */}
        <Grid item xs={1.5}>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <LoadingButton
              loading={loading}
              sx={{ background: '#E5E5FE', boxShadow: '0', color: '#3F48C0' }}
              fullWidth
              variant="contained"
              onClick={toggleDelete}
            >
              <Icon style={{ fontSize: '17px', marginRight: '0.5rem' }} icon={DeleteIcon} />
              Delete Data
            </LoadingButton>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ListBankData;
