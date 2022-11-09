import React, { useState } from 'react';
import useAuth from 'hooks/useAuth';
import { useQuery } from 'react-query';
import dayjs from 'dayjs';

// service
import ModulLossingService from '../../services/ModulLossingService';

// components
import Katalog from './Katalog';
import Summary from './Summary';
import Detail from './Detail';

const Lossing = () => {
  useAuth();

  // Date Setup
  const currentYear = new Date().getFullYear();
  const firstDay = new Date(currentYear, 0, 1);
  const lastDay = new Date(currentYear, 11, 31);
  const firstDate = dayjs(firstDay).format('YYYY-MM-DD');
  const lastDate = dayjs(lastDay).format('YYYY-MM-DD');

  const [page, setPage] = useState('');
  const [id, setId] = useState('');
  const [index, setI] = useState('');
  const [selectedDates, setSelectedDates] = useState({});
  const [startDate, setStartDate] = useState(firstDate);
  const [endDate, setEndDate] = useState(lastDate);

  const {
    data: dataSummary,
    isLoading,
    isFetching
  } = useQuery(['summary', selectedDates], () =>
    ModulLossingService.getSummary({
      startDate: selectedDates.startDate,
      endDate: selectedDates.endDate
    })
  );

  const { data: dataHill, isFetching: isFetchingHill } = useQuery(['hill', id], () =>
    ModulLossingService.getHill({
      id
    })
  );

  return (
    <>
      {page === 'detail' ? (
        <Detail setPage={setPage} data={dataHill?.data?.data?.detail} index={index} />
      ) : page === 'summary' ? (
        <Summary
          setPage={setPage}
          data={dataHill?.data?.data}
          isFetching={isFetchingHill}
          setI={setI}
        />
      ) : (
        <Katalog
          data={dataSummary?.data?.data}
          isLoading={isLoading}
          isFetching={isFetching}
          setPage={setPage}
          setId={setId}
          setSelectedDates={setSelectedDates}
          selectedDates={selectedDates}
        />
      )}
    </>
  );
};

export default Lossing;
