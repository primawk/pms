import React from 'react';
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
import EditData from '../../components/Modal/DashboardHome/EditData';

// custom hooks
import useModal from '../../hooks/useModal';

const TargetDataTable = ({ sample, targetTableHead }) => {
  const { isShowing: isShowingForm, toggle: toggleForm, width } = useModal();

  return (
    <>
      <EditData toggle={toggleForm} isShowing={isShowingForm} width={width} />
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
            {sample.map((item) => (
              <>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{ border: '1px solid #F2F2F2', minWidth: '25%' }}
                    rowSpan={item.detail.length + 1}
                  >
                    {item.inventory}
                  </TableCell>
                </TableRow>
                {item.detail.map((detail) => (
                  <TableRow key={detail.bukit}>
                    <TableCell align="center" sx={{ border: '1px solid #F2F2F2', minWidth: '25%' }}>
                      {detail.bukit}
                    </TableCell>
                    {detail.dome.map((dome, i) => (
                      <TableRow>
                        <TableCell
                          key={i}
                          align="center"
                          sx={{ border: '1px solid #F2F2F2', minWidth: '25%' }}
                        >
                          {dome}
                        </TableCell>
                      </TableRow>
                    ))}
                    {detail.bukit === 'Bukit I' ? (
                      <TableCell
                        sx={{
                          border: '1px solid #F2F2F2',
                          minWidth: '20vw',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start'
                        }}
                        rowSpan={item.detail.length}
                      >
                        <Grid
                          container
                          sx={{
                            justifyContent: 'space-around',
                            alignItems: 'flex-start',
                            marginBottom: '40rem'
                          }}
                        >
                          <Button
                            sx={{
                              background: '#E5E5FE',
                              boxShadow: '0',
                              color: '#3F48C0',
                              width: '8.313rem'
                            }}
                            variant="contained"
                            onClick={toggleForm}
                          >
                            <Icon
                              style={{ fontSize: '1rem', marginRight: '0.5rem' }}
                              icon={EditIcon}
                            />
                            Edit Data
                          </Button>
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
