import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import { Icon } from '@iconify/react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@mui/material/TextField';
import FilterDate from 'components/Modal/LaporanLab/FilterDate';
import { addDays } from 'date-fns';
// import dayjs from 'dayjs';

// custom hooks
import useModal from '../../../hooks/useModal';

//  import setState to a component?
const SearchBarEksternal = ({
  setSearch,
  posts,
  setSearchResults,
  setSelectedDates,
  selectedDates,
  menuTab,
  setCalendar,
  setStartDate,
  setEndDate,
  firstDate,
  lastDate
}) => {
  const [keyword, setKeyword] = useState('');
  const { isShowing: isShowingDate, toggle: toggleDate } = useModal();
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!e.target.value) return setSearchResults(posts);
    // const resultsArrayEksternal = Object.keys(posts)
    //   .filter((key) => key.toLowerCase().includes(keyword.toLocaleLowerCase()))
    //   .reduce((obj, key) => {
    //     return Object.assign(obj, {
    //       [key]: posts[key]
    //     });
    //   }, {});
    // setSearchResults(resultsArrayEksternal);
    // resetPage();

    const resultsArray = posts.filter(
      (post) =>
        post.sample_code?.toLowerCase().includes(keyword.toLowerCase()) ||
        post.account_name?.toLowerCase().includes(keyword.toLowerCase()) ||
        post.company_name?.toLowerCase().includes(keyword.toLowerCase())
    );
    setSearch(true);
    setCalendar(false);
    setSearchResults(resultsArray);
    console.log(resultsArray);
  };

  // console.log(filter);

  const handleReset = () => {
    // const resultsArray = posts.filter(
    //   (post) =>
    //     post.sample_code?.toLowerCase().includes(keyword.toLowerCase()) ||
    //     post.account_name?.toLowerCase().includes(keyword.toLowerCase()) ||
    //     post.company_name?.toLowerCase().includes(keyword.toLowerCase())
    // );
    // setSearchResults(posts);
    setSearch(false);
    setCalendar(true);
    setStartDate(firstDate);
    setEndDate(lastDate);
    setKeyword('');
    setSelectedDates({});
    setState([
      {
        ...state[0],
        startDate: new Date(),
        endDate: new Date()
      }
    ]);
  };

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

  return (
    <>
      <FilterDate
        toggle={toggleDate}
        isShowing={isShowingDate}
        state={state}
        setState={setState}
        setSelectedDates={setSelectedDates}
        setSearchResults={setSearchResults}
        selectedDates={selectedDates}
        menuTab={menuTab}
        posts={posts}
      />
      <Grid
        container
        sx={{
          display: 'flex',
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4.625rem',
          borderRadius: '8px 8px 0 0'
        }}
        spacing={0}
      >
        <Grid
          item
          sx={{
            backgroundColor: 'white',
            borderRadius: '4px',
            marginLeft: '1.5rem'
            // width: '45%'
          }}
          xs={5.5}
        >
          <TextField
            id="search"
            placeholder="Cari Nomor Sample/Nama Perusahaan/Requester"
            variant="outlined"
            value={keyword}
            fullWidth
            onChange={(e) => setKeyword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon icon="il:search" color="#828282" />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        {/* <Button
          sx={{
            border: 1,
            borderRadius: '4px',
            marginLeft: '1rem',
            height: '3.4rem',
            width: '20%',
            borderColor: '#BDBDBD',
            cursor: 'pointer',
            color: 'black'
          }}
          onClick={toggleDate}
        >
          {selectedDates.startDate
            ? `Filter Tanggal | ${dayjs(selectedDates.startDate).format('DD/MM/YYYY')} - ${dayjs(
                selectedDates.endDate
              ).format('DD/MM/YYYY')} `
            : 'Filter Tanggal | Hari ini'}
          <Icon icon="fe:drop-down" color="#828282" />
        </Button> */}
        <Grid item>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              height: '3.4rem',
              marginLeft: '14.8rem',
              boxShadow: 0,
              padding: 3
            }}
          >
            Search
          </Button>
        </Grid>
        <Grid item>
          <Button
            sx={{
              backgroundColor: 'transparent',
              outline: 'none',
              overflow: 'hidden',
              border: 'none',
              marginRight: '1.5rem',
              marginLeft: '1rem'
            }}
            onClick={handleReset}
          >
            Clear All
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchBarEksternal;
