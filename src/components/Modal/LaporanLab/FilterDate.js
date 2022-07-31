import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button } from '@mui/material';
import { dateToStringPPOBFormatterv2 } from '../../../utils/helper';

import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

// components
import CustomModal from 'components/Modal/CustomModal/CustomModal';

const FilterDate = ({ isShowing, toggle, state, setState, setSelectedDates }) => {
  return (
    <CustomModal isShowing={isShowing} toggle={toggle}>
      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
      />
      <Grid
        container
        sx={{
          margin: '0 auto 1.5rem 30rem',
          alignItems: 'center',
          width: '20%'
        }}
      >
        <Grid item>
          <Button
            sx={{ fontSize: '1rem' }}
            onClick={() =>
              setSelectedDates({
                startDate: dateToStringPPOBFormatterv2(state[0].startDate),
                endDate: dateToStringPPOBFormatterv2(state[0].endDate)
              })
            }
          >
            Apply
          </Button>
        </Grid>
        <Grid item>
          <Button sx={{ fontSize: '1rem' }} onClick={toggle}>
            Cancel
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
