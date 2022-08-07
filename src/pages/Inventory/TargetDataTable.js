import React from 'react';
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button
} from '@mui/material';
import { Icon } from '@iconify/react';
import EditIcon from '@iconify/icons-ant-design/edit-filled';
import EditInventory from '../../components/Modal/Inventory/EditInventory';

// custom hooks
import useModal from '../../hooks/useModal';
import useAuth from 'hooks/useAuth';

// table
const HalfTableData = ({ dataTable, toggleForm, dataType, isGranted }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell align="center" sx={{ background: '#F2F2F2', border: '1px solid #F2F2F2' }}>
          INVENTORY
        </TableCell>
        <TableCell align="center" sx={{ background: '#F2F2F2', border: '1px solid #F2F2F2' }}>
          {dataType === 'inventory-sm' ? 'BUKIT' : 'DOME'}
        </TableCell>
        <TableCell align="center" sx={{ background: '#F2F2F2', border: '1px solid #F2F2F2' }}>
          AKSI
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell
          rowSpan={dataTable?.length + 1}
          sx={{ border: '1px solid #F2F2F2', textAlign: 'center' }}
        >
          {dataType === 'inventory-sm' ? 'Inventory SM' : 'Inventory EFO'}
        </TableCell>
        <TableCell sx={{ p: 0, border: '1px solid #F2F2F2' }}>
          <Grid direction="column" container justifyContent="flex-start" alignItems="center">
            {dataTable?.length > 0 &&
              dataTable?.map((item) => (
                <>
                  {dataTable?.length === 1 ? (
                    <Grid
                      item
                      lg={12}
                      sx={{
                        p: 1,
                        textAlign: 'center'
                      }}
                    >
                      {item?.name || ''}
                    </Grid>
                  ) : (
                    <>
                      <Grid
                        item
                        lg={12}
                        md={12}
                        sx={{
                          p: 1,
                          border: '1px solid #F2F2F2',
                          width: '100%',
                          textAlign: 'center'
                        }}
                      >
                        {item?.name || ''}
                      </Grid>
                    </>
                  )}
                </>
              ))}
          </Grid>
        </TableCell>
        <TableCell rowSpan={dataTable?.length} align="center" style={{ verticalAlign: 'top' }}>
          {isGranted && (
            <Button
              sx={{
                background: '#E5E5FE',
                boxShadow: '0',
                color: '#3F48C0',
                m: '0',
                width: '8.313rem'
              }}
              variant="contained"
              onClick={toggleForm}
            >
              <Icon style={{ fontSize: '1rem', marginRight: '0.5rem' }} icon={EditIcon} />
              Edit Data
            </Button>
          )}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

const FullTableData = ({ dataTable, toggleForm, isGranted }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell align="center" sx={{ background: '#F2F2F2', border: '1px solid #F2F2F2' }}>
          INVENTORY
        </TableCell>
        <TableCell align="center" sx={{ background: '#F2F2F2', border: '1px solid #F2F2F2' }}>
          BUKIT
        </TableCell>
        <TableCell align="center" sx={{ background: '#F2F2F2', border: '1px solid #F2F2F2' }}>
          DOME
        </TableCell>
        <TableCell align="center" sx={{ background: '#F2F2F2', border: '1px solid #F2F2F2' }}>
          AKSI
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {dataTable?.length > 0 ? (
        dataTable?.map((row, index) => (
          <TableRow key={row?.id}>
            {index === 0 && (
              <TableCell
                rowSpan={dataTable?.length + 1}
                sx={{ border: '1px solid #F2F2F2', textAlign: 'center' }}
              >
                Inventory ETO
              </TableCell>
            )}
            <TableCell sx={{ p: 0, border: '1px solid #F2F2F2' }}>
              <Grid direction="column" container justifyContent="flex-start" alignItems="center">
                <Grid
                  item
                  lg={12}
                  sx={{
                    p: 1,
                    textAlign: 'center'
                  }}
                >
                  {row?.name || ''}
                </Grid>
              </Grid>
            </TableCell>
            <TableCell sx={{ p: 0, border: '1px solid #F2F2F2' }}>
              <Grid direction="column" container justifyContent="flex-start" alignItems="center">
                {row?.dome_list?.length > 0 &&
                  row?.dome_list.map((dome, i) => (
                    <>
                      {row?.dome_list?.length === 1 ? (
                        <Grid
                          item
                          lg={12}
                          sx={{
                            p: 1,
                            textAlign: 'center'
                          }}
                        >
                          {dome?.dome_name || ''}
                        </Grid>
                      ) : (
                        <Grid
                          item
                          lg={12}
                          sx={{
                            p: 1,
                            border: '1px solid #F2F2F2',
                            width: '100%',
                            textAlign: 'center'
                          }}
                        >
                          {dome?.dome_name || ''}
                        </Grid>
                      )}
                    </>
                  ))}
              </Grid>
            </TableCell>
            {index === 0 && (
              <TableCell
                rowSpan={dataTable?.length}
                align="center"
                style={{ verticalAlign: 'top' }}
              >
                {isGranted && (
                  <Button
                    sx={{
                      background: '#E5E5FE',
                      boxShadow: '0',
                      color: '#3F48C0',
                      m: '0',
                      width: '8.313rem'
                    }}
                    variant="contained"
                    onClick={toggleForm}
                  >
                    <Icon style={{ fontSize: '1rem', marginRight: '0.5rem' }} icon={EditIcon} />
                    Edit Data
                  </Button>
                )}
              </TableCell>
            )}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell
            rowSpan={dataTable?.length + 1}
            sx={{ border: '1px solid #F2F2F2', textAlign: 'center' }}
          >
            Inventory ETO
          </TableCell>
          <TableCell sx={{ p: 0, border: '1px solid #F2F2F2' }}></TableCell>
          <TableCell sx={{ p: 0, border: '1px solid #F2F2F2' }}></TableCell>
          <TableCell rowSpan={dataTable?.length} align="center" style={{ verticalAlign: 'top' }}>
            {isGranted && (
              <Button
                sx={{
                  background: '#E5E5FE',
                  boxShadow: '0',
                  color: '#3F48C0',
                  m: '0',
                  width: '8.313rem'
                }}
                variant="contained"
                onClick={toggleForm}
              >
                <Icon style={{ fontSize: '1rem', marginRight: '0.5rem' }} icon={EditIcon} />
                Edit Data
              </Button>
            )}
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  </Table>
);

const TargetDataTable = ({ dataTable, dataType }) => {
  const { isShowing: isShowingForm, toggle: toggleForm } = useModal();

  const { isGranted } = useAuth();

  return (
    <>
      <EditInventory toggle={toggleForm} isShowing={isShowingForm} />
      <TableContainer sx={{ mt: 3, width: '100%' }}>
        {dataType !== 'inventory-eto' ? (
          <HalfTableData
            dataTable={dataTable}
            dataType={dataType}
            toggleForm={toggleForm}
            isGranted={isGranted}
          />
        ) : (
          <FullTableData dataTable={dataTable} toggleForm={toggleForm} isGranted={isGranted} />
        )}
      </TableContainer>
    </>
  );
};

export default TargetDataTable;
