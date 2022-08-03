import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button } from '@mui/material';
import { dateToStringPPOBFormatterv2 } from '../../../utils/helper';

import { DateRangePicker } from 'react-date-range';

// components
import CustomModal from 'components/Modal/CustomModal/FilterDate';

const FilterDate = ({ isShowing, toggle, state, setState, setSelectedDates }) => {
  return (
    <CustomModal isShowing={isShowing} toggle={toggle} width={'61%'}>
      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={1}
        ranges={state}
        direction="horizontal"
      />
      <Grid
        container
        direction="row"
        alignItem="center"
        justifyContent="flex-end"
        columnSpacing={3}
        sx={{ pb: 3, pr: 3 }}
      >
        <Grid item>
          <Button sx={{ fontSize: '1rem' }} onClick={toggle} variant="outlined">
            Cancel
          </Button>
        </Grid>
        <Grid item>
          <Button
            sx={{ fontSize: '1rem' }}
            variant="contained"
            onClick={() => {
              toggle();
              setSelectedDates({
                startDate: dateToStringPPOBFormatterv2(state[0].startDate),
                endDate: dateToStringPPOBFormatterv2(state[0].endDate)
              });
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </CustomModal>
  );
};

FilterDate.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

export default FilterDate;
