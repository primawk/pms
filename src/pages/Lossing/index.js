import React, { useState } from 'react';
import useAuth from 'hooks/useAuth';
import { useQuery } from 'react-query';

// service
import ModulLossingService from '../../services/ModulLossingService';

// components
import Katalog from './Katalog';
import Summary from './Summary';
import Detail from './Detail';

// custom hooks
import usePagination from 'hooks/usePagination';

const Lossing = () => {
  useAuth();

  const { page, handleChangePage } = usePagination(1);

  const [section, setPage] = useState('');
  const [id, setId] = useState('');
  const [date, setDate] = useState('');
  const [sort, setSort] = useState('');
  const [selectedDates, setSelectedDates] = useState({});
  const [loading, setLoading] = useState(false);

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

  const {
    data: dataHill,
    isFetching: isFetchingHill,
    isLoading: isLoadingHill
  } = useQuery(['hill', id, sort, page], () =>
    ModulLossingService.getHill({
      id,
      sort,
      page,
      limit: 10
    })
  );

  const {
    data: dataDay,
    isFetching: isFetchingDay,
    isLoading: isLoadingDay
  } = useQuery(['day', date], () =>
    ModulLossingService.getDay({
      date: date,
      hillId: id
    })
  );

  const handleDownload = async () => {
    // i take the id value from state so it is empty
    setLoading(true);
    await ModulLossingService.downloadEstimation({ id }) // i have to put curly bracket
      .then((res) => {
        const file = new Blob([res], { type: 'application/csv' });
        const fileURL = URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = fileURL;
        link.setAttribute('download', `estimasi.csv`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      {section === 'detail' ? (
        <Detail
          page={page}
          handleChangePage={handleChangePage}
          setPage={setPage}
          data={dataDay?.data?.data}
          isFetching={isFetchingDay}
          isLoading={isLoadingDay}
        />
      ) : section === 'summary' ? (
        <Summary
          setPage={setPage}
          setSort={setSort}
          data={dataHill?.data?.data}
          dataHill={dataHill}
          isFetching={isFetchingHill}
          isLoading={isLoadingHill}
          setDate={setDate}
          handleDownload={handleDownload}
          loading={loading}
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
