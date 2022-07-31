import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
// import { addDays } from 'date-fns';

// components
import { Grid, Button, Box } from '@mui/material';
import CustomPagination from '../../components/Pagination/index';
import SearchBar from './components/SearchBar';
import SummaryLaporan from './components/SummaryLaporan';
// import PilihLaporan from '../../components/Modal/LaporanLab/PilihLaporan';
import { LoadingModal } from 'components/Modal';
import Lists from './Lists';
import { dateToStringPPOBFormatter } from '../../utils/helper';

// services
import LabService from 'services/LabService';
import { fetchInternal } from 'services/LabService';

export default function ListInternal() {
  // const { isShowing, toggle } = useModal();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedDates, setSelectedDates] = useState({});

  const {
    data,
    // isLoading: isLoadingActivity,
    isFetching: isFetchingActivity
  } = useQuery(
    ['report', 'internal'],
    () =>
      LabService.getReport({
        report_type: 'internal'
      })
    // { keepPreviousData: true }
  );

  // const [state, setState] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: addDays(new Date(), 7),
  //     key: 'selection'
  //   }
  // ]);

  useEffect(() => {
    fetchInternal(selectedDates)
      .then((json) => {
        setPosts(json);
        return json;
      })
      .then((json) => {
        setSearchResults(json);
      });
  }, [selectedDates]);

  return (
    <>
      {/* <PilihLaporan toggle={toggle} isShowing={isShowing} /> */}

      <div className="app-content">
        <SearchBar
          posts={posts}
          setSearchResults={setSearchResults}
          setSelectedDates={setSelectedDates}
        />
        <Grid
          container
          sx={{
            display: 'flex',
            backgroundColor: 'white',
            flexDirection: 'column',
            alignItems: 'flex-start',
            height: 'auto',
            marginTop: '1.125rem'
          }}
        >
          <Grid
            container
            sx={{
              display: 'flex',
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start'
            }}
          >
            <Box sx={{ margin: '1.5rem 1rem 1.5rem 1.5rem' }}>
              <h3>List Laporan Lab Internal</h3>
            </Box>
            <Button
              variant="contained"
              onClick={() => navigate(`/input-laporan-internal`)}
              sx={{
                width: '15.625',
                height: '42px',
                marginRight: '1.5rem',
                marginLeft: 'auto',
                boxShadow: 0
              }}
            >
              Input Laporan Lab
            </Button>
          </Grid>

          {/* Summary Laporan */}
          <SummaryLaporan preparation={data?.data?.data} />

          {/*List Laporan*/}
          {isFetchingActivity && <LoadingModal />}
          <Lists searchResults={searchResults} />

          {/* Pagination */}
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginRight: '3rem'
            }}
          >
            <Grid item sx={{ width: '100%' }}>
              <CustomPagination />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
