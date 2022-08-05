import React, { useEffect, useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import { Icon } from '@iconify/react';
import { useNavigate, useLocation } from 'react-router-dom';
import dayjs from 'dayjs';

// components
import Navbar from '../../components/Navbar';
import EditLog from './components/editLog';

// services
import { getHistory } from 'services/LabService';

const HistoryEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.id;
  const [data, setData] = useState([]);

  useEffect(() => {
    getHistory(id).then((response) => {
      setData(response?.data?.data);
    });
  }, [id]);

  console.log(data);

  const value = Object.values(data).map(({ description }) => description);
  const date = Object.values(data).map(({ updated_at }) =>
    dayjs(updated_at).format('DD MMMM YYYY')
  );

  var output = value.map(function (obj, index) {
    var myobj = {};
    myobj[date[index]] = obj;
    return myobj;
  });

  console.log(output);

  return (
    <>
      <Navbar />
      <div className="app-content">
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            minHeight: '100%',
            width: '90%',
            marginTop: '2.5rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 'auto',
            borderRadius: '4px'
          }}
        >
          <Grid item sx={{ height: '6%', borderBottom: 1, borderBottomColor: '#E0E0E0' }}>
            <Grid
              container
              sx={{
                display: 'flex',
                flexDirection: 'row',
                margin: '1rem 0.5rem 0.3rem 2rem'
              }}
            >
              <Grid item>
                <Button
                  variant="outlined"
                  sx={{ marginRight: '1rem' }}
                  onClick={() => navigate(-1)}
                >
                  <Icon icon="akar-icons:arrow-back" color="#3f48c0" fontSize={16} />
                  <div style={{ marginLeft: '1rem', fontWeight: '400' }}>Back</div>
                </Button>
              </Grid>
              <Grid item>
                <Box>
                  <h2>Riwayat Edit 'Laporan Lab - {location.state.company_name}'</h2>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {Object.keys(output).map((data, (index) => <EditLog data={output} index={index} />))}
        </Grid>
      </div>
    </>
  );
};

export default HistoryEdit;
