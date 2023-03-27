import React from 'react';
import { Grid } from '@mui/material';
import useAuth from 'hooks/useAuth';
import CustomPagination from 'components/Pagination';

import { LoadingModal } from 'components/Modal';

// components
import Header from 'components/Header';
import Information from '../../components/Lossing/LossingInformation';
import InputLossing from 'components/Modal/Lossing/InputLossing';
import ResultList from '../../components/Lossing/ResultList';
import Filter from '../../components/Lossing/Filter';
import SummaryTitle from 'components/Lossing/SummaryTitle';
import SummaryInformation from 'components/Lossing/SummaryInformation';

// custom hooks
import useModal from '../../hooks/useModal';

// utils
import { ceilTotalData } from 'utils/helper';

const Summary = ({
  setPage,
  data,
  isFetching,
  setDate,
  handleDownload,
  dataHill,
  sort,
  setSort,
  page,
  handleChangePage
}) => {
  useAuth();

  let hillName = data?.hill_name;

  const { isShowing, toggle } = useModal();
  return (
    <>
      {/* isFetching is more often to reload rather than both isFetching && isLoading maybe due to no page transition? */}
      {isFetching && <LoadingModal />}
      <InputLossing
        toggle={toggle}
        isShowing={isShowing}
        hillId={data?.hill_id}
        domeId={data?.dome_id}
      />
      <Header title="MODUL LOSSING" background="dashboard.png" />
      <div className="app-content">
        <Grid container sx={{ background: 'white', display: 'flex', flexDirection: 'column' }}>
          <SummaryTitle setPage={setPage} hillName={hillName} handleDownload={handleDownload} />
          <Grid item container sx={{ justifyContent: 'space-around' }}>
            <SummaryInformation data={data} />
            <Information toggle={toggle} />
            <Filter hillName={hillName} sort={sort} setSort={setSort} />
            {/* list Bukit */}
            <ResultList searchResults={data?.detail} setPage={setPage} setDate={setDate} />
          </Grid>

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
              <CustomPagination
                count={ceilTotalData(dataHill?.data?.pagination?.total_data || 0, 10)}
                page={page}
                handleChangePage={handleChangePage}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Summary;
