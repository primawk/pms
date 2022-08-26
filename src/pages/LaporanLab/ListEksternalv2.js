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
import { Grid } from '@mui/material';
import SearchBarExternal from './components/SearchBarExternal';
import InputLaporanEksternal from '../../components/Modal/LaporanLab/InputLaporanEksternal';
import ViewLaporanEksternal from '../../components/Modal/LaporanLab/ViewLaporanEksternal';
import SummaryLaporan from './components/SummaryLaporan';
// import { LoadingModal } from 'components/Modal';
// import Result from './resultEksternal';

// utils
// import { ceilTotalData } from 'utils/helper';

// custom hooks
// import usePagination from 'hooks/usePagination';
// import useAuth from 'hooks/useAuth';
import useModal from '../../hooks/useModal';

// services
// import { fetchExternal } from 'services/LabService';

export default function ListEksternal({
  isFetchingActivity,
  isLoadingActivity,
  totalPrepEks,
  totalPrep,
  totalAnalysisEks,
  menuTab,
  setMenuTab,
  targetDate,
  setDate
}) {
  // const { isShowing, toggle } = useModal();
  const navigate = useNavigate();
  // const [searchResultsEksternal, setSearchResultsEksternal] = useState([]);
  // const [postsEksternal, setPostsEksternal] = useState([]);
  const [selectedDates, setSelectedDates] = useState([]);
  // const { isGranted } = useAuth();
  // const [postsPerPage] = useState(15);
  // const { page, handleChangePage, resetPage } = usePagination();
  const { isShowing, toggle } = useModal();
  const { toggle: toggleView, isShowing: isShowingView } = useModal();

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

  // const data = [
  //   {
  //     account_id: 4,
  //     account_name: 'Superadmin',
  //     analysis: 3,
  //     attachment: 'lab_4a276194-d99d-40d1-9278-6d5fa6dfb23f.pdf',
  //     cao_level: null,
  //     co_level: null,
  //     company_name: 'PT. Sukajaya',
  //     created_at: '2022-08-16T05:55:16.229056',
  //     date: '2022-08-16',
  //     dome_id: null,
  //     fe_level: null,
  //     hill_id: null,
  //     id: 20,
  //     inc: null,
  //     mgo_level: null,
  //     ni_level: null,
  //     preparation: 2,
  //     report_type: 'external',
  //     sample_code: null,
  //     sample_submitter: 'Didin',
  //     sample_type: null,
  //     simgo_level: null,
  //     sio2_level: null,
  //     submitter_contact: '08736352718',
  //     tonnage: null,
  //     updated_at: '2022-08-16T05:55:16.229099'
  //   }
  // ];

  // const datav2 = data?.map((item) => item.company_name);
  // console.log(datav2);

  const events = [
    {
      title: 'PT. Mandala',
      allDay: true,
      start: new Date(),
      end: new Date()
    },
    {
      title: 'PT. Mandala Jaya',
      allDay: true,
      start: new Date(),
      end: new Date()
    },
    {
      title: 'PT. Sukamaju',
      allDay: true,
      start: new Date('2022-08-18'),
      end: new Date('2022-08-18')
    }
  ];

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
        navigate={navigate}
      />
      <ViewLaporanEksternal
        toggle={toggleView}
        isShowing={isShowingView}
        targetDate={targetDate}
        navigate={navigate}
        setMenuTab={setMenuTab}
      />

      <div className="app-content">
        <SearchBarExternal
          // posts={postsEksternal}
          // setSearchResults={setSearchResultsEksternal}
          setSelectedDates={setSelectedDates}
          selectedDates={selectedDates}
          menuTab={menuTab}
          // resetPage={resetPage}
        />
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
      </div>
    </>
  );
}
