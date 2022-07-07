/* eslint-disable no-use-before-define */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';

// custom hooks
import useModal from 'hooks/useModal';
import usePagination from 'hooks/usePagination';

// components
import { DeleteModal, LoadingModal } from 'components/Modal';
import { FormUser } from '.';
import CustomPagination from 'components/Pagination';
import BasicTable from 'components/Table/BasicTable/BasicTable';

// services
import UserManagementService from 'services/UserManagementService';

const headCells = [
  {
    id: 'created_at',
    numeric: false,
    disablePadding: false,
    label: 'DIBUAT PADA'
  },
  {
    id: 'username',
    numeric: false,
    disablePadding: false,
    label: 'USERNAME'
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'NAMA LENGKAP'
  },
  {
    id: 'phone',
    numeric: false,
    disablePadding: false,
    label: 'NOMOR TELEPON'
  },
  {
    id: 'birthdate',
    numeric: false,
    disablePadding: false,
    label: 'TANGGAL LAHIR'
  },
  {
    id: 'role_name',
    numeric: false,
    disablePadding: false,
    label: 'ROLE'
  }
];

export default function UserTable({ search, isSearch }) {
  const [pagination, setPagination] = useState({});
  const [id, setId] = useState('');

  const { isShowing: isShowingForm, toggle: toggleForm } = useModal();
  const { isShowing: isShowingDelete, toggle: toggleDelete } = useModal();

  const { page, totalPage, handleChangePage } = usePagination(pagination || { total_data: 0 });

  const { data, isLoading, isFetching } = useQuery(
    ['users', page, isSearch],
    () =>
      UserManagementService.getUser({
        page,
        row: 10,
        search: search.search,
        role: search.role
      }),
    { keepPreviousData: true, retry: false }
  );

  useEffect(() => {
    setPagination(data?.data?.pagination);
  }, [data]);

  const handleAdd = () => {
    setId('');
    toggleForm();
  };

  const handleEdit = (e, _id) => {
    setId(_id.toString());
    toggleForm();
  };

  const actions = [
    {
      title: 'Tambah User',
      label: 'tambah user',
      function: handleAdd
    }
  ];

  return (
    <>
      {isLoading && <LoadingModal />}
      {!isLoading && data && (
        <>
          {isFetching ? (
            <LoadingModal />
          ) : (
            <BasicTable
              headCells={headCells}
              withSelect
              rows={data?.data?.data}
              actions={actions}
              edit
              onEdit={handleEdit}
              remove
              onDelete={toggleDelete}
              title="User"
            />
          )}
        </>
      )}
      <CustomPagination count={totalPage} page={page} handleChangePage={handleChangePage} />
      <FormUser toggle={toggleForm} isShowing={isShowingForm} id={id} />
      <DeleteModal toggle={toggleDelete} isShowing={isShowingDelete} title="User" />
    </>
  );
}

UserTable.propTypes = {
  search: PropTypes.object,
  isSearch: PropTypes.bool
};
