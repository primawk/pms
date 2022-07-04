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
import DeleteIcon from '@iconify/icons-ant-design/delete-filled';

const TargetDataTable = ({ sample, targetTableHead }) => {
  return (
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
                  sx={{ border: '1px solid #F2F2F2', minWidth: '10vw' }}
                  rowSpan={item.detail.length + 1}
                >
                  {item.year}
                </TableCell>
              </TableRow>
              {item.detail.map((detail) => (
                <TableRow key={detail.month}>
                  <TableCell align="center" sx={{ border: '1px solid #F2F2F2', minWidth: '15vw' }}>
                    {detail.month}
                  </TableCell>
                  <TableCell align="center" sx={{ border: '1px solid #F2F2F2', minWidth: '15vw' }}>
                    {detail.target}
                  </TableCell>
                  {detail.month === 'Januari' ? (
                    <TableCell
                      sx={{
                        border: '1px solid #F2F2F2',
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
                        <Grid item md={5} xs={12} padding="0.2em 0">
                          <Button
                            sx={{ background: '#E5E5FE', boxShadow: '0', color: '#3F48C0' }}
                            fullWidth
                            variant="contained"
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
                          >
                            <Icon
                              style={{ fontSize: '17px', marginRight: '1rem' }}
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
  );
};

export default TargetDataTable;
