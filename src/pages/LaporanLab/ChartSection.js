import { Grid, Table, TableCell, TableContainer, TableRow } from '@mui/material';
import BarChart from '../../components/Charts/BarChart';
import React from 'react';

const ChartSection = ({ chartData, data }) => {
  return (
    <>
      <Grid width="100%">
        <BarChart chartData={chartData} />
      </Grid>

      <TableContainer sx={{ width: '100%' }}>
        <Table>
          <TableRow>
            <TableCell
              sx={{ width: '50px', background: '#3F48C0', color: '#FFFFFF' }}
              align="center"
              variant="head"
            >
              R
            </TableCell>
            {data?.map((item) => (
              <TableCell key={item.name} sx={{ border: '1px solid #E0E0E0' }}>
                {item?.uv}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell
              align="center"
              sx={{ maxWidth: '20px', background: '#DA4540' }}
              variant="head"
            >
              DP
            </TableCell>
            {data?.map((item) => (
              <TableCell key={item.name} sx={{ border: '1px solid #E0E0E0' }}>
                {item?.pv}
              </TableCell>
            ))}
          </TableRow>
        </Table>
      </TableContainer>
    </>
  );
};

export default ChartSection;
