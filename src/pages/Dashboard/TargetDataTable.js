import React, { useState } from 'react';
import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { Icon } from '@iconify/react';
import EditIcon from '@iconify/icons-ant-design/edit-filled';
import DeleteIcon from '@iconify/icons-ant-design/delete-filled';
import EditData from '../../components/Modal/DashboardHome/EditData';
import DeleteData from '../../components/Modal/DeleteModal/index';
import { toast } from 'react-toastify';
import LoadingButton from '@mui/lab/LoadingButton';

// components
// import { LoadingModal } from 'components/Modal';

// custom hooks
import useModal from '../../hooks/useModal';
import useAuth from 'hooks/useAuth';

// services
import ProductionService from 'services/Dashboard';

const TargetDataTable = ({ targetTableHead, dataProduction }) => {
  const { isShowing: isShowingForm, toggle: toggleForm, width } = useModal();
  const { isShowing: isShowingDelete, toggle: toggleDelete } = useModal();
  const { isGranted } = useAuth();
  const [loading, setLoading] = useState(false);

  const data = dataProduction?.data?.data;

  const id = data.map((item) => item.target_list);

  const handleDelete = () => {
    setLoading(true);
    ProductionService.deleteTarget({ id })
      .then(() => {
        toast.success('Data berhasil dihapus !');
        setLoading(false);
        toggleDelete();
      })
      .catch((err) => {
        toast.error(err.response.data.detail_message);
        setLoading(false);
        toggleDelete();
      });
  };

  return (
    <>
      <EditData toggle={toggleForm} isShowing={isShowingForm} width={width} />
      <DeleteData
        toggle={toggleDelete}
        isShowing={isShowingDelete}
        title="Data"
        action={handleDelete}
      />
      <TableContainer sx={{ mt: 3, width: '100%' }}>
        <Table>
          <TableHead>
            <TableRow>
              {targetTableHead?.map((item) => (
                <TableCell
                  sx={{ background: '#F2F2F2', border: '1px solid #F2F2F2' }}
                  key={item}
                  align="center"
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{ border: '1px solid #F2F2F2', minWidth: '10vw' }}
                    rowSpan={item.target_list?.length + 1}
                  >
                    {item.year}
                  </TableCell>
                </TableRow>
                {item.target_list.map((detail, target_id) => (
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{ border: '1px solid #F2F2F2', minWidth: '15vw' }}
                    >
                      {detail.month}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ border: '1px solid #F2F2F2', minWidth: '15vw' }}
                    >
                      {detail.target}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ border: '1px solid #F2F2F2', minWidth: '15vw' }}
                    >
                      <Grid
                        container
                        sx={{
                          justifyContent: 'space-around',
                          alignItems: 'flex-start'
                        }}
                      >
                        <Grid item md={5} xs={12} padding="0.2em 0">
                          <Button
                            sx={{
                              background: '#E5E5FE',
                              boxShadow: '0',
                              color: '#3F48C0',
                              fontSize: '0.8rem'
                            }}
                            fullWidth
                            variant="contained"
                            onClick={toggleForm}
                          >
                            <Icon
                              style={{ fontSize: '17px', marginRight: '1rem' }}
                              icon={EditIcon}
                            />
                            Edit
                          </Button>
                        </Grid>
                        <Grid item md={5} xs={12} padding="0.2em 0" sx={{ alignItems: 'center' }}>
                          {isGranted && (
                            <LoadingButton
                              loading={loading}
                              sx={{
                                background: '#E5E5FE',
                                boxShadow: '0',
                                color: '#3F48C0',
                                fontSize: '0.8rem'
                              }}
                              fullWidth
                              variant="contained"
                              onClick={() => handleDelete(target_id)}
                            >
                              <Icon
                                style={{ fontSize: '17px', marginRight: '0.5rem' }}
                                icon={DeleteIcon}
                              />
                              Delete
                            </LoadingButton>
                          )}
                        </Grid>
                      </Grid>
                    </TableCell>
                    {/* {detail[0] ? (
                      <TableCell
                        sx={{
                          border: '1px solid #F2F2F2',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start'
                        }}
                      >
                        <Grid
                          container
                          sx={{
                            justifyContent: 'space-around',
                            alignItems: 'flex-start',
                            marginBottom: '40rem'
                          }}
                        >
                          <Grid item md={5} xs={12} padding="0.2em 0">
                            <Button
                              sx={{ background: '#E5E5FE', boxShadow: '0', color: '#3F48C0' }}
                              fullWidth
                              variant="contained"
                              onClick={toggleForm}
                            >
                              <Icon
                                style={{ fontSize: '17px', marginRight: '1rem' }}
                                icon={EditIcon}
                              />
                              Edit Data
                            </Button>
                          </Grid>
                          <Grid item md={5} xs={12} padding="0.2em 0" sx={{ alignItems: 'center' }}>
                            <Button
                              sx={{ background: '#E5E5FE', boxShadow: '0', color: '#3F48C0' }}
                              fullWidth
                              variant="contained"
                              onClick={toggleDelete}
                            >
                              <Icon
                                style={{ fontSize: '17px', marginRight: '0.5rem' }}
                                icon={DeleteIcon}
                              />
                              Delete Data
                            </Button>
                          </Grid>
                        </Grid>
                      </TableCell>
                    ) : null} */}
                  </TableRow>
                ))}
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TargetDataTable;
