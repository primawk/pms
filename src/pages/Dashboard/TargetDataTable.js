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

import DeleteData from '../../components/Modal/DeleteModal/Dashboard';
import { toast } from 'react-toastify';
import LoadingButton from '@mui/lab/LoadingButton';
import { useQueryClient } from 'react-query';

// components
import { LoadingModal } from 'components/Modal';

// custom hooks
import useModal from '../../hooks/useModal';
import useAuth from 'hooks/useAuth';

// services
import ProductionService from 'services/Dashboard';
import { getTargetYear } from 'services/Dashboard';

const TargetDataTable = ({
  targetTableHead,
  data,
  isLoading,
  isFetching,
  menuTab,
  numberWithCommas
}) => {
  const { isShowing: isShowingForm, toggle: toggleForm, width } = useModal();
  const { isShowing: isShowingDelete, toggle: toggleDelete } = useModal();
  const { isGranted } = useAuth();
  const [loading, setLoading] = useState(false);
  const [dataEdit, setDataEdit] = useState(0);
  const [dataEditId, setDataEditId] = useState([]);
  const [dataDelete, setDataDelete] = useState([]);
  const [dataTarget, setDataTarget] = useState([]);

  const queryClient = useQueryClient();

  const [year, setYear] = useState(0);

  const handleEditClick = (year, target_list) => {
    getTargetYear(year).then((response) => {
      setDataEdit(response);
      return response;
    });
    setYear(year);

    const target = target_list.map((id) => id.target);
    const ids = target_list.map((id) => id.target_id);

    setDataEditId(ids);
    setDataTarget(target);

    toggleForm();
  };

  const handleDeleteClick = (target_list) => {
    const ids = target_list.map((id) => id.target_id);

    setDataDelete(ids);
    toggleDelete();
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await id.forEach((_id) => {
        ProductionService.deleteTarget({ _id });
      });
      setLoading(false);
      toggleDelete();
      queryClient.invalidateQueries(['data-target']);
    } catch (err) {
      toast.error(err.response.data.detail_message);
      setLoading(false);
      toggleDelete();
    }
    // setTimeout(queryClient.invalidateQueries(['data-target']), 6000);
  };

  const handleDeleteShipment = async (id) => {
    setLoading(true);
    try {
      await id.forEach((_id) => {
        ProductionService.deleteTargetShipment({ _id });
      });
      setLoading(false);
      toggleDelete();
      queryClient.invalidateQueries(['data-target-shipment-table']);
    } catch (err) {
      toast.error(err.response.data.detail_message);
      setLoading(false);
      toggleDelete();
    }
  };

  return (
    <>
      {isFetching && isLoading && <LoadingModal />}
      <EditData
        menuTab={menuTab}
        toggle={toggleForm}
        isShowing={isShowingForm}
        width={width}
        year={year}
        dataEdit={dataEdit}
        id={dataEditId}
        dataTarget={dataTarget}
        isFetching={isFetching}
        isLoading={isLoading}
      />
      <DeleteData
        toggle={toggleDelete}
        isShowing={isShowingDelete}
        title="Data"
        action={menuTab === 0 ? handleDelete : handleDeleteShipment}
        id={dataDelete}
      />
      <TableContainer sx={{ mt: 3, width: '100%' }}>
        <Table>
          <TableHead>
            <TableRow>
              {targetTableHead?.map((item) => (
                <TableCell
                  sx={{ background: '#F2F2F2', border: '1px solid #E0E0E0' }}
                  key={item}
                  align="center"
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item) => (
              <>
                <TableRow key={item}>
                  <TableCell
                    align="center"
                    sx={{ border: '1px solid #E0E0E0', minWidth: '10vw' }}
                    rowSpan={item.target_list?.length + 1}
                  >
                    {item.year}
                  </TableCell>
                </TableRow>
                {item.target_list.map((detail) => (
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{ border: '1px solid #E0E0E0', minWidth: '15vw' }}
                    >
                      {detail.month}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ border: '1px solid #E0E0E0', minWidth: '15vw' }}
                    >
                      {numberWithCommas(detail.target)}
                    </TableCell>
                    {detail.month === 'Januari' ? (
                      <>
                        <TableCell
                          align="center"
                          sx={{ border: '1px solid #E0E0E0', minWidth: '15vw' }}
                          rowSpan={item.target_list?.length}
                        >
                          {numberWithCommas(item?.total_target)}
                        </TableCell>
                        <TableCell
                          sx={{
                            border: '1px solid #E0E0E0',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start'
                          }}
                          rowSpan={item.target_list?.length}
                        >
                          <Grid
                            container
                            sx={{
                              justifyContent: 'space-around',
                              alignItems: 'flex-start',
                              marginBottom: '40rem'
                            }}
                            gap={1}
                          >
                            <Grid item xs={6} padding="0.2em 0">
                              {isGranted && (
                                <Button
                                  sx={{ background: '#E5E5FE', boxShadow: '0', color: '#3F48C0' }}
                                  fullWidth
                                  variant="contained"
                                  onClick={() => handleEditClick(item.year, item.target_list)}
                                >
                                  <Icon
                                    style={{ fontSize: '17px', marginRight: '1rem' }}
                                    icon={EditIcon}
                                  />
                                  Edit Data
                                </Button>
                              )}
                            </Grid>
                            <Grid item xs={6} padding="0.2em 0" sx={{ alignItems: 'center' }}>
                              {isGranted && (
                                <LoadingButton
                                  loading={loading}
                                  sx={{ background: '#E5E5FE', boxShadow: '0', color: '#3F48C0' }}
                                  fullWidth
                                  variant="contained"
                                  onClick={() => handleDeleteClick(item.target_list)}
                                >
                                  <Icon
                                    style={{ fontSize: '17px', marginRight: '0.5rem' }}
                                    icon={DeleteIcon}
                                  />
                                  Delete Data
                                </LoadingButton>
                              )}
                            </Grid>
                          </Grid>
                        </TableCell>
                      </>
                    ) : null}
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
