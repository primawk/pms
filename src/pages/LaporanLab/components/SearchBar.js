import React, { useState } from 'react';
import { Grid, Button, Box } from '@mui/material';
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
          padding: '1.5rem',
          borderRadius: '8px 8px 0 0'
        }}
      >
        <Grid item xs={12} sm={10} md={7}>
          <Box
            sx={{
              backgroundColor: 'white',
              borderRadius: '4px',
              marginBottom: { xs: '1rem', sm: '0', lg: '0' }
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
          </Box>
        </Grid>
        <Box>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}
            gap={2}
          >
            <Grid item>
              <Button
                sx={{
                  border: 1,
                  borderRadius: '4px',
                  height: '3.4rem',
                  borderColor: '#BDBDBD',
                  cursor: 'pointer',
                  color: 'black'
                }}
                onClick={toggleDate}
                xs={12}
              >
                {selectedDates.startDate !== undefined
                  ? `Filter Tanggal | ${dayjs(selectedDates.startDate).format(
                      'DD/MM/YYYY'
                    )} - ${dayjs(selectedDates.endDate).format('DD/MM/YYYY')} `
                  : 'Filter Tanggal | Hari ini'}
                <Icon icon="fe:drop-down" color="#828282" />
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={handleSubmit}
                variant="contained"
                sx={{ height: '3.4rem', boxShadow: 0, padding: 3 }}
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
                  border: 'none'
                }}
                onClick={handleReset}
              >
                Clear All
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default SearchBar;
