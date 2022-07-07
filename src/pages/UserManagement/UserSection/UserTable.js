import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';

// custom hooks
import useModal from 'hooks/useModal';
import usePagination from 'hooks/usePagination';

// components
import { DeleteModal } from 'components/Modal';
import { FormUser } from '.';
import CustomPagination from 'components/Pagination';
import BasicTable from 'components/Table/BasicTable/BasicTable';

// services
import UserManagementService from 'services/UserManagementService';

export default function UserTable({ search, isSearch }) {
  // const required variable inside component ( fixed value )
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
      id: 'full_name',
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
      id: 'role',
      numeric: false,
      disablePadding: false,
      label: 'ROLE'
    }
  ];

  const tableData = [
    {
      id: 0,
      created_at: '20/11/2000',
      username: 'syarif',
      full_name: 'Syarif Hidayat',
      phone: '0895385293200',
      birthdate: '09/05/2003',
      role: 'Super Admin'
    },
    {
      id: 1,
      created_at: '20/11/2000',
      username: 'syarif',
      full_name: 'Syarif Hidayat',
      phone: '0895385293200',
      birthdate: '09/05/2003',
      role: 'Super Admin'
    },
    {
      id: 2,
      created_at: '20/11/2000',
      username: 'syarif',
      full_name: 'Syarif Hidayat',
      phone: '0895385293200',
      birthdate: '09/05/2003',
      role: 'Super Admin'
    },
    {
      id: 3,
      created_at: '20/11/2000',
      username: 'syarif',
      full_name: 'Syarif Hidayat',
      phone: '0895385293200',
      birthdate: '09/05/2003',
      role: 'Super Admin'
    },
    {
      id: 4,
      created_at: '20/11/2000',
      username: 'syarif',
      full_name: 'Syarif Hidayat',
      phone: '0895385293200',
      birthdate: '09/05/2003',
      role: 'Super Admin'
    }
  ];

  const { isShowing: isShowingForm, toggle: toggleForm } = useModal();
  const { isShowing: isShowingDelete, toggle: toggleDelete } = useModal();

  const { page, totalPage, handleChangePage } = usePagination({ total_data: 50 });

  const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery(
    ['users', page],
    () =>
      UserManagementService.getUser({
        page,
        row: 10
      }),
    { keepPreviousData: true, retry: false }
  );

  console.log(data);

  const actions = [
    {
      title: 'Tambah User',
      label: 'tambah user',
      function: toggleForm
    }
  ];

  return (
    <>
      <BasicTable
        headCells={headCells}
        withSelect
        rows={tableData}
        actions={actions}
        edit
        onEdit={toggleForm}
        remove
        onDelete={toggleDelete}
        title="User"
      />
      <CustomPagination count={totalPage} page={page} handleChangePage={handleChangePage} />
      <FormUser toggle={toggleForm} isShowing={isShowingForm} />
      <DeleteModal toggle={toggleDelete} isShowing={isShowingDelete} title="User" />
    </>
  );
}

UserTable.propTypes = {
  search: PropTypes.object,
  isSearch: PropTypes.bool
};
