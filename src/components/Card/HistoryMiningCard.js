import React from 'react';
import { Grid, Stack, Typography, Avatar } from '@mui/material';
import dayjs from 'dayjs';

export default function HistoryMiningCard({ listData }) {
  const groupedData = listData?.reduce((groups, item) => {
    const group = groups[dayjs(item.updated_at).format('DD MMMM YYYY')] || [];
    group.push(item);
    groups[dayjs(item.updated_at).format('DD MMMM YYYY')] = group;
    return groups;
  }, {});

  return (
    <div
      style={{
        borderTopRightRadius: '5px',
        borderTopLeftRadius: '5px',
        padding: '20px'
      }}
      className="bg-white"
    >
      <Grid
        container
        direction="column"
        alignItems="flex-start"
        justifyContent="center"
        spacing={3}
      >
        {Object.keys(groupedData).map(function (key, index) {
          return (
            <>
              <Grid item lg={6} xs={12} key={key}>
                <Typography variant="h5" sx={{ pb: 2 }}>
                  {dayjs(key).format('DD MMMM YYYY')}
                </Typography>
                {groupedData[key].map((item) => (
                  <Stack direction="row" spacing={2} sx={{ pb: 2 }}>
                    <Avatar sx={{ width: 30, height: 30, bgcolor: '#3F48C0' }}>
                      {item?.account_name?.substring(0, 1)}
                    </Avatar>
                    <Typography variant="body1">{`${item?.account_name} ${item?.description}`}</Typography>
                  </Stack>
                ))}
                <hr />
              </Grid>
            </>
          );
        })}
      </Grid>
    </div>
  );
}
