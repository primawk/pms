import React, { useEffect, useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import { Icon } from '@iconify/react';
import { useNavigate, useLocation } from 'react-router-dom';

// components
import Navbar from '../../components/Navbar';
import EditLog from './components/EditLog';

// services
import { getHistory } from 'services/LabService';
import { height } from '@mui/system';

const HistoryEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.id;
  const [data, setData] = useState([]);

  useEffect(() => {
    getHistory(id).then((response) => {
      setData(response);
    });
  }, [id]);

  // console.log(data);

  // const value = Object.values(data['2022-08-04T16:22:39.794808']).map(
  //   ({ description }) => description
  // );
  // const date = Object.values(data).map(({ updated_at }) => updated_at);

  // var output = value.map(function (obj, index) {
  //   var myobj = {};
  //   myobj[date[index]] = obj;
  //   return myobj;
  // });

  // console.log(value);

  // const results = data.reduce((groups, item) => {
  //   const group = groups[data.updated_at] || [];
  //   group.push(item);
  //   groups[item.keys] = group;
  // });

  // console.log(output);

  // const result = output.reduce(
  //   (h, obj) => Object.assign(h, { [obj.key]: (h[obj.key] || []).concat(obj) }),
  //   {}
  // );

  // console.log(data);

  // console.log(result);

  return (
    <>
      <div
        style={{
          backgroundColor: '#F5F5F5',
          width: '100%',
          height: '100%',
          overflow: 'auto', // it makes this container follow the height of its content
          position: 'relative'
        }}
      >
        <Navbar />

        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            height: '100%',
            width: '90%',
            marginTop: '6rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '3rem',
            borderRadius: '4px'
          }}
        >
          <Grid item sx={{ height: '9%', borderBottom: 1, borderBottomColor: '#E0E0E0' }}>
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
                  {location.state.sample_code ? (
                    <h2>Riwayat Edit 'Laporan Lab - {location.state.sample_code}</h2>
                  ) : (
                    <h2>Riwayat Edit 'Laporan Lab - {location.state.company_name}</h2>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {Object.keys(data).map((item, index) => (
            <EditLog date={item} value={data} index={index} />
          ))}
        </Grid>
      </div>
    </>
  );
};

export default HistoryEdit;
