import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'moment-timezone';
import dayjs from 'dayjs';

// components
import { Grid, Button, Box } from '@mui/material';
import SearchBarExternal from './components/SearchBarExternal';
import InputLaporanEksternal from '../../components/Modal/LaporanLab/InputLaporanEksternal';
import ViewLaporanEksternal from '../../components/Modal/LaporanLab/ViewLaporanEksternal';
import SummaryLaporan from './components/SummaryLaporan';
import CustomPagination from '../../components/Pagination/index';
import { LoadingModal } from 'components/Modal';
import Result from './resultEksternal';

// utils
import { ceilTotalData } from 'utils/helper';

// custom hooks
import usePagination from 'hooks/usePagination';
import useAuth from 'hooks/useAuth';
import useModal from '../../hooks/useModal';

// services
import { fetchExternal } from 'services/LabService';

export default function ListEksternal({
  search,
  setSearch,
  data,
  isFetchingActivity,
  isLoadingActivity,
  totalPrepEks,
  totalPrep,
  totalAnalysisEks,
  menuTab,
  setMenuTab,
  targetDate,
  setDate,
  calendar,
  setCalendar,
  setCompanyReport,
  companyName,
  setCompanyName,
  setStartDate,
  setEndDate,
  startDate
}) {
  // const { isShowing, toggle } = useModal();
  const navigate = useNavigate();
  // const [searchResultsEksternal, setSearchResultsEksternal] = useState([]);
  const [postsEksternal, setPostsEksternal] = useState([]);
  const [selectedDates, setSelectedDates] = useState([]);
  const { isGranted } = useAuth();
  const [postsPerPage] = useState(15);
  const { page, handleChangePage, resetPage } = usePagination();
  const { isShowing, toggle } = useModal();
  const { toggle: toggleView, isShowing: isShowingView } = useModal();

  const [searchResultsEksternal, setSearchResultsEksternal] = useState();

  useEffect(() => {
    fetchExternal()
      .then((json) => {
        setPostsEksternal(json);
        return json;
      })
      .then((json) => {
        setSearchResultsEksternal(json);
      });
  }, []);

  // useEffect(() => {
  //   fetchExternal()
  //     .then((json) => {
  //       setPostsEksternal(json);
  //       return json;
  //     })
  //     .then((json) => {
  //       setSearchResultsEksternal(json);
  //     });
  // }, []);

  // Get current posts
  // const indexOfLastPost = page * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = searchResultsEksternal.slice(indexOfFirstPost, indexOfLastPost);

  const locales = {
    'en-US': require('date-fns/locale/en-US')
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
  });

  const datav2 = data ? Object.values(data).map((item) => item.reports) : null;

  let result = datav2 ? [].concat.apply([], Object.values(datav2)) : null; // combines arrays of objects into one array

  const events = result
    ? result?.map((item) => {
        return {
          // i need to put return !!
          title: item.company_name,
          allDay: true,
          start: new Date(item.date),
          end: new Date(item.date)
        };
      })
    : [];

  const clickRef = useRef(null);

  useEffect(() => {
    /**
     * What Is This?
     * This is to prevent a memory leak, in the off chance that you
     * teardown your interface prior to the timed method being called.
     */
    return () => {
      window.clearTimeout(clickRef?.current);
    };
  }, []);

  const onSelectSlot = useCallback(
    (slotInfo) => {
      setDate(dayjs(slotInfo?.start).format('DD MMMM YYYY'));
      /**
       * Here we are waiting 250 milliseconds (use what you want) prior to firing
       * our method. Why? Because both 'click' and 'doubleClick'
       * would fire, in the event of a 'doubleClick'. By doing
       * this, the 'click' handler is overridden by the 'doubleClick'
       * action.
       */
      window.clearTimeout(clickRef?.current);
      clickRef.current = window.setTimeout(() => {
        toggle();
      }, 250);
    },
    [toggle, setDate]
  );

  const onSelectEvent = useCallback(
    (slotInfo) => {
      setDate(dayjs(slotInfo?.start).format('DD MMMM YYYY'));
      /**
       * Here we are waiting 250 milliseconds (use what you want) prior to firing
       * our method. Why? Because both 'click' and 'doubleClick'
       * would fire, in the event of a 'doubleClick'. By doing
       * this, the 'click' handler is overridden by the 'doubleClick'
       * action.
       */
      window.clearTimeout(clickRef?.current);
      clickRef.current = window.setTimeout(() => {
        toggleView();
      }, 250);
    },
    [toggleView, setDate]
  );

  const eventPropGetter = useCallback(
    (event, start, end, isSelected) => ({
      ...(event && {
        style: {
          backgroundColor: '#E5E5FE',
          color: 'black',
          fontSize: '14px'
        }
      })
    }),
    []
  );

  return (
    <>
      <InputLaporanEksternal
        toggle={toggle}
        isShowing={isShowing}
        targetDate={targetDate}
        // navigate={navigate}
        startDate={startDate}
      />
      <ViewLaporanEksternal
        toggle={toggleView}
        isShowing={isShowingView}
        targetDate={targetDate}
        navigate={navigate}
        setMenuTab={setMenuTab}
        setCalendar={setCalendar}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />

      <div className="app-content">
        <SearchBarExternal
          posts={result}
          setSearchResults={setSearchResultsEksternal}
          setSelectedDates={setSelectedDates}
          selectedDates={selectedDates}
          menuTab={menuTab}
          setCalendar={setCalendar}
          setSearch={setSearch}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          // resetPage={resetPage}
        />

        {calendar ? (
          <Grid
            sx={{
              // display: 'flex',
              backgroundColor: 'white',
              // flexDirection: 'column',
              // alignItems: 'flex-start',
              // height: 'auto',
              padding: '0.1rem 0 1rem 0',
              marginTop: '1.125rem'
            }}
          >
            {/* Summary Laporan */}

            <SummaryLaporan
              totalPrepEks={totalPrepEks}
              totalPrep={totalPrep}
              totalAnalysisEks={totalAnalysisEks}
              menuTab={menuTab}
              calendar={calendar}
            />
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              messages={{
                next: '>',
                previous: '<',
                today: 'Bulan ini',
                month: 'Bulan',
                week: 'Minggu',
                day: 'Hari',
                Sunday: 'Minggu'
              }}
              selectable
              eventPropGetter={eventPropGetter}
              onSelectEvent={onSelectEvent}
              onSelectSlot={onSelectSlot}
              style={{ height: 500, margin: '25px' }}
            />
          </Grid>
        ) : (
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
              <Box sx={{ margin: '1.5rem 1rem 1.5rem 1.5rem ' }}>
                <h3>List Laporan Lab Eksternal | Sabtu, {targetDate}</h3>
              </Box>

              {isGranted && (
                <Button
                  variant="contained"
                  onClick={() => navigate(`/lab-report/input-laporan-eksternal`)}
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
              )}
            </Grid>
            {/* Summary Laporan */}

            <SummaryLaporan
              totalPrepEks={totalPrepEks}
              totalPrep={totalPrep}
              totalAnalysisEks={totalAnalysisEks}
              menuTab={menuTab}
              calendar={calendar}
            />

            {/*List Laporan*/}
            {isFetchingActivity && isLoadingActivity && <LoadingModal />}
            {search ? (
              <Result
                searchResults={searchResultsEksternal}
                setCompanyReport={setCompanyReport}
                companyName={companyName}
                setCompanyName={setCompanyName}
              />
            ) : (
              <Result
                searchResults={result}
                setCompanyReport={setCompanyReport}
                companyName={companyName}
                setCompanyName={setCompanyName}
              />
            )}

            {/* Pagination */}
            <Grid
              container
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginRight: '3rem',
                marginBottom: '2rem'
              }}
            >
              <Grid item sx={{ width: '100%' }}>
                {/* <CustomPagination
                  count={ceilTotalData(searchResultsEksternal.length || 0, 15)}
                  page={page}
                  handleChangePage={handleChangePage}
                /> */}
              </Grid>
            </Grid>
          </Grid>
        )}
      </div>
    </>
  );
}
