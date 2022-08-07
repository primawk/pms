import React, { useState, useEffect } from 'react';
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
import PilihLaporan from '../../components/Modal/LaporanLab/PilihLaporan';
import DeleteData from '../../components/Modal/DeleteModal/Dashboard';
import { toast } from 'react-toastify';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router-dom';

// components
// import { LoadingModal } from 'components/Modal';

// custom hooks
import useModal from '../../hooks/useModal';
import useAuth from 'hooks/useAuth';

// services
import ProductionService from 'services/Dashboard';
import { getTargetYear } from 'services/Dashboard';

const TargetDataTable = ({ targetTableHead, dataProduction }) => {
  const navigate = useNavigate();
  const { isShowing: isShowingForm, toggle: toggleForm, width } = useModal();
  const { isShowing: isShowingDelete, toggle: toggleDelete } = useModal();
  const { isGranted } = useAuth();
  const [loading, setLoading] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const [dataEdit, setDataEdit] = useState(0);
  const [dataDelete, setDataDelete] = useState([]);

  useEffect(() => {
    setDataTable(dataProduction?.data?.data);
  }, [dataProduction]);

  const data = dataProduction?.data?.data;

  const datav2 = data.map((row) => row);

  console.log(datav2);

  // datav2.forEach(function (item, index, object) {
  //   if (item.year === ) {
  //     object.splice(index, 1);
  //   }
  // });

  const [year, setYear] = useState(0);
  const [deleteId, setDeleteId] = useState(0);

  const handleEditClick = (year) => {
    getTargetYear(year).then((response) => {
      setDataEdit(response);
      return response;
    });
    setYear(year);

    toggleForm();
  };

  const handleDeleteClick = (target_list) => {
    const ids = target_list.map((id) => id.target_id);

    setDataDelete(ids);
    toggleDelete();
  };

  const handleDelete = (id) => {
    id.forEach((_id) => {
      ProductionService.deleteTarget({ _id });
    })
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
      <EditData
        toggle={toggleForm}
        isShowing={isShowingForm}
        width={width}
        year={year}
        dataEdit={dataEdit}
      />
      <DeleteData
        toggle={toggleDelete}
        isShowing={isShowingDelete}
        title="Data"
        action={handleDelete}
        id={dataDelete}
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
            {dataTable.map((item) => (
              <>
                <TableRow key={item}>
                  <TableCell
                    align="center"
                    sx={{ border: '1px solid #F2F2F2', minWidth: '10vw' }}
                    rowSpan={item.target_list?.length + 1}
                  >
                    {item.year}
                  </TableCell>
                </TableRow>
                {item.target_list.map((detail) => (
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
                    {detail.month === 'Januari' ? (
                      <TableCell
                        sx={{
                          border: '1px solid #F2F2F2',
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
                        >
                          <Grid item md={5} xs={12} padding="0.2em 0">
                            <Button
                              sx={{ background: '#E5E5FE', boxShadow: '0', color: '#3F48C0' }}
                              fullWidth
                              variant="contained"
                              onClick={() => handleEditClick(item.target_list)}
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
                              onClick={() => handleDeleteClick(item.target_list)}
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
