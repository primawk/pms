import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Icon } from '@iconify/react';
import dayjs from 'dayjs';

// components
import { Grid, Tab, Tabs, Box } from '@mui/material';
import Header from 'components/Header';
import ListEksternalv2 from './ListEksternalv2';
import ListInternal from './ListInternal';
import CompanyReport from './CompanyReport';

// services
import LabService from 'services/LabService';

// custom hooks
// import useModal from '../../hooks/useModal';
import usePagination from 'hooks/usePagination';

export default function LaporanLab() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const firstDay = new Date(currentYear, 0, 1);
  const lastDay = new Date(currentYear, 11, 31);
  const firstDate = dayjs(firstDay).format('YYYY-MM-DD');
  const lastDate = dayjs(lastDay).format('YYYY-MM-DD');

  const [keyword, setKeyword] = useState('');
  const [selectedDates, setSelectedDates] = useState({});
  const [targetDate, setDate] = useState('');
  const [calendar, setCalendar] = useState(true);
  const [companyReport, setCompanyReport] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [startDate, setStartDate] = useState(firstDate);
  const [endDate, setEndDate] = useState(lastDate);
  const [search, setSearch] = useState(false);

  const menuList = [
    { value: 'internal', label: 'Laporan Internal' },
    { value: 'eksternal', label: 'Laporan Eksternal' }
  ];

  const { page, handleChangePage, resetPage } = usePagination(1);

  const row = 15;

  const { report_type } = useParams();

  const [menuTab, setMenuTab] = useState(report_type || '');

  const handleChangeTab = (event, _menuTab) => {
    setMenuTab(_menuTab);
    switch (_menuTab) {
      case 'eksternal':
        navigate('/lab-report/eksternal');
        setCalendar(true);
        break;
      default:
        navigate('/lab-report/internal');
        setCalendar(true);
        setStartDate(firstDate);
        setEndDate(lastDate);
    }
  };

  const {
    data,
    isLoading: isLoadingInternal,
    isFetching: isFetchingActivityInternal
  } = useQuery(
    ['report', page, keyword, selectedDates],
    () =>
      LabService.getReport({
        report_type: 'internal',
        keyword: keyword,
        row: row,
        page: page,
        startDate: selectedDates.startDate,
        endDate: selectedDates.endDate
      })
    // { keepPreviousData: true }
  );

  const {
    data: dataEksternal,
    isLoading: isLoadingExternal,
    isFetching: isFetchingActivityExternal
  } = useQuery(
    ['report', companyName],
    () =>
      LabService.getReport({
        report_type: 'external',
        keyword: keyword,
        row: row,
        page: page,
        startDate: null,
        endDate: null,
        companyName: companyName
      })
    // { keepPreviousData: true }
  );

  const {
    data: dataCalendar,
    isLoading: isLoadingCalendar,
    isFetching: isFetchingCalendar
  } = useQuery(
    ['calendar', startDate, endDate],
    () =>
      LabService.getReportDaily({
        start_date: startDate,
        end_date: endDate
      })
    // { keepPreviousData: true }
  );

  let totalAnalysisEks = 0;
  let totalPrepEks = 0;
  let totalPrep = 0;

  const handleBtn = () => {
    setStartDate(firstDate);
    setEndDate(lastDate);
    setCalendar(true);
    setKeyword('');
    setSearch(false);
  };

  const [searchResultsEksternal, setSearchResultsEksternal] = useState(dataEksternal?.data?.data);

  return (
    <>
      {companyReport ? (
        <CompanyReport
          setSearch={setSearch}
          companyReport={companyReport}
          setCompanyReport={setCompanyReport}
          companyName={companyName}
          dataEksternal={dataEksternal?.data?.data}
          isFetching={isFetchingActivityExternal}
          isLoading={isLoadingExternal}
        />
      ) : (
        <>
          <Header title="Laporan Lab" background="dashboard.png" />
          <div>
            <Grid
              container
              sx={{
                background: 'white',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Tabs
                value={menuTab}
                onChange={handleChangeTab}
                textColor="primary"
                indicatorColor="primary"
                TabIndicatorProps={{
                  sx: {
                    bgcolor: '#3F48C0',
                    height: '4px'
                  }
                }}
              >
                {dataEksternal?.data?.data.map((prep) => (totalAnalysisEks += prep.analysis))}
                {dataEksternal?.data?.data.map((prep) => (totalPrepEks += prep.preparation))}
                {data?.data.data.map((prep) => (totalPrep += prep.preparation))}
                {menuList?.map((item) => (
                  <Tab
                    key={item.value}
                    value={item.value}
                    label={item.label}
                    sx={
                      item.value === menuTab
                        ? {
                            backgroundColor: '#E5E5FE',
                            border: '1px solid #3F48C0',
                            borderRadius: '4px',
                            transition: '0.3s'
                          }
                        : {}
                    }
                  />
                ))}
              </Tabs>
              {calendar ? null : (
                <Box>
                  <Grid
                    container
                    sx={{
                      gap: '1rem',
                      paddingRight: '4rem',
                      cursor: 'pointer'
                    }}
                    onClick={handleBtn}
                  >
                    <Grid item>
                      <Icon icon="akar-icons:arrow-left" color="#3f48c0" />
                    </Grid>
                    <Grid item>
                      <h2
                        style={{
                          // margin: '1rem 0.5rem 0.3rem 0',
                          fontWeight: '500',
                          fontSize: '14px'
                        }}
                      >
                        Back
                      </h2>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Grid>
            {menuTab === 'internal' ? (
              <ListInternal
                dataInternal={data}
                isFetchingActivity={isFetchingActivityInternal}
                isLoadingActivity={isLoadingInternal}
                totalPrepEks={totalPrepEks}
                totalPrep={totalPrep}
                totalAnalysisEks={totalAnalysisEks}
                menuTab={menuTab}
                keyword={keyword}
                setKeyword={setKeyword}
                page={page}
                handleChangePage={handleChangePage}
                resetPage={resetPage}
                setSelectedDates={setSelectedDates}
                selectedDates={selectedDates}
              />
            ) : (
              <ListEksternalv2
                data={dataCalendar?.data?.data}
                dataEksternal={dataEksternal?.data?.data}
                isFetchingActivity={isFetchingCalendar}
                isLoadingActivity={isLoadingCalendar}
                isFetchingExternal={isFetchingActivityExternal}
                isLoadingExternal={isLoadingExternal}
                totalPrepEks={totalPrepEks}
                totalPrep={totalPrep}
                totalAnalysisEks={totalAnalysisEks}
                menuTab={menuTab}
                resetPage={resetPage}
                setMenuTab={setMenuTab}
                targetDate={targetDate}
                setDate={setDate}
                calendar={calendar}
                setCalendar={setCalendar}
                setCompanyReport={setCompanyReport}
                companyName={companyName}
                setCompanyName={setCompanyName}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                search={search}
                searchResultsEksternal={searchResultsEksternal}
                setSearchResultsEksternal={setSearchResultsEksternal}
                setSearch={setSearch}
                startDate={startDate}
                firstDate={firstDate}
                lastDate={lastDate}
                keyword={keyword}
                setKeyword={setKeyword}
              />
            )}
          </div>
        </>
      )}
    </>
  );
}
