import { Grid, Table, TableCell, TableContainer, TableRow } from '@mui/material';
import BarChart from '../../components/Charts/BarChart';
import React from 'react';

// components
import { LoadingModal } from 'components/Modal';

const ChartSection = ({
  chartData,
  target,
  isLoading,
  isFetching,
  targetRealization,
  targetPercentage,
  isLoadingRealization,
  isFetchingRealization
}) => {
  if (!target) {
    return null;
  }

  return (
    <>
      {isFetching && isLoading && isFetchingRealization && isLoadingRealization && <LoadingModal />}
      <Grid width="100%">
        <BarChart chartData={chartData} />
      </Grid>

      <TableContainer sx={{ width: '100%' }}>
        <Table>
          <TableRow>
            <TableCell
              sx={{ width: '14%', border: '1px solid #E0E0E0' }}
              align="center"
              variant="head"
            >
              <Grid container sx={{ alignItems: 'center' }}>
                <Grid
                  item
                  sx={{
                    width: '20px',
                    height: '20px',
                    border: '1px solid rgba(0, 0, 0, .2)',
                    backgroundColor: '#3F48C0',
                    marginRight: '0.5rem'
                  }}
                ></Grid>
                <Grid item>Realisasi (Ton)</Grid>
              </Grid>
            </TableCell>
            {typeof targetRealization === 'undefined' || targetRealization === null ? (
              <>
                <TableCell sx={{ border: '1px solid #E0E0E0' }} align="center">
                  0
                </TableCell>
                <TableCell sx={{ border: '1px solid #E0E0E0' }} align="center">
                  0
                </TableCell>
                <TableCell sx={{ border: '1px solid #E0E0E0' }} align="center">
                  0
                </TableCell>
                <TableCell sx={{ border: '1px solid #E0E0E0' }} align="center">
                  0
                </TableCell>
                <TableCell sx={{ border: '1px solid #E0E0E0' }} align="center">
                  0
                </TableCell>
                <TableCell sx={{ border: '1px solid #E0E0E0' }} align="center">
                  0
                </TableCell>
                <TableCell sx={{ border: '1px solid #E0E0E0' }} align="center">
                  0
                </TableCell>
                <TableCell sx={{ border: '1px solid #E0E0E0' }} align="center">
                  0
                </TableCell>
                <TableCell sx={{ border: '1px solid #E0E0E0' }} align="center">
                  0
                </TableCell>
                <TableCell sx={{ border: '1px solid #E0E0E0' }} align="center">
                  0
                </TableCell>
                <TableCell sx={{ border: '1px solid #E0E0E0' }} align="center">
                  0
                </TableCell>
                <TableCell sx={{ border: '1px solid #E0E0E0' }} align="center">
                  0
                </TableCell>
              </>
            ) : (
              targetRealization?.map((item) => (
                <TableCell key={item} sx={{ border: '1px solid #E0E0E0' }} align="center">
                  {item}
                </TableCell>
              ))
            )}
          </TableRow>
          <TableRow>
            <TableCell
              sx={{ width: '15%', border: '1px solid #E0E0E0' }}
              align="center"
              variant="head"
            >
              <Grid container sx={{ alignItems: 'center' }}>
                <Grid
                  item
                  sx={{
                    width: '20px',
                    height: '20px',
                    border: '1px solid rgba(0, 0, 0, .2)',
                    backgroundColor: '#DA4540',
                    marginRight: '0.5rem'
                  }}
                ></Grid>
                <Grid item>Target Produksi</Grid>
              </Grid>
            </TableCell>
            {target?.map((item) => (
              <TableCell key={item.name} sx={{ border: '1px solid #E0E0E0' }} align="center">
                {item}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell
              sx={{ width: '15%', border: '1px solid #E0E0E0' }}
              align="start"
              variant="head"
            >
              Presentase
            </TableCell>
            {typeof targetPercentage === 'undefined' || targetPercentage === null ? (
              <>
                <TableCell sx={{ border: '1px solid #E0E0E0' }} align="center">
                  0 %
                </TableCell>
                <TableCell sx={{ border: '1px solid #E0E0E0' }} align="center">
                  0 %
                </TableCell>
                <TableCell sx={{ border: '1px solid #E0E0E0' }} align="center">
                  0 %
                </TableCell>
                <TableCell sx={{ border: '1px solid #E0E0E0' }} align="center">
                  0 %
                </TableCell>
                <TableCell sx={{ border: '1px solid #E0E0E0' }} align="center">
                  0 %
                </TableCell>
                <TableCell sx={{ border: '1px solid #E0E0E0' }} align="center">
                  0 %
                </TableCell>
                <TableCell sx={{ border: '1px solid #E0E0E0' }} align="center">
                  0 %
                </TableCell>
                <TableCell sx={{ border: '1px solid #E0E0E0' }} align="center">
                  0 %
                </TableCell>
                <TableCell sx={{ border: '1px solid #E0E0E0' }} align="center">
                  0 %
                </TableCell>
                <TableCell sx={{ border: '1px solid #E0E0E0' }} align="center">
                  0 %
                </TableCell>
                <TableCell sx={{ border: '1px solid #E0E0E0' }} align="center">
                  0 %
                </TableCell>
                <TableCell sx={{ border: '1px solid #E0E0E0' }} align="center">
                  0 %
                </TableCell>
              </>
            ) : (
              targetPercentage?.map((item) => (
                <TableCell key={item.name} sx={{ border: '1px solid #E0E0E0' }} align="center">
                  {item} %
                </TableCell>
              ))
            )}
          </TableRow>
        </Table>
      </TableContainer>
    </>
  );
};

export default ChartSection;
