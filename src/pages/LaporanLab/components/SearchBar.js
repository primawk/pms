import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import { Icon } from '@iconify/react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@mui/material/TextField';
import FilterDate from 'components/Modal/LaporanLab/FilterDate';
import { addDays } from 'date-fns';
import dayjs from 'dayjs';

// custom hooks
import useModal from '../../../hooks/useModal';

//  import setState to a component?
const SearchBar = ({
  keyword,
  setKeyword,
  posts,
  setSearchResults,
  setSelectedDates,
  selectedDates,
  resetPage
}) => {
  const { isShowing: isShowingDate, toggle: toggleDate } = useModal();
  const [search, setSearch] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword(search);
    resetPage();
  };

  const handleSearchChange = (e) => {
    // if (!e.target.value) return setSearchResults(posts);
    setSearch(e.target.value);
  };

  const handleReset = () => {
    const resultsArray = posts.filter(
      (post) =>
        post.sample_code?.toLowerCase().includes(keyword.toLowerCase()) ||
        post.account_name?.toLowerCase().includes(keyword.toLowerCase()) ||
        post.company_name?.toLowerCase().includes(keyword.toLowerCase())
    );
    setSearchResults(resultsArray);
    setKeyword('');
    setSearch('');
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
        resetPage={resetPage}
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
      >
        <Grid
          item
          sx={{
            backgroundColor: 'white',
            borderRadius: '4px',
            marginLeft: '1.5rem',
            width: '45%'
          }}
        >
          <TextField
            id="search"
            placeholder="Cari Nomor Sample/Nama Perusahaan/Requester"
            variant="outlined"
            fullWidth
            value={search}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon icon="il:search" color="#828282" />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Button
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
          {selectedDates.startDate !== undefined
            ? `Filter Tanggal | ${dayjs(selectedDates.startDate).format('DD/MM/YYYY')} - ${dayjs(
                selectedDates.endDate
              ).format('DD/MM/YYYY')} `
            : 'Filter Tanggal | Hari ini'}
          <Icon icon="fe:drop-down" color="#828282" />
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ width: '14%', height: '3.4rem', marginLeft: '1rem', boxShadow: 0 }}
        >
          Search
        </Button>
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

export default SearchBar;
