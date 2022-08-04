import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import { Icon } from '@iconify/react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@mui/material/TextField';
import FilterDate from 'components/Modal/LaporanLab/FilterDate';
import { addDays } from 'date-fns';

// custom hooks
import useModal from '../../../hooks/useModal';

//  import setState to a component?
const SearchBarEksternal = ({ posts, setSearchResults, setSelectedDates }) => {
  console.log(posts);
  const [keyword, setKeyword] = useState('');
  const { isShowing: isShowingDate, toggle: toggleDate } = useModal();
  const handleSubmit = () => {
    // e.preventDefault();
    // if (!e.target.value) return setSearchResults(posts);
    const resultsArrayEksternal = Object.keys(posts)
      .filter((key) => key.toLowerCase().includes(keyword.toLocaleLowerCase()))
      .reduce((obj, key) => {
        return Object.assign(obj, {
          [key]: posts[key]
        });
      }, {});
    setSearchResults(resultsArrayEksternal);
  };

  const handleReset = () => {
    const resultsArrayEksternal = Object.keys(posts)
      .filter((key) => key.includes(''))
      .reduce((obj, key) => {
        return Object.assign(obj, {
          [key]: posts[key]
        });
      }, {});
    // setSearchResults(resultsArray);
    setSearchResults(resultsArrayEksternal);
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
          Filter Tanggal | Hari ini <Icon icon="fe:drop-down" color="#828282" />
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

export default SearchBarEksternal;
